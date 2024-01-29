import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { IoMenuOutline } from "react-icons/io5";

export default function TOCCollapsibleCollapseButton({
  collapsed, 
  toc,
  ...props}) {

  const [currentSection, setCurrentSection] = useState('');
  const prevTitleRef = useRef('');

  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const { id } = entry.target;
            setCurrentSection(id);
          }
        });
      },
      { threshold: 1 } 
    )
  );
  
  const renderTitle = () => {
    const currentTitle = currentSection && toc.find((item) => (item.id === currentSection) && item.level === 2)?.value

    if (currentTitle !== undefined) {
      prevTitleRef.current = currentTitle;
    }

    return currentTitle || prevTitleRef.current;
  }

  useEffect(() => {
    toc.forEach(({ id }) => {
      const target = document.getElementById(id);
      if (target) {
        observer.current.observe(target);
      }
    });

    return () => {
      observer.current.disconnect();
    };
  }, [toc]);

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
          <span> {renderTitle()} </span>
        </button>
      </div>
  );
}
