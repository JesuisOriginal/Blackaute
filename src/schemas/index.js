const create = (schema) => ({
    schema,
    id:`${schema.charAt(0)}${Math.random(0,100000)}`,
    created_at: new Date().toLocaleDateString(),
    modified_at: new Date().toLocaleDateString(),
});

module.exports = (create);