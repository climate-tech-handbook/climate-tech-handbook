import React, { useEffect, useCallback, useState, useRef } from "react";
import clsx from "clsx";
import styles from "./ClimateClock.module.css";
import { loadScripts, scriptCleanup } from "@site/src/utils/scriptLogic";

interface ClockConfig {
  scriptType?: string;
  originUrl?: string;
  scriptTags?: string[];
}

const ClimateClock: React.FC<ClockConfig> = ({
  scriptType = "text/javascript",
  originUrl = "https://climateclock.net/wp-content/themes/C2D/js/",
  scriptTags = [
    `${originUrl}jquery.min.js`,
    `${originUrl}jquery.isMobile.min.js`,
    `${originUrl}magnific-popup.min.js`,
    `${originUrl}CO2Calculator.js?r=202111041017&ver=4.7.26`,
    `${originUrl}scripts.js?r=202111041017&ver=4.7.26`,
  ],
}) => {
  return (
    <div id="clock" className={clsx(styles.clock)}>
      <div className={clsx(styles.countdown)}>
        <h3 className={clsx(styles.clockHeader)} id="time-to-two">
          Time Left To Limit Global Heating To 1.5ºC
        </h3>
        <span className={clsx(styles.clockText)}>8:10:09:22:54:39:85</span>
      </div>
    </div>
  );
};

export default ClimateClock;

// const countdownRef = useRef<HTMLDivElement>(null);
// const [countdown, setCountdown] = useState<string | null>(null);

// const loadClimateClockScripts = useCallback(() => {
//   loadScripts(scriptTags);
//   return () => {
//     scriptCleanup(scriptTags);
//   };
// }, [originUrl, scriptType, scriptTags]);

// useEffect(() => {
//   const cleanup = loadClimateClockScripts();

//   if (countdownRef.current) {
//     const observer = new MutationObserver((mutationsList) => {
//       for (const mutation of mutationsList) {
//         if (
//           mutation.type === "childList" &&
//           mutation.target === countdownRef.current
//         ) {
//           const countdownValue = countdownRef.current.textContent;
//           setCountdown(countdownValue);
//         }
//       }
//     });

//     observer.observe(countdownRef.current, { childList: true });

//     return () => {
//       observer.disconnect();
//     };
//   }

//   return cleanup;
// }, [loadClimateClockScripts]);
