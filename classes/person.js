class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  // instance method
  introduce() {
    console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`);
  }

  // static method
  static introducePeople(arr) {

    if(Array.isArray(arr) === false) {
      console.log("introducePeople only takes an array as an argument.");
    }

    for (let i = 0; i < arr.length; i++) {
      let people = arr[i];
      if (people instanceof Person === false) {
        console.log("All items in array must be Person class instances.");
      }
      else {
        people.introduce();
      }
    }
  }

}


/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
