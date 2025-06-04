function CrewPagination({ onClick, currentCrew }) {
  return (
    <aside>
      <ul className="flex gap-4">
        <li
          data-id="0"
          onClick={onClick}
          className={
            "cursor-pointer size-2.5 rounded-full " +
            (currentCrew === "0" ? "bg-(--white)" : "bg-(--blue-light)/70")
          }
        ></li>
        <li
          data-id="1"
          onClick={onClick}
          className={
            "cursor-pointer size-2.5 rounded-full " +
            (currentCrew === "1" ? "bg-(--white)" : "bg-(--blue-light)/70")
          }
        ></li>
        <li
          data-id="2"
          onClick={onClick}
          className={
            "cursor-pointer size-2.5 rounded-full " +
            (currentCrew === "2" ? "bg-(--white)" : "bg-(--blue-light)/70")
          }
        ></li>
        <li
          data-id="3"
          onClick={onClick}
          className={
            "cursor-pointer size-2.5 rounded-full " +
            (currentCrew === "3" ? "bg-(--white)" : "bg-(--blue-light)/70")
          }
        ></li>
      </ul>
    </aside>
  );
}

export default CrewPagination;
