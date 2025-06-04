import Navigation from "../../ui/Navigation";
import * as data from "../../../data/data.json";
import { useState } from "react";
import CrewPagination from "./CrewPagination";
import PageTitle from "../../ui/PageTitle";
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
      <main className="page-container  gap-8 site-padding bg-backdrop-filter">
        <PageTitle number={"02"} title={"meet your crew"} />
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
