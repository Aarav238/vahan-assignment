import express from 'express';
import { createPerson, deletePerson, getPerson, getPersons, updatePerson } from '../controllers/controllers.js';


const router = express.Router();


router.get('/', (req,res) => {
    res.send("hello world")
})

router.post('/person', createPerson);
router.get('/getPersons',getPersons);
router.put('/person/:id',updatePerson);
router.delete('/person/:id',deletePerson);
router.get('/person/:id',getPerson)



export default router;