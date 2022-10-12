import React, { useState, useMemo,useEffect } from "react";
import styled from "styled-components";
import Button  from "../styledComponents.js/Button";

const PracticeMemo = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return count % 2 === 0;
  }, [count]);


  return (
    <Wrapper>
      <h1>Practice Memo</h1>
      <div>
        <button onClick={() => setCount(count + 1)}> Count - {count} </button>
        <span>{isEven ? "Even" : "Odd"}</span>
      </div>

      <div>
        <button onClick={() => setCount1(count1 + 1)}>
          Count1 - {count1}
        </button>
      </div>
      <Button borderRadius="50px" width="500px">Click</Button>
    </Wrapper>
  );
};

export default PracticeMemo;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
  gap:50px;

  button{
    padding: 10px;
    width: 200px;
    height: 50px;
    font-size: 20px;
  }
`;
