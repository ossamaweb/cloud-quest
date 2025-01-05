import * as React from "react";
import { useIsMobile } from "./use-mobile";

export function useAutoFocus(): React.MutableRefObject<HTMLInputElement | null> {
  const isMobile = useIsMobile();
  const initialFocusRef = React.useRef<HTMLInputElement | null>(null);

  React.useEffect(() => {
    if (!isMobile && initialFocusRef.current) {
      initialFocusRef.current.focus();
    }
  }, [isMobile]);

  return initialFocusRef;
}
