const router = require('express').Router();
const users=require('../controllers/admin/user.admin.controllers.js');
const paper = require('../controllers/admin/paper.admin.controllers.js');
router.post('/paper', paper.create);

router.put('/paper/update', paper.update);

router.get('/paper/get', paper.get);

router.delete('/paper/delete', paper.delete);
router.delete('/deleteques',paper.deleteQues);

router.get('/getallusers', users.getAll);
router.get('/getques',paper.getQuesAll);
router.delete('/deletemany', users.deleteAll);
module.exports = router;