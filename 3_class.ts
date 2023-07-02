{
  abstract class User {
    constructor(private firstName: string, private lastName: string, private nickname: string) {}

    //추상메소드는 call signiture만 작성하기!
    abstract getNickname(): void;

    //아래는 메소드를 구현한 것, 추상메소드가 아님
    getFullName(): string {
      return this.firstName + " " + this.lastName;
    }
  }

  //User를 상속받은 Player 클래스, User 추상클래스가 부모 클래스?
  class Player extends User {
    // 추상메소드는 반드시 구현 해줘야 함? = 오버라이딩
    getNickname(): void {
      //
    }
  }

  const nico = new Player("nico", "las", "니꼬");
  console.log(nico.getFullName());
}
