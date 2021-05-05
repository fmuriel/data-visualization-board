import styled from "styled-components";

export const TableContainer = styled.table`
  width: 100%;
  background-color: #1e1f26;
  border-collapse: collapse;
`;

export const TableRow = styled.tr`
  &:not(:last-child) {
    border-bottom: 1px solid #444857;
  }
  th {
    padding: 1.2rem 1rem;
    background-color: #7e57c2;
  }
  td {
    padding: 1rem;
  }
`;
