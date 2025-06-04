function DestinationNav({ onClick }) {
  return (
    <ul className="flex text-(--blue-light) uppercase gap-8 tracking-[0.2em] font-(family-name:--fn-barlow) font-light cursor-pointer">
      <li data-id="0" onClick={onClick}>
        moon
      </li>
      <li data-id="1" onClick={onClick}>
        mars
      </li>
      <li data-id="2" onClick={onClick}>
        europa
      </li>
      <li data-id="3" onClick={onClick}>
        titan
      </li>
    </ul>
  );
}

export default DestinationNav;
