// // interface User {
// //   name: string;
// //   age: number;
// // }

// // function sumOfAge(user1: User, user2: User) {
// //   return user1.age + user2.age;
// // }

// // const answer = sumOfAge({ name: "Alice", age: 30 }, { name: "Bob", age: 25 });

// // console.log(answer);

// interface User {
//   id: string;
//   name: string;
//   age: number;
//   email: string;
//   password: string;
// }

// type Updateprop = Pick<User, "name" | "age" | "email">;

// function updateUser(Updateprop: Updateprop) {}

interface Employee {
  id: number;
  name: string;
  address: string;
  mobile: number;
}

type EmployeeProp = Pick<Employee, "id" | "name" | "address">;

function updateEmployee(EmployeeProp: EmployeeProp) {
  // this is how we using that first api
  // this is using for generics
}
