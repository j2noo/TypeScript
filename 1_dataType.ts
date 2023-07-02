{
  type Age = number;
  type Name = string;

  type Player = {
    readonly name: Name; //값 변경 불가능
    age?: Age;
  };

  const player1: Player = {
    name: "jinwoo",
  };

  console.log(player1.age);

  function playerMaker(name: string): Player {
    return {
      name: name,
      //age속성이 없어도 Player 자료형이라는 것을 알고있음
    };
  }
  const nico = playerMaker("nico" + 1);
  console.log(nico);

  const playerMaker2 = (name: string): Player => ({ name: name });

  //*readonly
  const nums: readonly number[] = [1, 2, 3, 4];
  //nums.push(5);
  console.log(nums);

  //Tuple
  const tupletest: (string | number)[] = [1, 2, "false"];
  const playerTuple: [string, number, boolean] = ["nico", 12, false];
  const playerTuple2: readonly [string, number, boolean] = ["nico", 12, false];

  //any 자료형

  const any1: any[] = [1, 2, 3, "4"];
  const any2: any = "false";
  console.log(any1 + any2);

  //unknown 자료형
  let a: unknown;
  if (typeof a === "number") {
    a = a + 1;
  }
  if (typeof a === "string") {
    a = a.toLowerCase();
  }
  console.log(a);

  //void 자료형
  function hello(str: string) {
    console.log(str + "hello!");
  }

  //never 자료형
  function hello2(): never {
    console.log("@@");
    throw new Error("err!");
  }

  function hello3(name: number | string) {
    if (typeof name === "number") {
      //
    } else if (typeof name === "string") {
      //
    } else {
      //여기서의 name은 never 자료형이다. 이 코드는 절대 실행되지 않음
    }
  }
}
