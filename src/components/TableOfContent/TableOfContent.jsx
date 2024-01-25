import React, { useEffect } from 'react';
import clsx from "clsx";
import { useLocation } from '@docusaurus/router';


const TableOfContent = () => {
    const location = useLocation();
    let prevScrollPos = window.pageYOffset;

    useEffect(() => {
        const tableOfContentButton = document.getElementsByClassName("tocCollapsible_node_modules-\@docusaurus-theme-classic-lib-theme-TOCCollapsible-styles-module")[0];

        const handleScrollOffset = () => {
            const currentScrollPos = window.pageYOffset;

            if ( tableOfContentButton ) {
                if ( prevScrollPos > currentScrollPos ) {
                    // Scrolling up
                    tableOfContentButton.style.top = "80px";
                } else {
                    // Scrolling down
                    tableOfContentButton.style.top = "0";
                }

                prevScrollPos = currentScrollPos;
            }
        }

        window.addEventListener('scroll', handleScrollOffset);
    
        const articleElement = document.querySelector('article');

        const addScrollIndicator = () => {
            const scrollIndicator = document.createElement('div');
    
            if (articleElement) {
                articleElement.appendChild(scrollIndicator)
            }
    
            scrollIndicator.width = "100%"
            scrollIndicator.background = "green";
            scrollIndicator.height = "100px";
            scrollIndicator.id = "scrollIndicatorId"
            // console.log(scrollIndicator)
            // console.log(articleElement)
        }

        addScrollIndicator();

        return () => {
            window.removeEventListener('scroll', handleScrollOffset);
        }
    }, []);
        

    return (
        <>
            {/* {console.log('from TOC')}
            {console.log(location.pathname)} */}
            {/* {addScrollIndicator()} */}
        </>
    )
}

export default TableOfContent;