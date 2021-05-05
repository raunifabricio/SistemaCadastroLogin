import {createContext, useCallback, useState, useContext} from "react";
import api from "../services/api";
import { entrar } from '../services/autenticacao'

interface AuthContextState {
    token: TokenState;
    signIn({login, password}: UserData): Promise<void>;
    userLogged(): boolean;
}

interface UserData {
    login: string;
    password: string;
}

interface TokenState {
    token: string;
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState);

const AuthProvider: React.FC = ({children}) => {
    const [token, setToken] = useState<TokenState>(() => {
        const token = localStorage.getItem('token');

        if(token ){
            api.defaults.headers.authorization = `Bearer ${token}`;

            return { token };
        }
            return { } as TokenState;
    });

    const signIn = useCallback(async ({login, password}: UserData) => {
        const response = await api.post("/authenticate", {
            login,
            password,
        });
    
        const { token } = response.data;
        
        setToken(response.data.token.token);
        console.log("token", token)
        console.log(response.data.token.token);
        // setUser(response.data.users);
        localStorage.setItem("@PermissionYT:token", token);
        entrar(response.data.token.token)
    }, []);

        const userLogged = useCallback(() => {
            const token = localStorage.getItem('token');
            if(token){
                return true;
            }
            return false;
        }, []);

    return(
        <AuthContext.Provider value={{token, signIn, userLogged }}>
            {children}
        </AuthContext.Provider>
    );
};

function useAuth(): AuthContextState {
    const context = useContext(AuthContext);
    return context;
}

export { AuthProvider, useAuth };