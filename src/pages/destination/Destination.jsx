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
    <div className="dest-bg brightness-120">
      <Navigation style={"bg-backdrop-filter"} />
      <main className="page-container gap-5 site-padding bg-backdrop-filter">
        <PageTitle number={"01"} title={"pick your destination"} />
        <picture className="py-10">
          <source
            srcSet={destinations[currentDest].images.webp}
            type="image/webp"
          />
          <img
            src={destinations[currentDest].images.png}
            alt={destinations[currentDest].name + " photo"}
            className="size-45"
          />
        </picture>
        <div className="flex flex-col items-center gap-5">
          <DestinationNav onClick={handleClick} currentDest={currentDest} />
          <article className="text-center">
            <h2 className="text-(--white) uppercase text-[5rem] font-(family-name:--fn-bellefair)">
              {destinations[currentDest].name}
            </h2>
            <p className="text-(--blue-light) text-[1.2rem] leading-8 mt-5">
              {destinations[currentDest].description}
            </p>
          </article>
        </div>
        <aside className=" border-t-2 border-t-(--blue-light)/20 w-full text-center flex flex-col gap-5 pt-5">
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
      </main>
    </div>
  );
}

export default Destination;
