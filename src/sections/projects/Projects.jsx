import { ArrowUpRight, Database } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import { projects } from "../../data/Projects";
import ProjectCard from "./projectCard/ProjectCard";

import "./Projects.css";

function Projects() {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
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
    <section className="projects section" id="projects">
      <motion.div
        className="container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
      >
        <motion.div className="projects_header" variants={itemVariants}>
          <div className="projects_title-group">
            <span className="section-number mono">05.</span>

            <h2 className="section-title">{t("projects.title")}</h2>
          </div>

          <p className="projects_header-description">
            {t("projects.description")}
          </p>
        </motion.div>

        <motion.div
          className="projects_list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </motion.div>

        <motion.div className="projects_footer" variants={itemVariants}>
          <div className="projects_footer-icon">
            <Database size={17} strokeWidth={1.5} />
          </div>

          <p>{t("projects.footerDescription")}</p>

          <a
            href="https://github.com/kennedy211"
            target="_blank"
            rel="noreferrer"
            className="projects_github"
          >
            {t("projects.githubLink")}
            <ArrowUpRight size={16} strokeWidth={1.7} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Projects;
