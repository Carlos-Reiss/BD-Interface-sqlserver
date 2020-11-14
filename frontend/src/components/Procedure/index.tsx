import React, { useCallback, useEffect, useState } from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import { Container, MySelect } from './styles';
import api from '../../services/api';

interface Nomes {
  nome: string;
}

const Procedure: React.FC = () => {
  const [authors, setAuthors] = useState<Nomes[]>([]);
  const [nome, setNome] = useState<string>('');

  const handleChange = useCallback(
    (event: React.ChangeEvent<{ value: unknown }>) => {
      setNome(event.target.value as string);
    },
    [],
  );

  useEffect(() => {
    async function bestsellers() {
      const first = nome.split(' ');

      const response = await api.get('/bestsellers', {
        params: { name: first[0], lastname: first[1] },
      });

      console.log(response.data);
    }
    bestsellers();
  }, [nome]);

  useEffect(() => {
    async function loadAuthors() {
      const response = await api.get('/authors');
      setAuthors(response.data);
    }
    loadAuthors();
  }, []);

  return (
    <Container>
      <h2>Procedure</h2>
      <form>
        <label>
          Mostrar os livros Dos Autores Considerados bestsellers, <br /> sendo
          eles que foram vendidos em 3 ou mais pedidos.
        </label>
        <MySelect>
          <InputLabel id="demo-simple-select-outlined-label">
            Autores
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={nome}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {authors.map(author => (
              <MenuItem key={author.nome} value={author.nome}>
                {author.nome}
              </MenuItem>
            ))}
          </Select>
        </MySelect>
      </form>
    </Container>
  );
};

export default Procedure;
