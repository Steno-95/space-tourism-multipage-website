import Navigation from "../../ui/Navigation";

function Home() {
  return (
    <article className="home-bg main-bg ">
      <Navigation />
      <main className="flex flex-col gap-25 items-center site-padding lg:max-w-[60rem] xl:max-w-[80rem] xl:mx-auto lg:min-h-[80vh] lg:flex-row lg:items-end lg:justify-between lg:px-20!">
        <div className="flex flex-col items-center lg:items-start">
          <span className="text-(--blue-light) uppercase tracking-[.2em] font-(family-name:--fn-barlow)">
            So, you want to travel to
          </span>
          <h1 className="text-(--white) uppercase text-[6rem] font-(family-name:--fn-bellefair) tracking-wider">
            Space
          </h1>
          <p className="text-(--blue-light) text-center text-[1.2rem] leading-8 mt-5 font-(family-name:--fn-barlow) max-w-[30rem] lg:text-start">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>
        <button className="home-btn">Explore</button>
      </main>
    </article>
  );
}

export default Home;
