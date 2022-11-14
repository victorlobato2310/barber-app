import express from 'express';
import router from "./routes/index.routes";
import { appError } from "./middlewares/appError.middleware";
import cors from "cors";

const app = express();
const port = 3000;
import  swaggerUi from 'swagger-ui-express';

const options: cors.CorsOptions = {
    origin: '*',
};

app.use(express.static("dist/public"));
app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "/swagger.json",
    },
  }));

app.use(express.json());
app.use(cors(options));
app.use(router);
app.use(appError);

app.get('/', (_req, res) => {
    res.send({
        message: 'API está funcionando'
    });
});

app.listen(port, () => console.log(`A aplicação está rondando na porta ${port}`));

export default app;