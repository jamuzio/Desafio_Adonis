'use strict'

const Productos = use('App/Models/Producto') 

class ProductosController {
    async index() {
        const result = await Productos.all()
        return result.toJSON()
    }
    async store({request, response}) {
        const input = request.all()
        const resultado = await Productos.create(input)
        return resultado
    }
    async show({params}){
        return await Productos.findOrFail(params.id)
    }
    async update({params, request, response}){
        const input = request.all()
        await Productos.query().where('id', params.id).update(input)
        const resultado = await Productos.findOrFail(params.id)
        return resultado
    }
    async destroy({params, response}){
        const producto = await Productos.findOrFail(params.id)
        await producto.delete()
        return response.json({Msg: `Producto con id: ${params.id} eliminado`})
    }
}

module.exports = ProductosController
