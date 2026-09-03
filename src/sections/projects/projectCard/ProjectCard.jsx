import { Code2, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import "./ProjectCard.css";

function ProjectCard({ project, variants }) {
  const { t } = useTranslation();
  return (
    <motion.article className="project" variants={variants}>
      <div className="project_visual">
        <div className="project_visual-grid" />

        <div className="project_terminal">
          <span className="project_terminal-line">
            <span>$</span> project.init()
          </span>

          <span className="project_terminal-line">stack:</span>

          {project.technologies.map((technology) => (
            <span className="project_terminal-item" key={technology}>
              └─ {technology}
            </span>
          ))}
        </div>

        <div className="project_visual-label">
          <span>{project.number}</span>
          <span>{t(`projects.items.${project.key}.status`)}</span>
        </div>

        <div className="project_visual-icon">
          <Code2 size={46} strokeWidth={1} />
        </div>
      </div>

      <div className="project_content">
        <div className="project_meta">
          <span className="project_type mono">
            {t(`projects.items.${project.key}.type`)}
          </span>

          <span className="project_number mono">{project.number}</span>
        </div>

        <h3 className="project_title">
          {t(`projects.items.${project.key}.title`)}
        </h3>

        <p className="project_description">
          {t(`projects.items.${project.key}.description`)}
        </p>

        <div className="project_details">
          <div className="project_detail">
            <span className="project_detail-label mono">
              {t("projects.architecture")}
            </span>

            <span className="project_detail_value">{project.architecture}</span>
          </div>

          <div className="project_detail">
            <span className="project_detail-label mono">
              {t("projects.role")}
            </span>

            <span className="project_detail_value">
              {t(`projects.items.${project.key}.role`)}
            </span>
          </div>
        </div>

        <div className="project_technologies">
          {project.technologies.map((technology) => (
            <span key={technology} className="project_technology">
              {technology}
            </span>
          ))}
        </div>

        <div className="project_actions">
          <span className="project_status">
            <span className="project_status-dot" />
            {t("projects.projectStatus")}
          </span>

          <div className="project_links">
            <span className="project_disabled-link">
              <FaGithub size={15} />
              {t("projects.github")}
            </span>

            <span className="project_disabled-link">
              <ExternalLink size={15} strokeWidth={1.7} />
              {t("projects.demo")}
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
