import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  /* border: 1px solid black; */
  margin: 20px 80px;
`;

export const Form = styled.form`
  margin-top: 60px;

  display: flex;
  flex-direction: column;

  justify-content: flex-start;
  align-items: center;

  /* border: 1px solid black; */
  width: 60%;
  div {
    width: 60%;
    display: flex;
    flex-direction: column;
    margin-right: 0;
    & + div {
      margin-top: 10px;
    }
  }
  button {
    margin: 20px 0;
    margin-left: 260px;

    width: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const PrimeiraProcedure = styled.div``;

export const ListItems = styled.ul`
  li {
    color: #000;
  }
`;
