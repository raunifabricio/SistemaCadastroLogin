import React , {useCallback, useState} from "react";
import { useHistory } from "react-router";
import { useAuth } from "../../context/AuthContext";
import "./styles.css";

const Login: React.FC = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();

    const { signIn } = useAuth();

    const handleSubmit = useCallback(
        async (event) => {
        event.preventDefault();
       

        await signIn({login, password});
        history.push('/dashboard');
    }, 
    [history, login, password, signIn] 
);

    return (
        <form  className="container" onSubmit={handleSubmit}>Login
            <div className="form-group">
                <label htmlFor="">Login</label>
                <input type="text" placeholder="Enter email or CPF" onChange={event=> setLogin(event.target.value)}/>
            </div>

            <div className="form-group">
                <label htmlFor="">Senha</label>
                <input type="password" placeholder="Enter password" onChange={event=> setPassword(event.target.value)}/>
            </div>

            <div className="form-group">
                <button type="submit"> Entrar </button>
            </div>
 
        </form>
    )
}

export default Login;
