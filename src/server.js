/* eslint-disable no-console */
// src/server.js
// eslint-disable-next-line import/no-extraneous-dependencies
import { createServer, Model } from 'miragejs';

export function makeServer({ environment = 'development' } = {}) {
  const server = createServer({
    environment,
    models: {
      user: Model,
      ong: Model,
    },

    // eslint-disable-next-line no-shadow
    seeds(server) {
      server.create('ong', {
        id: 1322,
        name: 'AATAN',
        email: 'aatan@gmail.com',
        whatsapp: '15988091823',
        cidade: 'Sorocaba',
        uf: 'SP',
      });
    },

    routes() {
      this.namespace = 'api';

      // this.get('/users', (schema) => {
      //   return schema.users.all();
      // });

      this.post('/login', (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        console.log(attrs);
        schema.create('ong', attrs);
        console.log(schema.ongs.all());
      });
      this.get('/ongs', (schema, request) => {
        return schema.ongs.all();
      });
    },
  });

  return server;
}
