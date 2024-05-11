import express from 'express';
import { createPerson } from '../controllers/controllers.js';


const router = express.Router();


router.get('/', (req,res) => {
    res.send("hello world")
})

router.post('/person', createPerson)



export default router;