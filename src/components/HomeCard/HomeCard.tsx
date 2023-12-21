import clsx from "clsx";
import React, { CSSProperties } from "react";
import Link from "@docusaurus/Link";
import styles from "./HomeCard.module.css";

interface CardProps {
  title: string;
  description: string;
  // imageUrl: string;
  linkUrl: string;
}

const HomeCard: React.FC<CardProps> = ({
  title,
  description,
  // imageUrl,
  linkUrl,
}) => {
  return (
    <Link
      to={linkUrl}
      className={styles.buttonMain}
    >
      <div className={clsx("container", styles.cardContainer)}>
        {/* <img className={clsx(styles.cardImg)} src={imageUrl} alt={title} /> */}
        <div className={clsx(styles.cardText)}>
          <h1>{title}</h1>
          {/* <p className={clsx(styles.cardDescription)}>{description}</p> */}
        </div>
      </div>
    </Link>
  );
};

export default HomeCard;
