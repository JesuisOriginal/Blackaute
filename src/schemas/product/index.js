const meta = require('../index');

const schema = (title, description = '', images = []) => ({
  meta: meta('product'),
  title,
  description,
  images
});

module.exports = ({schema});