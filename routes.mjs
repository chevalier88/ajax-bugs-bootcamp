import db from './models/index.mjs';
import initBugsController from './controllers/bugs.mjs';
// import your controllers here

export default function bindRoutes(app) {
  // initialize the controller functions here
  const BugsController = initBugsController(db);

  // pass in the db for all callbacks
  app.get('/', BugsController.index);
  app.post('/', BugsController.post);
  // define your route matchers here using app
}
