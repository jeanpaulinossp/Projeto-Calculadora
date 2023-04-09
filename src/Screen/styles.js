import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 20px;
  align-items: flex-start;
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
