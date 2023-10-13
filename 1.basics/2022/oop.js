// create an object

class Person {

    static firstName = "Vidusha Wijekoon";

    constructor(name, age, phoneNumber) {
        this.name = name;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.city = "Dubai";
    }

    displayName() {
        console.log(`your name is ${this.name}`);
    }
}

const person1 = new Person('Vidusha', 34, '234560');
const person2 = new Person('Wijekoon', 34, '234560');
const person3 = new Person('No Body', 44, '212321334560');

console.log(person1);
console.log(person2);

console.log(person1.name);
console.log(person1.age);
console.log(person1.displayName());
console.log(Person.firstName);
console.log(Person.firstName);

class Mod extends Person{
    type = "mod";
    id;
    constructor(name, age, phoneNumber, id) {
        super(name, age, phoneNumber);
        this.id = id;
    }
    deleteUser(user) {
        users = users.filter(el => {
            el.phoneNumber != user.phoneNumber
        });
    }
}

let users = [person1, person2, person3]
console.log(users);