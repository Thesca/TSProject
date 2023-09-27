import express, {Express, Request, Response} from  'express';
import helmet from 'helmet';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('src'));

app.listen(PORT, () => console.log(`Server running on the port ${PORT}`));