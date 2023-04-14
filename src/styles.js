import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .ButtonHistorico {
    margin-top: 15px;
    padding: 10px;
    background: #bbb;
    color: #000;
    border: none;
    text-align: center;
    outline: none;
    cursor: pointer;
  }
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
