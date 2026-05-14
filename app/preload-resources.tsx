"use client";

import ReactDOM from "react-dom";

export function PreloadResources() {
  ReactDOM.preload("/videos/hero.mp4", {
    as: "video",
    type: "video/mp4",
  });

  return null;
}