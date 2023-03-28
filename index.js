import express, {json} from 'express';
import cors from 'cors';
const app = express();
const port = 3001;

import routes from './router.js';

app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(cors());
app.use(json());

app.use('/api', routes)

app.get('/', (req, res) => {

    res.send("Hello, world!");

});

app.listen(port, ()=> {
    console.log(`Servidor rodando: http://localhost:${port}`);
})