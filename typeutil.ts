interface User {
  name: string;
  age?: number;
  married?: number;
}

// 제네릭을 사용하여 타입을 복사한다
// 단순히 타입을 변수에 지정해도 되지만 다음과 같은 옵션들이 사용이 가능한 장점이 있다
type Copy<T> = {
  [P in keyof T]: T[P];
};

// partial과 같이 정의가 가능하다
type copyPartial<T> = {
  [P in keyof T]?: T[P];
};

// requried과 같은 정의가 가능하다
// requried는 User타입과 같은 선택 값을 필수 값으로 만든다
type copyRequried<T> = {
  [P in keyof T]-?: T[P];
};

// Pick은 타입스크립트에 기본적으로 제공되는 타입으로 객체 타입에서 하나의 타입만 선택할 수 있다
const userName: Pick<User, "name"> = { name: "John Doe" };

const user: User = {
  name: "",
};

const userCopy: Copy<User> = {
  name: "",
};

const userPartial: copyPartial<User> = {};

const userRequried: copyRequried<User> = {
  name: "",
  age: 0,
  married: 0,
};
