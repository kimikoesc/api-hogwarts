
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('houses').del()
    .then(function () {
      // Inserts seed entries
      return knex('houses').insert([
        {house_name: 'Gryffindor', founder: 'Godric Gryffindor', animal: 'Lion'},
        {house_name: 'Hufflepuff', founder: 'Helga Hufflepuff', animal: 'Badger'},
        {house_name: 'Ravenclaw', founder: 'Rowena Ravenclaw', animal: 'Eagle'},
        {house_name: 'Slytherin', founder: 'Salazar Slytherin', animal: 'Snake'}
      ]);
    });
};
