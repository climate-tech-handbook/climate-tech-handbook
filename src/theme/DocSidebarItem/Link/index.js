import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {isActiveSidebarItem} from '@docusaurus/theme-common/internal';
import Link from '@docusaurus/Link';
import isInternalUrl from '@docusaurus/isInternalUrl';
import IconExternalLink from '@theme/Icon/ExternalLink';
import styles from './styles.module.css';
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

export default function DocSidebarItemLink({ item, onItemClick, activePath, level, index, ...props }) {
  const {href, label, className, autoAddBaseUrl} = item;
  const isActive = isActiveSidebarItem(item, activePath);
  const isInternalLink = isInternalUrl(href);
  
  // Render icons for sidebar
  const marginRight = { marginRight: '8px' };
  const renderIcon = () => {
    switch (label) {
      case 'Resources' : {
        return <FaGlobe style={ marginRight }/>;
      }
      case 'Contribute' : {
        return <FaHandHoldingHeart style={ marginRight }/>;
      }
      default: {
        return;
      }
    }
  }

  return (
    <li
      className={clsx(
        ThemeClassNames.docs.docSidebarItemLink,
        ThemeClassNames.docs.docSidebarItemLinkLevel(level),
        'menu__list-item',
        className,
      )}
      key={label}>
      <Link
        className={clsx(
          'menu__link',
          !isInternalLink && styles.menuExternalLink,
          {
            'menu__link--active': isActive,
          },
        )}
        autoAddBaseUrl={autoAddBaseUrl}
        aria-current={isActive ? 'page' : undefined}
        to={href}
        {...(isInternalLink && {
          onClick: onItemClick ? () => onItemClick(item) : undefined,
        })}
        {...props}>
        {}
        {renderIcon()}
        {label}
        {!isInternalLink && <IconExternalLink />}
      </Link>
    </li>
  );
}
