import { Router, Route, Switch, useLocation } from "wouter";
import { useEffect } from "react";
import { LanguageProvider } from "./contexts/LanguageContext";
import { NavigationProvider } from "./contexts/NavigationContext";
import Header from "./components/Layout/Header";
import Navigation, { NavigationSidebar } from "./components/Layout/Navigation";
import Footer from "./components/Layout/Footer";
import Home from "./pages/Home";
import Biography from "./pages/Biography";
import Shows from "./pages/Shows";
import Music from "./pages/Music";
import Videos from "./pages/Videos";
import Contact from "./pages/Contact";
import Imprint from "./pages/Imprint";

function AppContent() {
    const [location] = useLocation();

    useEffect(() => {
        // Update body class based on location
        if (location === "/") {
            document.body.classList.add("home");
        } else {
            document.body.classList.remove("home");
        }
    }, [location]);

    return (
        <div id="page" className="hfeed site">
            <Header />
            <Navigation />
            <div id="content" className="site-content container clearfix">
                <NavigationSidebar />
                <section id="primary" className="content-single content-area">
                    <main id="main" className="site-main" role="main">
                        <Switch>
                            <Route path="/" component={Home} />
                            <Route path="/biography" component={Biography} />
                            <Route path="/shows" component={Shows} />
                            <Route path="/music" component={Music} />
                            <Route path="/videos" component={Videos} />
                            <Route path="/contact" component={Contact} />
                            <Route path="/imprint" component={Imprint} />
                            <Route>
                                <div className="not-found">
                                    <h1>404 - Page Not Found</h1>
                                    <p>
                                        The page you are looking for does not
                                        exist.
                                    </p>
                                </div>
                            </Route>
                        </Switch>
                    </main>
                </section>
            </div>
            <Footer />
        </div>
    );
}

function App() {
    return (
        <LanguageProvider>
            <NavigationProvider>
                <div className="app">
                    <Router>
                        <AppContent />
                    </Router>
                </div>
            </NavigationProvider>
        </LanguageProvider>
    );
}

export default App;
