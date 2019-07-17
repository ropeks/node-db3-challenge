const knex = require('knex');
const db = knex(require('../knexfile').development);

function find() {
    return db('schemes');
}
  
function findById(id) {
    return db('schemes').where({ id });
}
  
function findSteps() {
  
}
  
function add() {
  
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