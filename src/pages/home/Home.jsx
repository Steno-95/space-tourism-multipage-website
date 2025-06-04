import Navigation from "../../ui/Navigation";

function Home() {
  return (
    <article className="home-bg ">
      <Navigation />
      <main className="flex flex-col gap-25 items-center site-padding">
        <div className="flex flex-col items-center gap-5">
          <span className="text-(--blue-light) uppercase">
            So, you want to travel to
          </span>
          <h1 className="text-(--white) uppercase text-[5rem]">Space</h1>
          <p className="text-(--blue-light) text-center text-[1.2rem] leading-8 mt-5">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>
        <button className="text-clip text-[1.5rem] bg-(--white) uppercase size-45 rounded-full tracking-widest">
          Explore
        </button>
      </main>
    </article>
  );
}

export default Home;
