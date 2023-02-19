//TODO: fazer as rotas para esse exemplo
/* Para criar um consumidor (consumer) para uma fila em RabbitMQ usando o módulo amqplib em Node.js, você pode seguir os seguintes passos: 
Crie uma conexão com o RabbitMQ usando o método connect() do amqplib.

Crie um canal (channel) usando o método createChannel() da conexão.

Crie a fila usando o método assertQueue() do canal.

Consuma a mensagem da fila usando o método consume() do canal. É necessário passar uma função de retorno de chamada (callback) que será executada quando uma nova mensagem for recebida na fila.

A função de retorno de chamada recebe a mensagem como argumento. É possível acessar o corpo da mensagem usando msg.content.toString(). Certifique-se de que a mensagem foi processada com sucesso e envie uma confirmação (acknowledgment) usando o método ack() do canal.

Quando não houver mais mensagens para consumir, feche o canal e a conexão usando os métodos close().

Neste exemplo, a função consume() cria uma conexão com o RabbitMQ, um canal e a fila com o nome 'minha.fila'.Em seguida, a função consome as mensagens da fila usando channel.consume().Observe que a opção { noAck: false } é passada como terceiro argumento para channel.consume(), o que significa que o cliente deve enviar uma confirmação para o RabbitMQ assim que a mensagem for processada com sucesso.
*/
import amqp from 'amqplib'
import { queueName, message, connectionAmqp } from '../connection';

const channel = connectionAmqp


setInterval(async () => {

  await function consume(message) {

    channel.consume(queueName, (message) => {
      const message = message.content.toString();
      console.log(`Mensagem recebida: ${message}`)
      // Processa a mensagem aqui
      channel.ack(message);
    }, { noAck: false });
  }

}, 4000)



consume();