"use client";

import { useToggle } from "../../Custom/CustomToggle";
import { Button } from "./Button";

const ParentState3 = () => {
  const [state, toggle] = useToggle(false);
  return (
    <div>
      <p>{state ? "true" : "false"}</p>
      <Button text="Toggle" handle={toggle} />
    </div>
  );
};

export default ParentState3;
