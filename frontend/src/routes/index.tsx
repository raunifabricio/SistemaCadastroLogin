import { Route, Switch  } from "react-router-dom";
import Login from "../pages/Login"
import Dasboard from "../pages/Dashboard";
import Cadastro from "../pages/UsersCadastro";
import PrivateRoutes from "./PrivateRoutes";
import List from "../pages/List";
import Perfil from "../pages/Perfil";
import PerfilList from "../pages/PerfilList";

const Routes = () => {
    return(
    <Switch>
        <Route path="/" exact component={Login} />
        <PrivateRoutes path="/dashboard" component={Dasboard}/>
        <PrivateRoutes path="/users" component={Cadastro} />
        <PrivateRoutes path="/perfil" component={Perfil} />
        <PrivateRoutes path="/perfillist" component={PerfilList} />
        <PrivateRoutes path="/list" component={List} />
    </Switch>
    );
};

export default Routes;