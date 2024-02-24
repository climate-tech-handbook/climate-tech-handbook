
import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { IoMenuOutline } from "react-icons/io5";
import useIsBrowser from '@docusaurus/useIsBrowser';


export default function TOCCollapsibleCollapseButton({collapsed, toc, ...props}) {
  const [currentSection, setCurrentSection] = useState('');
  const prevTitleRef = useRef('');
  const isBrowser = useIsBrowser();

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
    }

    return decodedTitle || prevTitleRef.current;
  }
  
  useEffect(() => {
    const h2Anchors = toc.filter(anchor => anchor.level === 2).map(anchor => anchor.id)
    
    const options = {
      rootMargin: "-30px 0% -77%",
      threshold: 1
    }

    const obFunc = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const { id } = entry.target;
          setCurrentSection(id);
        }
      });
    }

    if (isBrowser) {
      const observer = new IntersectionObserver(obFunc, options);
      h2Anchors.forEach((h2) => {
        const target = document.getElementById(h2)
        observer.observe(target)
      })
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
        <div className={clsx(styles.tocLeft)}>
          <IoMenuOutline />
          <span> {renderTitle()} </span>
        </div>
    </button>
  );
}
