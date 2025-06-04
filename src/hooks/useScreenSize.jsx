import { useEffect, useState } from "react";

function useScreenSize() {
  const [isDesktopSize, setIsDesktopSize] = useState(null);

  useEffect(() => {
    const matchMedia = window.matchMedia("screen and (min-width: 768px");
    setIsDesktopSize(matchMedia.matches);

    function updateDesktopSize(e) {
      setIsDesktopSize(e.matches);
    }

    matchMedia.addEventListener("change", updateDesktopSize);
    return () => matchMedia.removeEventListener("change", updateDesktopSize);
  }, []);
  return isDesktopSize;
}

export default useScreenSize;
