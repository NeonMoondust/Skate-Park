const express = require('express');
const expressFileUpload = require('express-fileupload');
const hbs = require('express-handlebars');


const root_route = require('./routes/rootRoute.js');
const login_route = require('./routes/loginRoute.js');
const register_route = require('./routes/registerRoute.js');
const datos_route = require('./routes/datosRoute.js');
const admin_route = require('./routes/adminRoute.js');

const PORT = process.env.PORT || 3000;

const app = express();

app.listen(PORT, () => {console.log(`Listening PORT: ${PORT}.`)});

app.use(expressFileUpload({
    limits: {fileSize: 5000000},
    abortOnLimit: true,
    responseOnLimit: 'El tamaño del archivo es demasiado grande',
}))

//#region Routes
app.use('/', root_route);
app.use('/login', login_route);
app.use('/register', register_route);
app.use('/datos', datos_route);
app.use('/admin', admin_route);
//#endregion

//#region View Engine Misc -------
app.use(express.static('public'));

app.set("view engine", ".hbs");

app.engine("hbs", hbs.engine({
    layoutsDir: __dirname + "/views",
    partialsDir: __dirname + "/views/partials/",
    extname: ".hbs",
}));
// #endregion

//#region Wildcard routes
app.get('*', (request, response) =>{
    response.render('404',{
        layout: '404',
    });
});
//#endregion

