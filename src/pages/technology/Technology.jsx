import Navigation from "../../ui/Navigation";
import * as data from "../../../data/data.json";
import { useState } from "react";
import PageTitle from "../../ui/PageTitle";
import TechnologyNav from "./TechnologyNav";
const { technology } = data;

function Technology() {
  const [currentTech, setCurrentTech] = useState("0");

  function handleClick(e) {
    if (e.currentTarget.getAttribute("data-id"))
      setCurrentTech(e.currentTarget.getAttribute("data-id"));
  }
  return (
    <div className="tech-bg  brightness-120">
      <Navigation style={"bg-backdrop-filter"} />
      <main className="page-container gap-5 site-padding bg-backdrop-filter">
        <PageTitle number={"03"} title={"space launch 101"} />
        <picture className="w-screen h-[15rem] md:h-full overflow-hidden">
          <source
            srcSet={technology[currentTech].images.landscape}
            media="(orientation: landscape)"
          />
          <img
            src={technology[currentTech].images.portrait}
            alt={technology[currentTech].name + " photo"}
            className="-translate-y-1/3 md:-translate-y-0"
          />
        </picture>
        <TechnologyNav currentTech={currentTech} handleClick={handleClick} />
        <article className="text-center flex flex-col items-center gap-5">
          <span className="uppercase text-(--white)/50 font-(family-name:--fn-bellefair) tracking-widest text-[1.1rem] ">
            the terminology...
          </span>
          <h2 className="text-(--white) uppercase text-[1.8rem] font-(family-name:--fn-bellefair)">
            {technology[currentTech].name}
          </h2>
          <p className="text-(--blue-light) text-[1rem] leading-8 mt-5">
            {technology[currentTech].description}
          </p>
        </article>
      </main>
    </div>
  );
}

export default Technology;
