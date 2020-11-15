import React, { useState, useCallback, useEffect } from 'react';
import { Input, Button } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Procedure from '../../components/Procedure';
import Header from '../../components/Header';

import api from '../../services/api';
import {
  Container,
  Form,
  ButtonAdd,
  MySelect,
  TableCustomize,
  GroupSelect,
} from './styles';

interface Publishers {
  id: string;
  nome: string;
}

interface Employers {
  id: string;
  name: string;
  sobrenome: string;
  job: string;
  publicadora: string;
}

interface Jobs {
  id: number;
  job: string;
}

const Main: React.FC = () => {
  const [mostrar, setMostrar] = useState(false);
  const [job, setJob] = useState<string>('');
  const [pub, setPub] = useState<string>('');
  const [pubs, setPubs] = useState<Publishers[]>([]);
  const [jobs, setJobs] = useState<Jobs[]>([]);
  const [employers, setEmployers] = useState<Employers[]>([]);

  const [nome, setNome] = useState<string>('');
  const [sobrenome, setSobrenome] = useState<string>('');

  const [loading, setLoading] = useState(true);

  const handleMostrar = useCallback(() => {
    setMostrar(!mostrar);
  }, [mostrar]);

  const handleChangeJob = useCallback(
    (event: React.ChangeEvent<{ value: unknown }>) => {
      setJob(event.target.value as string);
    },
    [],
  );

  const handleChangePub = useCallback(
    (event: React.ChangeEvent<{ value: unknown }>) => {
      setPub(event.target.value as string);
    },
    [],
  );

  useEffect(() => {
    async function loadJobs() {
      const response = await api.get('/jobs');
      const response1 = await api.get('/publishers');
      const response2 = await api.get('/employers');

      setJobs(response.data);
      setPubs(response1.data);
      setEmployers(response2.data);
    }
    loadJobs();
  }, []);

  const handleInsert = useCallback(() => {
    async function insert() {
      setLoading(false);
      if (
        nome === '' ||
        nome.length === 0 ||
        sobrenome === '' ||
        sobrenome.length === 0
      ) {
        alert('Não pode cadastrar uma pessoa sem informar os campos abaixo');
        setLoading(true);
        return;
      }
      console.log('pegou');

      const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let minhasLetras = '';
      let num;

      for (let index = 0; index < 3; index++) {
        num = Math.floor(Math.random() * (letras.length - 0 + 1)) + 0;
        minhasLetras += letras.charAt(num);
      }

      let numero = '';
      for (let index = 0; index < 5; index++) {
        numero += Math.floor(Math.random() * (9 - 0 + 1)) + 0;
      }

      const tokenP = minhasLetras + numero;
      let tokenF = tokenP;
      if (tokenP.charAt(0) === 'a') {
        tokenF += 'M';
      } else {
        tokenF += 'F';
      }
      console.log(tokenF);

      try {
        await api.post('/insert', {
          tokenF,
          nome,
          sobrenome,
          job,
          pub,
        });
        setLoading(true);
        alert('Cadastro realizado com sucesso!');

        setJob('');
        setPub('');
        setNome('');
        setSobrenome('');
      } catch (error) {
        alert('Impossível Cadastrar');

        setLoading(true);
      }
    }
    insert();
  }, [job, nome, pub, sobrenome]);

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
            Faça uma inserção de dados na tabela de funcionários, <br />
            escolhendo sua chave estrangeira para o trabalho e qual publicadora
            de livros ele irá trabalhar.
          </label>

          <div>
            <label>Nome: </label>
            <Input
              type="dados"
              placeholder="Informe o seu nome"
              required
              value={nome}
              onChange={e => setNome(e.target.value)}
            />
          </div>
          <div>
            <label>Sobrenome: </label>
            <Input
              type="dados"
              placeholder="Informe o seu sobrenome"
              required
              value={sobrenome}
              onChange={e => setSobrenome(e.target.value)}
            />
          </div>
          <GroupSelect>
            <MySelect>
              <InputLabel id="demo-simple-select-outlined-label">
                Trabalhos
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={job}
                onChange={handleChangeJob}
                required
              >
                {jobs.map(jobName => (
                  <MenuItem key={jobName.id} value={jobName.id}>
                    {jobName.job}
                  </MenuItem>
                ))}
              </Select>
            </MySelect>

            <MySelect>
              <InputLabel id="demo-simple-select-outlined-label">
                Publicadoras
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={pub}
                onChange={handleChangePub}
                required
              >
                {pubs.map(pubName => (
                  <MenuItem key={pubName.id} value={pubName.id}>
                    {pubName.nome}
                  </MenuItem>
                ))}
              </Select>
            </MySelect>
          </GroupSelect>
          <Button variant="contained" color="primary" onClick={handleInsert}>
            Salvar
          </Button>

          <TableCustomize>
            <TableContainer>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="right">Id</TableCell>
                    <TableCell align="right">Nome</TableCell>
                    <TableCell align="right">Sobrenome</TableCell>
                    <TableCell align="right">Trabalho</TableCell>
                    <TableCell align="right">Publicadora</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {employers.map(employer => (
                    <TableRow key={employer.id}>
                      <TableCell align="right">{employer.id}</TableCell>
                      <TableCell align="right">{employer.name}</TableCell>
                      <TableCell align="right">{employer.sobrenome}</TableCell>
                      <TableCell align="right">{employer.job}</TableCell>
                      <TableCell align="right">
                        {employer.publicadora}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </TableCustomize>
        </Form>
        <Procedure />
      </Container>
    </>
  );
};

export default Main;
