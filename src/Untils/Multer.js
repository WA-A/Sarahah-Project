import multer from 'multer';

function fileUpload(){
    
    const storage = multer.diskStorage(
        {
            destination:(req,res,cb)=>{ // cb is function call back
                cb(null, 'Uploads'); // nul : if make error / then name file
            } ,

            filename:  (req, file, cb)=>{
                cb(null,Date.now()+Math.random()+"_"+file.originalname) // controll to name file when reguest the same file
              // Date -> return time in server
              // 2- use libary nanoid
            }
        }
    );

    function fileFilter (req, file, cb) {
         if (['image/jpeg','image/svg+xml','image/gif'].includes(file.mimetype)){
        cb(null,true);
     }
     else{
         cb("inavlid format",false);
     }
    
       }
       const upload = multer ({fileFilter,storage});
       return upload;
}

export default fileUpload;