const knex = require("./knex");

module.exports = {
    Query: {
        Houses: async () => {
            let result = await knex.select("*").from('houses');
            return result;
        },
        Students: async () => {
            let result = await knex.select("*").from('students');
            return result;
        },
        Professors: async () => {
            let result = await knex.select("*").from('professors');
            return result;
        }
    }

}