import React, { useState, useCallback } from "react";
import styled from "styled-components";
import Count from "./callbackcom/Counts";
import Button from "./callbackcom/Buttons";
import Title from "./callbackcom/Title";

// Without using useCallback hook, the ParentComponent will re-render every time the ParentComponent re-renders.
// This is because the function is recreated every time the ParentComponent re-renders.
// This is not a problem when the function is passed as a prop to a child component that is not memoized.
// But if the function is passed as a prop to a child component that is memoized, the child component will not re-render as expected.
// This is because the props are shallowly compared and the function is recreated every time the ParentComponent re-renders.
// To avoid this, we can use the useCallback hook to memoize the function so that it is not recreated every time the ParentComponent re-renders.
// The useCallback hook takes a function as an argument and returns a memoized version of the callback function that only changes if one of the dependencies has changed.
// The useCallback hook is usually used when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.
// The useCallback hook accepts two arguments: the callback function and an array of dependencies.
// The useCallback hook will return a memoized version of the callback function that only changes if one of the dependencies has changed.
// This means that the callback function will only be recreated if one of the dependencies has changed.
// If no array is provided, a new callback function will be created on every render.
// If an empty array is provided, the callback function will only be created once.

const ParentComponent = () => {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
      setSalary(salary + 1000);
    }, [salary]);


  return (
    <Container>
      <Title />
      <div>
        <Count text="Age" count={age} />
        <Button handClick={incrementAge}>Increment Age</Button>
      </div>
      <div>
        <Count text="Salary" count={salary} />
        <Button handClick={incrementSalary}>Increment Salary</Button>
      </div>
    </Container>
  );
};

export default ParentComponent;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
  gap: 50px;
`;
