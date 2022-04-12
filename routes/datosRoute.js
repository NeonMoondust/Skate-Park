const express = require('express');
const controller = require('../controllers/datosController.js');

const router = express.Router();
// router.use('/', (request, response, next) =>{
//     if(!request.query.token) return response.render('404',{layout: '404'});
//     next();
// });
router.get('/', controller.datos_index);

router.put('/modify', controller.datos_update);
router.delete('/delete', controller.datos_delete);

module.exports = router;