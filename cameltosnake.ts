type SnakeCase<S extends string> = S extends `${infer Start}${infer Rest}`
  ? `${Start extends Uppercase<Start>
      ? "_"
      : ""}${Lowercase<Start>}${SnakeCase<Rest>}`
  : "";

type CamelToSnakeCase<T> = T extends object
  ? { [K in keyof T as SnakeCase<string & K>]: T[K] }
  : T;

function camelToSnake<T extends Record<string, any>>(
  obj: T
): CamelToSnakeCase<T> {
  if (typeof obj !== "object" || obj === null) {
    return obj as CamelToSnakeCase<T>;
  }
  if (Array.isArray(obj)) {
    return obj.map((item) => camelToSnake(item)) as any;
  }
  const newObj = {} as CamelToSnakeCase<T>;
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const snakeKey = key.replace(
        /[A-Z]/g,
        (match) => `_${match.toLowerCase()}`
      ) as keyof CamelToSnakeCase<T>;
      newObj[snakeKey] = camelToSnake(obj[key]) as any;
    }
  }
  return newObj;
}

// Example usage:
const camelCaseObj = {
  firstName: "johnBak",
  lastName: "Doe",
  contactInfo: {
    emailAddress: "john.doe@example.com",
    phoneNumber: "123-456-7890",
  },
  hobbiesI: ["readingBooks", "playingGames"],
};

const snakeCaseKeysObj = camelToSnake(camelCaseObj);
console.log(snakeCaseKeysObj);
