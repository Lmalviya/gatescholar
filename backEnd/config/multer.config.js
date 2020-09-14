const multer=require('multer');


var filefilter=function(req,file,next){
    if(file.mimetype.startsWith('image/'))
    next(null,true);
    else
    next(new Error('message'),false);
};


const storage=multer.diskStorage({
    destination:function(req,file,next){
        next(null,'public/uploads');
    },
    filename:function(req,file,next){
        const ext=file.mimetype.split('/')[1];     
        const email=req.headers['user-email'];
        next(null,file.fieldname+'-'+email+'.'+ext);
       
    }
});
var upload=multer({
    storage:storage,
    fileFilter:filefilter
});


module.exports =upload.single('profileImage');