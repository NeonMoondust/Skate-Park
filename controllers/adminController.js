const model = require('../models/skaters_model');

async function admin_index(request, response){
    const skaters = await model.dataProvider({
        'verb': 'get',
    });
    response.render('admin',{
        layout: 'admin',
        skaters
    })
}

async function admin_changeState(request, response){
    const {id} = request.body;
    const skaters = await model.dataProvider({
        'verb': 'get',
    });
    const skater = skaters.find(s => s.id == id);
    await model.dataProvider({
        'verb': 'state',
        'values': [id, !skater.estado],
    });
    response.sendStatus(200);
}

module.exports = {
    admin_index,
    admin_changeState,
};