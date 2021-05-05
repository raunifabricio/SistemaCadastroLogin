import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

interface Users {
    id: string;
    nome: string;
    email: string;
    password: string;
    cpf: string;
    acesso: number;
}

const PerfilList: React.FC = () => {
    const[users, setUsers] = useState<Users[]>([] as Users[]);
    const history = useHistory();


    useEffect(() => {
       api.get('/users').then((response) => setUsers(response.data));
    }, []);
    return (
    <div>
        <h3>Listagem de usuarios</h3>
 
     <div>
        {users.map(users => (
          <div key={users.id}>
              <span>ID: {users.id}</span>
              <br/>
              <span>Nome: {users.nome}</span>
              <br/>
              <span>email: {users.email}</span>
              <br/>
              <span>password: {users.password}</span>
              <br/>
              <span>cpf: {users.cpf}</span>
              <br/>
              <span>acesso: {users.acesso}</span>
              <br/>
              <hr/>
              <button onClick={() => history.push("/cadastro")}>Cadastrar usuario</button>
          </div>  
        ))}
        </div>
    </div>
    );
};

export default PerfilList;