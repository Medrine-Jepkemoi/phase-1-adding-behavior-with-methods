// Your code here

//cat class
class Cat {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }

  speak() {
    return `${this.name} says meow!`;
  }
}

const cat = new Cat("Maya", "male");
console.log(cat.speak());

//dog class
class Dog {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }

  speak() {
    return `${this.name} says woof!`;
  }
}

const dog = new Dog("Enzo", "female");
console.log(dog.speak());

//bird class
class Bird {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }

  speak() {
    if (this.sex === "male") {
      return `It's me! ${this.name}, the parrot!`;
    }

    return `${this.name} says squawk!`;
  }
}

const bird = new Bird("Parroti", "female");
console.log(bird.speak());
