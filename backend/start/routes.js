'use strict'

const Route = use('Route')

Route.post('authenticate', 'AuthController.authenticate')

Route.post('users', 'UserController.store')
Route.get('users', 'UserController.index').middleware('auth')
Route.get('users/:id', 'UserController.show').middleware('auth')
Route.put('users/:id', 'UserController.update').middleware('auth')
Route.delete('users/:id', 'UserController.destroy').middleware('auth')

Route.get('/files/:id', 'FileController.show')
Route.post('/files', 'FileController.store')


