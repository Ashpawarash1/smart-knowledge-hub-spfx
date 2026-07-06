import * as React from "react";
import styles from "./SectionHeader.module.scss";

export interface ISectionHeaderProps {
  title: string;
  subtitle?: string;
}

const SectionHeader: React.FC<ISectionHeaderProps> = ({
  title,
  subtitle,
}) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>

      {subtitle && (
        <p className={styles.subtitle}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;