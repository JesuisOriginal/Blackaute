import { products } from "../storage";
import { create } from "../utils/geopoint";

export function update(position, docName) {
  var newDoc = products.doc("QR" + docName);
  console.log("new doc of name: ", docName);
  newDoc
    .set({
      location: create(position.coords),
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
