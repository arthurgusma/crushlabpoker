"use client";

export default function VideoPlayer() {
    return (
      <video width="320" height="240" controls preload="none">
        <source src="/src/public/assets/demo/demoCrushLabEN.mp4" type="video/mp4" />
      </video>
    )
  }