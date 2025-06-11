import { Link, useOutletContext } from "react-router";
import useScreenSize from "../hooks/useScreenSize";

function Navigation({ style }) {
  const isDesktop = useScreenSize("768px");
  const isLaptop = useScreenSize("1440px");

  const path = window.location.pathname;
  const { openMenu, isOpen } = useOutletContext();
  return (
    <nav className={"navigation " + style} aria-label="navigation">
      <figure className="w-10 md:w-40  place-content-center md:mr-5">
        <img
          src="/shared/logo.svg"
          alt="website logo, blue star inside a white circle"
          className="md:size-10"
        />
      </figure>
      {isLaptop && (
        <div className="bg-(--blue-light)/30 w-[90%] h-0.5 -mr-5"></div>
      )}
      {isDesktop && (
        <ul className="navigation-list">
          <li className={path === "/" || path === "/home" ? "active-page" : ""}>
            <Link to="/" tabIndex={-1}>
              <button
                type="button"
                className="focus:border-none focus:outline-none uppercase cursor-pointer"
              >
                <span className="font-semibold text-(--white) mr-2">00</span>
                home
              </button>
            </Link>
          </li>
          <li className={path === "/destination" ? "active-page" : ""}>
            <Link tabIndex={-1} to="/destination">
              <button
                type="button"
                className="focus:border-none focus:outline-none uppercase cursor-pointer"
              >
                <span className="font-semibold text-(--white) mr-2">01</span>
                destination
              </button>
            </Link>
          </li>
          <li className={path === "/crew" ? "active-page" : ""}>
            <Link tabIndex={-1} to="/crew">
              <button
                type="button"
                className="focus:border-none focus:outline-none uppercase cursor-pointer"
              >
                <span className="font-semibold text-(--white) mr-2">02</span>
                crew
              </button>
            </Link>
          </li>
          <li className={path === "/technology" ? "active-page" : ""}>
            <Link tabIndex={-1} to="/technology">
              <button
                type="button"
                className="focus:border-none focus:outline-none uppercase cursor-pointer"
              >
                <span className="font-semibold text-(--white) mr-2">03</span>
                technology
              </button>
            </Link>
          </li>
        </ul>
      )}
      {!isDesktop && !isOpen && (
        <button
          className="size-10 cursor-pointer"
          aria-label="button to open mobile navigation"
          onClick={openMenu}
          type="button"
        >
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
