'use strict'

const User = use('App/Models/User')

class UserController {
    async store ({request, response}) {

        try{
            const data = request.only(['nome','email','password','cpf','acesso','profileimage'])
            //console.log(data)
            const user = await User.create(data)
            
        
            return user
        }catch(error){
            console.log(error)
            return response.status(400).json({error: 'Ocorreu um erro!!!'})
        }
        
    }

    async index ({request, auth, response}) {

        try{

            if(auth.user.acesso === 999){
                const user = await User.all()
                return user 
                
            }
            
            return response.status(401).json({error: 'Usuario nao autorizado'})

        }catch(error){
            return response.status(400).json({error: 'Ocorreu um erro!!!'})
        }

        
    }

    async show ({request, auth, params, response }) {

        try{
            const user = await User.find(params.id)
        
        return user
        
        }catch(error){
            return response.status(400).json({error: 'Ocorreu um erro!!!'})
        }

        
    }

    async update ({request, auth, params, response}) {

        try{

            const data = request.all()
            const{id} = params
            
            
            if(auth.user.id == id || auth.user.acesso == 999){
                const user = await User.find(id)
                await user.merge(data)
                await user.save()

                return user    
            }

            return response.status(401).json({error: 'Usuario nao autorizado'})    

        }catch (error){
            return response.status(400).json({error: 'Ocorreu um erro!!!'})
        }
        
    }

    async destroy ({request, auth, params, response}) {

        try{

            const data = request.all()
            const{id} = params
            const user = await User.findOrFail(params.id)
            

            await user.delete()

        }catch (error){
            return response.status(400).json({error: 'Ocorreu um erro!!!'})
        }
        
    }



}



module.exports = UserController
