const { content } = require('../server/db/index');

const index = async (id = null, schema = null) => {
  let result = {status:'submited', content:[]}
  if (id && schema) {
    return result.content = (
      await content
        .where('meta.schema', '==', schema)
        .where('meta.id', '==', id)
        .get()
        .then(snapshot => (
          snapshot.docs.map(_doc => (
            _doc.data()
          ))
        ))
    );
  } else if (schema) {
    return result.content = (
      await content
        .where('meta.schema', '==', schema)
        .get()
        .then(snapshot => (
          snapshot.docs.map(_doc => (
            _doc.data()
          ))
        ))
    );
  }
  return result.content = (
    await content
      .get()
      .then(snapshot => (
        snapshot.docs.map(_doc => (
          _doc.data()
        ))
      ))
  );
};

const post = async (newContent) => {
  if(newContent && newContent.meta && newContent.meta.id && newContent.meta.schema) {
    const exists = await index(newContent.meta.id,newContent.meta.schema);
    
    if(exists.length){
      return ({
        status: 'already exists',
        content:[]
      });
    } else {
      return await content
        .add(newContent)
        .then(() => ({
          status:'submited',
          content: newContent
        }))
    }
  }
  return ({
    status:'not submited',
    content:[]
  });
}

// params = [
//   {
//     label:'element',
//     value:ssss
//   }
// ]

const update = async (schema, id, params) => {
  let toUpdate = (
    await content
      .where('meta.schema', '==', schema)
      .where('meta.id', '==', id)
      .get()
      .then(snapshot => ({
        doc_id: snapshot.docs[0].id,
        el: snapshot.docs[0].data()
      }
      ))
  );

  if(!toUpdate) {
    return ({
      status: 'not found',
      content: []
    })
  }

  params.el.meta.updated_at = new Date().toLocaleDateString();

  params.map(param => (
    toUpdate.el[param.label] = param.value
  ));

  return await content
    .doc(toUpdate.doc_id)
    .update(toUpdate.el)
    .then(() => ({
      status: 'updated',
      content: toUpdate.el
    }));
};

module.exports = ({
  index,
  post,
  update
})