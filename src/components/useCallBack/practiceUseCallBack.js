import React from "react";

const PracticeUseCallBack = () => {
  const [count, setCount] = React.useState(0);
  const [count2, setCount2] = React.useState(0);

  const theme = {
    dark: {
      background: "#000",
      color: "#fff",
    },
    light: {
      background: "#fff",
      color: "#000",
    },
  };

  const increment = React.useCallback(() => {
    setCount((c) => c + 1);
  }, [setCount]);

  const increment2 = React.useCallback(() => {
    setCount2((c) => c + 1);
  }, [setCount2]);

  return (
    <div>
      <button onClick={increment}>Count {count}</button>
      <button onClick={increment2}>Count2 {count2}</button>
    </div>
  );
}

export default PracticeUseCallBack
  