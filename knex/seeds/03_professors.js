
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('professors').del()
    .then(function () {
      // Inserts seed entries
      return knex('professors').insert([
        {first_name: 'Albus', last_name: 'Dumbledore', gender: 'M'},
        {first_name: 'Dolores', last_name: 'Umbridge', gender: 'F'},
        {first_name: 'Minerva', last_name: 'McGonagall', gender: 'F'},
        {first_name: 'Quirinus', last_name: 'Quirrel', gender: 'M'},
        {first_name: 'Remus', last_name: 'Lupin', gender: 'M'},
        {first_name: 'Rubeus', last_name: 'Hagrid', gender: 'M'},
        {first_name: 'Severus', last_name: 'Snape', gender: 'M'},
        {first_name: 'Barthemius', last_name: 'Crouch', gender: 'M'},
        {first_name: 'Gilderoy', last_name: 'Lockhart', gender: 'M'},
        {first_name: 'Pomona', last_name: 'Sprout', gender: 'F'},
        {first_name: 'Sybill', last_name: 'Trelawney', gender: 'F'}
      ]);
    });
};
