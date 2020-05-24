const main = require('../index');
const { schema } = require('../../schemas/ticket/index');
const { defaultResponse } = require('../constants');
const { toArray, toString } = require('../../schemas/utils/stringArray');

const get = async (req, res) => {
  const { id = null } = req.query;
  console.log('GEtting');
  return res.json(await main.index(id, 'ticket'));
};

const add = async (req, res) => {
  const { lat, lon, productsIds } = req.body;
  const result = defaultResponse;
  result.status = 'not_completed';

  if (lat, lon) {

    const newTicket = schema(toArray(productsIds), lat, lon);
    return res.json(await main.post(newTicket));
  }
  return res.json({ status: 'not_submited', content: [] });
};

const update = async (req, res) => {
  const { id, productsIds, lat, lon, status, costumerId } = req.query;
  if (id) {
    let params = [];
    if (lat, lon) {
      params = [
        {
          label: 'location',
          value: { lat, lon }
        },
      ]
    } else if (productsIds) {
      params = [
        {
          label: 'productsIds',
          value: toArray(productsIds)
        },
      ]
    } else if (status) {
      params = [
        {
          label: 'status',
          value: status
        }
      ]
    }
    else if(costumerId) {
      params = [
        {
          label:'costumerId',
          value: costumerId
        }
      ]
    }
    return res.json(await main.update('ticket', id, params));
  }

}

module.exports = ({
  get,
  add,
  update
})