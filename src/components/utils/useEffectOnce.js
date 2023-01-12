import { useLayoutEffect, useRef } from "react";

const isDevelopment =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development";

const useEffectOnce = (fn, deps) => {
  const isMountedRef = useRef(!isDevelopment);

  useLayoutEffect(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true;
      return undefined;
    }
    return fn();
  }, [deps]);
};

export default useEffectOnce;
