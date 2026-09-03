import { ArrowUpRight, Building2, Server } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import "./Experience.css";

function Experience() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const { t } = useTranslation();
  return (
    <section className="experience section" id="experience">
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div className="experience_header" variants={itemVariants}>
          <div className="experience_title-group">
            <span className="section-number mono">04.</span>

            <h2 className="section-title">{t("experience.title")}</h2>
          </div>

          <p className="experience_header-description">
            {t("experience.description")}
          </p>
        </motion.div>

        <motion.article className="experience_item" variants={itemVariants}>
          <div className="experience_timeline">
            <div className="experience_timeline-marker">
              <span />
            </div>

            <span className="experience_timeline-line" />
          </div>

          <div className="experience_main">
            <div className="experience_top">
              <div className="experience_company">
                <div className="experience_company-icon">
                  <Building2 size={18} strokeWidth={1.5} />
                </div>

                <div>
                  <h3>Sociedad Comercializadora Océanos S.A.</h3>

                  <span className="mono">Cartagena de Indias, Bolívar</span>
                </div>
              </div>

              <span className="experience_date mono">05/2023 — 11/2023</span>
            </div>

            <div className="experience_role">
              <div>
                <span className="experience_label mono">
                  {t("experience.positionLabel")}
                </span>

                <h4>{t("experience.position")}</h4>
              </div>

              <Server
                className="experience_role-icon"
                size={22}
                strokeWidth={1.5}
              />
            </div>

            <div className="experience_description">
              <p>{t("experience.description1")}</p>

              <p>{t("experience.description2")}</p>

              <p>{t("experience.description3")}</p>
            </div>

            <div className="experience_skills">
              <span>{t("experience.skills.technicalSupport")}</span>
              <span>{t("experience.skills.infrastructure")}</span>
              <span>{t("experience.skills.networking")}</span>
              <span>{t("experience.skills.servers")}</span>
              <span>{t("experience.skills.incidentResolution")}</span>
              <span>{t("experience.skills.teamwork")}</span>
            </div>
          </div>
        </motion.article>

        <motion.div className="experience_bottom" variants={itemVariants}>
          <div className="experience_bottom-icon">
            <Server size={17} strokeWidth={1.5} />
          </div>

          <div>
            <span className="experience_bottom-label mono">
              {t("experience.evolutionLabel")}
            </span>

            <p>{t("experience.evolutionDescription")}</p>
          </div>

          <a href="#projects" className="experience_link">
            {t("experience.projectsLink")}
            <ArrowUpRight size={16} strokeWidth={1.7} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Experience;
