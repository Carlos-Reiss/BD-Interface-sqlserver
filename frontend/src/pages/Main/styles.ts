import styled from 'styled-components';

interface IAtrib {
  mostrar: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  /* border: 1px solid black; */
  margin: 20px 80px;
`;

export const Form = styled.form`
  margin-top: ${(props: IAtrib) => (props.mostrar ? '60px' : '80px')};

  display: ${(props: IAtrib) => (props.mostrar ? 'flex' : 'none')};

  flex-direction: column;

  justify-content: flex-start;
  align-items: center;

  /* border: 1px solid black; */
  width: 60%;
  > label {
    margin-bottom: 20px;
  }
  > div {
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

export const ButtonAdd = styled.div`
  margin: 30px 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  h4 {
    margin-right: 20px;
  }
`;

export const ListItems = styled.ul`
  li {
    color: #000;
  }
`;

export const MySelect = styled.div`
  div {
    width: 280px;
    margin-left: 10px;
  }
`;

export const TableCustomize = styled.div`
  div {
    width: 800px;
    height: 480px;
    &::-webkit-scrollbar {
      width: 16px; /* width of the entire scrollbar */
    }
    &::-webkit-scrollbar-track {
      background: #9999; /* color of the tracking area */
    }
    &::-webkit-scrollbar-thumb {
      background-color: #444; /* color of the scroll thumb */
    }
  }
`;

export const GroupSelect = styled.div`
  div + div {
    margin-top: 10px;
  }
`;
