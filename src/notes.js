const person = {
  name: "Cameron",
  walk() {
    console.log("walk");
  },
};

class Person {
  constructor(name) {
    this.name = name;
  }
  walk() {
    console.log("walk");
  }
}

const person = new Person();
