import express from 'express';
import { createPerson, getPersons } from '../controllers/controllers.js';


const router = express.Router();


router.get('/', (req,res) => {
    res.send("hello world")
})

router.post('/person', createPerson);
router.get('/getPersons',getPersons)



export default router;