import clsx from "clsx";
import React, { CSSProperties } from "react";
import Link from "@docusaurus/Link";
import styles from "./HomeCard.module.css";

import { IoEarth } from "react-icons/io5";
import { FaBookOpen } from "react-icons/fa";
import { MdWindPower } from "react-icons/md";

interface CardProps {
  title: string;
  description: string;
  linkUrl: string;
  icon: string;
}

const HomeCard: React.FC<CardProps> = ({
  title,
  description,
  linkUrl,
  icon
}) => {

  const iconComponent = () => {
    switch(icon) {
      case 'IoEarth': {
        return <IoEarth />;
      }
      case 'FaBookOpen': {
        return <FaBookOpen />;
      }
      case 'MdWindPower': {
        return <MdWindPower />;
      }
      default: {
        return null;
      }
    }
    
  }

  return (
    <Link
      to={linkUrl}
      className={styles.cardLink}
    >
      <div className={clsx("container", styles.cardContainer)}>
        <div className={clsx(styles.cardText)}>
          {iconComponent()}
          <h1>{title}</h1>
          <p className={clsx(styles.cardDescription)}>
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default HomeCard;
