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
          <p>[Insert Cool Verbiage Describing This Episode]</p>
          <p>
            [Currently Fetching people from the API and just showing them,
            remove and/or change this]
          </p>
          {results.map(r => (
            <p key={r.name}>{r.name}</p>
          ))}
        </div>
      </div>
      <audio autoPlay>
        <source src="/star_wars_crawl.mp3" type="audio/mp3" />
      </audio>
    </div>
  );
};

export default Splash;
