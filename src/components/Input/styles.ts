import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 10px;
  width: 100%;
  max-width: 200px;

  label,
  input,
  span {
    width: 100%;
  }
  label {
    color: var(--Grey-0);
  }
  span {
    color: var(--Negative);
    font-weight: bold;
    font-size: 12px;
  }
  input {
    height: 50px;
    width: 100%;
    min-width: 210px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #c8e0fc;
  }
`;
