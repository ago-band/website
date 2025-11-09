import SocialLinks from "../SocialLinks";

export default function Footer() {
    return (
        <div id="footer" className="footer-wrap">
            <footer
                id="colophon"
                className="site-footer clearfix"
                role="contentinfo"
            >
                <SocialLinks />
            </footer>
        </div>
    );
}
