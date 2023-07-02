{
  //기존에 Storage 인터페이스가 존재하지만, 내가 원하는 기능을 추가!!
  interface SStorage<T> {
    [key: string]: T;
  }

  class LocalStorage<T> {
    private storage: SStorage<T> = {};
    set(key: string, value: T) {
      this.storage[key] = value;
    }
    remove(key: string) {
      //delete 연산자? object에서?
      delete this.storage[key];
    }
    get(key: string): T {
      return this.storage[key];
    }
    clear() {
      this.storage = {};
    }
  }

  const stringsStoreage = new LocalStorage<string>();

  //TS는 제네릭의 타입을 바탕으로 call signiture를 만들어준다.
  stringsStoreage.get("@@");
}
