import Express from 'express'
import path from 'path'
import _ from 'lodash'
import compression from 'compression'
import { Server } from 'http'
import { apiHotelController } from './controllers/api.hotels.controller'

const dist = path.join(__dirname, '/../dist');
const client = path.join(__dirname, '/../app');
const app = new Express();

app.use(compression({
    threshold: 0
  }))
  .use('/dist', Express.static(dist))
  .get('/api/hoteles/:destinationId', apiHotelController)
  .get('*', (req, res) => {
    res.sendFile(path.join(client, '/index.html'));
  });

// start the server
const server = new Server(app);
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
server.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
});