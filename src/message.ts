import { amountVariable } from './utils/generateaAmountVariable'

export const queueName = 'minhafila.queue'
export async function message() {
  return {
    user: 'Bruno',
    amount: await amountVariable(),
    pyment: 'pix',
    status: 'paid'
  }

}

//MESAGEM DA BITCAPITAL
/* const message = {
  "id": "606901f7-cdeb-4399-9e7d-b0f919fd012a",
  "entity": "transaction",
  "status": "executed",
  "transaction": {
    "id": "34731f0e-c45f-4645-bed6-771a72e7e680",
    "type": "payment",
    "status": "executed",
    "payments": [
      {
        "id": "8b176b66-c1af-49c3-950f-e7ad600387e5",
        "type": "boleto",
        "amount": "0.41",
        "status": "settled"
      }
    ],
    "additionalData": {
      "id": "606901f7-cdeb-4399-9e7d-b0f919fd012a",
      "extra": {
        "dueDate": "2023-03-08T00:00:00.000Z",
        "externalId": "PIBcd48ccfa72b84e46bbb086039f9adcf7"
      },
      "status": "settled"
    }
  }
} */