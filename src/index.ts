import express from 'express'
import { Router } from 'express'
// import { connectionAmqp } from './connection'
import { message, queueName } from './message'


//AMQP
// export const amqpConnection = connectionAmqp(queueName).then(() => {
//   console.log('Conectado com sucesso ao amqp')
// })

//EXPRESS
const app = express()
const router = Router()
app.use(router)
app.listen(3000, () => {
  console.log('Server is nunning in 3000 port')
})
