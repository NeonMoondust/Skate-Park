const model = require('../models/skaters_model');
const jwt = require("jsonwebtoken");
const fs = require('fs');

const {key} = JSON.parse(fs.readFileSync('./misc/jwt_secretKey.json'));

function login_index(request, response){
    response.render('login',{
        layout: 'login'
    })
}

async function login_loginIn(request, response){
    const {email, password} = request.query;
    if(email == 'admin' && password == 'admin') return response.redirect('/admin');
    const skaters_data = await model.dataProvider({
        'verb': 'get',
    })
    const auth = skaters_data.find(skater => skater.email == email && skater.password == password);

    if(auth){
        const token = jwt.sign({
            exp: Math.floor(Date.now()/1000) + 60,
            data: auth
        }, key);
        response.redirect(`/datos?token=${token}`);
    }else{
        response.redirect('/login');
    }
}

module.exports = {
    login_index,
    login_loginIn,
};