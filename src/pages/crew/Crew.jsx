import Navigation from "../../ui/Navigation";
import * as data from "../../../data/data.json";
import { useState } from "react";
import CrewPagination from "./CrewPagination";
import PageTitle from "../../ui/PageTitle";
const { crew } = data;

function Crew() {
  const [currentCrew, setCurrentCrew] = useState("0");

  function handleClick(e) {
    if (e.currentTarget.getAttribute("data-id"))
      setCurrentCrew(e.currentTarget.getAttribute("data-id"));
  }
  return (
    <section className="crew-bg main-bg">
      <div className="bg-backdrop-filter min-h-screen">
        <Navigation />
        <section className="page-container site-padding ">
          <article className="lg:grid lg:grid-cols-2 lg:grid-rows-[1fr_4fr_1fr] lg:pl-10 flex flex-col items-center max-h-screen">
            <PageTitle
              number={"02"}
              title={"meet your crew"}
              style="md:self-start lg:col-start-1 lg:col-end-2 pb-10"
            />
            <article className="flex flex-col items-center text-center mb-8 lg:text-start lg:items-start basis-3/7 lg:row-start-2 lg:row-end-3 lg:place-content-center">
              <span className="font-(family-name:--fn-bellefair) text-(--blue-light)/40 uppercase text-[1.4rem] xl:text-[1.1rem] ">
                {crew[currentCrew].role}
              </span>
              <h2 className="text-(--white) uppercase text-[2rem] font-(family-name:--fn-bellefair) xl:text-[1.6rem]">
                {crew[currentCrew].name}
              </h2>
              <p className="text-(--blue-light) text-[1.2rem] leading-8 my-5 md:max-w-[35rem] xl:text-[1rem]">
                {crew[currentCrew].bio}
              </p>
            </article>
            <CrewPagination onClick={handleClick} currentCrew={currentCrew} />
            <picture className="crew-picture lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-4 lg:self-end 2xl:max-h-[60rem] 2xl:max-w-fit place-self-center">
              <source
                srcSet={crew[currentCrew].images.webp}
                type="image/webp"
              />
              <img
                src={crew[currentCrew].images.png}
                alt={crew[currentCrew].name + " photo"}
                className="translate-y-1/10 lg:w-full lg:translate-y-0"
              />
              <div className="blur-bg"></div>
            </picture>
          </article>
        </section>
      </div>
    </section>
  );
}

export default Crew;
