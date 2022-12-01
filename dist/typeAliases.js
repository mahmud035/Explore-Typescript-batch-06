"use strict";
// 07. Explore Type Aliases
var myName = 'Mahamudul';
var arr = ['Hasan'];
var players2 = ['Messi', 'Rolando', 345, true, 'Hello'];
var add = function (num1, num2, num3) {
    if (num3 === void 0) { num3 = 0; }
    return num1 + num2 + num3;
};
//? Object Type Aliases
// type Address = {
//   presentAddress: string;
//   permanentAddress: string;
// };
// type Favorites = {
//   type: 'food' | 'player' | 'singer' | 'person';
//   value: string;
// }[];
// type Auth = {
//   isLoggedIn: boolean;
// };
// type Person = {
//   name: string;
//   age: number;
//   email: string;
//   phone: string | string[];
//   address: Address;
//   favorites: Favorites;
// } & Auth;
// const person: Person = {
//   name: 'John Smith',
//   age: 34,
//   email: 'john.smith@gmail.com',
//   phone: '567-7543',
//   address: {
//     presentAddress: 'Mexico',
//     permanentAddress: 'Mexico City',
//   },
//   favorites: [
//     {
//       type: 'food',
//       value: 'Egg',
//     },
//     {
//       type: 'player',
//       value: 'This is Haram',
//     },
//     {
//       type: 'singer',
//       value: 'Singing is Haram',
//     },
//     {
//       type: 'person',
//       value: 'John Doe',
//     },
//   ],
//   isLoggedIn: true,
// };
