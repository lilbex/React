import React, { useState, useMemo } from "react";
import styled from "styled-components";

const PracticeUseMemo = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  const checkIsEven = (count) => {
    let i = 0;
    while (i < 2000000000) i++;
    return count % 2 === 0;
  };

  const isEven = useMemo(() => {
    return checkIsEven(count);
  }, [count]);

  // const myCount = checkIsEven(count);

  return (
    <Wrapper>
      <div className='div-wrapper'>
        <button onClick={() => setCount(count + 1)}>Count - {count}</button>
        <span>{isEven ? "Even" : "Odd"}</span>
      </div>

      <div>
        <button onClick={() => setCount1(count1 + 1)}>Count1 - {count1}</button>
      </div>
    </Wrapper>
  );
};

export default PracticeUseMemo;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
  .div-wrapper{
    display: flex;
    align-items: center;
  }
  button {
    width: 200px;
    height: 50px;
    font-size: 20px;
    padding: 10px;
    margin: 10px;
  }
`;
