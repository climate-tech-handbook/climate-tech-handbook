import React, { useEffect, useState } from "react";
import clsx from "clsx";
import moment from "moment";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageHeader from "../components/HomepageHeader/HomepageHeader";
import HomeCard from "../components/HomeCard/HomeCard";
import NewClimateClock from "../components/NewClimateClock/NewClimateClock";

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
    <Layout
      title={`${siteConfig.title}`}
      description="Get up to speed on climate tech as quickly as possible"
    >
      <HomepageHeader />

      <main className={clsx(styles.mainBody)}>
        <NewClimateClock countDown={climateCountdown} />

        <div className={clsx(styles.infoDiv)}>
          <h1>OUR MISSION</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
            id est laborum.
          </p>
        </div>

        <div className={clsx(styles.homecardContainer)}>
          <HomeCard
              title="About Us"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              linkUrl="/about"
              icon="IoEarth"
          />
            
          <HomeCard
              title="Courses"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              linkUrl="/intro"
              icon="FaBookOpen"
          />

          <HomeCard
              title="Climate Solutions"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              linkUrl="/solutions"
              icon="MdWindPower"
          />
        </div>
      </main>

    </Layout>
  );
}
