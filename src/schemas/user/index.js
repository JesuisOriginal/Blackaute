const meta = require('../index');
const location = require('../utils/location');
const {roles, status} = require('./constants');

const create = (name, role, lat, lon) => ({
  meta: meta('user'),
  location: location(lat, lon),
  info: {
    name,
    reg_code:'',
  },
  role_content: roles[role],
  status: status[0]
});


module.exports = (create);