import React, { useCallback, useEffect, useState } from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { Container, MySelect } from './styles';
import api from '../../services/api';

interface Nomes {
  nome: string;
}

interface Bestsellers {
  nome_pub: string;
  quantidade: number;
  titulo: string;
}

const Procedure: React.FC = () => {
  const [authors, setAuthors] = useState<Nomes[]>([]);
  const [nome, setNome] = useState<string>('');
  const [bests, setBests] = useState<Bestsellers[]>([]);

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

      setBests(response.data);
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
          eles que foram vendidos na publicadora em 1 ou mais pedidos.
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
            {authors.map(author => (
              <MenuItem key={author.nome} value={author.nome}>
                {author.nome}
              </MenuItem>
            ))}
          </Select>
        </MySelect>
      </form>
      {bests.length > 0 && (
        <TableContainer style={{ width: 650 }}>
          <Table style={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Nome da publicadora</TableCell>
                <TableCell align="right">Titulo</TableCell>
                <TableCell align="right">Quantidade</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bests.map(best => (
                <TableRow key={best.titulo}>
                  <TableCell align="right">{best.nome_pub}</TableCell>
                  <TableCell align="right">{best.titulo}</TableCell>
                  <TableCell align="right">{best.quantidade}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
};

export default Procedure;
