//Nesse exemplo, estamos usando o método assertExchange para criar a exchange com o nome "myExchange", tipo "direct" e opções que indicam que ela deve ser durável. Caso a exchange já exista, o método apenas retorna informações sobre ela, sem sobrescrevê-la. Por fim, fechamos a conexão com o RabbitMQ usando os métodos close(). Lembre-se de que, para criar uma exchange, você precisa estar conectado a um servidor RabbitMQ. No exemplo acima, estamos nos conectando à instância local do RabbitMQ (amqp://localhost), mas você pode alterar a URL de conexão conforme sua necessidade.
//TODO: fazer as rotas para esse exemplo
import amqplib from 'amqplib';
const exchangeName = 'myExchange';
const exchangeType = 'direct';
const exchangeOptions = {
  durable: true,
};

async function createExchange() {
  const connection = await amqplib.connect('amqp://localhost');
  const channel = await connection.createChannel();
  await channel.assertExchange(exchangeName, exchangeType, exchangeOptions);
  console.log(`Exchange ${exchangeName} criada com sucesso!`);
  await channel.close();
  await connection.close();
}

createExchange();
