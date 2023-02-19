# RabbitMQ-nodejs

This repository contains a simple example of using RabbitMQ with Node.js. The example consists of a producer and a consumer that communicate through a queue.

## Prerequisites
To run the example, you need to have Node.js and RabbitMQ installed on your machine.

## Installation
Clone this repository
Install the dependencies: npm install
Usage

### Start the producer
To start the producer, run the following command:

```
yarn producer
```
The producer will start sending messages to the queue.

### Start the consumer
To start the consumer, run the following command:

```
yarn consumer
```
The consumer will start consuming messages from the queue.

### Start the API
To start the API, run the following command:

```
yarn api
```

The API will start a web server that exposes an endpoint to send messages to the queue.

### Docker
To start RabbitMQ with Docker, run the following command:

```
yarn docker
```

This will start a RabbitMQ container.