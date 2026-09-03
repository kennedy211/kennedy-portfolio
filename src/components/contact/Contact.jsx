import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "framer-motion";

import "./Contact.css";

function Contact() {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <motion.div
          className="contact_header"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="contact_title-group">
            <span className="section-number mono">07.</span>

            <h2 className="section-title">{t("contact.title")}</h2>
          </div>

          <p className="contact_header-description">
            {t("contact.headerDescription")}
          </p>
        </motion.div>

        <motion.div
          className="contact_content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div className="contact_intro" variants={itemVariants}>
            <span className="contact_label mono">{t("contact.label")}</span>

            <h3 className="contact_title">{t("contact.heading")}</h3>

            <p className="contact_description">{t("contact.description")}</p>
          </motion.div>

          <motion.div className="contact_links" variants={containerVariants}>
            <motion.a
              href="mailto:kenne1613@gmail.com"
              className="contact_link"
              variants={itemVariants}
            >
              <div className="contact_link-icon">
                <Mail size={18} strokeWidth={1.5} />
              </div>

              <div className="contact_link-content">
                <span className="contact_link-label mono">EMAIL</span>

                <span className="contact_link-value">kenne1613@gmail.com</span>
              </div>

              <ArrowUpRight
                className="contact_link-arrow"
                size={17}
                strokeWidth={1.5}
              />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/kennedy-suarez/"
              target="_blank"
              rel="noreferrer"
              className="contact_link"
              variants={itemVariants}
            >
              <div className="contact_link-icon">
                <FaLinkedin size={18} />
              </div>

              <div className="contact_link-content">
                <span className="contact_link-label mono">LINKEDIN</span>

                <span className="contact_link-value">
                  linkedin.com/in/kennedy-suarez
                </span>
              </div>

              <ArrowUpRight
                className="contact_link-arrow"
                size={17}
                strokeWidth={1.5}
              />
            </motion.a>

            <motion.a
              href="https://github.com/kennedy211"
              target="_blank"
              rel="noreferrer"
              className="contact_link"
              variants={itemVariants}
            >
              <div className="contact_link-icon">
                <FaGithub size={18} />
              </div>

              <div className="contact_link-content">
                <span className="contact_link-label mono">GITHUB</span>

                <span className="contact_link-value">
                  github.com/kennedy211
                </span>
              </div>

              <ArrowUpRight
                className="contact_link-arrow"
                size={17}
                strokeWidth={1.5}
              />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="contact_footer"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <span className="contact_status">
            <span className="contact_status-dot" />
            {t("contact.status")}
          </span>

          <a href="mailto:kenne1613@gmail.com" className="contact_cta">
            {t("contact.cta")}
            <ArrowUpRight size={16} strokeWidth={1.7} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
