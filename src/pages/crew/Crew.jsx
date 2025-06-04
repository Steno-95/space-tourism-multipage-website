import Navigation from "../../ui/Navigation";
import * as data from "../../../data/data.json";
import { useState } from "react";
import CrewPagination from "./CrewPagination";
const { crew } = data;

function Crew() {
  const [currentCrew, setCurrentCrew] = useState("0");

  function handleClick(e) {
    console.log(e.currentTarget.getAttribute("data-id"));
    if (e.currentTarget.getAttribute("data-id"))
      setCurrentCrew(e.currentTarget.getAttribute("data-id"));
  }
  return (
    <div className="crew-bg brightness-90">
      <Navigation style={"bg-backdrop-filter"} />
      <main className="flex flex-col gap-8 items-center site-padding bg-backdrop-filter">
        <h1 className="flex gap-5 font-(family-name:--fn-barlow) mb-8">
          <span className="text-(--blue-light)/30 font-bold tracking-[0.2em]">
            02
          </span>
          <span className="uppercase text-(--white) tracking-[0.1em]  font-light">
            meet your crew
          </span>
        </h1>
        <div className="flex flex-col items-center text-center mb-8">
          <span className="font-(family-name:--fn-bellefair) text-(--blue-light)/40 uppercase text-[1.4rem]">
            {crew[currentCrew].role}
          </span>
          <h2 className="text-(--white) uppercase text-[2rem] font-(family-name:--fn-bellefair)">
            {crew[currentCrew].name}
          </h2>
          <p className="text-(--blue-light) text-[1.2rem] leading-8 mt-5">
            {crew[currentCrew].bio}
          </p>
        </div>
        <CrewPagination onClick={handleClick} currentCrew={currentCrew} />
        <picture className="px-10 py-5">
          <source srcSet={crew[currentCrew].images.webp} type="image/webp" />
          <img
            src={crew[currentCrew].images.png}
            alt={crew[currentCrew].name + " photo"}
            className=""
          />
        </picture>
      </main>
    </div>
  );
}

export default Crew;
