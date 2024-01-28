import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';
import { IoMenuOutline } from "react-icons/io5";

export default function TOCCollapsibleCollapseButton({collapsed, ...props}) {
 
  return (
    <div className={clsx(styles.TOCBtnContainer)}>
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
          {/* <Translate
            id="theme.TOCCollapsible.toggleButtonLabel"
            description="The label used by the button on the collapsible TOC component">
            On this page
          </Translate> */}
        </button>
      </div>
  );
}
