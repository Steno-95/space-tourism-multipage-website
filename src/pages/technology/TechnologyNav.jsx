function TechnologyNav({ currentTech, handleClick }) {
  return (
    <ul className="flex gap-5 items-center justify-center text-center font-(family-name:--fn-bellefair) lg:flex-col">
      <li
        className={
          "tech-page " +
          (currentTech === "0" ? " bg-(--white) text-(--blue-dark)" : "")
        }
      >
        <button
          className="2xl:size-20 2xl:text-[1.5rem] cursor-pointer size-10 pt-1"
          onClick={handleClick}
          data-id="0"
        >
          1
        </button>
      </li>
      <li
        className={
          "tech-page " +
          (currentTech === "1" ? " bg-(--white) text-(--blue-dark)" : "")
        }
      >
        <button
          className="2xl:size-20 2xl:text-[1.5rem] cursor-pointer size-10 pt-1"
          onClick={handleClick}
          data-id="1"
        >
          2
        </button>
      </li>
      <li
        className={
          "tech-page " +
          (currentTech === "2" ? " bg-(--white) text-(--blue-dark)" : "")
        }
      >
        <button
          className="2xl:size-20 2xl:text-[1.5rem] cursor-pointer size-10 pt-1"
          onClick={handleClick}
          data-id="2"
        >
          3
        </button>
      </li>
    </ul>
  );
}

export default TechnologyNav;
