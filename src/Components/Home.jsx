import React from 'react';
import styled, { keyframes } from 'styled-components';

// Define a keyframe animation
const rotate360 = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

// Define a styled component with dynamic styles and an animation
const StyledButton = styled.button`
  background-color: ${props => props.primary ? 'blue' : 'green'};
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  animation: ${rotate360} 2s linear infinite;
`;

// Use the styled component in your React code
export default function Home() {
  return (
    <div>
      <StyledButton>Click me!</StyledButton>
      <StyledButton primary>Click me!</StyledButton>
    </div>
  );
}