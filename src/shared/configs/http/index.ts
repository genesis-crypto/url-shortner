import express from 'express'
import helmet from 'helmet'
import swaggerUi from 'swagger-ui-express'
import * as json from '../swagger/swagger.json'

export const app = express()

app.use(helmet())
app.use(express.json());
app.use('/doc', swaggerUi.serve, swaggerUi.setup(json))