import multer from "multer";



const   storage =  multer.diskStorage({               // here create disk storage configuration
    filename: function(req, file, callback){
        callback(null, file.originalname);
    }
})      


const upload = multer({storage}); // Now create intance using multer diskstorage



export default upload;
