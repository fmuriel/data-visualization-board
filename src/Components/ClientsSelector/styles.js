import styled from "styled-components";

export const ChipsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Chip = styled.button`
  cursor: pointer;
  padding: 1rem;
  margin-bottom: 0.5rem;
  height: 3.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  outline: none;
  background-color: #7e57c2;
  border: none;
  border-radius: 15px;
  &:hover {
    background-color: #4f535f;
  }
  &:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

export const SelectAllChip = styled.div`
  margin-top: 0;
`;
