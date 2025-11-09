import SocialLinks from "../SocialLinks";

export default function Footer() {
    return (
        <div id="footer" className="footer-wrap">
            <footer
                id="colophon"
                className="site-footer clearfix"
                role="contentinfo"
            >
                <div id="footer-text" className="site-info">
                    <div className="ago__social-links">
                        <SocialLinks />
                    </div>
                </div>
            </footer>
        </div>
    );
}
