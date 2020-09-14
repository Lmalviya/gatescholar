const router = require('express').Router();
const upload=require('../config/multer.config.js');

const user = require('../controllers/singup/user.singup.controllers.js');
const series = require('../controllers/login/series.login.controllers.js');
const test=require('../controllers/login/livetest.login.controllers.js');
const info=require('../controllers/login/userprofile.login.controllers');


router.get('/userinfo',info.info);
router.get('/bookmarks', info.bookmarks);
 router.get('/mytest', info.mytest);
router.get('/profile', info.profile);
router.get('/givenexam',info.givenExam);
 router.get('/overallperformance',info.overAllPerformance);
router.get('/top10studentscore', info.Top10StudentScore);

router.get('/resultall',series.result);
 router.post('/setbookmark', series.bookmarkSet);
 router.post('/getexam',series.getExam);
 router.post('/getques', series.getQuesAll);
 router.post('/scoreanalysis', series.scoreAnalysis);
router.post('/scorecard', series.scoreCard);

router.post('/comparision', series.comparision);
router.post('/top10studentcompare',series.Top10StudentsCompare);

router.put('/updatepassword', user.updatePassword);
router.put('/updateprofileimage',upload,user.updateProfileImage);

router.post('/testupdate', test.testUpdate);
router.post('/livetestupdate',test.liveTestUpdate);
module.exports = router;