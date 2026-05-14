"use client";

import ReactDOM from "react-dom";

export function PreloadResources() {
  ReactDOM.preload("/hero-video.mp4", {
    as: "video",
    type: "video/mp4",
  });

  return null;
}