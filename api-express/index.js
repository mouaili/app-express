const express = require('express');
const { success, uniqueId } = require('./helper');
const bodyParser = require('body-parser');

let products = require('./data');
const api = express();
const port = 8000;

api.use(bodyParser.json());

api.get('/', (req, res) => {
  res.send(
    '<h1 style="text-align:center;font-size: 2.3rem; font-family: Arial">Fiche de produits</h1>'
  );
});

api.get('/produits', (req, res) => {
  const msg = 'La liste des produits est trouvée';
  res.json(success(msg, products));
});

// api.get('/produits/:id', (req, res) => {
//   const id = parseInt(req.params.id);
//   const oneProduct = products.find(product => product.id === id);
//   const msg = `Le produit ${oneProduct.name} se trouve dans la liste`;
//   res.json(success(msg, oneProduct));
// });

api.get('/produits/:name', (req, res) => {
  const name = req.params.name;
  const product = products.find(product => product.name === name);
  const msg = `Le produit ${product.name} se trouve dans la liste`;
  res.json(success(msg, product));
});

api.post('/produits/:id', (req, res) => {
  const id = uniqueId(products);
  const newProduct = { ...req.body, ...{ id: id } };
  products.push(newProduct);
  const message = `Le produit ${id} est rajouté à la liste`;
  res.json(success(message, newProduct));
});

api.listen(port, (req, res) => {
  console.log(`http://localhost:${port}`);
});
