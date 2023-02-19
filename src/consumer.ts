import amqplib from 'amqplib';
import { queueName } from './message';


async function consumer(channel) {
  await new Promise(resolve => setTimeout(resolve, 4000)); // pausa de 2 segundos
  await channel.consume(queueName, (msg) => {
    if (msg !== null) {
      console.log('Consumed:', msg.content.toString())
    } else {
      console.log('Consumer cancelled by server')
    }
  }, { noAck: true }) // precisa do noAck para não dar erro de ack
}

(async () => {
  const conn = await amqplib.connect('amqp://localhost:5673')
  const channel = await conn.createChannel()
  await channel.assertQueue(queueName)
  await consumer(channel)
})()
