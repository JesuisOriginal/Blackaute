// const location = require('../utils/location');
const meta = require('../index');
const { status } = require('./constants');
const location = require('../utils/location');

const schema = (productsIds = [], lat, lon) => ({
  meta: meta('ticket'),
  location: location(lat,lon),
  productsIds,
  costumerId:'',
  status: status[0]
});

module.exports = ({schema});