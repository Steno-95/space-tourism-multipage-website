function PageTitle({ number, title, style = "" }) {
  return (
    <h1 className={"flex gap-5 font-(family-name:--fn-barlow) my-8  " + style}>
      <span className="text-(--blue-light)/30 font-bold tracking-[0.2em] text-[1.2rem] lg:text-[1.5rem]">
        {number}
      </span>
      <span className="uppercase text-(--white) tracking-[0.1em] text-[1.2rem] lg:text-[1.5rem] font-light">
        {title}
      </span>
    </h1>
  );
}

export default PageTitle;
