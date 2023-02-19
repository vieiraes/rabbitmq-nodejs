import amqplib from 'amqplib'
import { message, queueName } from './message'


(async () => {
  const conn = await amqplib.connect('amqp://localhost:5673')
  const ch1 = await conn.createChannel()
  await ch1.assertQueue(queueName, { durable: true })

  setInterval(async () => {
    const mountedMessage = await message()
    await ch1.sendToQueue(queueName, Buffer.from(JSON.stringify(mountedMessage)));
    const checkQueue = await ch1.checkQueue(queueName)
    if (checkQueue !== null) {
      console.log(`Fila criada:"${checkQueue.queue}" \nMensagens:${checkQueue.messageCount} \nConsumidas:${checkQueue.consumerCount}`)
    }
    console.log(`Producer:${JSON.stringify(mountedMessage)}`)

  }, 300);
})();