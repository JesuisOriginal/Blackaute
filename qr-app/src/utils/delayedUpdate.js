import { products } from "../services/db/storage/";

export default function delayedUpdate(barrel, name) {
  var updatingDoc = products.doc(name);
  updatingDoc.update(barrel);
  console.log(">updated " + name);
}
