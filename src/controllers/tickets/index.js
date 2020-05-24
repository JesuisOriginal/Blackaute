const { content } = require('../../server/db/index');
const { schema } = require('../../schemas/ticket/index');
const { defaultResponse } = require('../constants');

const get = async (req, res) => {
  const { id = null } = req.query;
  console.log('GEtting');
  let result = defaultResponse;
  if (id) {
    result.status = 'found';
    result.content = await content
      .where('meta.schema', '==', 'ticket')
      .where('meta.id', '==', id)
      .get()
      .then(snapshot => (
        snapshot.docs.map(_doc => (
          _doc.data()
        ))
      ));
  } else {
    result.status = 'found';
    result.content = await content
      .where('meta.schema', '==', 'ticket')
      .get()
      .then(snapshot => (
        snapshot.docs.map(_doc => (
          _doc.data()
        ))
      ));
  }
  return res.json(result);
};

const add = async (req, res) => {
  const { productsIds, lat, lon } = req.body;
  let result = defaultResponse;
  result.status = 'not_completed'

  if (lat, lon) {
    const newTicket = schema(productsIds, lat, lon);

    result.status = 'submited';
    result.content = await content.add(newTicket);
  }

  return res.json(result);
};

// const update = async (req, res) => {
//   const { id, productsIds, status } = req.params
// }



module.exports = ({
  get,
  add
})