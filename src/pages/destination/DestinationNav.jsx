function DestinationNav({ onClick, currentDest }) {
  return (
    <ul className="flex text-(--blue-light) uppercase gap-8 tracking-[0.2em] font-(family-name:--fn-barlow) font-light cursor-pointer">
      <li
        data-id="0"
        onClick={onClick}
        className={
          "cursor-pointer " + (currentDest === "0" ? "active-dest" : "")
        }
      >
        moon
      </li>
      <li
        data-id="1"
        onClick={onClick}
        className={
          "cursor-pointer " + (currentDest === "1" ? "active-dest" : "")
        }
      >
        mars
      </li>
      <li
        data-id="2"
        onClick={onClick}
        className={
          "cursor-pointer " + (currentDest === "2" ? "active-dest" : "")
        }
      >
        europa
      </li>
      <li
        data-id="3"
        onClick={onClick}
        className={
          "cursor-pointer " + (currentDest === "3" ? "active-dest" : "")
        }
      >
        titan
      </li>
    </ul>
  );
}

export default DestinationNav;
