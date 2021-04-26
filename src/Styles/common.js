import styled from "styled-components";

export const WipLabel = styled.div`
  display: inline-block;
  padding: 1rem 1rem 0.5rem 1rem;
  background-color: #0da394;
  margin-bottom: 2rem;
  border-radius: 15px;
`;

export const ActionsContainer = styled.div`
  margin: 2rem 0;
  width: 100%;
`;

export const ActionTitle = styled.h2`
  margin: 0;
  margin-bottom: 0.5rem;
`;

export const ActionBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-top: 2px solid #2eccbc;
  background-color: #1e1f26;
`;

export const Action = styled.div`
  padding: 0.5rem;
  display: flex;
  align-items: center;
}
`;

export const ActionTag = styled.label`
  font-weight: bold;
  margin: 0;
  color: #717790;
`;

export const GridContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  input {
    font-family: Helvetica, sans-serif;
    font-size: 1rem;
    font-weight: bold;
    color: white;
    background-color: #444857;
    padding: 0.5rem 1rem;
    border: 1px solid transparent;
    border-radius: 0.5em;
    &:not(:last-child) {
      margin-right: 1rem;
    }
  }
`;

export const Selector = styled.select`
  font-size: 1rem;
  font-weight: bold;
  background: #444857;
  color: white;
  margin-left: 1rem;
  padding: 0.5rem 1rem;
  border: 1px solid transparent;
  border-radius: 0.5em;
  appearance: none;
`;

export const ActionForm = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

export const AddShipInput = styled.input`
  font-size: 1rem;
  font-weight: ${(props) => props.submit && "bold"};
  background-color: #444857;
  color: white;
  margin-left: 1rem;
  padding: 0.5rem 1rem;
  border: 1px solid transparent;
  border-radius: 0.5em;
`;

export const ResetButton = styled.button`
  cursor: pointer;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  outline: none;
  color: white;
  background-color: #2eccbc;
  border: none;
  border-radius: 0.5rem;
  &:hover {
    background-color: #4f535f;
  }
  &:not(:last-child) {
    margin-right: 0.5rem;
  }
`;
