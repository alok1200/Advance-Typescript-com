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

// it is a javascript concept
// type User = {
//   age: number;
//   name: string;
//   email: string;
// };

// const users = new Map<string, User>(); // this is how we pass type in map

// users.set("ahiuhd", { age: 12, name: "akash", email: "akash@gmail.com" });
// users.set("ahiu", { age: 22, name: "akash", email: "akash@gmail.com" });

// const user = users.get("ahiu"); // easy to gat a value and dowing all performance
// users.delete("ahiu");

//--------------------------------------------------------------------------------------

// Exclude

// type EventType = "click" | "scroll" | "mousemove";
// type ExcludeEvent = Exclude<EventType, "click">; // scroll | mousemove

// const handelEvent = (event: ExcludeEvent) => {
//   console.log(`handel Event ${event}`);
// };

// handelEvent("scroll"); // It will throw error when you pass click and using function

//--------------------------------------------------------------------------------------

//Zod

import express from "express";
import { z } from "zod";

const app = express();

// Define the schema for profile update
const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Invalid email format" }),
  age: z
    .number()
    .min(18, { message: "You must be at least 18 years old" })
    .optional(),
});

type FinalUserSchema = {
  name: string;
  email: string;
  age?: number;
};

app.put("/user", (req, res) => {
  const { success } = userProfileSchema.safeParse(req.body);
  const updateBody: FinalUserSchema = req.body; // how to assign a type to updateBody?

  if (!success) {
    res.status(411).json({});
    return;
  }
  // update database here
  res.json({
    message: "User updated",
  });
});

app.listen(3000);
