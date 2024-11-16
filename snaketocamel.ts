type CamelCase<S extends string> = S extends `${infer First}_${infer Rest}`
  ? `${Lowercase<First>}${Capitalize<CamelCase<Rest>>}`
  : S;

type SnakeToCamelCase<T> = T extends Array<infer U>
  ? Array<SnakeToCamelCase<U>>
  : T extends object
  ? { [K in keyof T as CamelCase<string & K>]: SnakeToCamelCase<T[K]> }
  : T;

function snakeToCamel<T extends Record<string, any>>(
  obj: T
): SnakeToCamelCase<T> {
  if (typeof obj !== "object" || obj === null) {
    return obj as SnakeToCamelCase<T>;
  }
  if (Array.isArray(obj)) {
    return obj.map((item) => snakeToCamel(item)) as any;
  }
  const newObj = {} as SnakeToCamelCase<T>;
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const camelKey = key.replace(/_([a-z])/g, (match, letter) =>
        letter.toUpperCase()
      ) as keyof SnakeToCamelCase<T>;
      newObj[camelKey] = snakeToCamel(obj[key]) as any;
    }
  }
  return newObj;
}

// Example usage:
const snakeCaseObj = {
  first_name: "john_bak",
  last_name: "Doe",
  contact_info: {
    email_address: "john.doe@example.com",
    phone_number: "123-456-7890",
  },
  hobbies: ["reading_books", "playing_games"],
};

console.log(snakeToCamel(snakeCaseObj));
