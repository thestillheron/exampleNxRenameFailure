import * as express from 'express';
import { Message } from '@example/api-interfaces';
import { SIMPLE_CONSTANT } from './example-import'

console.log(SIMPLE_CONSTANT)
const app = express();

const greeting: Message = { message: 'Welcome to api!' };

app.get('/api', (req, res) => {
  res.send(greeting);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
