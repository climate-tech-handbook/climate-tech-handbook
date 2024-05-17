import React, { useEffect } from "react";
import clsx from "clsx";
import styles from "./NewClimateClock.module.css";

export default function NewClimateClock({ countDown }) {

  return (
    <div id="clock" className={clsx(styles.clock)}>
      <div className={clsx(styles.countdown)}>
        <h3 className={clsx(styles.clockHeader)} id="time-to-two">
          Time Left To Limit Global Heating To 1.5ºC
        </h3>
        <main className={clsx(styles.clockMain)}>
          <div className={clsx(styles.section)}>
            <div className={clsx(styles.number)}>{countDown.years}</div>
            <div className={clsx(styles.label)}>Years</div>
          </div>

          <span> : </span>

          <div className={clsx(styles.section)}>
            <div className={clsx(styles.number)}>{countDown.days}</div>
            <span className={clsx(styles.label)}>Days</span>
          </div>

          <span> : </span>

          <div className={clsx(styles.section)}>
            <div className={clsx(styles.number)}>{countDown.hours}</div>
            <span className={clsx(styles.label)}>Hours</span>
          </div>

          <span> : </span>

          <div className={clsx(styles.section)}>
            <div className={clsx(styles.number)}>{countDown.minutes}</div>
            <span className={clsx(styles.label)}>Minutes</span>
          </div>

          <span> : </span>

          <div className={clsx(styles.section)}>
            <div className={clsx(styles.number)}>{countDown.seconds}</div>
            <span className={clsx(styles.label)}>Seconds</span>
          </div>

        </main>
      </div>
    </div>
  );
}
