import React from "react";
import style from "./loading.module.css";

function Loading() {
  return (
    <div id={style["loading-base"]}>
      <div id={style["container"]}>
        <div className={style["divider"]} aria-hidden="true"></div>
        <p className={style["loading-text"]} aria-label="Loading">
          <span className={style["letter"]} aria-hidden="true">
            L
          </span>
          <span className={style["letter"]} aria-hidden="true">
            o
          </span>
          <span className={style["letter"]} aria-hidden="true">
            a
          </span>
          <span className={style["letter"]} aria-hidden="true">
            d
          </span>
          <span className={style["letter"]} aria-hidden="true">
            i
          </span>
          <span className={style["letter"]} aria-hidden="true">
            n
          </span>
          <span className={style["letter"]} aria-hidden="true">
            g
          </span>
        </p>
      </div>
    </div>
  );
}

export default Loading;
