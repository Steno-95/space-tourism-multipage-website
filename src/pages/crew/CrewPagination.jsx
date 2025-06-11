function CrewPagination({ onClick, currentCrew }) {
  return (
    <aside className="lg:mt-20 lg:justify-self-start lg:self-end">
      <ul className="crew-navigation">
        <li
          data-id="0"
          onClick={onClick}
          className={currentCrew === "0" ? "bg-(--white)" : ""}
        >
          <button
            type="button"
            aria-label="circular button for the displayed content 1"
          ></button>
        </li>
        <li
          data-id="1"
          onClick={onClick}
          className={currentCrew === "1" ? "bg-(--white)" : ""}
        >
          <button
            type="button"
            aria-label="circular button for the displayed content 2"
          ></button>
        </li>
        <li
          data-id="2"
          onClick={onClick}
          className={currentCrew === "2" ? "bg-(--white)" : ""}
        >
          <button
            type="button"
            aria-label="circular button for the displayed content 3"
          ></button>
        </li>
        <li
          data-id="3"
          onClick={onClick}
          className={currentCrew === "3" ? "bg-(--white)" : ""}
        >
          <button
            type="button"
            aria-label="circular button for the displayed content 4"
          ></button>
        </li>
      </ul>
    </aside>
  );
}

export default CrewPagination;
