"use client";

import { useCallback, useMemo, useState } from "react";
import { Counter } from "./Counter";
import { Button } from "./Button";

const ParentState2 = () => {
  // 重い処理
  const square = (parameter: number) => {
    console.log("square関数");
    let i = 0;
    while (i < 100000) i++;
    return parameter * parameter;
  };
  const [squareNum, setSquareNum] = useState<number>(0);
  const squareArea = useMemo(() => square(squareNum), [squareNum]);
  const squareHandle = useCallback(() => setSquareNum((s) => s + 1), []);

  return (
    <div>
      <p>{squareArea}</p>
      <Counter text="+1Squ" counter={squareNum} />
      <Button text="+1Square" handle={squareHandle} />
    </div>
  );
};

export default ParentState2;
