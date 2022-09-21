'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/api/productos', 'ProductosController.index')
Route.post('/api/productos', 'ProductosController.store')
Route.get('/api/productos/:id', 'ProductosController.show')
Route.put('/api/productos/:id', 'ProductosController.update')
Route.delete('/api/productos/:id', 'ProductosController.destroy')