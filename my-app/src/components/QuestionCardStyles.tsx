import React from "react";
import styled from "styled-components";

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
  children: React.ReactNode;
};

export const StyledButtonWrapper = styled.div<ButtonWrapperProps>`
  max-width: 110px;
  background: #ebfeff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);

  .button {
    margin: 0 10px;
  }

  p {
    font-size: 1rem;
  }

  button {
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    width: 40px;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
      correct
        ? "linear-gradient(90deg, #56ff6b, #59bc86)"
        : !correct && userClicked
        ? "linear-gradient(90deg, #ff5656, #c16868)"
        : "linear-gradient(90deg, #56ccff, #6eafb4)"};
    border: 3px solid #fff;
    color: #fff;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    height: 40px;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.5);
  }
`;

const ButtonWrapper: React.FC<ButtonWrapperProps> = ({
  correct,
  userClicked,
  children,
}) => {
  return (
    <StyledButtonWrapper correct={correct} userClicked={userClicked}>
      {children}
    </StyledButtonWrapper>
  );
};

export default ButtonWrapper;