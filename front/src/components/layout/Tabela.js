import {Table} from 'react-bootstrap';

import axios from 'axios';
import { useEffect, useState } from 'react';

import styles from '../layout/Tabela.module.css';
import {AiFillDelete, AiFillEdit} from 'react-icons/ai';

function Tabela(){

    const [lista, setLista] = useState([]);
    const getLivro = () => {
        axios.get(`http://localhost:8082/livro`)
        .then(response => setLista(response.data))
        .catch(error => console.log(error))}
         useEffect(() => {
         getLivro();
        })

    return(
        <Table className={styles.table} striped bordered hover>
                <thead>
                <tr>
                    <th>NOME</th>
                    <th>AUTOR</th>
                    <th>EDITORA</th>
                    <th>GENÊRO</th>
                    <th>DESCRIÇÃO</th>
                    <th>ANO DE PUBLICAÇÃO</th>
                    <th><AiFillDelete/></th>
                    <th><AiFillEdit/></th>
                </tr>
                </thead>
                <tbody>
                   
                        {
                            lista.map((livro, index) => {
                                return(
                        <tr key={index}>
                        <td>{livro.nome}</td>
                        <td>{livro.autor}</td>
                        <td>{livro.editora}</td>
                        <td>{livro.genero}</td>
                        <td>{livro.descricao}</td>
                        <td>{livro.anoDePublicacao}</td>
                        <td><AiFillDelete/></td>
                        <td><AiFillEdit/></td>        
                    </tr>

                                )
                            }

                            )
                        }
                   
                </tbody>
            </Table>
    );
}

export default Tabela;