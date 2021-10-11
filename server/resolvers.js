const knex = require("./knex");

module.exports = {
    Query: {
        Houses: async () => {
            let result = await knex.select("*").from('houses');
            return result;
        },
        HouseByNameOrID: async (parents, args) => {
            if (!isNaN(Number(args.input))) {
                let result = await knex.select("*").from('houses').where('id', Number(args.input));
                return result[0]
            }

            let result =  await knex.select("*").from('houses').where('house_name', args.input);
            return result[0]
        },
        Students: async () => {
            let result = await knex.select("*").from('students');
            return result;
        },
        //Fix for full name searches
        StudentByNameOrID: async (parents, args) => {
            if (!isNaN(Number(args.input))) {
                let result = await knex.select("*").from('students').where('id', Number(args.input));
                return result[0]
            }

            let result =  await knex.select("*").from('students').where('first_name', args.input).orWhere('last_name', args.input);
            return result[0]
        },
        StudentsByHouse: async (parents, args) => {
            let result = await knex.select("*").from('students').where('house', args.input);
            return result
        },
        Professors: async () => {
            let result = await knex.select("*").from('professors');
            return result;
        },
        ProfessorByNameOrID: async (parents, args) => {
            if (!isNaN(Number(args.input))) {
                let result = await knex.select("*").from('professors').where('id', Number(args.input));
                return result[0]
            }

            let result =  await knex.select("*").from('professors').where('first_name', args.input).orWhere('last_name', args.input);
            return result[0]
        }
    }
}