// 07. Explore Type Aliases

//? string or number Type Aliases
type MyName = string | number;

let myName: MyName = 'Mahamudul';

//? array Type Aliases
type Arr = MyName[];

const arr: Arr = ['Hasan'];

//? tuple Type Aliases
type Players = [string, string, number, boolean, string];

let players2: Players = ['Messi', 'Rolando', 345, true, 'Hello'];

//? function signature Type Aliases
type Add = (num1: number, num2: number, num3: number) => number;

const add: Add = (num1, num2, num3 = 0) => {
  return num1 + num2 + num3;
};

//? Object Type Aliases
type Address = {
  presentAddress: string;
  permanentAddress: string;
};

type Favorites = {
  type: 'food' | 'player' | 'singer' | 'person';
  value: string;
}[];

type Person = {
  name: string;
  age: number;
  email: string;
  phone: string | string[];
  address: Address;
  favorites: Favorites;
};

const person: Person = {
  name: 'John Smith',
  age: 34,
  email: 'john.smith@gmail.com',
  phone: '567-7543',
  address: {
    presentAddress: 'Mexico',
    permanentAddress: 'Mexico City',
  },
  favorites: [
    {
      type: 'food',
      value: 'Egg',
    },
    {
      type: 'player',
      value: 'This is Haram',
    },
    {
      type: 'singer',
      value: 'Singing is Haram',
    },
    {
      type: 'person',
      value: 'John Doe',
    },
  ],
};
