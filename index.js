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
}

//bird class
class Bird {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
}
