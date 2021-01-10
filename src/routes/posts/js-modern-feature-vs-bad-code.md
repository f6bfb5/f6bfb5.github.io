---
title: "JavaScript 筆記 - 如何改寫"
date: 2021-01-11T00:07:30.000Z
---

### **Good Javascript with modern feature** vs **Bad Code**

#### console.log

##### 1. table

```js
cosnt foo = { name: 'tom', age: 30, nervous: false}
cosnt bar = { name: 'dick', age: 40, nervous: false}
cosnt baz = { name: 'harry', age: 50, nervous: true}

// Bad Code
console.log(foo);
console.log(bar);
console.log(baz);

// Good Code
console.log("%c My Friends,", "color: orange; font-weight: bold");
console.log({ foo, bar, baz });

console.table([foo, bar, baz]);
```

##### 2. time

```js
console.time("looper");

let i = 0;
while (i < 1000000) {
  i++;
}

console.timeEnd("looper");
```

##### 3. trace

```js
const deleteMe = () => console.trace("bye bye database");

deleteMe();
deleteMe();
```

#### destucturing

```js
const turtle = {
  name: "Bobo",
  legs: 4,
  shell: true,
  type: "amphibious",
  meal: 10,
  diet: "berries",
};

// Bad Code
function feed(animal) {
  return `Feed ${animal.name} ${animal.meal} kils of ${animal.diet}`;
}

// Good Code
function feed({ name, meal, diet }) {
  return `Feed ${name} ${meal} kilos of ${diet}`;
}
// OR
function feed(animal) {
  const { name, meal, diet } = animal;
  return `Feed ${name} ${meal} kilos of ${diet}`;
}
```

#### Template literals

```js
// Bad Code
let bio =
  horse.name +
  "is a " +
  horse.size +
  " horse skilled in " +
  horse.skills.join(" & ");

// Good Code
const { name, size, skills } = horse;

bio = `${name} is a ${size} skilled in ${skills.join(" & ")}`;

console.log(bio);
```

```js
function horseAge(str, age) {
  const ageStr = age > 5 ? "old" : "young";
  return `${str[0]}${ageStr} at ${age} years`;
}

const bio2 = horseAge`This horse is ${horse.age}`;
```

#### spread syntax

```js
const pikachu = { name: "Pikachu" };
const stats = { hp: 40, attack: 60, defense: 45 };

// Bad Code
pikachu["hp"] = stats.hp;
pikachu["attack"] = stats.attack;
pikachu["defense"] = stats.defense;

// OR
const lv10 = Object.assign(pikachu, stats);
const lv11 = Object.assign(pikachu, { hp: 45 });

// Good Code
const lv10 = { ...pikachu, ...stats };
const lv11 = { ...pikachu, hp: 45 };
```

#### Array

```js
let pokemon = ["Arbok", "Raichu", "Sandshrew"];

// Bad Code
pokemon.push("Bulbasaur");
pokemon.push("Metapod");
pokemon.push("Weedle");

// Good Code

// Push
pokemon = [...pokemon, "Bulbasaur", "Metapod", "Weedle"];

// Shift
pokemon = ["Bulbasaur", "Metapod", "Weedle", ...pokemon];
```

#### loops

```js
const orders = [500, 30, 99, 15, 223];

// Bad Code
const total = 0;
const withTax = [];
const highValue = [];
for (let i = 0; i < orders.length; i++) {
  // Reduce
  total += orders[i];

  // Map
  withTax.push(orders[i] * 1.1);

  // Filter
  if (orders[i] > 100) {
    highValue.push(orders[i]);
  }
}

// Good Code
const total = orders.reduce((acc, cur) => acc + cur);
const withTax = orders.map((v) => v * 1.1);
const highValue = orders.filter((v) => v > 100);
```

#### async / await

```js
const random = () => {
  return Promise.resolve(Math.random());
};

// Bad Code
const sumRandomAsyncNums = () => {
  let first;
  let second;
  let third;

  return random()
    .then((v) => {
      first = v;
      return random();
    })
    .then((v) => {
      second = v;
      return random();
    })
    .then((v) => {
      third = v;
      return first + second + thrid;
    })
    .then((v) => {
      console.log(`Result ${v}`);
    });
};

// Good Code
const sumRandomAsyncNums = async () => {
  const first = await random();
  const second = await random();
  const thrid = await random();

  console.log(`Result ${first + second + thrid}`);
};
```
