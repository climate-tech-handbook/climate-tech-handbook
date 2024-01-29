import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';
import { IoMenuOutline } from "react-icons/io5";

export default function TOCCollapsibleCollapseButton({collapsed, toc, ...props}) {
  

  return (
    <button
      type="button"
      {...props}
      className={clsx(
        'clean-btn',
        styles.tocCollapsibleButton,
        !collapsed && styles.tocCollapsibleButtonExpanded,
        props.className,
      )}>
      <IoMenuOutline />
    </button>
  );
}
