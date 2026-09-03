import { ArrowUpRight, Code2, Database, Server, Cloud } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import "./About.css";
import graduationPhoto from "../../assets/images/graduation.webp";

function About() {
  const { t } = useTranslation();

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

  const areas = [
    {
      number: "01",
      label: t("about.areas.software"),
      icon: Code2,
    },
    {
      number: "02",
      label: t("about.areas.backend"),
      icon: Server,
    },
    {
      number: "03",
      label: t("about.areas.database"),
      icon: Database,
    },
    {
      number: "04",
      label: t("about.areas.cloud"),
      icon: Cloud,
    },
  ];

  return (
    <section className="about section" id="about">
      <div className="container">
        <motion.div
          className="about_header"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="section-number mono">02.</span>

          <h2 className="section-title">{t("about.eyebrow")}</h2>
        </motion.div>

        <div className="about_content">
          <motion.div
            className="about_image-column"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
          >
            <div className="about_image-wrapper">
              <img
                src={graduationPhoto}
                alt="Kennedy Suárez, Ingeniero de Sistemas"
                className="about_image"
              />
              
              <div className="about_image-corner about_image-corner--top" />
              <div className="about_image-corner about_image-corner--bottom" />
            </div>

            <span className="about_image-caption mono">
              {t("about.imageCaption")}
            </span>
          </motion.div>

          <motion.div
            className="about_text"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
          >
            <p className="about_headline">{t("about.headline")}</p>

            <div className="about_description">
              <p>{t("about.description1")}</p>

              <p>{t("about.description2")}</p>

              <p>{t("about.description3")}</p>
            </div>

            <a href="#experience" className="about_link">
              {t("about.experienceLink")}
              <ArrowUpRight size={16} strokeWidth={1.8} />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="about_areas"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="about_areas-header">
            <span className="mono">{t("about.areasTitle")}</span>

            <span className="mono">04</span>
          </div>

          <div className="about_areas-grid">
            {areas.map((area) => {
              const Icon = area.icon;

              return (
                <motion.div
                  className="about_area"
                  key={area.number}
                  variants={itemVariants}
                >
                  <div className="about_area-top">
                    <span className="mono">{area.number}</span>

                    <Icon size={18} strokeWidth={1.6} />
                  </div>

                  <span className="about_area-label">{area.label}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
