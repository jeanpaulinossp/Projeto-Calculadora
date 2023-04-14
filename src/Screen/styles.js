import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .nameCalc {
    font-size: 1.2rem;
    font-weight: bold;
    padding: 5px;
    margin: 0;
  }
`;

export const LogoutStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  form p {
    font-size: 1.2rem;
    font-weight: bold;
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

export const Calc = styled.div`
  display: grid;
  justify-content: center;
  padding: 20px 20px;
  background: #333;
  width: 270px;
  border-radius: 4px;
`;

export const Operations = styled.span`
  height: 20px;
  font-size: 1.5rem;
  color: #fff;
`;

export const Result = styled.span`
  justify-self: end;
  font-size: 50px;
  color: #fff;
`;

export const Buttons = styled.div`
  display: flex;
  padding: 5px;
  background-color: #000;
  border-radius: 8px;
  flex-direction: row;
  flex-wrap: wrap;
`;
