import db from "../db/prisma.js";
import {z} from 'zod';




export const createPerson = async (req, res) => {
    const personSchema = z.object({
        name: z.string(),
        email: z.string().email(),
        mobileNumber: z.string().min(10),
        dateOfBirth: z.string().transform((val) => new Date(val)),
    });



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
    const persons = await db.person.findMany();
}