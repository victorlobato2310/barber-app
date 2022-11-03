import { AppDataSource } from "./data-source";
import express from 'express';
import router from "./routes/index.routes";
import { appError } from "./middlewares/appError.middleware";

AppDataSource.initialize().then(() => console.log("Banco de Dados inicializado")).catch(error => console.log(error));

const app = express();
const port = 3000;

app.use(express.json());
app.use(router);
app.use(appError);

app.get('/', (req, res) => {
    res.send({
        message: 'API está funcionando'
    });
});

app.listen(port, () => console.log(`A aplicação está rondando na porta ${port}`));