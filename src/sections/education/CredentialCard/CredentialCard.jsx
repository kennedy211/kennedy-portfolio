import { ArrowUpRight, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import "./CredentialCard.css";

function CredentialCard({ credential }) {
  const { t } = useTranslation();

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
    <motion.article className="credential" variants={itemVariants}>
      <div className="credential_header">
        <span className="credential_category mono">
          {t(credential.categoryKey)}
        </span>

        <span className="credential_number mono">
          {credential.id < 10 ? `0${credential.id}` : credential.id}
        </span>
      </div>

      <div className="credential_content">
        <h3 className="credential_title">{t(credential.titleKey)}</h3>

        <span className="credential_issuer">{credential.issuer}</span>
      </div>

      <div className="credential_footer">
        {credential.credentialUrl ? (
          <a
            href={credential.credentialUrl}
            target="_blank"
            rel="noreferrer"
            className="credential_link"
          >
            {t("education.credential.view")}
            <ArrowUpRight size={15} strokeWidth={1.7} />
          </a>
        ) : (
          <span className="credential_unavailable">
            {t("education.credential.available")}
          </span>
        )}

        <ExternalLink className="credential_icon" size={16} strokeWidth={1.4} />
      </div>
    </motion.article>
  );
}

export default CredentialCard;
