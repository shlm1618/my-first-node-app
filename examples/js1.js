// --- 1. Arrow Functions & Default Parameters ---
// Task: Rewrite a greeting function
const greetUser = (name = "Guest") => `Hello, ${name}! Welcome to Node.js.`;

console.log(greetUser("Alex")); // Output: Hello, Alex!
console.log(greetUser());       // Output: Hello, Guest! (Uses default)

// --- 2. Destructuring Objects ---
// Task: Extract properties from an object easily
const userProfile = {
    username: "coder123",
    email: "node@example.com",
    role: "Developer"
};

const { username, role } = userProfile;
console.log(`${username} is a ${role}.`);

// --- 3. Spread & Rest Operators ---
// Task: Merge arrays and collect remaining arguments
const frontendTools = ["React", "Vue"];
const fullStackTools = [...frontendTools, "Node.js", "Express"];

console.log("Full Stack Stack:", fullStackTools);

const sumAll = (...numbers) => numbers.reduce((total, n) => total + n, 0);
console.log("Sum:", sumAll(10, 20, 30)); // 60