# api-hogwarts
This was created during my time as a student at Code Chrysalis!
  
# Introduction
Hogwarts API is made by a potterhead. 

# Schema
1. Houses
    - id
    - house name
    - founder
    - animal

2. Students
    - id
    - first name
    - last name
    - gender
    - house

3. Professors
    - id
    - first name
    - last name
    - gender

# Queries
- Houses: returns all the houses in Hogwarts
- HousesByNameOrID: returns the house with the given name or ID
- Students: returns all the students in Hogwarts
- StudentByNameORID: returns the student with the given name or ID
- Students: returns all the professors in Hogwarts
- StudentByNameORID: returns the professor with the given name or ID

# Mutations
- addStudent: takes an object with a student's details and adds it to the database
- addProfessor: takes an object with a professors's details and adds it to the database
- editStudent: takes two parameters, one for the name or ID of the student, and the values they want to updated.
- editStudent: takes two parameters, one for the name or ID of the professor, and the values they want to updated.
- deleteStudent: takes a student's name or ID and, deletes them from the database.
- deleteProfessor: takes a professor's name or ID and, deletes them from the database.
