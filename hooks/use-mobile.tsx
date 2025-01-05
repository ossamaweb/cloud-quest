import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [width, setWidth] = React.useState<number>(window.innerWidth);

  React.useEffect(() => {
    function handleWindowSizeChange() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return width <= MOBILE_BREAKPOINT;
}
