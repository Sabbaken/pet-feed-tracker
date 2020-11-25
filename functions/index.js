const functions = require('firebase-functions');

const userCreate = require('./userCreate');

const runtimeOpts = {
  timeoutSeconds: 60,
  memory: '128MB',
};

// On new user sign up
exports.newUserSignup = functions
  .runWith(runtimeOpts)
  .region('europe-west3')
  .auth
  .user()
  .onCreate(userCreate);
