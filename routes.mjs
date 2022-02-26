import db from './models/index.mjs';

// import your controllers here
import initBugsController from './controllers/bugs.mjs';
import initFeaturesController from './controllers/features.mjs';

export default function bindRoutes(app) {
  // initialize the controller functions here
  const BugsController = initBugsController(db);
  const FeatureController = initFeaturesController(db);

  // pass in the db for all callbacks
  app.get('/', BugsController.index);
  app.post('/', BugsController.postBug);
  app.get('/features', FeatureController.allFeatures);
  app.post('/add-feature', FeatureController.addFeature);
  // define your route matchers here using app
}
