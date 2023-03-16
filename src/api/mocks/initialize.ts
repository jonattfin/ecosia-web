import {seedDb} from "@/api/mocks/seed-db";

export const initializeMocks = () => {
  if (process.env.NODE_ENV === 'development') {
    const {server} = require('./server');
    server.listen();
  }
  seedDb();
}
