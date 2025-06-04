import Navigation from "../../ui/Navigation";
import DestinationNav from "./DestinationNav";

function Destination() {
  return (
    <div className="dest-bg brightness-120">
      <Navigation style={"bg-backdrop-filter"} />
      <main className="flex flex-col gap-5 items-center site-padding bg-backdrop-filter">
        <h1 className="flex gap-5">
          <span className="text-(--blue-light)/20 font-bold tracking-widest">
            01
          </span>
          <span className="uppercase text-(--white)">
            pick your destination
          </span>
        </h1>
        <picture className="py-10">
          <img
            src="/destination/image-moon.png"
            alt="moon picture"
            className="size-45"
          />
        </picture>
        <div className="flex flex-col items-center gap-5">
          <DestinationNav />
          <article className="text-center">
            <h2 className="text-(--white) uppercase text-[5rem] font-(family-name:--fn-bellefair)">
              Moon
            </h2>
            <p className="text-(--blue-light) text-[1.2rem] leading-8 mt-5">
              See our planet as you've never seen it before. A perfect relaxing
              trip away to help regain perspective and come back refreshed.
              While you're there, take in some history by visiting the Luna 2
              and Apollo 11 landing sites.
            </p>
          </article>
        </div>
        <aside className=" border-t-2 border-t-(--blue-light)/20 w-full text-center flex flex-col gap-5 pt-5">
          <div>
            <h3 className="dest-description">Avg. distance</h3>
            <span className="dest-value">384,400 km</span>
          </div>
          <div>
            <h3 className="dest-description">Est. travel time</h3>
            <span className="dest-value">3 days</span>
          </div>
        </aside>
      </main>
    </div>
  );
}

export default Destination;
