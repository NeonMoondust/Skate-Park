const model = require('../models/skaters_model');

async function root_index(request, response){
    const skaters = await model.dataProvider({
        'verb': 'get',
    });
    response.render("index", {
        layout: "index",
        skaters
    });
}

module.exports = {
    root_index,
}