import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import moment from "moment";
import styles from "./index.module.css";
import HomepageHeader from "../components/HomepageHeader/HomepageHeader";
import HomeCard from "../components/HomeCard/HomeCard";
import NewClimateClock from "../components/NewClimateClock/NewClimateClock";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  
  const [climateCountdown, setClimateCountdown] = useState({
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [dateOfDeadline, setDateOfDeadline] = useState(
    moment("")
  );

  useEffect(()=> {
    fetch('https://api.climateclock.world/v2/clock.json')
      .then(res => res.json())
      .then(climateClockData => setDateOfDeadline(moment(climateClockData.data.modules.carbon_deadline_1.timestamp)))
  }, []);
 
  useEffect(() => {
    const timeBetween = moment.duration(dateOfDeadline.diff(moment()));
    const interval = setInterval(() => {
      setClimateCountdown({
        years: Math.floor(timeBetween.asYears()),
        days: Math.floor(timeBetween.asDays()) % 365,
        hours: timeBetween.hours(),
        minutes: timeBetween.minutes(),
        seconds: padWithZeroes(timeBetween.seconds(), 2)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [climateCountdown]);

  function padWithZeroes(input, minLength) {
    const inputString = input.toString();
    if (inputString.length >= minLength) return input;
    return "0".repeat(minLength - inputString.length) + inputString;
  }

  return (
    <div  className={clsx(styles.bodyWrapper)}> 
    <Layout
      icon="IoEarth"
      description="Get up to speed on climate tech as quickly as possible"
    > 
      <HomepageHeader />
      
      <main className={clsx(styles.mainBody)}>
        <NewClimateClock countDown={climateCountdown} />

        <div className={clsx(styles.missionContainer)}>
          <svg className={clsx(styles.missionIcon)} width="348" height="246" viewBox="0 0 348 246" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="119" cy="123" r="119" fill="#AAC6FD" fill-opacity="0.63"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M150.778 136.6C140.161 27.9755 240.078 -13.1761 336.69 3.62438C340.824 4.34159 343.866 7.61672 344.463 11.529C353.248 64.9685 347.09 124.044 309.767 162.752C276.99 196.746 230.746 202.413 182.868 189.984C178.413 208.563 177.754 225.742 177.218 237.116C176.63 249.536 157.663 248.65 158.251 236.23C161.713 163.829 189.784 111.738 248.482 67.1478C229.36 70.9185 181.374 104.258 157.975 149.208C153.881 147.709 151.468 143.676 150.778 136.6Z" fill="#5DC597" fill-opacity="0.85"/>
          </svg>

          <div className={clsx(styles.infoDiv)}>
            <h1>OUR MISSION</h1>
            <p>Build the world's most <span>accessible</span>, 
            yet <span>comprehensive</span> resource for anyone who wants to work in climate tech...AND...do it as open source collective.</p>
            <Link className={styles.secondaryButton} to="/about">
              About us
            </Link>
          </div>
        </div>

        <div className={clsx(styles.homecardContainer)}>
            
          <HomeCard
            title="Free mini-course"
            linkUrl="/intro"
            icon="FaBookOpen"
          />

          <HomeCard
            title="Climate Solutions"
            linkUrl="/solutions"
            icon="MdWindPower"
          />
          <HomeCard
            title="About Us"
            linkUrl="/about"
            icon="IoEarth"
          />
          
        </div>
      </main>   
  
    </Layout>
   </div>
  );
}
