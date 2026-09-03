import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";

import "./navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const navigationItems = [
    { label: t("navbar.about"), href: "#about" },
    { label: t("navbar.stack"), href: "#stack" },
    { label: t("navbar.experience"), href: "#experience" },
    { label: t("navbar.projects"), href: "#projects" },
    { label: t("navbar.education"), href: "#education" },
    { label: t("navbar.contact"), href: "#contact" },
  ];

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar_container">
        <a
          href="#top"
          className="navbar_logo"
          onClick={closeMenu}
          aria-label="Ir al inicio"
        >
          <span>&lt;</span>
          KS
          <span>/&gt;</span>
        </a>

        <nav
          className={`navbar_nav ${isMenuOpen ? "navbar_nav--open" : ""}`}
          aria-label="Navegación principal"
        >
          <ul className="navbar_links">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="navbar_link" onClick={closeMenu}>
                  {" "}
                  {item.label}{" "}
                </a>
              </li>
            ))}
          </ul>

          <div className="navbar_social">
            <a
              href="https://github.com/kennedy211"
              target="_blank"
              rel="noreferrer"
              aria-label="Github"
              onClick={closeMenu}
            >
              <FaGithub size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/kennedy-suarez/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              onClick={closeMenu}
            >
              <FaLinkedin size={18} />
            </a>
          </div>

          <button
            className="navbar_language"
            type="button"
            onClick={() => {
              i18n.changeLanguage(i18n.language === "ES" ? "EN" : "ES");
            }}
            aria-label={`Cambiar idioma a ${i18n.language === "ES" ? "inglés" : "español"}`}
          >
            <span
              className={`navbar_language-option ${
                i18n.language === "ES" ? "navbar_language-option--active" : ""
              }`}
            >
              ES
            </span>

            <span
              className={`navbar_language-option ${
                i18n.language === "EN" ? "navbar_language-option--active" : ""
              }`}
            >
              EN
            </span>

            <span
              className={`navbar_language-slider ${
                i18n.language === "EN" ? "navbar_language-slider--en" : ""
              }`}
            />
          </button>
        </nav>

        <button
          className="navbar_menu-button"
          type="button"
          onClick={() => setIsMenuOpen((previous) => !previous)}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
