import db from "../db/prisma.js";
import {z} from 'zod';


const personSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    mobileNumber: z.string().min(10),
    dateOfBirth: z.string().transform((val) => new Date(val)),
});

export const createPerson = async (req, res) => {

    const { name, email, mobileNumber, dateOfBirth } = personSchema.parse( req.body);

    try {
        const newPerson = await db.person.create({
            data: {
                name,
                email,
                mobileNumber,
                dateOfBirth: new Date(dateOfBirth),
            },
        });

        return res.status(200).json(newPerson);
    } catch (err) {
        if (err instanceof z.ZodError) {
           return  res.status(400).json({ error: err.errors });
        } else {
            return res.status(500).json({ error: err.message });
        }
    }


}

export const getPersons = async (req,res) => { 
    try {
        const persons = await db.person.findMany();

        return res.status(200).json(persons)
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export const getPerson = async(req,res) => {
    const {id} = req.params;
    try {
        const person = await db.person.findFirst({
            where: {
                id: parseInt(id)
            }
        })

        return res.status(200).json(person);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export const updatePerson = async(req,res) => {
    try {

        const {id} = req.params;
        const { name, email, mobileNumber, dateOfBirth } = personSchema.parse( req.body);

        const updatedPerson = await db.person.update({
            where: {
                id: parseInt(id)
            },
            data: {
                name,
                email,
                mobileNumber,
                dateOfBirth: new Date(dateOfBirth),
            }
        });

        return res.status(200).json(updatedPerson)
        
    } catch (error) {
        if (err instanceof z.ZodError) {
            return  res.status(400).json({ error: err.errors });
         } else {
             return res.status(500).json({ error: err.message });
         }
    }
}


export const deletePerson = async (req,res) => {
    try {
        const {id} = req.params;
        const deletedPerson = await db.person.delete({
            where: {
                id: parseInt(id)
            }
        });

        return res.status(200).json({message: "successfully deleted person" , person: deletedPerson} )
        
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}
