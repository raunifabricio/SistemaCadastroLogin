'use strict'

class User {
  get validateAll () {
    return true
  }


  get rules () {
    return {

      nome: 'required|unique:users',
      email: 'required|unique:users',
      password: 'rerequired|confirmed',
      cpf: 'required|unique:users'

    }
  }
}

module.exports = User
