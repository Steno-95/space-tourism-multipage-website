import { Link } from "react-router";
import useScreenSize from "../hooks/useScreenSize";

function Navigation({ style }) {
  const isDesktop = useScreenSize();

  return (
    <nav className={"navigation " + style}>
      <figure className="size-10">
        <img src="/shared/logo.svg" />
      </figure>
      {isDesktop && (
        <ul className=" text-(--white)/70 flex gap-5 uppercase tracking-widest font-(family-name:--fn-barlow)">
          <li>
            <Link to="/">
              {" "}
              <span className="font-semibold text-(--white) mr-2">00</span>home
            </Link>
          </li>
          <li>
            <Link to="/destination">
              <span className="font-semibold text-(--white) mr-2">01</span>
              destination
            </Link>
          </li>
          <li>
            <Link to="/crew">
              <span className="font-semibold text-(--white) mr-2">02</span>crew
            </Link>
          </li>
          <li>
            <Link to="/technology">
              <span className="font-semibold text-(--white) mr-2">03</span>
              technology
            </Link>
          </li>
        </ul>
      )}
      {!isDesktop && (
        <button className="size-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
            <g fill="#D0D6F9" fillRule="evenodd">
              <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
            </g>
          </svg>
        </button>
      )}
    </nav>
  );
}

export default Navigation;
