{
  type Words = {
    //Words라는 타입은 프로퍼티로 string만을 가짐
    //객체의 타이을 선언하는 방법
    [keyName: string]: string;
  };

  class Dict {
    private words: Words;
    constructor() {
      this.words = {}; // words를 빈 객체로 생성
    }
    //클래스도 타입이다... 클래스도 객체다... 클래스도 object다...
    add(word: Word) {
      //words에 존재하지 않는 단어
      if (this.words[word.term] === undefined) {
        this.words[word.term] = word.def;
      }
    }
    def(term: string) {
      console.log(this.words[term]);
    }
  }

  class Word {
    constructor(public readonly term: string, public readonly def: string) {}
  }

  const kimchi = new Word("kimchi", "한국의 음식");
  const dict = new Dict();
  dict.add(kimchi);

  dict.def("kimchi");
}
