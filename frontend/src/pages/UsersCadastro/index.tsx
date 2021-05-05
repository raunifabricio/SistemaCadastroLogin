import React, { useCallback, useState } from 'react'
import api from '../../services/api';

import './styles.css';
const Cadastro: React.FC = () => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpf, setCPF] = useState('')
    const [acesso, setAcesso] = useState('')
    

    const handleSubmit = useCallback(
        async (event) => {
        event?.preventDefault();
        const response = await api.post('/users', {
            nome, 
            email, 
            password, 
            cpf, 
            acesso,
        })
        console.log(response.data);    
    },[nome, email, password, cpf, acesso]);  

    return (
        <form action="" className="container" onSubmit={handleSubmit}>Cadastro
        <div className="form-group">
     
        <div className="form-group"></div>
        <label htmlFor="">Nome</label>
        <input type="text" onChange={event => setNome(event.target.value)}></input>

        <div className="form-group"></div>
        <label htmlFor="">Email</label>
        <input type="text" onChange={event => setEmail(event.target.value)}></input>

        <div className="form-group"></div>
        <label htmlFor="">Password</label>
        <input type="text" onChange={event => setPassword(event.target.value)}></input>

        <div className="form-group"></div>
        <label htmlFor="">CPF</label>
        <input type="text" onChange={event => setCPF(event.target.value)}></input>

        <div className="form-group"></div>
        <label htmlFor="">Acesso</label>
        <input type="text" onChange={event => setAcesso(event.target.value)}></input> 

        <div className="form-group"></div>
        <button type="submit">Cadastrar</button>

        <div className="form-group"></div>
        <button type="submit">Editar</button>

        <div className="form-group"></div>
        <button type="submit">Ativar/Desativar usuario</button>
        
        </div>
    </form>
    );
}
export default Cadastro;