// // interface User {
// //   name: string;
// //   age: number;
// // }

// // function sumOfAge(user1: User, user2: User) {
// //   return user1.age + user2.age;
// // }

// // const answer = sumOfAge({ name: "Alice", age: 30 }, { name: "Bob", age: 25 });

// // console.log(answer);

//--------------------------------------------------------------------------------------

// interface User {
//   id: string;
//   name: string;
//   age: number;
//   email: string;
//   password: string;
// }

// type Updateprop = Pick<User, "name" | "age" | "email">;

// function updateUser(Updateprop: Updateprop) {}

// interface Employee {
//   id: number;
//   name: string;
//   address: string;
//   mobile: number;
// }

// type EmployeeProp = Pick<Employee, "id" | "name" | "address">;

// function updateEmployee(EmployeeProp: EmployeeProp) {
//   // this is how we using that first api
//   // this is using for generics
//   // data base using yourself
// }

//--------------------------------------------------------------------------------------

//Partial

// interface Employee {
//   id: number;
//   name: string;
//   address: string;
//   mobile: number;
// }

// type EmployeeProp = {
//   id?: number;
//   name?: string;
//   address?: string;
//   mobile?: number;
// };

// function updateEmployee(EmployeeProp: EmployeeProp) {}

// second way usinf Partial

//--------------------------------------------------------------------------------------

// interface Employee {
//   id: number;
//   name: string;
//   address: string;
//   mobile: number;
// }

// type EmployeeProp = Pick<Employee, "id" | "name" | "address">;

// type UpdateEmployee = Partial<EmployeeProp>;

// function updateEmployee(EmployeeProp: UpdateEmployee) {}

//--------------------------------------------------------------------------------------

// Readonly

// type User = {
//   readonly name: string;
//   readonly age: number;
//   readonly email: string;
//   readonly password: string;
// };

// const user: readonly <User> = {. this is also work same as readonly
// const user: User = {
//   name: "akash",
//   age: 23,
//   email: "akash@gmail.com",
//   password: "123456",
// };

// use case of readonly is configraction any api key like (gpt api key etc)

// user.name = "abjcnd"

//--------------------------------------------------------------------------------------

//Records and Map

// type User = {
//   id: number;
//   name: string;
// };

// type Users = {              // this is second way to right this code
//     [key: string]: {
//   id: number;
//   name: string;
// }
// }

// type Users = {
//   [key: string]: User;
// };

// const users: Users = {
//   user1: {
//     id: 1,
//     name: "akash",
//   },
// };

// const newUser: Users = {
//   "abcd@12": {
//     id: 1,
//     name: "akash",
//   },

//   "abcd@123": {
//     id: 2,
//     name: "vivek",
//   },
// };

//--------------------------------------------------------------------------------------

// Records

// Records is typecript using language and it will using for clar way to right objact

// type User = Record<string, { age: number; name: string }>;

// const users: User = {
//   "abcd@12": { age: 1, name: "akash" },
//   "abcd@123": { age: 2, name: "vivek" },
// };

//--------------------------------------------------------------------------------------

//Map
