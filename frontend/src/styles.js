import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1100px;
  margin: 24px auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const Panel = styled.div`
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  background: #fff;
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 300px;
  font-family: monospace;
`;
