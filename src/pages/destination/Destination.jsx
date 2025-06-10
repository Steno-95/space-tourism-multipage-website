import Navigation from "../../ui/Navigation";
import DestinationNav from "./DestinationNav";
import * as data from "../../../data/data.json";
import { useState } from "react";
import PageTitle from "../../ui/PageTitle";
const { destinations } = data;

function Destination() {
  const [currentDest, setCurrentDest] = useState("0");

  function handleClick(e) {
    if (e.currentTarget.getAttribute("data-id"))
      setCurrentDest(e.currentTarget.getAttribute("data-id"));
  }
  return (
    <div className="dest-bg main-bg">
      <div className="bg-backdrop-filter min-h-screen">
        <Navigation />
        <main className="page-container gap-5 site-padding">
          <section className="flex flex-col items-center lg:grid lg:grid-cols-[1.2fr_1fr] grid-rows-[fit-content_1fr_1fr_1fr] lg:pl-10">
            <PageTitle
              number={"01"}
              title={"pick your destination"}
              style="md:self-start lg:col-start-1 col-end-3 lg:mb-15 lg:justify-self-start "
            />
            <picture className="py-10 lg:row-start-2 lg:row-end-5 lg:py-0 lg:place-items-center">
              <source
                srcSet={destinations[currentDest].images.webp}
                type="image/webp"
              />
              <img
                src={destinations[currentDest].images.png}
                alt={destinations[currentDest].name + " photo"}
                className="size-45 md:size-70 lg:size-auto"
              />
            </picture>
            <div className="flex flex-col items-center gap-5 lg:items-start">
              <DestinationNav onClick={handleClick} currentDest={currentDest} />
              <article className="text-center md:max-w-[38rem] lg:text-start">
                <h2 className="text-(--white) uppercase text-[5rem] font-(family-name:--fn-bellefair) md:text-[5.5rem] lg:text-[3rem]">
                  {destinations[currentDest].name}
                </h2>
                <p className="text-(--blue-light) text-[1.2rem] leading-8 my-5 lg:text-[1rem] lg:leading-7 lg:my-3">
                  {destinations[currentDest].description}
                </p>
              </article>
            </div>
            <aside className=" border-t-2 border-t-(--blue-light)/20 w-full text-center flex flex-col gap-5 pt-5 md:flex-row md:items-center md:justify-around lg:justify-start lg:text-start lg:gap-15">
              <div>
                <h3 className="dest-description">Avg. distance</h3>
                <span className="dest-value">
                  {destinations[currentDest].distance}
                </span>
              </div>
              <div>
                <h3 className="dest-description">Est. travel time</h3>
                <span className="dest-value">
                  {" "}
                  {destinations[currentDest].travel}
                </span>
              </div>
            </aside>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Destination;
