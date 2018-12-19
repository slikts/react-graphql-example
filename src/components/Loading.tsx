import React from "react";
import { keyframes, style } from "typestyle";

const Loading = ({ interval = 0.35 }) => (
  <div
    role="alert"
    aria-busy="true"
    aria-label="Loading"
    className={style({
      $nest: {
        "& span:before": {
          content: `"•"`,
        },
        "& span": {
          fontSize: "3rem",
          animationDuration: `${interval}s`,
          animationName: keyframes({
            from: { opacity: 0 },
            to: { opacity: 1 },
          }),
          animationIterationCount: "infinite",
          animationDirection: "alternate",
        },
        "& span:nth-of-type(2)": {
          animationDelay: `${interval / 2}s`,
        },
        "& span:nth-of-type(3)": {
          animationDelay: `${interval}s`,
        },
      },
    })}
  >
    <span />
    <span />
    <span />
  </div>
);

export default Loading;
