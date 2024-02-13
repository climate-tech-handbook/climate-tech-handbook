import clsx from "clsx";
import React, { CSSProperties } from "react";
import Link from "@docusaurus/Link";
import styles from "./HomeCard.module.css";

import { IoEarth } from "react-icons/io5";
import { FaBookOpen } from "react-icons/fa";
import { MdWindPower } from "react-icons/md";

interface CardProps {
  title: string;
  linkUrl: string;
  icon: string;
}

const HomeCard: React.FC<CardProps> = ({
  title,
  linkUrl,
  icon
}) => {

  const iconSize = "5rem";

  const iconComponent = () => {
    switch(icon) {
      case 'IoEarth': {
        return <IoEarth size={iconSize}/>;
      }
      case 'FaBookOpen': {
        return <FaBookOpen size={iconSize}/>;
      }
      case 'MdWindPower': {
        return <MdWindPower size={iconSize}/>;
      }
      default: {
        return;
      }
    }
  };

  return (
    <Link
      to={linkUrl}
      className={styles.cardLink}
    >
      <div className={clsx("container", styles.cardContainer)}>
        <div className={clsx(styles.cardText)}>
          <div className={clsx(styles.icon)}>
            {iconComponent()}
          </div>
          <h1>{title}</h1>
        </div>
      </div>
    </Link>
  );
};

export default HomeCard;
