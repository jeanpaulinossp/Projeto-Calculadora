import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const LoginStyle = styled.div`
  display: flex;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
  }

  button {
    margin-top: 10px;
    border-radius: 4px;
    padding: 10px;
    background: #000;
    color: #fff;
    text-align: center;
    outline: none;
    cursor: pointer;
  }
`;

export const LogoutStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  p {
    font-size: 1.2rem;

    margin: 0;
    padding: 5px;
  }

  button {
    border-radius: 4px;
    padding: 5px;
    width: 50px;
    background: #000;
    color: #fff;
    text-align: center;
    outline: none;
    cursor: pointer;
  }
`;

export const CalculatorStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 1.3rem;
    font-weight: bold;
    margin: 0;
    padding: 5px;
  }

  .CalcContas {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    .Results {
      border-radius: 4px;
      background-color: red;
      overflow: auto;
    }
  }
`;
