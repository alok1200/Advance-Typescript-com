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

interface Employee {
  id: number;
  name: string;
  address: string;
  mobile: number;
}

type EmployeeProp = Pick<Employee, "id" | "name" | "address">;

type UpdateEmployee = Partial<EmployeeProp>;

function updateEmployee(EmployeeProp: UpdateEmployee) {}

// Readonly

type User = {
  readonly name: string;
  readonly age: number;
  readonly email: string;
  readonly password: string;
};

// const user: readonly <User> = {. this is also work same as readonly
const user: User = {
  name: "akash",
  age: 23,
  email: "akash@gmail.com",
  password: "123456",
};

// user.name = "abjcnd"
