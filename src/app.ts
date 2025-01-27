import express from 'express'
import router from './routes';
import cors from 'cors'

export default function createApp() {
  const app = express();

  app.use(express.json());
  app.use("/api", router)

  // EXEMPLO DE USO DE CORS
  // const corsOptions = {
  //   origin: ['http://brunolindoso.system.com','http://teste.gov.br'],
  //   methods: ['GET']
  // }
  // app.use(cors(corsOptions))

  app.use(cors())

  return app;
}