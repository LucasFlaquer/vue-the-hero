// src/server.js
// eslint-disable-next-line import/no-extraneous-dependencies
import { createServer, Model } from 'miragejs';

export function makeServer({ environment = 'development' } = {}) {
  const server = createServer({
    environment,

    models: {
      user: Model,
    },

    // eslint-disable-next-line no-shadow
    seeds(server) {
      server.create('user', { name: 'Bob' });
      server.create('user', { name: 'Alice' });
    },

    routes() {
      this.namespace = 'api';

      this.get('/users', (schema) => {
        return schema.users.all();
      });
    },
  });

  return server;
}
