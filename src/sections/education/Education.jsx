import { education } from "../../data/Education";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import "./Education.css";

import CredentialCard from "./CredentialCard/CredentialCard";

function Education() {
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

  return (
    <section className="education section" id="education">
      <div className="container">
        <motion.div
          className="education_header"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="education_title-group">
            <span className="section-number mono">06.</span>

            <h2 className="section-title">{t("education.title")}</h2>
          </div>

          <p className="education_header-description">
            {t("education.description")}
          </p>
        </motion.div>

        <motion.div
          className="education_content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="education_academic">
            <motion.div className="education_subtitle" variants={itemVariants}>
              <span className="mono">01.</span>
              <h3>{t("education.academic.subtitle")}</h3>
            </motion.div>

            <div className="education_timeline">
              {education.academic.map((item) => (
                <motion.article
                  className="education_item"
                  key={item.id}
                  variants={itemVariants}
                >
                  <div className="education_item-date mono">
                    <span>{item.startDate}</span>
                    <span>—</span>
                    <span>{item.endDate}</span>
                  </div>

                  <div className="education_item-marker" />

                  <div className="education_item-content">
                    <h3>{t(item.titleKey)}</h3>

                    <p>{t(item.institutionKey)}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          <div className="education_credentials">
            <motion.div className="education_subtitle" variants={itemVariants}>
              <span className="mono">02.</span>
              <h3>{t("education.credentials.subtitle")}</h3>
            </motion.div>

            <motion.div
              className="credential_grid"
              variants={containerVariants}
            >
              {education.credentials.map((credential) => (
                <CredentialCard key={credential.id} credential={credential} />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Education;
