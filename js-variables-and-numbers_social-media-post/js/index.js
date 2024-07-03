console.clear();

/*
1. Create the data for a small social media post. Create a const variable for each data point listed below.:
	- a title
	- a text
	- the number of likes
	- the user who created the post
	- a boolean called isReported
*/

// --v-- write your code here --v--

const postTitle = "Online zoo";
const text = "We are glad to welcome you to our online zoo";
let likes = 0;
const userName = "natush";
const isReported = true;

// --^-- write your code here --^--

/*
2. Log all variables to the console. Increase the likes by one and log the amount of likes again. Adapt your code from 1.1 if necessary.
*/

// --v-- write your code here --v--

console.log("postTitle", postTitle);
console.log("text", text);
console.log("likes", likes);
console.log("user", userName);
console.log("isReported", isReported);

// likes = likes + 1;
// likes ++
// likes = 1;
likes += 1;

console.log(likes);

// --^-- write your code here --^--
