const db = require('../database/dbConfig');
module.exports = {
    findById,
    findByUsername,
    add,
};
async function findById(id) {
    try {
        return await db('users')
            .select('*')
            .where({ id })
            .first();
    } catch (error) {
        console.error('ERROR FINDING USER: ', error);
    }
}
async function findByUsername(username) {
    try {
        return await db('users')
            .select('*')
            .where({ username })
            .first();
    } catch (error) {
        console.error('ERROR FINDING USER: ', error);
    }
}
async function add(user) {
    console.log('Attemping to add: ', user);
    try {
        const newUser = await db('users')
            .insert(user)
            .returning('*');
        console.log('Should have added the user: ', newUser);
        return newUser;
    } catch (error) {
        console.error('THERE WAS AN ERROR ADDING!!!', error);
    }
}
