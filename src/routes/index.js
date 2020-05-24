const { Router } = require('express');
const { content } = require('../server/db/index');

const create = require('../schemas/product/index');

const tickets = require('../controllers/tickets');

const routes = Router();

routes.get('/server_test', (req, res) => {
    const data = content.get()
        .then((querySnapshot) => {
            querySnapshot.forEach(doc => (
                console.log(doc.id)
            ))
        });

});

routes.get('/tickets', tickets.get);
routes.post('/tickets', tickets.add);


//create ticket
// routes.post('/ticket', async (req, res) => {
//     const productsIds = req.body;
//     const newTicket = ticket.create(productsIds);
//     await content.add(newTicket)
//         .then(response => (
//             res.json({status:'submited',content: newTicket})
//         ))
// });

// routes.get('/ticket', async (req, res) => {
//     const query = req.query;
//     const data = await content
//         .where('meta.id','==',req.query.id)
//         .get()
//         .then((snapshot) => (
//              snapshot.docs.map(_doc => (
//                  _doc.data()
//              ))[0]
//         ))
//     res.json(data);
// })

routes.get('/server_put', (req, res) => {
    content.add(create('teste'))
})

module.exports = (routes);
