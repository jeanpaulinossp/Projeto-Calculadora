import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  justify-content: center;
  padding: 20px 20px;
  background: #333;
  width: 270px;
  border-radius: 4px;
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
