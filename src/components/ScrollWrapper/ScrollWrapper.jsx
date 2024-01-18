import React, { useEffect, useState } from "react";
import clsx from "clsx";
import ScrollIndicator from "../ScrollIndicator/ScrollIndicator";
import { useLocation } from '@docusaurus/router';
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";


const ScrollWrapper = ({children}) => {
    const location = useLocation();
    const { siteConfig } = useDocusaurusContext();

    console.log(location.pathname)

    return (
        <Layout
            title={`${siteConfig.title}`}
            description="Get up to speed on climate tech as quickly as possible"
        > 
            <ScrollIndicator />
            {children}
        </Layout>
    )
};

export default ScrollWrapper;