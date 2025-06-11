function DestinationNav({ onClick, currentDest }) {
  return (
    <ul className="dest-navigation">
      <li
        data-id="0"
        onClick={onClick}
        className={
          "cursor-pointer " + (currentDest === "0" ? "active-dest" : "")
        }
      >
        <button
          type="button"
          className="focus:border-none focus:outline-none uppercase"
        >
          moon
        </button>
      </li>
      <li
        data-id="1"
        onClick={onClick}
        className={
          "cursor-pointer " + (currentDest === "1" ? "active-dest" : "")
        }
      >
        <button
          type="button"
          className="focus:border-none focus:outline-none uppercase"
        >
          mars
        </button>
      </li>
      <li
        data-id="2"
        onClick={onClick}
        className={
          "cursor-pointer " + (currentDest === "2" ? "active-dest" : "")
        }
      >
        <button
          type="button"
          className="focus:border-none focus:outline-none uppercase"
        >
          europa
        </button>
      </li>
      <li
        data-id="3"
        onClick={onClick}
        className={
          "cursor-pointer " + (currentDest === "3" ? "active-dest" : "")
        }
      >
        <button
          type="button"
          className="focus:border-none focus:outline-none uppercase"
        >
          titan
        </button>
      </li>
    </ul>
  );
}

export default DestinationNav;
