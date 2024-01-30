import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import {useCollapsible, Collapsible} from '@docusaurus/theme-common';
import TOCItems from '@theme/TOCItems';
import CollapseButton from '@theme/TOCCollapsible/CollapseButton';
import styles from './styles.module.css';
import useIsBrowser from '@docusaurus/useIsBrowser';

export default function TOCCollapsible({ toc, className, minHeadingLevel, maxHeadingLevel}) {
  const isBrowser = useIsBrowser();
  const {collapsed, toggleCollapsed} = useCollapsible({
    initialState: true,
  });
  

  let prevScrollPos = isBrowser ? window.pageYOffset : 0;
  let tableOfContentButtonRef = useRef(null);

  const handleScrollOffset = () => {
    if (isBrowser) {
      let tableOfContentButton = tableOfContentButtonRef.current;
      const currentScrollPos = window.pageYOffset;
  
      if (tableOfContentButton) {
        if (prevScrollPos > currentScrollPos) {
          // Scrolling up
          tableOfContentButton.style.top = "80px";
        } else {
          // Scrolling down
          tableOfContentButton.style.top = "0";
        }
    
        prevScrollPos = currentScrollPos;
      }
    }
  
  };

  useEffect(() => {
    if (isBrowser) {
      window.addEventListener('scroll', handleScrollOffset)
    };
  }, [])
 
  return (
    <div
      ref={tableOfContentButtonRef}
      className={clsx(
        styles.tocCollapsible,
        !collapsed && styles.tocCollapsibleExpanded,
        className,
      )}>
      <CollapseButton collapsed={collapsed} onClick={toggleCollapsed} toc={toc} />
      <Collapsible
        lazy
        className={styles.tocCollapsibleContent}
        collapsed={collapsed}>
        <TOCItems
          toc={toc}
          minHeadingLevel={minHeadingLevel}
          maxHeadingLevel={maxHeadingLevel}
        />
      </Collapsible>
    </div>
  );
}
