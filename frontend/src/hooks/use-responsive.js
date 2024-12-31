import { useState, useEffect } from "react";

const useResponsive = (breakpoint) => {
  const [isTablet, setIsTablet] = useState(
    () => window.innerWidth >= breakpoint
  );

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth >= breakpoint);
    };

    // Set initial state
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpoint]);

  return isTablet;
};

export default useResponsive;
