const model = require('../models/skaters_model');


function register_index(request, response){
    response.render('register',{
        layout: 'register'
    })
}

function register_registering(request, response){
    const {email, nombre, password, experiencia, especialidad} = request.body;
    const {foto} = request.files;
    const default_state = false;
    const foto_name = email+'.jpg';
    foto.mv(`${__dirname}/../public/assets/images/${foto_name}`);
    model.dataProvider({
        'verb': 'post',
        'values': [email, nombre, password, experiencia, especialidad, foto_name, default_state],
    });
    response.sendStatus(200);
}

module.exports = {
    register_index,
    register_registering,
};