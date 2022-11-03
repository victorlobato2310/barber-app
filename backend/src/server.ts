import { AppDataSource } from "./data-source";
import express from 'express';


AppDataSource.initialize().then(() => {
    const app = express();
    const port = 3000;

	app.use(express.json());

    app.get('/', (req, res) => {
        res.send({
            message: 'API está funcionando'
        });
    });

	app.listen(port, () => console.log(`A aplicação está rondando na porta ${port}`));
}).catch(error => console.log(error));
