import React from "react";

export default function Home() {
  return (
    <div className="w-full h-screen relative">
      <div className="absolute h-full w-full rounded-2xl bg-hero-image bg-cover bg-center"></div>
      <div className="h-full w-full backdrop-filter backdrop-blur backdrop-brightness-50"></div>
    </div>
  );
}
