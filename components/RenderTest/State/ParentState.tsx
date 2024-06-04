"use client";

import { useCallback, useMemo, useState } from "react";
import { Button } from "./Button";
import { Counter } from "./Counter";

const ParentState = () => {
  // useCallbackは関数自体をMemo化
  // useMemoは関数の結果をMemo化

  const [state1, setState1] = useState<number>(0);
  const [state10, setState10] = useState<number>(0);

  // +1 click => state1 => Parent ReRendering =>
  // 関数再生成 => React.memoが別の関数と認識 => Re:Rendering
  // const incrementHandle1 = () => setState1((s) => s + 1);
  // const incrementHandle10 = () => setState10((s) => s + 10);

  // 初回Renderingで渡されたFCをそのまま返す
  // 2回目のRendering時も変わらない関数なら再利用
  // const bad1 = useCallback(() => setState1(state + 1),[state])
  // stateを中に入れるとstateが変わると関数も変わるので再利用できない
  const incrementHandle1 = useCallback(() => setState1((s) => s + 1), []);
  const incrementHandle10 = useCallback(() => setState10((s) => s + 10), []);

  // useCallbackでMemo化されたCallback関数は,
  // React.memoでMemo化されたComponentへ渡して利用することで,
  // 初めて不要な再描画をスキップ出来る.

  return (
    <div className="">
      <Counter text="+1Button" counter={state1} />
      <Button handle={incrementHandle1} text={"+1"} />
      <Counter text="+10Button" counter={state10} />
      <Button handle={incrementHandle10} text={"+10"} />
    </div>
  );
};

export default ParentState;
