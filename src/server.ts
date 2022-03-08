/* eslint-disable no-shadow */
/* eslint-disable no-console */
// src/server.js
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  belongsTo,
  createServer,
  Factory,
  hasMany,
  Model,
  Response,
  Serializer,
} from 'miragejs';
import faker from '@faker-js/faker';

export function makeServer({ environment = 'development' } = {}) {
  const server = createServer({
    environment,
    models: {
      ong: Model.extend({
        cases: hasMany('case'),
      }),
      case: Model.extend({
        ong: belongsTo('ong'),
      }),
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
      case: Factory.extend({
        title() {
          return faker.lorem.words(5);
        },
        description() {
          return faker.lorem.paragraph(1);
        },
        value() {
          return faker.finance.amount(200, 300);
        },
      }),
    },
    serializers: {
      application: Serializer,
      ong: Serializer.extend({
        include: ['cases'],
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
        cases: server.createList('case', 10),
      });
      server.createList('ong', 5);
    },

    routes() {
      this.namespace = 'api';
      this.post('/logon', (schema, request) => {
        const payload = JSON.parse(request.requestBody);
        const ong = schema.findBy('ong', { code: payload.id });
        if (ong) return new Response(200, {}, ong);
        return new Response(401, {}, { error: 'Ong ID invalid' });
      });
      this.get('/ongs');
      // this.get('/ongs/:id');
      this.get('/ongs/:code', (schema, request) => {
        const ong = schema.findBy('ong', { code: request.params.code });
        console.log(ong);
        if (ong) return new Response(200, {}, ong);
        return new Response(401, {}, { error: 'Ong ID invalid' });
      });
    },
  });

  return server;
}
