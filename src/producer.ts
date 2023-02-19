// import { channelAmqp, queueName, message } from './index'
// import { connectionAmqp } from './connection'
// import * as data from './message'


// // PRODUCER
// export const producer = setInterval(async (channel) => {

//   const producer = await channel.sendToQueue(data.queueName, Buffer.from(JSON.stringify(data.message)))
//   if (producer) {
//     console.log('Mensagem enviada com sucesso')
//   } else {
//     console.log('Falha ao enviar mensagem')
//   }
//   return producer
// }, 3000)

// let channel = connectionAmqp


// import { connectionAmqp } from './connection';
// import * as data from './message';

// (async () => {
//   const channel = await connectionAmqp();

//   setInterval(async () => {
//     const producer = await channel.sendToQueue(
//       data.queueName,
//       Buffer.from(JSON.stringify(data.message))
//     );
//     if (producer) {
//       console.log('Mensagem enviada com sucesso');
//     } else {
//       console.log('Falha ao enviar mensagem');
//     }
//   }, 3000);
// })();