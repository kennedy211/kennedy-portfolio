
import { ArrowUpRight, ArrowUp } from "lucide-react";
import { useTranslation } from "react-i18next";

import "./Footer.css";

function Footer() {
  const { t } = useTranslation();

  const handleBackToTop = (event) => {
    event.preventDefault();

    const startPosition = window.scrollY;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      window.scrollTo(0, 0);
      return;
    }

    const duration = 900;
    const startTime = performance.now();

    const easeOutCubic = (progress) => {
      return 1 - Math.pow(1 - progress, 3);
    };

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easedProgress = easeOutCubic(progress);

      window.scrollTo(
        0,
        startPosition * (1 - easedProgress)
      );

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_main">
          <div className="footer_identity">
            <a href="#top" className="footer_name">
              Kennedy Suárez
            </a>

            <span className="footer_role mono">
              {t("footer.role")}
            </span>
          </div>

          <div className="footer_navigation">
            <a
              href="https://github.com/kennedy211"
              target="_blank"
              rel="noreferrer"
              className="footer_link"
            >
              GitHub
              <ArrowUpRight size={14} strokeWidth={1.5} />
            </a>

            <a
              href="https://www.linkedin.com/in/kennedy-suarez/"
              target="_blank"
              rel="noreferrer"
              className="footer_link"
            >
              LinkedIn
              <ArrowUpRight size={14} strokeWidth={1.5} />
            </a>

            <a
              href="#top"
              onClick={handleBackToTop}
              className="footer_back-top"
            >
              {t("footer.backToTop")}
              <ArrowUp size={14} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <div className="footer_bottom">
          <span className="footer_copyright mono">
            {t("footer.copyright")}{" "}
          </span>

          <span className="footer_built mono">
            {t("footer.builtWith")}
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
