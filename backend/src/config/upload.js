const multer = require('multer');
const path = require('path')
module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'), // '..', '..' garantee the relative path for linux (/) or windows (\)
        filename: (req, file, cb) => {
            cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
        },
    })
}