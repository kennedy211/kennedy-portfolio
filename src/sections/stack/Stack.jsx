import { Cloud, Database, Globe, Server, Terminal } from "lucide-react";
import {
  SiPython,
  SiDjango,
  SiReact,
  SiVite,
  SiJavascript,
  SiPostgresql,
  SiSqlite,
  SiSupabase,
  SiRender,
  SiPostman,
  SiSwagger,
} from "react-icons/si";

import { FaAws, FaMicrosoft } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "framer-motion";

import "./Stack.css";

function Stack() {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();

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

  const categories = [
    {
      number: "01",
      titleKey: "backend",
      icon: Server,
      technologies: [
        {
          name: "Python",
          descriptionKey: "python",
          url: "https://www.python.org/",
          icon: SiPython,
        },
        {
          name: "Django",
          descriptionKey: "django",
          url: "https://www.djangoproject.com/",
          icon: SiDjango,
        },
        {
          name: "Django REST Framework",
          descriptionKey: "djangoRest",
          url: "https://www.django-rest-framework.org/",
          icon: SiDjango,
        },
      ],
    },

    {
      number: "02",
      titleKey: "frontend",
      icon: Globe,
      technologies: [
        {
          name: "React",
          descriptionKey: "react",
          url: "https://react.dev/",
          icon: SiReact,
        },
        {
          name: "Vite",
          descriptionKey: "vite",
          url: "https://vite.dev/",
          icon: SiVite,
        },
        {
          name: "JavaScript",
          descriptionKey: "javascript",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
          icon: SiJavascript,
        },
      ],
    },

    {
      number: "03",
      titleKey: "database",
      icon: Database,
      technologies: [
        {
          name: "PostgreSQL",
          descriptionKey: "postgresql",
          url: "https://www.postgresql.org/",
          icon: SiPostgresql,
        },
        {
          name: "SQLite",
          descriptionKey: "sqlite",
          url: "https://www.sqlite.org/",
          icon: SiSqlite,
        },
      ],
    },

    {
      number: "04",
      titleKey: "cloud",
      icon: Cloud,
      technologies: [
        {
          name: "AWS",
          descriptionKey: "aws",
          url: "https://aws.amazon.com/",
          icon: FaAws,
        },
        {
          name: "Azure",
          descriptionKey: "azure",
          url: "https://azure.microsoft.com/",
          icon: FaMicrosoft,
        },
        {
          name: "Supabase",
          descriptionKey: "supabase",
          url: "https://supabase.com/",
          icon: SiSupabase,
        },
        {
          name: "Render",
          descriptionKey: "render",
          url: "https://render.com/",
          icon: SiRender,
        },
        {
          name: "Postman",
          descriptionKey: "postman",
          url: "https://www.postman.com/",
          icon: SiPostman,
        },
        {
          name: "Swagger / OpenAPI",
          descriptionKey: "swagger",
          url: "https://swagger.io/",
          icon: SiSwagger,
        },
      ],
    },
  ];

  return (
    <section className="stack section" id="stack">
      <div className="container">
        <motion.div
          className="stack_header"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="stack_title-group">
            <span className="section-number mono">03.</span>

            <h2 className="section-title">{t("stack.title")}</h2>
          </div>

          <p className="stack_header-description">{t("stack.description")}</p>
        </motion.div>

        <motion.div
          className="stack_grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <motion.article
                className="stack_card"
                key={category.number}
                variants={itemVariants}
              >
                <div className="stack_card-header">
                  <span className="stack_number mono">{category.number}</span>

                  <Icon className="stack_icon" size={21} strokeWidth={1.5} />
                </div>

                <div className="stack_card-content">
                  <h3 className="stack_card-title">
                    {t(`stack.categories.${category.titleKey}.title`)}
                  </h3>

                  <p className="stack_card-description">
                    {t(`stack.categories.${category.titleKey}.description`)}
                  </p>
                </div>

                <div className="stack_technologies">
                  {category.technologies.map((technology) => {
                    const TechnologyIcon = technology.icon;

                    const technologyDescription = t(
                      `stack.technologies.${technology.descriptionKey}`,
                    );

                    return (
                      <a
                        className="stack_technology"
                        key={technology.name}
                        href={technology.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={technologyDescription}
                        aria-label={`${technology.name}: ${technologyDescription}`}
                        data-description={technologyDescription}
                      >
                        <TechnologyIcon
                          className="stack_technology-logo"
                          aria-hidden="true"
                        />

                        <span className="stack_technology-name">
                          {technology.name}
                        </span>

                        <span
                          className="stack_technology-external"
                          aria-hidden="true"
                        >
                          ↗
                        </span>
                      </a>
                    );
                  })}
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        <div className="stack_bottom">
          <div className="stack_terminal">
            <Terminal size={16} strokeWidth={1.5} />

            <span className="mono">{t("stack.bottomMessage")}</span>
          </div>

          <span className="stack_status mono">{t("stack.status")}</span>
        </div>
      </div>
    </section>
  );
}

export default Stack;
