import { useState } from "react";
import { Link, Outlet } from "react-router";
import useScreenSize from "./hooks/useScreenSize";

function AppLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isDesktopSize = useScreenSize();
  const contextMobileNav = {
    openMenu: () => setMobileMenuOpen(true),
    isOpen: mobileMenuOpen,
  };
  return (
    <main>
      <Outlet context={contextMobileNav} />
      {mobileMenuOpen && !isDesktopSize && (
        <nav className="fixed right-0 top-0 min-h-screen flex flex-col backdrop-blur-md w-[70%] py-8 px-6 gap-20">
          <button
            className="self-end cursor-pointer mr-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21">
              <g fill="#D0D6F9" fillRule="evenodd">
                <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
                <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
              </g>
            </svg>
          </button>
          <ul className="flex flex-col gap-5 tracking-widest">
            <li className="text-white/70 uppercase backdrop-contast-200">
              <Link to={"/"}>
                <span className="text-white mr-3">00</span>home
              </Link>
            </li>
            <li className="text-white/70 uppercase backdrop-contast-200">
              <Link to={"/destination"}>
                <span className="text-white mr-3">01</span>destination
              </Link>
            </li>
            <li className="text-white/70 uppercase backdrop-contast-200">
              <Link to={"/crew"}>
                <span className="text-white mr-3">02</span>crew
              </Link>
            </li>
            <li className="text-white/70 uppercase backdrop-contast-200">
              <Link to={"/technology"}>
                <span className="text-white mr-3">03</span>technology
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </main>
  );
}

export default AppLayout;
