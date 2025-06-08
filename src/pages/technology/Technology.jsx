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
    <div className="tech-bg">
      <div className="bg-backdrop-filter min-h-screen">
        <Navigation style={""} />
        <main className="page-container gap-5 site-padding lg:items-start overflow-hidden">
          <PageTitle
            number={"03"}
            title={"space launch 101"}
            style={"md:pl-20"}
          />
          <section className="page-container gap-5 lg:flex-row lg:min-w-screen lg:pl-25 lg:gap-8 2xl:pl-10">
            <picture className="w-screen portrait:h-[18rem]  md:h-full overflow-hidden lg:order-1 lg:w-auto">
              <source
                srcSet={technology[currentTech].images.portrait}
                media="(orientation: portrait) or (min-width: 1024px)"
              />
              <img
                src={technology[currentTech].images.landscape}
                alt={technology[currentTech].name + " photo"}
                className="portrait:-translate-y-1/3 md:translate-y-0 w-full lg:w-auto "
              />
            </picture>
            <TechnologyNav
              currentTech={currentTech}
              handleClick={handleClick}
            />
            <article className="flex flex-col items-center gap-5 lg:items-start lg:gap-2 lg:max-w-3/7 2xl:max-w-4/7">
              <span className="uppercase text-(--white)/50 font-(family-name:--fn-bellefair) tracking-widest text-[1.1rem] 2xl:text-[1.5rem]">
                the terminology...
              </span>
              <h2 className="text-(--white) uppercase text-[1.8rem] font-(family-name:--fn-bellefair) 2xl:text-[2.4rem]">
                {technology[currentTech].name}
              </h2>
              <p className="text-(--blue-light) text-[1rem] leading-8 mt-5 text-center lg:text-start lg:text-[.8rem] lg:mt-3 lg:leading-6 max-w-[35rem] 2xl:text-[1.5rem] 2xl:leading-9">
                {technology[currentTech].description}
              </p>
            </article>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Technology;
