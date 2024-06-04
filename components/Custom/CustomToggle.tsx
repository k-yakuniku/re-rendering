"use client";

import { useCallback, useState } from "react";

export function useToggle(init: boolean): [boolean, () => void] {
  console.log("Toggle");
  const [state, setState] = useState<boolean>(init);
  const toggle = useCallback(() => {
    setState((s) => !s);
  }, []);
  return [state, toggle];
}
