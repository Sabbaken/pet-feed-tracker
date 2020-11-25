const {
  admin,
  db,
} = require('./admin');

const userCreate = (user) => {
  const userRef = db.collection('users').doc(user.uid);
  userRef.set({ pets: [] });

  return admin.auth().setCustomUserClaims(user.uid, {
    admin: false,
    premium: false,
  });
};

module.exports = userCreate;
