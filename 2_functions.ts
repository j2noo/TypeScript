// call signiture
type Add = (a: number, b: number) => number;

//const add = (a,b) => a+b;
const add: Add = (a, b) => a + b;
console.log(add(2, 3));

//오버로딩
type Add2 = {
  (a: number, b: number): number;
  (a: number, b: string): number;
  //(a : number, b : number | string) : number
};
//const add2 :Add2 = (a,b) => a+b;

//함수의 타입이 아닌 변수의 타입 형식?
type Config = {
  //String과 string은 다르다..
  path: string;
  state: object;
};

//아래는 함수의 타입형식?
//반환형이 Push인 함수는 인자로 path또는 config를 받을 수 있다!
type Push = {
  (path: string): void;
  (config: Config): void;
  name: string;
};

const push: Push = (config) => {
  if (typeof config === "string") {
    console.log(config);
  } else {
    console.log(config.path);
  }
};

//오버로딩 : 파라미터 두개
type Add3 = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number; //c는 옵션!
};

const add3: Add3 = (a, b, c?: number) => {
  if (typeof c === "undefined") {
    return a + b;
  } else {
    return a + b + c;
  }
};

//다형성
type SuperPrint = {
  //(arr : any[]) : any,
  <T>(arr: T[]): void; //모든 타입을 받음
};

const superPrint: SuperPrint = (arr) => {
  arr.forEach((i) => console.log(i));
};

superPrint([1, 2, "asd", true, [1, "w"], { a: "a" }]);

//함수의 generic 표현
function superPrint2<T>(arr: T[]): T {
  return arr[0];
}

a = superPrint2<number>([1, 2, 3]); //ok
//b=superPrint2<boolean>([1,2,3]);//error
const c = superPrint2([1,23]);

