import { products } from "../storage";
import { generate } from "../utils/geopoint";

export async function update(position, docName) {
  var Updating = products.doc(docName);
  console.log('>Updating doc',Updating);
  console.log("new doc of name: ", docName);
  var doSomething = true;

  var payload = await Updating.get()
  .then(doc => {
    if (!doc.exists) {
      console.log(">N existe");
      doSomething = false;
    }
    else {
      console.log(">DocData",doc.data());
      return doc.data().payload;
    }
  })
  .catch(err => {
    console.log('Error getting document', err);
  });

  if (doSomething) {
    console.log("payload", payload);

    var coords = generate(position);
  
    var newRelated = payload.related;
    console.log("newRelated", newRelated);
  
    newRelated.forEach((element, index) => {
        element.description.coords = coords;
        console.log("element at index", index, element);
    });
  
    payload.related = newRelated;
    const status = ['Saindo Pra Entrega', 'Chegou no Bar', 'Saiu do Bar', 'Retornou a Ekäut'];
    var nextStatus = status.indexOf( payload.content.status ) + 1;
  
    if (nextStatus < 3) {
      payload.content.status = status[nextStatus];
    }
  
  
  
    console.log("new payload", payload);
  
    await Updating
      .set({
        payload
      })
      .then(function () {
        console.log("Barrel Updated, check Firebase Console...");
      })
      .catch(function (error) {
        console.log("Error, whos hunting you: ", error);
      });
  }
}

export async function index(handleAdd) {
  const result = [];
  await products.onSnapshot((data) =>
    data.docs.map((_doc) => {
      // console.log("_doc",_doc.data());
      handleAdd(_doc.data());
    })
  );
  return result;
}
