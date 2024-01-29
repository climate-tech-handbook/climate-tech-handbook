import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { IoMenuOutline } from "react-icons/io5";

export default function TOCCollapsibleCollapseButton({collapsed, toc, ...props}) {
  const [currentSection, setCurrentSection] = useState('');
  const prevTitleRef = useRef('');
  const observer = useRef(null);

  const renderTitle = () => {
    const currentTitle = currentSection && toc.find((item) => (item.id === currentSection) && item.level === 2)?.value
    let decodedTitle = ""

    if (currentTitle !== undefined) {
      decodedTitle = currentTitle 
          .replace(/&#39;/g, "'")
          .replace(/&amp;/g, '&')
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
          .replace(/&quot;/g, '"')
          .replace(/&nbsp;/g, ' ');

      prevTitleRef.current = decodedTitle;
      console.log("decoded", decodedTitle)
    }

    return decodedTitle || prevTitleRef.current;
  }
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      observer.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const { id } = entry.target;
              setCurrentSection(id);
            }
          });
        },
        { threshold: 1 } 
      );

      toc.forEach(({ id }) => {
        const target = document.getElementById(id);
        if (target) {
          observer.current.observe(target);
        }
      });

      return () => {
        if (observer.current) {
          observer.current.disconnect();
        }
      };
    }
  }, [toc]);

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
      <span> {renderTitle()} </span>
    </button>
  );
}
