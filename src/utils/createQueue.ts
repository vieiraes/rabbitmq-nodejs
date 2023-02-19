//Em RabbitMQ, um bind é uma associação entre uma fila e uma exchange. Para criar um bind em uma fila existente em Node.js, você pode usar o método bindQueue disponível na biblioteca amqplib. Aqui está um exemplo de como criar um bind entre uma fila chamada myQueue e uma exchange chamada myExchange com a chave de roteamento myRoutingKey:
//TODO: fazer as rotas para esse exemplo
import amqplib from 'amqplib';

async function createBind() {
  const queueName = 'myQueue';
  const exchangeName = 'myExchange';
  const routingKey = 'myRoutingKey';

  const conn = await amqplib.connect('amqp://localhost');
  const channel = await conn.createChannel();

  // Define a exchange
  await channel.assertExchange(exchangeName, 'direct', { durable: true });

  // Define a queue
  await channel.assertQueue(queueName, { durable: true });

  // Bind the queue to the exchange with a routing key
  await channel.bindQueue(queueName, exchangeName, routingKey);

  console.log(`Bind created between ${queueName} and ${exchangeName} with ${routingKey}`);
}

createBind().catch(console.error);