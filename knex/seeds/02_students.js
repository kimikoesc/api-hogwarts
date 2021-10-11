
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {first_name: 'Harry', last_name: 'Potter', gender: 'M', house: 'Gryffindor'},
        {first_name: 'Hermione', last_name: 'Granger', gender: 'F', house: 'Gryffindor'},
        {first_name: 'Ronald', last_name: 'Weasley', gender: 'M', house: 'Gryffindor'},
        {first_name: 'Fred', last_name: 'Weasley', gender: 'M', house: 'Gryffindor'},
        {first_name: 'George', last_name: 'Weasley', gender: 'M', house: 'Gryffindor'},
        {first_name: 'Seamus', last_name: 'Finnigan', gender: 'M', house: 'Gryffindor'},
        {first_name: 'Neville', last_name: 'Longbottom', gender: 'M', house: 'Gryffindor'},
        {first_name: 'Parvati', last_name: 'Patil', gender: 'F', house: 'Gryffindor'},
        {first_name: 'Ginny', last_name: 'Weasley', gender: 'F', house: 'Gryffindor'},
        {first_name: 'Cedric', last_name: 'Diggory', gender: 'M', house: 'Hufflepuff'},
        {first_name: 'Hannah', last_name: 'Abbott', gender: 'F', house: 'Hufflepuff'},
        {first_name: 'Susan', last_name: 'Bones', gender: 'F', house: 'Hufflepuff'},
        {first_name: 'Cho', last_name: 'Chang', gender: 'F', house: 'Ravenclaw'},
        {first_name: 'Padma', last_name: 'Patil', gender: 'F', house: 'Ravenclaw'},
        {first_name: 'Luna', last_name: 'Lovegood', gender: 'F', house: 'Ravenclaw'},
        {first_name: 'Gregory', last_name: 'Goyle', gender: 'M', house: 'Slytherin'},
        {first_name: 'Draco', last_name: 'Malfoy', gender: 'M', house: 'Slytherin'},
        {first_name: 'Theodor', last_name: 'Nott', gender: 'M', house: 'Slytherin'},
        {first_name: 'Vincent', last_name: 'Crabbe', gender: 'M', house: 'Slytherin'}
      ]);
    });
};
