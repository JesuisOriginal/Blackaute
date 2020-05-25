const main = require('../index');
const { schema } = require('../../schemas/product/index');
const { toArray } = require('../../schemas/utils/stringArray');


const get = async (req, res) => {
  const { id } = req.query;
  return res.json(await main.index(id, 'product'));
}

const post = async (req, res) => {
  const { title, description = '', images = [] } = req.body;
  if (title) {
    return res.json(await main.post(schema(title, description, images)))
  }
  return ({
    status: 'not submited',
    content: []
  })
};

const update = async (req, res) => {
  const { id, title, description, images } = req.query;
  let params = [];
  if (title) {
    params.push({
      label: 'title',
      value: title
    });
  };
  if (description) {
    params.push({
      label: 'description',
      value: description
    });
  };
  if (images) {
    params.push({
      label: 'images',
      value: toArray(images)
    });
  };
  return res.json(await main.update('product', id, params));
};



module.exports = ({
  get,
  update,
  post
});