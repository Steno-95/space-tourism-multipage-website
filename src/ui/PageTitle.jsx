function PageTitle({ number, title }) {
  return (
    <h1 className="flex gap-5 font-(family-name:--fn-barlow) mb-8">
      <span className="text-(--blue-light)/30 font-bold tracking-[0.2em]">
        {number}
      </span>
      <span className="uppercase text-(--white) tracking-[0.1em]  font-light">
        {title}
      </span>
    </h1>
  );
}

export default PageTitle;
