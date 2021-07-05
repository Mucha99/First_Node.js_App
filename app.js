const fs = require('fs');

const genders = ['M', 'F'];
const maleNames = ['Jake', 'Jack', 'Harry', 'Jacob', 'George', 'James', 'William', 'Connor'];
const femaleName = ['Aurora', 'Brooke', 'Charlotte', 'Gabriella', 'Hannah', 'Kelly', 'Vera', 'Sophie'];
const lastName = ['Smith', 'Jones', 'Williams', 'Thomas', 'Roberts', 'Harris', 'Jackson', 'Green'];
const ages = [12, 19, 36, 9, 65, 44, 23, 31];

const rendChoice = (arr) => {
   return arr[Math.floor(Math.random() * arr.length)];
};

const people = [];

for (let i=0; i<20; i++) {
   let person = {};

   person.gender = rendChoice(genders)

   if(person.gender === 'M') {
      person.name = rendChoice(maleNames);
   } else {
      person.name = rendChoice(femaleName);
   }

   person.lastName = lastName[Math.floor(Math.random() * lastName.length)];

   person.age = rendChoice(ages);

   people.push(person);
};

const data = JSON.stringify(people);

fs.writeFile('people.json', data, (err) => {
   if (err) throw err;
   console.log('The file has been saved!');
});
