import React from 'react';
import styled from 'styled-components';

const Button = ({ onClick, name }) => {
  return <StyledButton onClick={onClick}>{name}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  font-family: consolas;
  font-weight: bold;
  background-color: #f60055;
  border: none;
  font-size: 14px;
  height: 20px;
  width: auto;
  border-radius: 5px;
  margin: 10px 10px;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  box-sizing: border-box;

  &:hover {
    background-color: #ffffff;
    color: #f60055;
  }
`;
