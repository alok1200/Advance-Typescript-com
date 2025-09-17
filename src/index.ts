interface User {
  name: string;
  age: number;
}

function sumOfAge(user1: User, user2: User) {
  return user1.age + user2.age;
}

const answer = sumOfAge({ name: "Alice", age: 30 }, { name: "Bob", age: 25 });

console.log(answer);
