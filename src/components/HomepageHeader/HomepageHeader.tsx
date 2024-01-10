import React from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import styles from "./HomePage.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className={clsx("container", styles.headerContainer)}>
        <p className={clsx("hero__subtitle", styles.headerStatement)}>
          {siteConfig.customFields.statement}
        </p>

        <p className={clsx("hero__subtitle", styles.headerSubtitle)}>
          {siteConfig.tagline}
        </p>

        <Link className={styles.cthLink} to="/intro">
          Start Learning
        </Link>
        
        <div className={styles.overlay}></div>
      </div>
    </header>
  );
}
