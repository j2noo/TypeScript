{
  //추상클래스 user
abstract class User {
  constructor(protected firstName: string, protected lastName: string) {}

  abstract sayHi(name: string): string;
  abstract fullName(): string;
}

class Player extends User {
  sayHi(name: string): string {
    return `say hi to ${name}`;
  }
  fullName(): string {
    return this.firstName + " " + this.lastName;
  }
}

const nico: Player = new Player("nico", "las");
console.log(nico.sayHi("jinoo"));

///

interface User2 {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
}

class Player2 implements User2 {
  constructor(public firstName: string, public lastName: string) {}
  public sayHi(name: string): string {
    return `say hi to ${name}`;
  }
  public fullName(): string {
    return this.firstName + " " + this.lastName;
  }
}

}