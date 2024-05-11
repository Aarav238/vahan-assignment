import express from 'express';
import { createPerson, getPersons, updatePerson } from '../controllers/controllers.js';


const router = express.Router();


router.get('/', (req,res) => {
    res.send("hello world")
})

router.post('/person', createPerson);
router.get('/getPersons',getPersons);
router.put('/person/:id',updatePerson)



export default router;