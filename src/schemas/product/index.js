const schema = require('../index');

const create = (title, description = '', images = []) => ({
  meta: schema('product'),
  title,
  description,
  images
});

module.exports = (create);