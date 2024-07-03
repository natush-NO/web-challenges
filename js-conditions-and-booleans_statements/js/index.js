console.clear();

// Part 1: Password
const superSecretPassword = "h4x0r1337";
const receivedPassword = "password1234";

// if (receivedPassword === superSecretPassword) {
//   console.log("Welcome! You are logged in as Brunhilde1984.");
// } else {
//   console.log("Access denied!");
// }

receivedPassword === superSecretPassword
  ? console.log("Welcome! You are logged in as Brunhilde1984.")
  : console.log("Access denied!");

// // Part 2: Even / Odd
const number = 6;

if (number % 2 === 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

// // Part 3: Hotdogs
const numberOfHotdogs = 42;

let priceForSausage;

if (numberOfHotdogs < 5) {
  priceForSausage = 2;
} else if (numberOfHotdogs > 5 && numberOfHotdogs < 100) {
  priceForSausage = 1.5;
} else if (numberOfHotdogs > 100 && numberOfHotdogs < 1000000) {
  priceForSausage = 1;
} else if (numberOfHotdogs > 1000000) {
  priceForSausage = 0.1;
}

console.log(
  `For ${numberOfHotdogs} sausages have to be paid for ${priceForSausage} euro.`
);

// // Part 4: Daytime
const currentHour = 12;

let statement = "";

if (currentHour < 17) {
  statement = "Still need to learn...";
} else {
  statement = "Partytime!!!";
}

console.log(statement);

// // Part 5: Greeting
const userName = "Archibald";

const greeting =
  userName === "Archibald" ? "Hello Coach!" : "Hello " + userName + "!";

console.log(greeting);
