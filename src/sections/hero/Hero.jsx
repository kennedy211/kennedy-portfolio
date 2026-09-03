import { ArrowDown, ArrowUpRight, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "framer-motion";

import "./Hero.css";
import profilePhoto from "../../assets/images/profile.webp";

function Hero() {
  const { t } = useTranslation();

  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="hero" id="home">
      <div className="container hero_container">
        <motion.div
          className="hero_content"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.7,
            ease: "easeOut",
          }}
        >
          <div className="hero_eyebrow">
            <span className="hero_number">01.</span>
            <span>PORTFOLIO</span>
          </div>

          <p className="hero_intro">{t("hero.intro")}</p>

          <h1 className="hero_title">
            Kennedy
            <span>Suárez</span>
          </h1>

          <div className="hero_role">
            <span>{t("hero.role")}</span>
            <span className="hero_separator">·</span>
            <span>Backend · Python · Django · Cloud</span>
          </div>

          <p className="hero_description">{t("hero.description")}</p>

          <div className="hero_actions">
            <a href="#projects" className="hero_button hero_button--primary">
              {t("hero.projectsButton")}
              <ArrowUpRight size={17} strokeWidth={1.8} />
            </a>

            <a
              href="/cv/Kennedy Suarez Lara 2026 - Ingeniero de sistemas.pdf"
              className="hero_button hero_button--secondary"
              download
            >
              {t("hero.cvButton")}
              <Download size={16} strokeWidth={1.8} />
            </a>
          </div>

          <div className="hero_footer">
            <div className="hero_social">
              <a
                href="https://github.com/kennedy211"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/kennedy-suarez/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>

              <a href="mailto:kenne1613@gmail.com" aria-label="Enviar correo">
                <Mail size={18} strokeWidth={1.7} />
              </a>
            </div>

            <div className="hero_availability">
              <span className="hero_status">
                <span className="hero_status-dot" />
                {t("hero.availability")}
              </span>

              <span className="hero_location">{t("hero.location")}</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero_visual"
          initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.8,
            delay: shouldReduceMotion ? 0 : 0.15,
            ease: "easeOut",
          }}
        >
          <div className="hero_visual-grid" />

          <div className="hero_code">
            <span>$ whoami</span>
            <strong>kennedy-suarez</strong>

            <span>$ focus</span>
            <strong>backend / cloud</strong>

            <span>$ stack</span>
            <strong>python django react</strong>
          </div>

          <div className="hero_image-wrapper">
            <div className="hero_image">
              <img
                src={profilePhoto}
                alt="Kennedy Suárez"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>

            <div className="hero_image-label">
              <span>01 / SYSTEMS</span>
              <span>ENGINEER</span>
            </div>
          </div>

          <div className="hero_accent hero_accent--top" />
          <div className="hero_accent hero_accent--bottom" />
        </motion.div>
      </div>

      <a
        href="#about"
        className="hero_scroll"
        aria-label="Ir a la sección sobre mí"
      >
        <span>SCROLL</span>
        <ArrowDown size={15} strokeWidth={1.5} />
      </a>
    </section>
  );
}

export default Hero;
