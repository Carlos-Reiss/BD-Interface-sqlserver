import React, { useState, useEffect } from 'react';
import { Input, Button } from '@material-ui/core';
import api from '../../services/api';
import Header from '../../components/Header';

import { Container, Form, PrimeiraProcedure, ListItems } from './styles';

type Idados = {
  id: number;
  nome: string;
  pais: string;
};

const Main: React.FC = () => {
  const [dados, setDados] = useState<Idados[]>([{} as Idados]);

  useEffect(() => {
    const loadItems = async () => {
      const response = await api.get('/procedure1');
      setDados(response.data);
    };

    loadItems();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <h3>Interface Banco de dados II</h3>
        <Form>
          <div>
            <label>Dados: </label>
            <Input type="dados" />
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

        <PrimeiraProcedure>
          <h4>A primeira procedure</h4>
          <ListItems>
            {dados &&
              dados.map(item => (
                <li key={item.id}>
                  <p>{item.id}</p>
                </li>
              ))}
          </ListItems>
        </PrimeiraProcedure>
      </Container>
    </>
  );
};

export default Main;
