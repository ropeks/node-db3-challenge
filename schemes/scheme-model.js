const knex = require('knex');
const db = knex(require('../knexfile').development);

function find() {
    return db('schemes');
}
  
function findById(id) {
    return db('schemes').where({ id });
}
  
function findSteps(id) {
    return db("steps")
      .select('steps.id as id', 'scheme_name', 'step_number', 'instructions')
      .join('schemes', 'steps.scheme_id', 'schemes.id')
      .where('schemes.id', id);
}
  
function add(scheme) {
    return db('schemes').insert(scheme);
}
  
function update() {
  
}
  
function remove() {
  
}

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}