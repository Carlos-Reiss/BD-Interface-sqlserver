import React, { useState, useCallback } from 'react';
import { Input, Button } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Header from '../../components/Header';
import Procedure from '../../components/Procedure';

import { Container, Form, ButtonAdd } from './styles';

const Main: React.FC = () => {
  const [mostrar, setMostrar] = useState(false);

  const handleMostrar = useCallback(() => {
    setMostrar(!mostrar);
  }, [mostrar]);

  return (
    <>
      <Header />
      <Container>
        <h3>Interface Banco de dados II</h3>

        <ButtonAdd>
          <h4>Inserir dados dentro da base de dados</h4>
          <Fab
            size="small"
            color="primary"
            aria-label="add"
            onClick={handleMostrar}
          >
            <AddIcon />
          </Fab>
        </ButtonAdd>

        <Form mostrar={mostrar}>
          <label>
            Mostrar os livros Dos Autores Considerados bestsellers, <br /> sendo
            eles que foram vendidos em 3 ou mais pedidos.
          </label>
          <div>
            <label>Dados: </label>
            <Input type="dados" placeholder="Informe o dado" />
          </div>
          <div>
            <label>Dados: </label>
            <Input type="dados" />
          </div>
          <div>
            <label>Dados: </label>
            <Input type="dados" />
          </div>
          <Button variant="contained" color="primary">
            Salvar
          </Button>
        </Form>
        <Procedure />
      </Container>
    </>
  );
};

export default Main;
