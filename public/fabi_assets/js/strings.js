/*
 * Strings.js
 * 
 * Author: Manuel Minniti
 * Date: 12.05.2015
 * 
 */

(function() {
	// vars
	var c = $("#canvas")[0],
		ctx = c.getContext("2d"),
		
		strings = 58,
		
		mX,
		mY,
		timer, 
		
		S = [],
		oX,
		oY,
		
		FRICTION = .91,
		THRESHOLD = 200,
		VELOCITY_MAX = 10,
		
		OPACITY_MIN = .5,
		OPACITY_MAX = 1,
		
		FORCE_FACTOR = .5,
		FORCE_FACTOR_MIN = .5,
		FORCE_FACTOR_MAX = 4/3,
		FORCE_FACTOR_INCREMENT = .035,
		
		isMousedown = !1,
		isStarted = !1,
		
		timer,
		
		pX = $(window).width(),
		pY = $(window).height();
	
	// functions
	function initialize() {
		
		// set origin
		oX = -300;
		oY = (pY - 150);
		
		// create strings
		for(var i=0; i<strings; i++) {			
			var y = (pY / strings) * i;
						
			S[i] = new String({ startX: 0, startY: y, endX: pX, endY: y });
			//S[i] = new String({ startX: 0, startY: 200, endX: pX, endY: y });
		}
						
		// bind mouse listeners
		$(document).on("mousemove", setMouseCoords);
		$(document).on("mousedown", onMousedown);
		$(document).on("mouseup", onMouseup);
		$(document).on("mouseleave", onMouseleave);
		
		// force start if no mouseevent occurred
		setTimeout(function() {
			if(!isStarted) {
				isStarted = true;
				
				// set fake mouse position
				mX = -pX * 2;
				mY = -pY * 2;
				
				draw();
			}
		}, 3000);
	}
	
	function String(coords) {
		this.color = {r:71,g:71,b:71};
		this.opacity = 0;
		this.thickness = 1;
		
		this.startX = coords.startX;
		this.startY = coords.startY;
		this.endX = coords.endX;
		this.endY = coords.endY;
		
		this.bezierStartX = coords.startX;
		this.bezierStartY = coords.startY;
		this.bezierStartVelocityX = 0;		
		this.bezierStartVelocityY = 0;
		
		this.bezierEndX = coords.endX;
		this.bezierEndY = coords.endY;
		this.bezierEndVelocityX = 0;		
		this.bezierEndVelocityY = 0;
		
		this.lastMouseX = 0;
	}
	
	function draw() {
		requestAnimationFrame(draw);
		
		// set vars
		pX = $(window).width();
		pY = $(window).height();
				
		ctx.canvas.width  = window.innerWidth;
		ctx.canvas.height = window.innerHeight;
		
		// reset
		ctx.fillStyle="rgba(22,22,40,1)";
		ctx.fillRect(0,0,pX,pY);
		
		c.height = pY;
		c.width = pX;
		
		if(isMousedown) {
			(FORCE_FACTOR >= FORCE_FACTOR_MAX) ? FORCE_FACTOR = FORCE_FACTOR_MAX : FORCE_FACTOR += FORCE_FACTOR_INCREMENT;
		} else if(!isMousedown) {
			(FORCE_FACTOR <= FORCE_FACTOR_MIN) ? FORCE_FACTOR = FORCE_FACTOR_MIN : FORCE_FACTOR *= .95;
		}
		
		for(var i=0; i<strings; i++) {
			var s = S[i],
				bezierStartX = s.bezierStartX,
				bezierStartVelocityX = s.bezierStartVelocityX || .1,
				bezierStartDistanceX,
				bezierStartY = s.bezierStartY,
				bezierStartVelocityY = s.bezierStartVelocityY || .1,
				bezierStartDistanceY,
				bezierEndX = s.bezierEndX,
				bezierEndVelocityX = s.bezierEndVelocityX || .1,
				bezierEndDistanceX,
				bezierEndY = s.bezierEndY,
				bezierEndVelocityY = s.bezierEndVelocityY || .1,
				bezierEndDistanceY;

			s.endX = pX;
			
			// blend strings in at beginning
			if(S[i-1] !== undefined) {
				if(S[i-1].opacity >= OPACITY_MIN) {
					s.opacity += .1;
					if(s.opacity >= OPACITY_MIN) s.opacity = OPACITY_MIN;
				}
			} else {
				s.opacity += .025;
				if(s.opacity >= OPACITY_MAX) s.opacity = OPACITY_MAX;
			}

			if(mX && mY) {	
				var b1 = (-s.startY),
					m1 = ((-s.endY) - (-s.startY)) / (s.endX - s.startX),
					f1Y = m1 * mX + b1;
											
				ctx.beginPath();	
																												
				// if intersection with mouse cursor						
				if( mY <= -f1Y + THRESHOLD && mY >= -f1Y - THRESHOLD ) {	
					bezierStartDistanceX = (mX - s.bezierStartX)/100;
					bezierStartDistanceY = (mY - s.bezierStartY)/100;
					
					bezierEndDistanceX = (mX - s.bezierEndX)/100;
					bezierEndDistanceY = (mY - s.bezierEndY)/100;
					
					s.lastMouseX = mX;
				} else {						
					bezierStartDistanceX = (s.lastMouseX - s.bezierStartX)/100;
					bezierStartDistanceY = (s.startY - s.bezierStartY)/100;
					
					bezierEndDistanceX = (s.lastMouseX - s.bezierEndX)/100;
					bezierEndDistanceY = (s.endY - s.bezierEndY)/100;
				}	
				
				// LEFT BEZIER														
				if(bezierStartDistanceX > 1) bezierStartDistanceX = 1;
				else if(bezierStartDistanceX < -1) bezierStartDistanceX = -1;
				
				if(bezierStartDistanceY > 1) bezierStartDistanceY = 1;
				else if(bezierStartDistanceY < -1) bezierStartDistanceY = -1;
																	
				bezierStartVelocityX += bezierStartDistanceX * Math.PI;		
				bezierStartVelocityX *= FRICTION;
				s.bezierStartVelocityX = bezierStartVelocityX;
				
				bezierStartVelocityY += bezierStartDistanceY * Math.PI;		
				bezierStartVelocityY *= FRICTION;
				s.bezierStartVelocityY = bezierStartVelocityY;		
						
				if(s.bezierStartVelocityX > VELOCITY_MAX) s.bezierStartVelocityX = VELOCITY_MAX;
				if(s.bezierStartVelocityY > VELOCITY_MAX) s.bezierStartVelocityY = VELOCITY_MAX;
					
				bezierStartX += bezierStartVelocityX;
				bezierStartY += bezierStartVelocityY;
				
				s.bezierStartX = bezierStartX;
				s.bezierStartY = bezierStartY;
									
				// Durchschnittsgerade für Bezier
				var m1 = ((s.bezierStartY - s.startY) / (s.bezierStartX - s.startX));
				var x1 = (s.startX + s.bezierStartX) * FORCE_FACTOR;	
				var y1 = m1 * x1 + s.startY;
													
				// RIGHT BEZIER																														
				if(bezierEndDistanceX > 1) bezierEndDistanceX = 1;
				else if(bezierEndDistanceX < -1) bezierEndDistanceX = -1;
				
				if(bezierEndDistanceY > 1) bezierEndDistanceY = 1;
				else if(bezierEndDistanceY < -1) bezierEndDistanceY = -1;
																						
				bezierEndVelocityX += bezierEndDistanceX * Math.PI;		
				bezierEndVelocityX *= FRICTION;
				s.bezierEndVelocityX = bezierEndVelocityX;
									
				bezierEndVelocityY += bezierEndDistanceY * Math.PI;		
				bezierEndVelocityY *= FRICTION;
				s.bezierEndVelocityY = bezierEndVelocityY;		
													
				if(s.bezierEndVelocityX > VELOCITY_MAX) s.bezierEndVelocityX = VELOCITY_MAX;
				if(s.bezierEndVelocityY > VELOCITY_MAX) s.bezierEndVelocityY = VELOCITY_MAX;
				
				bezierEndX += bezierEndVelocityX;
				bezierEndY += bezierEndVelocityY;
				
				s.bezierEndX = bezierEndX;
				s.bezierEndY = bezierEndY;
				
				// Durchschnittsgerade für Bezier
				var m2 = ((-s.endY) - (-s.bezierEndY)) / (pX - s.bezierEndX);
				var b2 = -s.endY - (m2 * pX);									
				var x2 = pX - ((s.endX - s.bezierEndX) * FORCE_FACTOR);
				var y2 = -(m2 * x2 + b2);			
																						
				// draw bezier
				ctx.moveTo(0, s.endY);
				ctx.bezierCurveTo(x1, y1, x2, y2, s.endX, s.endY);
												
				//
				ctx.strokeStyle = 'rgba(' + s.color.r + ',' + s.color.g + ',' + s.color.b + ',' + s.opacity + ')';
				ctx.stroke();								
			}
		}
	}
		
	//
	function setMouseCoords(e) {
		if(!isStarted) {
			isStarted = true;
			draw();
		}
		
		clearTimeout(timer);
		timer = setTimeout(function(){ 
			mX = -pX * 2;
			mY = -pY * 2;
		}, 2200);
		
		mX = e.clientX;
		mY = e.clientY;
	}
	
	//
	function onMousedown(e) {
		isMousedown = 1;
	}
	
	function onMouseup(e) {
		isMousedown = !1;
	}
	
	function onMouseleave(e) {		
		mX = -pX * 2;
		mY = -pY * 2;
	}
	
	// constructor
	initialize();
}());

// HELPER
function rgbToHex(r, g, b) {
	return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
 
// requestAnimationFrame polyfill by Erik Möller
// fixes from Paul Irish and Tino Zijdel
 
(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());