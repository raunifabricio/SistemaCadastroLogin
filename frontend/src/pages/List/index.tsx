import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import api from '../../services/api';

interface UsersData {
    id: string;
    nome: string;
    email: string;
    password: string;
    cpf: string;
    acesso: number;
    imageprofile: string;
}

const List: React.FC = () => {
    const [users, setUsers] = useState<UsersData[]>([] as UsersData[]);

    const history = useHistory();

    useEffect(() => {
        api.get('/users').then((response) => {
            console.log(response)
            setUsers(response.data)
        });
    }, []);
    return (
        <div>
            <h3>Listagem de usuarios</h3>

            <div>
                {users.map(users => (
                    <div key={users.id}>
                        <span>ID: {users.id}</span>
                        <br />
                        <span>Nome: {users.nome}</span>
                        <br />
                        <span>email: {users.email}</span>
                        <br />
                        <span>password: {users.password}</span>
                        <br />
                        <span>cpf: {users.cpf}</span>
                        <br />
                        <span>acesso: {users.acesso}</span>
                        <br />
                        <span>imageprofile: {users.imageprofile}</span>
                        <br />
                        <hr />
                        <button onClick={() => history.push("/cadastro")}>Cadastrar usuario</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default List;
