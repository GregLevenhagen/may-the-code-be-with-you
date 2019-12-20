import React from "react";
import Logo from "./Logo";
import LoadStars from "../utils/loadStars";
import usePeople from "../hooks/usePeople";

const Splash = () => {
  LoadStars();
  const { loading, results } = usePeople();

  if (loading) {
    return <div />;
  }

  return (
    <div className="splash">
      <section className="intro">
        A long time ago, in a galaxy far, far away....
      </section>
      <section className="logo">
        <Logo />
      </section>
      <div id="board">
        <div id="content">
          <p id="title">Skyline Technologies Presents</p>
          <p id="subtitle">Episode 2019</p>
          <p>May the Cloud be with You!</p>
          <p>
            Amazon, Azure and Google are vying for cloud dominance. Through working with all three, Skyline has developed multiple strategies for success that we will share, including:

- Multi-Cloud, Hybrid, Cloud-Ready, Cloud-Native 
- Containers and Serverless 
- A Demo to deploy Containers to Multi-Cloud (React frontend, Python backend)
          </p>
          <p>Starring</p>
          {results.map(r => (
            <p key={r.name}>{r.name}</p>
          ))}
        </div>
      </div>
      <iframe
        src="/star_wars_crawl.mp3"
        allow="autoplay"
        id="audio"
        style={{ display: "none" }}
        title="autoplay"
      />
      <audio preload="auto" autoPlay>
        <source src="/star_wars_crawl.mp3" type="audio/mp3" />
      </audio>
    </div>
  );
};

export default Splash;
