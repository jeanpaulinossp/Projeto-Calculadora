import styled from "styled-components";

export const Container = styled.div`
  background-color: #e5e7eb;
  height: 60vh;
  width: 80%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  margin-top: 20px;

  .error {
    display: block;
    margin: 50px auto;
    font-size: 2rem;
    color: red;
  }

  table {
    border-collapse: collapse;
    width: 100%;
  }

  table td,
  table th {
    padding: 0.5rem;
    font-size: 0.85rem;
  }
  table tr:nth-child(even) {
    background-color: #9ca3af;
  }

  table th {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    text-align: start;
    background-color: #000;
    color: white;
    font-size: 1.2rem;
    font-weight: 500;
  }
`;
