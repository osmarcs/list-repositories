import styled from 'styled-components';

export const Title = styled.h1`
  color: ${p => (p.error ? 'red' : '#7159c1')};
  font-size: 2em;
  font-family: Arial, Helvetica, sans-serif;
  small {
    color: #ccc;
    font-size: 0.5em;
  }
`;
