const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {

    const {query,nombre = "no name",apikey} = req.query;

    res.json({
        msg: 'get API - controlador',
        query,
        nombre,
        apikey
    });
}

const usuariosPut = (req, res = response) => {

    const id = req.params.id;

    res.json({
        msg: 'put API - controlador',
        id
    });
}

const usuariosPost = (req, res = response) => {

    // const body = req.body;
    const {nombre, edad} = req.body;

    res.json({
        msg: 'post API - controlador',
        // body
        nombre,
        edad
    });
}

const usuariosDelete = (req, res) => {
    res.json({
        msg: 'delete API - controlador'
    });
}



module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}