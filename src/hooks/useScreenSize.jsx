import { useEffect, useState } from "react";

function useScreenSize(screenSize) {
  const [isDesktopSize, setIsDesktopSize] = useState(null);

  useEffect(() => {
    const matchMedia = window.matchMedia(
      `screen and (min-width: ${screenSize}`
    );
    setIsDesktopSize(matchMedia.matches);

    function updateDesktopSize(e) {
      setIsDesktopSize(e.matches);
    }

    matchMedia.addEventListener("change", updateDesktopSize);
    return () => matchMedia.removeEventListener("change", updateDesktopSize);
  }, [screenSize]);
  return isDesktopSize;
}

export default useScreenSize;
