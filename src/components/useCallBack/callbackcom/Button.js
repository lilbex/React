import React from "react";
import styled from "styled-components";

const Button = ({ handleClick, children }) => {
  console.log("Rendering button - ", children);
  return (
      <ButtonWrapper onClick={handleClick}>{children}</ButtonWrapper>
  );
};

export default React.memo(Button);

const ButtonWrapper = styled.button`
  width: 200px;
  height: 50px;
  border-radius: 5px;
  padding: 10px;
  font-size: 20px;
`;