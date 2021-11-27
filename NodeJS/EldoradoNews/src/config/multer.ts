import { resolve } from 'path';
import Multer  from 'multer';

import slugify from "slugify";
import slugifyConfig from "./slugify";

export default {
    storage: Multer.diskStorage({
        destination: resolve(__dirname, '..', '..', 'public', 'static', 'uploads'),
        filename(req, file, callback) {
            let hash = new Date().getTime();
            let ext = file.originalname.split('.')[1];
            let fileName = file.originalname.split('.')[0];
            fileName = slugify(fileName, slugifyConfig);
            const fullFileName = `${hash}-${fileName}.${ext}`;
            req.body.cover = fullFileName;
            callback(null, fullFileName);
        }
    })
}