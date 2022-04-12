const jwt = require("jsonwebtoken");
const fs = require('fs');
const model = require('../models/skaters_model');

const {key} = JSON.parse(fs.readFileSync('./misc/jwt_secretKey.json'));

function datos_index(request, response){
    const {token} = request.query;
    jwt.verify(token, key, (err, decoded) => {
        err ? response.status(401).redirect('/login') : response.render("datos", {
                layout: "datos",
                skater_data: decoded.data,
            });
    });
}

async function datos_update(request, response){
    const {email, nombre, password, experiencia, especialidad} = request.body;
    model.dataProvider({
        'verb': 'put',
        'values': [email, nombre, password, experiencia, especialidad],
    });
    response.sendStatus(200);
}

async function datos_delete(request, response){
    const {id} = request.query;
    model.dataProvider({
        'verb': 'delete',
        'values': [id]
    });
    response.sendStatus(200);
}

module.exports = {
    datos_index,
    datos_update,
    datos_delete,
};