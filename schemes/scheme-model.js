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
  
async function add(scheme) {
    const idArr = await db('schemes').insert(scheme);
    return findById(idArr[0]);
}
  
async function update(changes, id) {
  await db('schemes').where({ id }).update(changes);
  return findById(id);
}
  
function remove(id) {
  return db('schemes').where({ id }).del();
}

// STRETCH
async function findStepsById(scheme_id, id) {
    const step = await findSteps(scheme_id).where('steps.id', id);
    return step;
}

async function addStep(step, scheme_id) {
    const id = await db('steps').insert({ ...step, scheme_id })
    return findStepsById(scheme_id, id[0]);
}

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove,
    addStep
}