import { products } from "../storage";
import { generate } from "../utils/geopoint";

export async function update(position, docName) {
  var newDoc = await products.doc("QR" + docName);
  console.log('NewDOc',newDoc);
  console.log("new doc of name: ", docName);
  await newDoc
    .set({
      location: await generate(position),
    })
    .then(function () {
      console.log("Barrel Added, check Firebase Console...");
    })
    .catch(function (error) {
      console.log("Error, whos hunting you: ", error);
    });
}

export async function index(handleAdd) {
  const result = [];
  await products.onSnapshot((data) =>
    data.docs.map((_doc) => {
      handleAdd(_doc.data());
    })
  );
  return result;
}
