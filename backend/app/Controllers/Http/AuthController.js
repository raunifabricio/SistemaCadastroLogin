'use strict'

const User = use ('App/Models/User')

class AuthController {
    async authenticate ({ request , response, auth, params }) {

        try{
            const { login, password } = request.all()
            //console.log(login)
            if (login.indexOf("@") !== -1) {
                const token = await auth.attempt(login, password);
                const user = await User.findBy("email", login);

                return response.json({ token, user });
            }

            const token = await auth.authenticator("anotherAuth").attempt(login, password);
            const user = await User.findBy("cpf", login);

            return response.json({ token, user });

        }catch(error){
            return response.status(500).send({error: "error"})
        }
        
    }
}

module.exports = AuthController
