import React from 'react';
import { useLocation } from '@docusaurus/router';
import ScrollIndicator from '../components/ScrollIndicator/ScrollIndicator';
import TableOfContent from '../components/TableOfContent/TableOfContent';
import { setSmoothScroll } from '../utils/scriptLogic';

export default function Root({children}) {
    const location = useLocation();

    const renderScroll = () => {
        if (location.pathname != "/") {
            return ( <ScrollIndicator /> )
        }
    }

  return (
    <> 
        { setSmoothScroll() }
        { renderScroll() }
        <TableOfContent />
        {children}   
    </>
    );
}