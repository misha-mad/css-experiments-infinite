import React from "react";
import styled, { keyframes } from "styled-components";

CSS.registerProperty({
  name: "--off",
  syntax: "<number>",
  initialValue: 0,
  inherits: true,
});

const shift = keyframes`
  to {
    --off: 360;
  }
`;

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: Radial-gradient(at 0 0, #474747, #070707);
`;

const Infinite = styled.div`
  display: flex;
  justify-content: center;
  transform-style: preserve-3d;

  &:before,
  &:after {
    margin: 0 -1.5em;
    width: 12.5em;
    height: 12.5em;
    border-radius: 50%;

    background: conic-gradient(
      from 90deg,
      hsl(calc(150 + var(--off, 0)), 85%, 57%),
      hsl(calc(127.5 + var(--off, 0)), 85%, 57%),
      hsl(calc(105 + var(--off, 0)), 85%, 57%),
      hsl(calc(82.5 + var(--off, 0)), 85%, 57%),
      hsl(calc(60 + var(--off, 0)), 85%, 57%),
      hsl(calc(37.5 + var(--off, 0)), 85%, 57%),
      hsl(calc(15 + var(--off, 0)), 85%, 57%),
      hsl(calc(-7.5 + var(--off, 0)), 85%, 57%),
      hsl(calc(-30 + var(--off, 0)), 85%, 57%)
    );

    mask: radial-gradient(transparent calc(3.25em - 0.5px), red 3.25em);
    animation: ${shift} 2s linear infinite;
    content: "";
  }

  &:after {
    transform: translatey(1px) rotatex(-1deg);

    background: conic-gradient(
      from 270deg,
      hsl(calc(150 + var(--off, 0)), 85%, 57%),
      hsl(calc(172.5 + var(--off, 0)), 85%, 57%),
      hsl(calc(195 + var(--off, 0)), 85%, 57%),
      hsl(calc(217.5 + var(--off, 0)), 85%, 57%),
      hsl(calc(240 + var(--off, 0)), 85%, 57%),
      hsl(calc(262.5 + var(--off, 0)), 85%, 57%),
      hsl(calc(285 + var(--off, 0)), 85%, 57%),
      hsl(calc(307.5 + var(--off, 0)), 85%, 57%),
      hsl(calc(330 + var(--off, 0)), 85%, 57%)
    );
  }
`;

function App() {
  return (
    <Wrapper>
      <Infinite />
    </Wrapper>
  );
}

export default App;
