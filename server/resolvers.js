const knex = require("../knex/knex");

module.exports = {
    Query: {
        Houses: async () => {
            let result = await knex.select("*").from('houses');
            return result;
        },
        HouseByNameOrID: async (_, args) => {
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
        StudentByNameOrID: async (_, args) => {
            if (!isNaN(Number(args.input))) {
                let result = await knex.select("*").from('students').where('id', Number(args.input));
                return result[0]
            }

            let nameArr = args.input.split(" ");
            let result =  await knex.select("*").from('students').where({ first_name: nameArr[0], last_name: nameArr[1] });
            return result[0]
        },
        StudentsByHouse: async (_, args) => {
            let result = await knex.select("*").from('students').where('house', args.input);
            return result
        },
        Professors: async () => {
            let result = await knex.select("*").from('professors');
            return result;
        },
        ProfessorByNameOrID: async (_, args) => {
            if (!isNaN(Number(args.input))) {
                let result = await knex.select("*").from('professors').where('id', Number(args.input));
                return result[0]
            }

            let nameArr = args.input.split(" ");
            let result =  await knex.select("*").from('professors').where({ first_name: nameArr[0], last_name: nameArr[1] });
            return result[0]
        }
    },
    Mutation: {
        addStudent: async (_, args) => {
            await knex('students').insert([
                {
                first_name: args.input.first_name,
                last_name: args.input.last_name,
                gender: args.input.gender,
                house: args.input.house
                }
            ]);
            return `Welcome to Hogwarts, ${args.input.first_name}!`
        },
        addProfessor: async (_, args) => {
            await knex('professors').insert([
                {
                first_name: args.input.first_name,
                last_name: args.input.last_name,
                gender: args.input.gender,
                }
            ]);
            return `Welcome to Hogwarts, Professor ${args.input.last_name}!`
        },
        editStudent: async (_, args) => {
            if (!isNaN(Number(args.NameorID))) {
                await knex('students').where('id', Number(args.NameorID)).update(args.changes);
            } else {
                let nameArr = args.NameorID.split(" ");
                await knex('students').where({ first_name: nameArr[0], last_name: nameArr[1] }).update(args.changes);
            }
            return "Updated!"
        },
        editProfessor: async(_, args) => {
            if (!isNaN(Number(args.NameorID))) {
                await knex('professors').where('id', Number(args.NameorID)).update(args.changes);
            } else {
                let nameArr = args.NameorID.split(" ");
                await knex('professors').where({ first_name: nameArr[0], last_name: nameArr[1] }).update(args.changes);
            }
            return "Updated!"
        },
        deleteStudent: async (_, args) => {
            if (!isNaN(Number(args.NameorID))) {
               await knex('students').where('id', Number(args.NameorID)).del();
            } else {
                let nameArr = args.NameorID.split(" ");
                await knex('students').where({ first_name: nameArr[0], last_name: nameArr[1] }).del();
            };
            return "They have been sent to Azkaban!"
        },
        deleteProfessor: async(_, args) => {
            if (!isNaN(Number(args.NameorID))) {
                await knex('professors').where('id', Number(args.NameorID)).del();
             } else {
                 let nameArr = args.NameorID.split(" ");
                 await knex('professors').where({ first_name: nameArr[0], last_name: nameArr[1] }).del();
             };
             return "They have been sent to Azkaban!"
        }
    }
}