{
  type Config<T> = {
    path: string;
    state: object;
    extraInfo?: T;
  };

  //type은 객체를 표현하는 것이라고 생각하자
  //두 개의 함수가 있고 하나의 프로퍼티가 존재하는 것
  type Push = {
    (path: string): void;
    (config: Config<any>): void;
    name: string;
  };

  const push: Push = (config) => {
    if (typeof config === "string") {
      console.log(config);
    } else {
      console.log(config.path);
    }
  };

  const a = push("asd");
  console.log(push.name);
}

//type 연습
{
  type Player<T> = {
    name: string;
    extraInfo?: T;
  };

  const nico2: Player<{ fav: "kimc" }> = {
    name: "nico",
  };

  const nico3: Player<null> = {
    name: "nico2",
  };
}

function printAllNums  (arr : number[]) {
  //
}
function printAllNums2  (arr : Array<number>) {
  //
}