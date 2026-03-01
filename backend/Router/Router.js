const Express = require('express');
const { MovieCreate, MovieGet, MoviEdit, MovieDelete ,MovieGetById} = require('../Controller/Controller');
const router = Express.Router();

router.post('/movies', MovieCreate);
router.get('/movies/:id', MovieGetById);
router.get('/movies', MovieGet);
router.put('/movies/:id', MoviEdit);
router.delete('/movies/:id', MovieDelete);

module.exports = router;