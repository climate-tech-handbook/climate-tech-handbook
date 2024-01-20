import React from 'react';
import { useLocation } from '@docusaurus/router';
import ScrollIndicator from '../components/ScrollIndicator/ScrollIndicator';

export default function Root({children}) {
    const location = useLocation();

    const renderScroll = () => {
        if (location.pathname != "/") {
            return ( <ScrollIndicator /> )
        }
    }

  return (
    <> 
        { renderScroll() }
        {children}   
    </>
    );
}