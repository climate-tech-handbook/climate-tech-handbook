import React, { useEffect, useState } from 'react';
import clsx from "clsx";
import styles from "./ScrollIndicator.module.css";

const ScrollIndicator = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0);

    const handleScroll = () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrollPosition = window.scrollY;
        const percentage = (scrollPosition / documentHeight) * 100;
        setScrollPercentage(percentage);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={clsx(styles.scrollContainer)}>
            <div className={clsx(styles.scrollIndicator)} style={{ width: `${scrollPercentage}%` }} />
        </div>
    )
};

export default ScrollIndicator;