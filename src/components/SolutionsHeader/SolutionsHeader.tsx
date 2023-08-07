import React from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import styles from "./Solutions.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import imageToAdd from "../../../static/img/drawdown-solutions-chart.png";

export default function SolutionsHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("container", styles.solutionsContainer)}>
      <div className={clsx("leftSide", styles.leftSide)}>
      <h1 className={clsx("hero__subtitle", styles.headerStatement)}>
      Yes we know exactly how to solve the climate crisis
      </h1>
      <p style={{ color:"black"}}>
      We have all the science and technology needed to win this critical decade, thanks to the <a href="glossary#project-drawdown">Project Drawdown framework</a>.<br/>
      </p>
      <h2>
      Pick a climate solution below, organized by sector.<br/>
      </h2>
      </div>

      <img className={clsx("leftSide", styles.rightSide)} src={imageToAdd}/>
    </header>
  );
}
