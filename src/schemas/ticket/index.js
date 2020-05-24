// const location = require('../utils/location');
const meta = require('../index');
const { status } = require('./constants');

const schema = (productsIds = []) => ({
  meta: meta('ticket'),
  location: {},
  productsIds,
  status: status[0]
});

module.exports = ({schema});