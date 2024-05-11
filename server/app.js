import express from 'express';
import cors from 'cors';
import Allroutes from './routes/routes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', Allroutes)

const PORT = 3000;




app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});