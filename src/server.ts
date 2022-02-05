/* eslint-disable no-console */
// src/server.js
// eslint-disable-next-line import/no-extraneous-dependencies
import { createServer, Factory, Model, Response } from 'miragejs';
import faker from '@faker-js/faker';

export function makeServer({ environment = 'development' } = {}) {
  const server = createServer({
    environment,
    models: {
      user: Model,
      ong: Model,
    },
    factories: {
      ong: Factory.extend({
        name(i) {
          return `ONG ${i}`;
        },
        email() {
          return faker.internet.email();
        },
        whatsapp() {
          return faker.phone.phoneFormats();
        },
        city() {
          return faker.address.city();
        },
        uf() {
          return faker.address.stateAbbr();
        },
        code() {
          return faker.random.alphaNumeric(8);
        },
      }),
    },
    seeds(server) {
      server.create('ong', {
        name: 'ONG 1',
        email: 'email',
        whatsapp: '15999998888',
        city: 'city',
        uf: 'SP',
        code: '123',
      });
      server.createList('ong', 5);
    },

    routes() {
      this.namespace = 'api';

      // this.get('/users', (schema) => {
      //   return schema.users.all();
      // });

      this.post('/logon', (schema, request) => {
        const payload = JSON.parse(request.requestBody);
        const ong = schema.ongs.findBy({ code: payload.id });
        if (ong) return new Response(200, {}, ong);
        return new Response(401, {}, { error: 'Ong ID invalid' });
      });
      this.get('/ongs');
    },
  });

  return server;
}
