import { useEffect } from "react";

const TOTAL_IMAGES = 30;

export default function RandomVisuals() {
    useEffect(() => {
        const backgroundEl = document.createElement("div");
        backgroundEl.classList.add("random-visuals-container");

        const randomImageIndex = Math.floor(Math.random() * TOTAL_IMAGES);
        const randomImageIndexFormatted =
            randomImageIndex < 10
                ? `0${randomImageIndex}`
                : randomImageIndex.toString();
        const baseUrl = import.meta.env.BASE_URL;
        const randomImageUrl = `${baseUrl}assets/images/random-visuals/ago-random-visual_${randomImageIndexFormatted}.jpg`;

        backgroundEl.style.backgroundImage = `url(${randomImageUrl})`;
        backgroundEl.style.backgroundSize = "cover";
        backgroundEl.style.backgroundPosition = "center";
        backgroundEl.style.position = "fixed";
        backgroundEl.style.top = "0";
        backgroundEl.style.left = "0";
        backgroundEl.style.width = "100%";
        backgroundEl.style.height = "100%";
        backgroundEl.style.zIndex = "-1";

        document.body.appendChild(backgroundEl);

        return () => {
            if (document.body.contains(backgroundEl)) {
                document.body.removeChild(backgroundEl);
            }
        };
    }, []);

    return null;
}
