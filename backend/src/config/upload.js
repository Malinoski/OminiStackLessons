const multer = require('multer');
const path = require('path')
module.exports = {
    storage: multer.diskStorage({

        destination: path.resolve(__dirname, '..', '..', 'uploads'), // '..', '..' garantee the relative path for linux (/) or windows (\)
        
        // 'filename' is a variable where receive an function (requisition, file received, and callback where return a response when finishes)
        filename: (req, file, cb) => {
            
            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname, ext);

            // callback function (if occour an error, name of file (using Template Strings ${} ) )
            cb(null, `${name}-${Date.now()}${ext}`)
        },
    })
}