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
          type="button"
          className="tech-btn"
          onClick={handleClick}
          data-id="0"
          aria-label="page 1"
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
          type="button"
          className="tech-btn"
          onClick={handleClick}
          data-id="1"
          aria-label="page 2"
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
          type="button"
          className="tech-btn"
          onClick={handleClick}
          data-id="2"
          aria-label="page 3"
        >
          3
        </button>
      </li>
    </ul>
  );
}

export default TechnologyNav;
