import * as React from "react";
import "./btn.css";
import styled from "@emotion/styled";

const CustomButton = styled("button")`
  text-transform: none;
  color: inherit;
  border-radius: 64px;
  border: 2px solid #ffffff;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  display: flex;
  font-weight: 400;
  background-color: transparent;
  color: #ffffff;
  transition: all 0.2s ease-in;
  &:hover {
    background-color: #8a00ff;
  }
`;
// const CustomButton = styled("button")`
//   background: none;
//   text-transform: uppercase;
//   color: inherit;
//   border: none;
//   font: inherit;
//   cursor: pointer;
//   outline: inherit;
//   display: block;
//   font-weight: 400;
//   background: none;
//   color: #ffffff;
//   &:after {
//     display: block;
//     content: "";
//     border-bottom: 3px solid #8a00ff;
//     cursor: pointer;
//     transform: scaleX(0);
//     transition: transform 250ms ease-in-out;
//   }
//   &:hover:after {
//     transform: scaleX(1);
//   }
//   &:after {
//     transform-origin: 0% 50%;
//   }
// `;

export default function MyButton({ children, fontSize, padding, margin }) {
  return (
    <CustomButton
      style={{
        fontSize: `${fontSize}`,
        padding: `${padding}`,
        margin: `${margin}`,
      }}
    >
      {children}
    </CustomButton>
  );
}
