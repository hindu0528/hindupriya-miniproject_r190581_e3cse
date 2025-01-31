import express from 'express';
import { addFood,listFood,removeFood} from '../controllers/foodController.js';
import multer from 'multer';


const foodRouter = express.Router();

// Image Storage engine
const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

// Routes
foodRouter.post('/add', upload.single('image'), addFood); // Apply the upload middleware here
foodRouter.get('/list',listFood);
foodRouter.post("/remove",removeFood);


export default foodRouter;
