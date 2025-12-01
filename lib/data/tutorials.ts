import { Tutorial } from "@/lib/types/tutorial";

export const tutorials: Tutorial[] = [
  // BEGINNER LEVEL - JavaScript Fundamentals
  {
    id: "js-1",
    title: "JavaScript Fundamentals: Getting Started",
    description: "Learn the fundamentals of JavaScript - variables, data types, operators, and basic syntax. Essential foundation for React development.",
    level: "beginner",
    estimatedTime: "60 min",
    topics: ["Variables", "Data Types", "Operators", "Basic Syntax", "Console", "Comments"],
    prerequisites: ["Basic HTML & CSS knowledge"],
    videoUrl: "https://www.youtube.com/watch?v=W6NZfCO5SIk", // JavaScript Tutorial for Beginners - Programming with Mosh
    content: {
      overview: "JavaScript is a versatile programming language that powers interactive web applications. Understanding JavaScript fundamentals is essential before learning React, as React is built on JavaScript. This tutorial covers the core concepts you need: variables, data types, operators, and basic syntax. You'll learn how to write JavaScript code, understand different data types, and use operators to manipulate values.",
      sections: [
        {
          title: "What is JavaScript?",
          content: "JavaScript is a high-level, interpreted programming language that makes web pages interactive. It's one of the core technologies of the web, alongside HTML and CSS.\n\nKey Characteristics:\n• Runs in the browser (client-side)\n• Can also run on servers (Node.js)\n• Dynamic and loosely typed\n• Supports multiple programming paradigms\n• Essential for modern web development\n\nWhy Learn JavaScript:\n• Required for React development\n• Powers interactive web applications\n• Most popular programming language\n• Runs everywhere (browser, server, mobile)\n• Large ecosystem and community",
          videoUrl: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
          codeExample: {
            code: `// JavaScript can be embedded in HTML
<script>
  console.log("Hello, JavaScript!");
</script>

// Or in separate .js files
// script.js
console.log("Hello from external file!");`,
            explanation: "JavaScript can be written inline in HTML using <script> tags or in separate .js files. The console.log() function outputs messages to the browser console."
          }
        },
        {
          title: "Variables: let, const, and var",
          content: "Variables store data that can be used and changed throughout your program. JavaScript has three ways to declare variables.\n\nVariable Declaration:\n• let - Block-scoped, can be reassigned\n• const - Block-scoped, cannot be reassigned (constant)\n• var - Function-scoped, older way (avoid in modern code)\n\nBest Practices:\n• Use const by default\n• Use let when you need to reassign\n• Avoid var (legacy)\n• Use descriptive names\n• Follow camelCase convention",
          videoUrl: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
          codeExample: {
            code: `// Using const (preferred for values that don't change)
const name = "Alice";
const age = 30;
// name = "Bob"; // ❌ Error: Cannot reassign const

// Using let (for values that change)
let count = 0;
count = 1; // ✅ OK
count = count + 1; // ✅ OK

// Using var (avoid in modern JavaScript)
var oldWay = "Don't use this";
// var is function-scoped, not block-scoped

// Variable naming
const firstName = "John"; // ✅ Good: camelCase, descriptive
const x = 5; // ❌ Bad: not descriptive
const user_name = "Jane"; // ❌ Bad: use camelCase, not snake_case`,
            explanation: "Use const for values that don't change, let for values that do change. Avoid var. Use descriptive, camelCase names for variables."
          }
        },
        {
          title: "Data Types in JavaScript",
          content: "JavaScript has several built-in data types. Understanding these is crucial for working with data.\n\nPrimitive Types:\n• string - Text data\n• number - Numbers (integers and decimals)\n• boolean - true or false\n• undefined - Variable declared but not assigned\n• null - Explicitly empty value\n• symbol - Unique identifier (advanced)\n\nSpecial Values:\n• null - Intentional absence of value\n• undefined - Variable not initialized\n• NaN - Not a Number (result of invalid math)\n\nType Checking:\n• Use typeof operator\n• JavaScript is dynamically typed\n• Types are determined at runtime",
          videoExample: {
            code: `// String
const name = "Alice";
const greeting = 'Hello';
const template = \`Hello, \${name}!\`; // Template literal

// Number
const age = 30;
const price = 19.99;
const negative = -5;

// Boolean
const isActive = true;
const isComplete = false;

// Undefined
let value; // undefined
console.log(value); // undefined

// Null
const empty = null; // Explicitly empty

// Type checking
console.log(typeof name); // "string"
console.log(typeof age); // "number"
console.log(typeof isActive); // "boolean"
console.log(typeof value); // "undefined"
console.log(typeof empty); // "object" (quirk of JavaScript)

// Type conversion
const numString = "42";
const num = Number(numString); // Convert to number
const str = String(42); // Convert to string
const bool = Boolean(1); // Convert to boolean (true)`,
            explanation: "JavaScript has several data types. Use typeof to check types. JavaScript automatically converts types in some situations (type coercion)."
          }
        },
        {
          title: "Operators",
          content: "Operators perform operations on values. JavaScript has many operators for different purposes.\n\nArithmetic Operators:\n• + Addition\n• - Subtraction\n• * Multiplication\n• / Division\n• % Modulo (remainder)\n• ** Exponentiation\n\nComparison Operators:\n• == Equal to (loose)\n• === Equal to (strict)\n• != Not equal (loose)\n• !== Not equal (strict)\n• > Greater than\n• < Less than\n• >= Greater than or equal\n• <= Less than or equal\n\nLogical Operators:\n• && AND\n• || OR\n• ! NOT\n\nAssignment Operators:\n• = Assignment\n• += Add and assign\n• -= Subtract and assign",
          videoUrl: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
          codeExample: {
            code: `// Arithmetic operators
const sum = 10 + 5; // 15
const difference = 10 - 5; // 5
const product = 10 * 5; // 50
const quotient = 10 / 5; // 2
const remainder = 10 % 3; // 1
const power = 2 ** 3; // 8

// Comparison operators
console.log(5 == "5"); // true (loose equality)
console.log(5 === "5"); // false (strict equality - preferred)
console.log(5 !== "5"); // true
console.log(10 > 5); // true
console.log(10 < 5); // false

// Logical operators
const isAdult = true;
const hasLicense = false;
console.log(isAdult && hasLicense); // false (both must be true)
console.log(isAdult || hasLicense); // true (either can be true)
console.log(!isAdult); // false (negation)

// Assignment operators
let count = 5;
count += 3; // count = count + 3 (8)
count -= 2; // count = count - 2 (6)
count *= 2; // count = count * 2 (12)
count /= 3; // count = count / 3 (4)`,
            explanation: "Operators perform operations on values. Use === for strict equality checks. Logical operators combine boolean values. Assignment operators modify variables."
          }
        },
        {
          title: "Working with Strings",
          content: "Strings are sequences of characters. JavaScript provides many ways to work with strings.\n\nString Creation:\n• Single quotes: 'text'\n• Double quotes: \"text\"\n• Template literals: `text` (ES6+)\n\nString Methods:\n• length - Get string length\n• toUpperCase() - Convert to uppercase\n• toLowerCase() - Convert to lowercase\n• includes() - Check if contains substring\n• indexOf() - Find position of substring\n• slice() - Extract portion of string\n• replace() - Replace substring\n\nTemplate Literals:\n• Use backticks (`)\n• Allow interpolation with ${}\n• Support multi-line strings",
          videoUrl: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
          codeExample: {
            code: `// String creation
const name1 = 'Alice';
const name2 = "Bob";
const name3 = \`Charlie\`; // Template literal

// String properties and methods
const text = "Hello World";
console.log(text.length); // 11
console.log(text.toUpperCase()); // "HELLO WORLD"
console.log(text.toLowerCase()); // "hello world"
console.log(text.includes("World")); // true
console.log(text.indexOf("World")); // 6
console.log(text.slice(0, 5)); // "Hello"
console.log(text.replace("World", "JavaScript")); // "Hello JavaScript"

// Template literals (ES6+)
const firstName = "Alice";
const age = 30;
const greeting = \`Hello, my name is \${firstName} and I am \${age} years old.\`;
// "Hello, my name is Alice and I am 30 years old."

// Multi-line strings with template literals
const message = \`This is a
multi-line
string\`;`,
            explanation: "Strings can be created with quotes or template literals. Template literals allow interpolation and multi-line strings. Use string methods to manipulate text."
          }
        },
        {
          title: "Control Flow: if/else and switch",
          content: "Control flow allows your program to make decisions and execute different code based on conditions.\n\nif/else Statements:\n• Execute code conditionally\n• Can chain multiple conditions\n• Use logical operators for complex conditions\n\nswitch Statements:\n• Alternative to multiple if/else\n• Compare value against multiple cases\n• Use break to prevent fall-through\n• Include default case\n\nTernary Operator:\n• Shorthand for simple if/else\n• Syntax: condition ? valueIfTrue : valueIfFalse",
          videoUrl: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
          codeExample: {
            code: `// if/else statements
const age = 20;

if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}

// Multiple conditions
const score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// Logical operators in conditions
const isLoggedIn = true;
const hasPermission = false;

if (isLoggedIn && hasPermission) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}

// switch statement
const day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of work week");
    break;
  case "Friday":
    console.log("End of work week");
    break;
  default:
    console.log("Mid week");
}

// Ternary operator
const age = 20;
const status = age >= 18 ? "adult" : "minor";
console.log(status); // "adult"`,
            explanation: "Use if/else for conditional logic. Switch statements are useful for multiple value comparisons. Ternary operator provides concise conditional expressions."
          }
        }
      ],
      conclusion: "JavaScript fundamentals are the foundation for React development. You've learned about variables (let, const), data types, operators, strings, and control flow. These concepts are essential for understanding React code. Practice writing JavaScript code and experiment with different operators and control structures. Next, you'll learn about functions, arrays, and objects - the building blocks of JavaScript applications."
    }
  },
  {
    id: "js-2",
    title: "JavaScript Functions and Scope",
    description: "Master JavaScript functions - function declarations, expressions, arrow functions, parameters, and scope. Essential for understanding React components.",
    level: "beginner",
    estimatedTime: "50 min",
    topics: ["Functions", "Arrow Functions", "Parameters", "Return Values", "Scope", "Closures"],
    prerequisites: ["JavaScript Fundamentals: Getting Started"],
    videoUrl: "https://www.youtube.com/watch?v=N8ap4k_1QEQ", // JavaScript Functions Tutorial
    content: {
      overview: "Functions are reusable blocks of code that perform specific tasks. They're fundamental to JavaScript and essential for React development, as React components are functions. This tutorial covers function declarations, expressions, arrow functions, parameters, return values, and scope. Understanding functions deeply will help you understand React components and hooks.",
      sections: [
        {
          title: "Function Declarations",
          content: "Function declarations define named functions that can be called anywhere in your code.\n\nFunction Declaration Syntax:\n• function keyword\n• Function name\n• Parameters in parentheses\n• Function body in curly braces\n• Optional return statement\n\nCharacteristics:\n• Hoisted (can be called before declaration)\n• Named function\n• Can be called multiple times\n• Can return values\n\nUse Cases:\n• Reusable code blocks\n• Organizing code\n• Breaking down complex problems",
          videoUrl: "https://www.youtube.com/watch?v=N8ap4k_1QEQ",
          codeExample: {
            code: `// Basic function declaration
function greet() {
  console.log("Hello!");
}

greet(); // Call the function

// Function with parameters
function greetPerson(name) {
  console.log(\`Hello, \${name}!\`);
}

greetPerson("Alice"); // "Hello, Alice!"

// Function with return value
function add(a, b) {
  return a + b;
}

const result = add(5, 3); // result is 8
console.log(result);

// Function with multiple parameters
function createUser(name, age, email) {
  return {
    name: name,
    age: age,
    email: email
  };
}

const user = createUser("Alice", 30, "alice@example.com");
console.log(user); // { name: "Alice", age: 30, email: "alice@example.com" }

// Function hoisting
sayHello(); // ✅ Works! Function is hoisted

function sayHello() {
  console.log("Hello!");
}`,
            explanation: "Function declarations use the function keyword. They can take parameters and return values. Functions are hoisted, meaning they can be called before they're declared in the code."
          }
        },
        {
          title: "Function Expressions and Arrow Functions",
          content: "Function expressions and arrow functions are alternative ways to define functions. Arrow functions are especially important in React.\n\nFunction Expressions:\n• Assign function to variable\n• Not hoisted\n• Can be anonymous or named\n\nArrow Functions (ES6+):\n• Shorter syntax\n• Implicit return for single expressions\n• Lexical this binding\n• Preferred in React\n\nWhen to Use:\n• Arrow functions: Modern code, React components\n• Function expressions: When you need hoisting behavior\n• Function declarations: Traditional approach",
          videoUrl: "https://www.youtube.com/watch?v=N8ap4k_1QEQ",
          codeExample: {
            code: `// Function expression
const greet = function(name) {
  console.log(\`Hello, \${name}!\`);
};

greet("Bob");

// Arrow function (ES6+)
const greetArrow = (name) => {
  console.log(\`Hello, \${name}!\`);
};

greetArrow("Charlie");

// Arrow function with implicit return
const add = (a, b) => a + b;
// Equivalent to:
// const add = (a, b) => { return a + b; };

console.log(add(5, 3)); // 8

// Arrow function with single parameter (no parentheses needed)
const square = x => x * x;
console.log(square(5)); // 25

// Arrow function with no parameters
const sayHello = () => console.log("Hello!");
sayHello();

// Arrow functions in React (preview)
const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick}>
      {label}
    </button>
  );
};

// Or with implicit return
const Button = ({ label, onClick }) => (
  <button onClick={onClick}>
    {label}
  </button>
);`,
            explanation: "Arrow functions provide concise syntax and are preferred in modern JavaScript and React. They have implicit return for single expressions and lexical this binding."
          }
        },
        {
          title: "Parameters and Arguments",
          content: "Functions can accept parameters (inputs) to make them more flexible and reusable.\n\nParameters vs Arguments:\n• Parameters: Variables in function definition\n• Arguments: Values passed when calling function\n\nDefault Parameters:\n• Provide default values\n• Used when argument not provided\n• ES6+ feature\n\nRest Parameters:\n• Accept variable number of arguments\n• Collects into array\n• Useful for flexible functions",
          videoUrl: "https://www.youtube.com/watch?v=N8ap4k_1QEQ",
          codeExample: {
            code: `// Function with parameters
function greet(name, greeting) {
  console.log(\`\${greeting}, \${name}!\`);
}

greet("Alice", "Hello"); // "Hello, Alice!"

// Default parameters
function greet(name, greeting = "Hello") {
  console.log(\`\${greeting}, \${name}!\`);
}

greet("Bob"); // "Hello, Bob!" (uses default)
greet("Charlie", "Hi"); // "Hi, Charlie!" (uses provided value)

// Rest parameters (collect remaining arguments)
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4, 5)); // 15

// Arrow function with default and rest
const createUser = (name, age = 18, ...hobbies) => {
  return {
    name,
    age,
    hobbies
  };
};

const user = createUser("Alice", 30, "reading", "coding", "gaming");
console.log(user);
// { name: "Alice", age: 30, hobbies: ["reading", "coding", "gaming"] }`,
            explanation: "Parameters make functions flexible. Use default parameters for optional values. Rest parameters allow functions to accept variable numbers of arguments."
          }
        },
        {
          title: "Understanding Scope",
          content: "Scope determines where variables can be accessed in your code. Understanding scope is crucial for React development.\n\nTypes of Scope:\n• Global scope - Accessible everywhere\n• Function scope - Accessible within function\n• Block scope - Accessible within block (let, const)\n\nScope Rules:\n• Variables declared with var are function-scoped\n• Variables declared with let/const are block-scoped\n• Inner scopes can access outer scopes\n• Outer scopes cannot access inner scopes\n\nWhy It Matters:\n• Prevents variable conflicts\n• Controls variable visibility\n• Important for React state management",
          videoUrl: "https://www.youtube.com/watch?v=N8ap4k_1QEQ",
          codeExample: {
            code: `// Global scope
const globalVar = "I'm global";

function myFunction() {
  // Function scope
  const functionVar = "I'm in function scope";
  console.log(globalVar); // ✅ Can access global
  
  if (true) {
    // Block scope
    const blockVar = "I'm in block scope";
    console.log(functionVar); // ✅ Can access function scope
    console.log(globalVar); // ✅ Can access global
  }
  
  // console.log(blockVar); // ❌ Error: blockVar not accessible here
}

// console.log(functionVar); // ❌ Error: functionVar not accessible here

// var vs let/const scope
function scopeExample() {
  if (true) {
    var varVariable = "I'm var";
    let letVariable = "I'm let";
    const constVariable = "I'm const";
  }
  
  console.log(varVariable); // ✅ Works (var is function-scoped)
  // console.log(letVariable); // ❌ Error (let is block-scoped)
  // console.log(constVariable); // ❌ Error (const is block-scoped)
}

// Scope in React (preview)
function Component() {
  const [count, setCount] = useState(0); // count is scoped to Component
  
  const handleClick = () => {
    // Can access count here
    setCount(count + 1);
  };
  
  return <button onClick={handleClick}>{count}</button>;
}`,
            explanation: "Scope determines variable accessibility. let and const are block-scoped (preferred). var is function-scoped (avoid). Understanding scope is essential for React state management."
          }
        },
        {
          title: "Higher-Order Functions",
          content: "Higher-order functions are functions that operate on other functions, either by taking them as arguments or returning them. They're fundamental to functional programming and React.\n\nWhat are Higher-Order Functions:\n• Functions that take functions as arguments\n• Functions that return functions\n• Enable powerful abstractions\n• Common in React (map, filter, etc.)\n\nCommon Examples:\n• Array methods (map, filter, reduce)\n• Event handlers\n• Callback functions\n• Function factories",
          videoUrl: "https://www.youtube.com/watch?v=N8ap4k_1QEQ",
          codeExample: {
            code: `// Function that takes a function as argument
function operate(a, b, operation) {
  return operation(a, b);
}

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

console.log(operate(5, 3, add)); // 8
console.log(operate(5, 3, multiply)); // 15

// Function that returns a function
function createMultiplier(multiplier) {
  return function(number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

// Arrow function version
const createMultiplier = (multiplier) => (number) => number * multiplier;

// Higher-order functions in React (preview)
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}

// Event handler (function passed as prop)
function Button({ onClick }) {
  return <button onClick={onClick}>Click me</button>;
}`,
            explanation: "Higher-order functions take or return functions. They enable powerful patterns and are essential in React for event handlers, array methods, and component composition."
          }
        }
      ],
      conclusion: "Functions are the building blocks of JavaScript and React. You've learned function declarations, expressions, arrow functions, parameters, scope, and higher-order functions. These concepts are directly applicable to React - React components are functions, hooks are functions, and event handlers are functions. Practice writing different types of functions and understand how scope affects variable access. Next, you'll learn about arrays and objects, which are essential data structures in JavaScript and React."
    }
  },
  {
    id: "js-3",
    title: "JavaScript Arrays and Objects",
    description: "Master JavaScript arrays and objects - the primary data structures used in React. Learn array methods, object manipulation, and destructuring.",
    level: "beginner",
    estimatedTime: "70 min",
    topics: ["Arrays", "Array Methods", "Objects", "Object Methods", "Destructuring", "Spread Operator"],
    prerequisites: ["JavaScript Functions and Scope"],
    videoUrl: "https://www.youtube.com/watch?v=oigfaZ5AqM4", // JavaScript Arrays and Objects Tutorial
    content: {
      overview: "Arrays and objects are the primary data structures in JavaScript and React. You'll use them constantly - arrays for lists of data, objects for structured data. This tutorial covers creating and manipulating arrays and objects, essential array methods (map, filter, reduce), object methods, destructuring, and the spread operator. These concepts are fundamental to React development.",
      sections: [
        {
          title: "Working with Arrays",
          content: "Arrays store ordered collections of values. They're essential for rendering lists in React.\n\nArray Creation:\n• Array literal: [1, 2, 3]\n• Array constructor: new Array()\n• Can contain any data types\n• Zero-indexed (first item is index 0)\n\nArray Properties:\n• length - Number of elements\n• Access elements with bracket notation\n• Arrays are mutable\n\nCommon Operations:\n• Access elements by index\n• Modify elements\n• Add/remove elements\n• Iterate over elements",
          videoUrl: "https://www.youtube.com/watch?v=oigfaZ5AqM4",
          codeExample: {
            code: `// Creating arrays
const numbers = [1, 2, 3, 4, 5];
const fruits = ["apple", "banana", "orange"];
const mixed = [1, "hello", true, null];

// Accessing elements
console.log(fruits[0]); // "apple"
console.log(fruits[1]); // "banana"
console.log(fruits.length); // 3

// Modifying arrays
fruits[0] = "grape";
console.log(fruits); // ["grape", "banana", "orange"]

// Adding elements
fruits.push("mango"); // Add to end
fruits.unshift("kiwi"); // Add to beginning
console.log(fruits); // ["kiwi", "grape", "banana", "orange", "mango"]

// Removing elements
fruits.pop(); // Remove from end
fruits.shift(); // Remove from beginning
console.log(fruits); // ["grape", "banana", "orange"]

// Iterating over arrays
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// for...of loop (modern)
for (const fruit of fruits) {
  console.log(fruit);
}

// Arrays in React (preview)
function FruitList() {
  const fruits = ["apple", "banana", "orange"];
  return (
    <ul>
      {fruits.map(fruit => (
        <li key={fruit}>{fruit}</li>
      ))}
    </ul>
  );
}`,
            explanation: "Arrays store ordered collections. Access elements by index (starting at 0). Arrays are mutable - you can modify them. Arrays are essential for rendering lists in React."
          }
        },
        {
          title: "Essential Array Methods",
          content: "JavaScript provides powerful array methods that are essential for React development. These methods create new arrays without mutating the original.\n\nImportant Array Methods:\n• map() - Transform each element\n• filter() - Select elements that match condition\n• reduce() - Combine elements into single value\n• find() - Find first matching element\n• forEach() - Execute function for each element\n• includes() - Check if array contains value\n• slice() - Extract portion of array\n• concat() - Combine arrays\n\nWhy These Matter:\n• Used constantly in React\n• Functional programming style\n• Don't mutate original array\n• Return new arrays",
          videoUrl: "https://www.youtube.com/watch?v=R8rmfD9Y5c8", // JavaScript Array Methods Tutorial
          codeExample: {
            code: `const numbers = [1, 2, 3, 4, 5];

// map() - Transform each element
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter() - Select matching elements
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]

// reduce() - Combine into single value
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 15

// find() - Find first matching element
const found = numbers.find(num => num > 3);
console.log(found); // 4

// forEach() - Execute for each element
numbers.forEach(num => console.log(num));

// includes() - Check if contains value
console.log(numbers.includes(3)); // true
console.log(numbers.includes(10)); // false

// slice() - Extract portion
const firstThree = numbers.slice(0, 3);
console.log(firstThree); // [1, 2, 3]

// Array methods in React (preview)
function UserList({ users }) {
  // Filter active users
  const activeUsers = users.filter(user => user.isActive);
  
  // Map to JSX elements
  return (
    <ul>
      {activeUsers.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

// Chaining array methods
const result = numbers
  .filter(num => num > 2)
  .map(num => num * 2)
  .reduce((sum, num) => sum + num, 0);
console.log(result); // 24 (3*2 + 4*2 + 5*2)`,
            explanation: "Array methods like map, filter, and reduce are essential for React. They don't mutate the original array and return new arrays. These methods are used constantly in React for transforming and filtering data."
          }
        },
        {
          title: "Working with Objects",
          content: "Objects store key-value pairs and represent structured data. They're fundamental to JavaScript and React.\n\nObject Creation:\n• Object literal: { key: value }\n• Object constructor: new Object()\n• Keys are strings (or symbols)\n• Values can be any type\n\nAccessing Properties:\n• Dot notation: obj.property\n• Bracket notation: obj['property']\n• Use bracket notation for dynamic keys\n\nObject Methods:\n• Object.keys() - Get all keys\n• Object.values() - Get all values\n• Object.entries() - Get key-value pairs\n• Object.assign() - Copy properties",
          videoUrl: "https://www.youtube.com/watch?v=oigfaZ5AqM4",
          codeExample: {
            code: `// Creating objects
const user = {
  name: "Alice",
  age: 30,
  email: "alice@example.com"
};

// Accessing properties
console.log(user.name); // "Alice"
console.log(user["age"]); // 30

// Dynamic property access
const key = "email";
console.log(user[key]); // "alice@example.com"

// Adding properties
user.city = "New York";
user["country"] = "USA";

// Modifying properties
user.age = 31;

// Nested objects
const user = {
  name: "Alice",
  address: {
    street: "123 Main St",
    city: "New York"
  }
};

console.log(user.address.city); // "New York"

// Object methods
const keys = Object.keys(user); // ["name", "age", "email"]
const values = Object.values(user); // ["Alice", 30, "alice@example.com"]
const entries = Object.entries(user); // [["name", "Alice"], ["age", 30], ...]

// Objects in React (preview)
function UserCard({ user }) {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}`,
            explanation: "Objects store key-value pairs. Use dot notation or bracket notation to access properties. Objects are essential for representing structured data in React components."
          }
        },
        {
          title: "Destructuring Arrays and Objects",
          content: "Destructuring allows you to extract values from arrays and objects into variables. It's heavily used in React.\n\nArray Destructuring:\n• Extract values by position\n• Skip values with commas\n• Use rest operator for remaining\n\nObject Destructuring:\n• Extract by property name\n• Rename with alias\n• Default values\n• Nested destructuring\n\nWhy It's Important:\n• Used extensively in React\n• Cleaner code\n• Easier to work with props\n• Functional programming style",
          videoUrl: "https://www.youtube.com/watch?v=NIq3qLaHCIs", // JavaScript Destructuring Tutorial
          codeExample: {
            code: `// Array destructuring
const numbers = [1, 2, 3];
const [first, second, third] = numbers;
console.log(first); // 1
console.log(second); // 2

// Skip values
const [a, , c] = numbers; // Skip second value
console.log(a, c); // 1, 3

// Rest operator
const [first, ...rest] = numbers;
console.log(first); // 1
console.log(rest); // [2, 3]

// Object destructuring
const user = {
  name: "Alice",
  age: 30,
  email: "alice@example.com"
};

const { name, age } = user;
console.log(name); // "Alice"
console.log(age); // 30

// Rename variables
const { name: userName, age: userAge } = user;
console.log(userName); // "Alice"

// Default values
const { name, age, city = "Unknown" } = user;
console.log(city); // "Unknown"

// Nested destructuring
const user = {
  name: "Alice",
  address: {
    city: "New York",
    country: "USA"
  }
};

const { address: { city, country } } = user;
console.log(city); // "New York"

// Destructuring in React (preview)
function UserCard({ name, age, email }) {
  // Instead of: const name = props.name;
  return (
    <div>
      <h2>{name}</h2>
      <p>{age} years old</p>
      <p>{email}</p>
    </div>
  );
}

// Destructuring function parameters
function greet({ name, greeting = "Hello" }) {
  console.log(\`\${greeting}, \${name}!\`);
}

greet({ name: "Alice" }); // "Hello, Alice!"`,
            explanation: "Destructuring extracts values from arrays and objects. It's used extensively in React for props, state, and function parameters. Makes code cleaner and more readable."
          }
        },
        {
          title: "Spread Operator",
          content: "The spread operator (...) expands arrays and objects. It's essential for React state management.\n\nSpread Operator Uses:\n• Copy arrays/objects\n• Combine arrays/objects\n• Pass array elements as arguments\n• Add properties to objects\n\nWhy It's Important:\n• Essential for React state updates\n• Immutability in React\n• Combining data\n• Creating new arrays/objects",
          videoUrl: "https://www.youtube.com/watch?v=NIq3qLaHCIs",
          codeExample: {
            code: `// Spread with arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// Copy array
const original = [1, 2, 3];
const copy = [...original];
copy.push(4);
console.log(original); // [1, 2, 3] (unchanged)
console.log(copy); // [1, 2, 3, 4]

// Spread with objects
const user = { name: "Alice", age: 30 };
const updated = { ...user, age: 31 };
console.log(updated); // { name: "Alice", age: 31 }

// Combine objects
const defaults = { theme: "light", language: "en" };
const userPrefs = { theme: "dark" };
const merged = { ...defaults, ...userPrefs };
console.log(merged); // { theme: "dark", language: "en" }

// Spread in function calls
const numbers = [1, 2, 3];
console.log(Math.max(...numbers)); // 3

// Spread in React (preview)
function Component() {
  const [user, setUser] = useState({ name: "Alice", age: 30 });
  
  const updateAge = () => {
    // Create new object instead of mutating
    setUser({ ...user, age: user.age + 1 });
  };
  
  return <button onClick={updateAge}>Age: {user.age}</button>;
}

// Adding to array in React
function TodoList() {
  const [todos, setTodos] = useState([]);
  
  const addTodo = (newTodo) => {
    // Create new array instead of mutating
    setTodos([...todos, newTodo]);
  };
}`,
            explanation: "The spread operator creates copies and combines arrays/objects. Essential for React state updates - always create new objects/arrays instead of mutating existing ones."
          }
        }
      ],
      conclusion: "Arrays and objects are the primary data structures in JavaScript and React. You've learned array methods (map, filter, reduce), object manipulation, destructuring, and the spread operator. These concepts are used constantly in React - for rendering lists, managing state, handling props, and more. Practice these operations until they become second nature. Next, you'll learn about asynchronous JavaScript, which is essential for fetching data in React applications."
    }
  },
  {
    id: "js-4",
    title: "Asynchronous JavaScript: Promises and async/await",
    description: "Master asynchronous JavaScript with Promises and async/await. Essential for API calls, data fetching, and React applications.",
    level: "beginner",
    estimatedTime: "60 min",
    topics: ["Promises", "async/await", "Fetch API", "Error Handling", "Async Patterns"],
    prerequisites: ["JavaScript Arrays and Objects"],
    videoUrl: "https://www.youtube.com/watch?v=DHvZLI7Db8E", // JavaScript Promises and async/await Tutorial
    content: {
      overview: "Asynchronous JavaScript allows your code to run without blocking. This is essential for fetching data from APIs, which is a core part of React applications. This tutorial covers Promises, async/await, the Fetch API, error handling, and common async patterns. Understanding asynchronous JavaScript is crucial for building real-world React applications that interact with APIs and handle data loading.",
      sections: [
        {
          title: "Understanding Asynchronous Code",
          content: "JavaScript is single-threaded but can handle asynchronous operations. Understanding how this works is crucial.\n\nSynchronous vs Asynchronous:\n• Synchronous: Code runs in order, blocks execution\n• Asynchronous: Code runs later, doesn't block\n\nWhy Asynchronous:\n• Network requests take time\n• File operations take time\n• Don't want to freeze UI\n• Better user experience\n\nCommon Async Operations:\n• Fetching data from APIs\n• Reading files\n• Timers (setTimeout, setInterval)\n• Database operations",
          videoUrl: "https://www.youtube.com/watch?v=DHvZLI7Db8E",
          codeExample: {
            code: `// Synchronous code (blocks)
console.log("1");
console.log("2");
console.log("3");
// Output: 1, 2, 3 (in order)

// Asynchronous code (doesn't block)
console.log("1");
setTimeout(() => {
  console.log("2");
}, 1000);
console.log("3");
// Output: 1, 3, 2 (2 comes later)

// Real-world example: Fetching data
console.log("Loading...");
fetch("/api/users")
  .then(response => response.json())
  .then(data => {
    console.log("Data loaded:", data);
  });
console.log("This runs immediately, before data loads");`,
            explanation: "Asynchronous code doesn't block execution. Operations like API calls happen in the background, allowing other code to run. This is essential for responsive applications."
          }
        },
        {
          title: "Promises",
          content: "Promises represent the eventual completion (or failure) of an asynchronous operation.\n\nPromise States:\n• Pending - Initial state\n• Fulfilled - Operation succeeded\n• Rejected - Operation failed\n\nPromise Methods:\n• then() - Handle success\n• catch() - Handle errors\n• finally() - Run regardless of outcome\n\nCreating Promises:\n• new Promise() constructor\n• Resolve on success\n• Reject on failure",
          videoUrl: "https://www.youtube.com/watch?v=DHvZLI7Db8E",
          codeExample: {
            code: `// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
  const success = true;
  
  if (success) {
    resolve("Operation succeeded!");
  } else {
    reject("Operation failed!");
  }
});

// Using Promises
myPromise
  .then(result => {
    console.log(result); // "Operation succeeded!"
  })
  .catch(error => {
    console.error(error); // "Operation failed!"
  })
  .finally(() => {
    console.log("Promise completed");
  });

// Chaining Promises
fetch("/api/users")
  .then(response => response.json())
  .then(users => {
    console.log(users);
    return fetch(\`/api/users/\${users[0].id}\`);
  })
  .then(response => response.json())
  .then(user => {
    console.log(user);
  })
  .catch(error => {
    console.error("Error:", error);
  });

// Promise.all - Wait for all promises
const promise1 = fetch("/api/users");
const promise2 = fetch("/api/posts");
const promise3 = fetch("/api/comments");

Promise.all([promise1, promise2, promise3])
  .then(responses => {
    // All promises resolved
    return Promise.all(responses.map(r => r.json()));
  })
  .then(([users, posts, comments]) => {
    console.log({ users, posts, comments });
  });`,
            explanation: "Promises handle asynchronous operations. Use then() for success, catch() for errors. Chain promises for sequential operations. Promise.all() waits for multiple promises."
          }
        },
        {
          title: "async/await",
          content: "async/await provides a cleaner syntax for working with Promises. It makes asynchronous code look like synchronous code.\n\nasync Functions:\n• Function declared with async\n• Always returns a Promise\n• Can use await inside\n\nawait Keyword:\n• Waits for Promise to resolve\n• Can only be used in async functions\n• Makes code easier to read\n\nError Handling:\n• Use try/catch blocks\n• Catch handles rejected promises\n\nWhy Use async/await:\n• Cleaner syntax\n• Easier to read\n• Better error handling\n• Preferred in modern JavaScript",
          videoUrl: "https://www.youtube.com/watch?v=V_Kr9OSfDeU", // async/await Tutorial
          codeExample: {
            code: `// async function
async function fetchUser() {
  try {
    const response = await fetch("/api/user");
    const user = await response.json();
    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
}

// Using async function
fetchUser()
  .then(user => console.log(user))
  .catch(error => console.error(error));

// Multiple await calls
async function fetchUserData(userId) {
  try {
    const user = await fetch(\`/api/users/\${userId}\`).then(r => r.json());
    const posts = await fetch(\`/api/users/\${userId}/posts\`).then(r => r.json());
    const comments = await fetch(\`/api/users/\${userId}/comments\`).then(r => r.json());
    
    return { user, posts, comments };
  } catch (error) {
    console.error("Error:", error);
  }
}

// Parallel async operations
async function fetchAllData(userId) {
  try {
    const [user, posts, comments] = await Promise.all([
      fetch(\`/api/users/\${userId}\`).then(r => r.json()),
      fetch(\`/api/users/\${userId}/posts\`).then(r => r.json()),
      fetch(\`/api/users/\${userId}/comments\`).then(r => r.json())
    ]);
    
    return { user, posts, comments };
  } catch (error) {
    console.error("Error:", error);
  }
}

// async/await in React (preview)
async function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function loadUser() {
      try {
        const response = await fetch(\`/api/users/\${userId}\`);
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    }
    
    loadUser();
  }, [userId]);
  
  if (loading) return <div>Loading...</div>;
  return <div>{user.name}</div>;
}`,
            explanation: "async/await makes asynchronous code easier to read and write. Use try/catch for error handling. await waits for Promises to resolve. Essential for React data fetching."
          }
        },
        {
          title: "Fetch API",
          content: "The Fetch API is the modern way to make HTTP requests in JavaScript. It's used extensively in React applications.\n\nFetch Basics:\n• fetch(url) returns a Promise\n• Response object contains data\n• Use .json() to parse JSON\n• Handle errors properly\n\nFetch Options:\n• method - HTTP method (GET, POST, etc.)\n• headers - Request headers\n• body - Request body\n• credentials - Include cookies\n\nError Handling:\n• fetch doesn't reject on HTTP errors\n• Check response.ok\n• Handle network errors",
          videoUrl: "https://www.youtube.com/watch?v=cuEtnrL9-H0", // Fetch API Tutorial
          codeExample: {
            code: `// Basic GET request
fetch("/api/users")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));

// With async/await
async function getUsers() {
  try {
    const response = await fetch("/api/users");
    const users = await response.json();
    return users;
  } catch (error) {
    console.error("Error:", error);
  }
}

// POST request
async function createUser(userData) {
  try {
    const response = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    });
    
    if (!response.ok) {
      throw new Error("Failed to create user");
    }
    
    const newUser = await response.json();
    return newUser;
  } catch (error) {
    console.error("Error:", error);
  }
}

// Error handling
async function fetchData(url) {
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}

// Fetch in React (preview)
function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function loadUsers() {
      try {
        const response = await fetch("/api/users");
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    }
    
    loadUsers();
  }, []);
  
  if (loading) return <div>Loading...</div>;
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}`,
            explanation: "Fetch API makes HTTP requests. Returns a Promise. Use async/await for cleaner code. Always check response.ok and handle errors. Essential for React data fetching."
          }
        }
      ],
      conclusion: "Asynchronous JavaScript is essential for React applications. You've learned about Promises, async/await, and the Fetch API. These concepts are used constantly in React for fetching data, handling user interactions, and managing side effects. Practice making API calls and handling errors. Understanding async JavaScript is crucial before diving into React hooks like useEffect, which handle asynchronous operations. Next, you'll be ready to start learning React!"
    }
  },
  {
    id: "js-5",
    title: "ES6+ JavaScript Features for React",
    description: "Learn modern JavaScript features essential for React: arrow functions, template literals, modules, and more. These features are used throughout React code.",
    level: "beginner",
    estimatedTime: "50 min",
    topics: ["ES6 Features", "Arrow Functions", "Template Literals", "Modules", "Classes", "Default Parameters"],
    prerequisites: ["JavaScript Functions and Scope"],
    videoUrl: "https://www.youtube.com/watch?v=NCwa_xi0Uuc", // ES6 JavaScript Tutorial
    content: {
      overview: "ES6 (ECMAScript 2015) and later versions introduced many features that are now standard in React development. Understanding these modern JavaScript features is essential for reading and writing React code. This tutorial covers arrow functions, template literals, modules, classes, default parameters, and other ES6+ features that you'll see constantly in React applications.",
      sections: [
        {
          title: "Arrow Functions (ES6)",
          content: "Arrow functions provide a concise syntax for writing functions. They're the standard in React code.\n\nArrow Function Syntax:\n• Shorter than regular functions\n• Implicit return for single expressions\n• Lexical this binding\n• No arguments object\n\nWhen to Use:\n• Event handlers in React\n• Array methods (map, filter)\n• Callback functions\n• React components\n\nDifferences from Regular Functions:\n• No own this binding\n• No arguments object\n• Cannot be used as constructors",
          videoUrl: "https://www.youtube.com/watch?v=NCwa_xi0Uuc",
          codeExample: {
            code: `// Regular function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;

// Arrow function with body
const add = (a, b) => {
  return a + b;
};

// Single parameter (no parentheses needed)
const square = x => x * x;

// No parameters
const greet = () => console.log("Hello!");

// Arrow functions in array methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
const evens = numbers.filter(num => num % 2 === 0);
const sum = numbers.reduce((total, num) => total + num, 0);

// Arrow functions in React (preview)
const Button = ({ label, onClick }) => (
  <button onClick={onClick}>
    {label}
  </button>
);

// Event handlers
const handleClick = () => {
  console.log("Clicked!");
};

// In component
<button onClick={() => handleClick()}>Click</button>`,
            explanation: "Arrow functions are the standard in React. They provide concise syntax and lexical this binding. Used extensively for event handlers, array methods, and React components."
          }
        },
        {
          title: "Template Literals (ES6)",
          content: "Template literals provide an easy way to create strings with embedded expressions.\n\nTemplate Literal Syntax:\n• Use backticks (`) instead of quotes\n• Embed expressions with ${}\n• Support multi-line strings\n• More readable than concatenation\n\nUse Cases:\n• String interpolation\n• Multi-line strings\n• Dynamic content\n• React JSX (similar concept)",
          videoUrl: "https://www.youtube.com/watch?v=NCwa_xi0Uuc",
          codeExample: {
            code: `// Old way (string concatenation)
const name = "Alice";
const greeting = "Hello, " + name + "!";

// Template literal (ES6)
const greeting = \`Hello, \${name}!\`;

// Multi-line strings
const message = \`This is a
multi-line
string\`;

// Expressions in template literals
const a = 5;
const b = 10;
const result = \`\${a} + \${b} = \${a + b}\`;
// "5 + 10 = 15"

// Function calls
const getName = () => "Alice";
const greeting = \`Hello, \${getName()}!\`;

// Template literals in React (preview)
function Greeting({ name, age }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old</p>
    </div>
  );
}

// Similar concept in JSX
const className = \`btn btn-\${variant} btn-\${size}\`;`,
            explanation: "Template literals make string creation easier and more readable. They support expressions and multi-line strings. Similar concept to JSX interpolation in React."
          }
        },
        {
          title: "Destructuring (ES6)",
          content: "Destructuring allows you to extract values from arrays and objects. It's used extensively in React.\n\nArray Destructuring:\n• Extract by position\n• Skip values\n• Rest operator\n\nObject Destructuring:\n• Extract by property name\n• Rename variables\n• Default values\n• Nested destructuring\n\nIn React:\n• Destructure props\n• Destructure state\n• Function parameters",
          videoUrl: "https://www.youtube.com/watch?v=NIq3qLaHCIs",
          codeExample: {
            code: `// Array destructuring
const [first, second] = [1, 2];

// Object destructuring
const { name, age } = { name: "Alice", age: 30 };

// Destructuring in React (preview)
function UserCard({ name, age, email }) {
  // Instead of props.name, props.age, etc.
  return (
    <div>
      <h2>{name}</h2>
      <p>{age} years old</p>
    </div>
  );
}

// Destructuring with defaults
function Button({ label, onClick, variant = "primary" }) {
  return <button className={\`btn-\${variant}\`} onClick={onClick}>{label}</button>;
}

// Destructuring state
const [user, setUser] = useState({ name: "Alice", age: 30 });
const { name, age } = user;`,
            explanation: "Destructuring is used constantly in React for props, state, and function parameters. Makes code cleaner and more readable."
          }
        },
        {
          title: "Spread Operator (ES6)",
          content: "The spread operator expands arrays and objects. Essential for React state management.\n\nSpread Uses:\n• Copy arrays/objects\n• Combine arrays/objects\n• Pass arguments\n• Update state immutably\n\nIn React:\n• State updates\n• Props spreading\n• Combining arrays",
          videoUrl: "https://www.youtube.com/watch?v=NIq3qLaHCIs",
          codeExample: {
            code: `// Spread arrays
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

// Spread objects
const user = { name: "Alice", age: 30 };
const updated = { ...user, age: 31 };

// Spread in React (preview)
function Component() {
  const [user, setUser] = useState({ name: "Alice", age: 30 });
  
  const updateAge = () => {
    setUser({ ...user, age: user.age + 1 });
  };
  
  return <button onClick={updateAge}>Age: {user.age}</button>;
}

// Adding to array
const [todos, setTodos] = useState([]);
const addTodo = (newTodo) => {
  setTodos([...todos, newTodo]);
};`,
            explanation: "Spread operator is essential for React state updates. Always create new objects/arrays instead of mutating. Used for immutable state updates."
          }
        },
        {
          title: "Modules: import and export (ES6)",
          content: "ES6 modules allow you to organize code into separate files. React uses this extensively.\n\nExport:\n• export - Named export\n• export default - Default export\n• Can export functions, objects, classes\n\nImport:\n• import { name } - Named import\n• import name from - Default import\n• import * as - Namespace import\n\nIn React:\n• Component files\n• Utility files\n• Hook files\n• Type files",
          videoUrl: "https://www.youtube.com/watch?v=cRHQNNcYf6s", // JavaScript Modules Tutorial
          codeExample: {
            code: `// Exporting (utils.js)
export function formatDate(date) {
  return date.toLocaleDateString();
}

export const API_URL = "https://api.example.com";

export default function helper() {
  // Default export
}

// Importing
import { formatDate, API_URL } from "./utils";
import helper from "./utils"; // Default import
import * as utils from "./utils"; // All exports

// React example (preview)
// Button.jsx
export function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}

// App.jsx
import { Button } from "./Button";

function App() {
  return <Button label="Click me" onClick={() => {}} />;
}

// Hooks
// useCounter.js
export function useCounter(initial = 0) {
  const [count, setCount] = useState(initial);
  return { count, setCount };
}

// Component.jsx
import { useCounter } from "./hooks/useCounter";`,
            explanation: "ES6 modules organize code into files. React uses this for components, hooks, and utilities. export and import are standard in React projects."
          }
        }
      ],
      conclusion: "ES6+ features are the foundation of modern React code. You've learned arrow functions, template literals, destructuring, spread operator, and modules. These features are used constantly in React - in components, hooks, event handlers, and state management. Practice these features until they become natural. With this JavaScript foundation, you're now ready to dive into React development!"
    }
  },

  // INTERMEDIATE LEVEL - JavaScript
  {
    id: "js-intermediate-1",
    title: "JavaScript Closures and Scope Deep Dive",
    description: "Master JavaScript closures, lexical scope, and how they work. Essential for understanding React hooks and advanced JavaScript patterns.",
    level: "intermediate",
    estimatedTime: "60 min",
    topics: ["Closures", "Lexical Scope", "Scope Chain", "IIFE", "Module Pattern"],
    prerequisites: ["JavaScript Functions and Scope"],
    videoUrl: "https://www.youtube.com/watch?v=3a0p8OqBv-Q", // JavaScript Closures Tutorial
    content: {
      overview: "Closures are one of JavaScript's most powerful features. A closure gives you access to an outer function's scope from an inner function. Understanding closures is essential for React hooks, event handlers, and advanced JavaScript patterns. This tutorial covers what closures are, how they work, lexical scope, the scope chain, and practical use cases including the module pattern and React hooks.",
      sections: [
        {
          title: "What are Closures?",
          content: "A closure is a function that has access to variables in its outer (enclosing) scope even after the outer function has returned.\n\nKey Concepts:\n• Inner function has access to outer function's variables\n• Variables persist even after outer function completes\n• Each closure has its own scope\n• Closures are created every time a function is created\n\nWhy Closures Matter:\n• Enable data privacy\n• Create function factories\n• Essential for React hooks\n• Enable module pattern",
          videoUrl: "https://www.youtube.com/watch?v=3a0p8OqBv-Q",
          codeExample: {
            code: `// Simple closure example
function outerFunction(x) {
  // Outer function's variable
  const outerVariable = x;
  
  // Inner function (closure)
  function innerFunction(y) {
    console.log(outerVariable + y); // Accesses outerVariable
  }
  
  return innerFunction;
}

const closure = outerFunction(10);
closure(5); // 15 - outerVariable is still accessible!

// Closure with multiple variables
function createCounter() {
  let count = 0; // Private variable
  
  return {
    increment: function() {
      count++;
      return count;
    },
    decrement: function() {
      count--;
      return count;
    },
    getCount: function() {
      return count;
    }
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount()); // 2
// count is not directly accessible - it's private!

// Closures in loops (common gotcha)
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i); // Prints 3, 3, 3 (not 0, 1, 2)
  }, 100);
}

// Solution: Use let or IIFE
for (let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i); // Prints 0, 1, 2
  }, 100);
}`,
            explanation: "Closures allow inner functions to access outer function variables even after the outer function returns. This enables data privacy and function factories. Be careful with closures in loops - use let instead of var."
          }
        },
        {
          title: "Lexical Scope and Scope Chain",
          content: "JavaScript uses lexical (static) scoping, meaning scope is determined by where variables and functions are declared in the code.\n\nLexical Scope:\n• Scope determined at write time\n• Based on physical location in code\n• Inner scopes can access outer scopes\n• Outer scopes cannot access inner scopes\n\nScope Chain:\n• JavaScript looks up variables through scope chain\n• Starts at current scope\n• Moves up to outer scopes\n• Stops at global scope\n• Returns undefined if not found",
          videoUrl: "https://www.youtube.com/watch?v=3a0p8OqBv-Q",
          codeExample: {
            code: `// Lexical scope example
const globalVar = "global";

function outer() {
  const outerVar = "outer";
  
  function inner() {
    const innerVar = "inner";
    
    // Can access all three variables
    console.log(globalVar); // "global"
    console.log(outerVar); // "outer"
    console.log(innerVar); // "inner"
  }
  
  inner();
  // Can only access outer and global
  // console.log(innerVar); // ❌ Error
}

outer();

// Scope chain in action
let a = 1;

function first() {
  let b = 2;
  
  function second() {
    let c = 3;
    
    function third() {
      let d = 4;
      console.log(a, b, c, d); // 1, 2, 3, 4
      // JavaScript looks up: third -> second -> first -> global
    }
    
    third();
  }
  
  second();
}

first();`,
            explanation: "Lexical scope means scope is determined by code structure. JavaScript follows the scope chain to find variables, starting from the current scope and moving outward."
          }
        },
        {
          title: "IIFE (Immediately Invoked Function Expression)",
          content: "IIFE is a function that runs as soon as it's defined. It's useful for creating private scopes and avoiding global namespace pollution.\n\nIIFE Syntax:\n• (function() { ... })()\n• (function() { ... }())\n• Creates new scope\n• Variables inside are private\n\nUse Cases:\n• Module pattern\n• Avoid global variables\n• Create private scope\n• Initialize code",
          videoUrl: "https://www.youtube.com/watch?v=3a0p8OqBv-Q",
          codeExample: {
            code: `// Basic IIFE
(function() {
  const privateVar = "I'm private";
  console.log(privateVar);
})();
// privateVar is not accessible outside

// IIFE with parameters
(function(name) {
  console.log(\`Hello, \${name}!\`);
})("Alice");

// IIFE that returns a value
const counter = (function() {
  let count = 0;
  
  return {
    increment: function() {
      return ++count;
    },
    decrement: function() {
      return --count;
    },
    getCount: function() {
      return count;
    }
  };
})();

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2

// Module pattern with IIFE
const MyModule = (function() {
  let privateVar = 0;
  
  function privateFunction() {
    return privateVar;
  }
  
  return {
    publicMethod: function() {
      return privateFunction();
    },
    setValue: function(val) {
      privateVar = val;
    }
  };
})();

MyModule.setValue(10);
console.log(MyModule.publicMethod()); // 10`,
            explanation: "IIFE creates a private scope immediately. Useful for module patterns and avoiding global namespace pollution. Modern JavaScript uses ES6 modules instead, but IIFE is still useful."
          }
        },
        {
          title: "Closures in React (Hooks)",
          content: "React hooks use closures extensively. Understanding closures helps you understand how hooks work.\n\nHow Hooks Use Closures:\n• useState stores values in closure\n• useEffect captures values in closure\n• Custom hooks rely on closures\n• Event handlers use closures\n\nCommon Patterns:\n• Stale closures in useEffect\n• Closures in event handlers\n• Custom hooks with closures",
          videoUrl: "https://www.youtube.com/watch?v=3a0p8OqBv-Q",
          codeExample: {
            code: `// useState uses closures
function useState(initialValue) {
  let state = initialValue; // Stored in closure
  
  function setState(newValue) {
    state = newValue;
    // Re-render component
  }
  
  return [state, setState];
}

// useEffect and closures
function Component() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    // This closure captures count
    const timer = setInterval(() => {
      console.log(count); // May be stale!
      setCount(c => c + 1); // Use functional update
    }, 1000);
    
    return () => clearInterval(timer);
  }, []); // Empty deps - closure captures initial count
  
  // Better: include count in dependencies
  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count + 1); // Fresh count
    }, 1000);
    
    return () => clearInterval(timer);
  }, [count]); // Closure updates when count changes
  
  // Custom hook using closures
  function useCounter(initial = 0) {
    const [count, setCount] = useState(initial);
    
    const increment = useCallback(() => {
      setCount(c => c + 1); // Closure over setCount
    }, []);
    
    const decrement = useCallback(() => {
      setCount(c => c - 1);
    }, []);
    
    return { count, increment, decrement };
  }`,
            explanation: "React hooks rely heavily on closures. useState stores state in closures. Be aware of stale closures in useEffect - use dependency arrays or functional updates."
          }
        }
      ],
      conclusion: "Closures are fundamental to JavaScript and React. You've learned how closures work, lexical scope, scope chains, IIFE, and how React hooks use closures. Understanding closures helps you write better React code, debug issues, and create powerful abstractions. Practice creating closures and understanding scope chains. This knowledge is essential for advanced React development."
    }
  },
  {
    id: "js-intermediate-2",
    title: "JavaScript Prototypes and Inheritance",
    description: "Understand JavaScript's prototype-based inheritance system. Learn how objects inherit properties and methods, and how to work with prototypes.",
    level: "intermediate",
    estimatedTime: "70 min",
    topics: ["Prototypes", "Prototype Chain", "Inheritance", "Object.create", "Classes"],
    prerequisites: ["JavaScript Arrays and Objects"],
    videoUrl: "https://www.youtube.com/watch?v=wstwjQ1yqWQ", // JavaScript Prototypes Tutorial
    content: {
      overview: "JavaScript uses prototype-based inheritance, not class-based inheritance like many other languages. Understanding prototypes is crucial for understanding how JavaScript objects work, how inheritance functions, and how ES6 classes work under the hood. This tutorial covers the prototype chain, how inheritance works, Object.create, constructor functions, and how ES6 classes relate to prototypes.",
      sections: [
        {
          title: "Understanding Prototypes",
          content: "Every JavaScript object has a prototype. The prototype is another object that the current object inherits properties and methods from.\n\nPrototype Basics:\n• Every object has __proto__ property\n• Points to prototype object\n• Prototype chain allows inheritance\n• Object.prototype is root of chain\n\nAccessing Prototypes:\n• obj.__proto__ (deprecated, but works)\n• Object.getPrototypeOf(obj) (preferred)\n• Object.setPrototypeOf(obj, proto) (set prototype)",
          videoUrl: "https://www.youtube.com/watch?v=wstwjQ1yqWQ",
          codeExample: {
            code: `// Every object has a prototype
const obj = {};
console.log(obj.__proto__); // Points to Object.prototype
console.log(Object.getPrototypeOf(obj)); // Same, preferred method

// Prototype chain
const arr = [1, 2, 3];
console.log(arr.__proto__); // Array.prototype
console.log(arr.__proto__.__proto__); // Object.prototype
console.log(arr.__proto__.__proto__.__proto__); // null (end of chain)

// Inheritance through prototype chain
const person = {
  name: "Alice",
  greet: function() {
    return \`Hello, I'm \${this.name}\`;
  }
};

const student = Object.create(person);
student.name = "Bob";
student.study = function() {
  return "Studying...";
};

console.log(student.greet()); // "Hello, I'm Bob" - inherited!
console.log(student.study()); // "Studying..." - own method

// How JavaScript finds properties
// 1. Check object itself
// 2. Check prototype
// 3. Check prototype's prototype
// 4. Continue up chain until null`,
            explanation: "Prototypes enable inheritance in JavaScript. Objects inherit from their prototype through the prototype chain. JavaScript looks up properties through this chain."
          }
        },
        {
          title: "Constructor Functions",
          content: "Constructor functions are used to create objects with shared properties and methods. They're the traditional way to implement inheritance.\n\nConstructor Functions:\n• Functions used with new keyword\n• Create objects with shared prototype\n• this refers to new object\n• Convention: Capitalize constructor name\n\nPrototype Property:\n• Constructor functions have .prototype property\n• Objects created inherit from this prototype\n• Add methods to prototype for efficiency",
          videoUrl: "https://www.youtube.com/watch?v=wstwjQ1yqWQ",
          codeExample: {
            code: `// Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Add methods to prototype (shared by all instances)
Person.prototype.greet = function() {
  return \`Hello, I'm \${this.name}\`;
};

Person.prototype.getAge = function() {
  return this.age;
};

// Create instances
const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

console.log(person1.greet()); // "Hello, I'm Alice"
console.log(person2.greet()); // "Hello, I'm Bob"

// Both share same prototype
console.log(person1.__proto__ === Person.prototype); // true
console.log(person2.__proto__ === Person.prototype); // true

// Inheritance with constructor functions
function Student(name, age, school) {
  Person.call(this, name, age); // Call parent constructor
  this.school = school;
}

// Set up prototype chain
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.study = function() {
  return "Studying...";
};

const student = new Student("Charlie", 20, "University");
console.log(student.greet()); // Inherited from Person
console.log(student.study()); // Own method`,
            explanation: "Constructor functions create objects with shared prototypes. Add methods to prototype for efficiency. Use Object.create() for inheritance."
          }
        },
        {
          title: "ES6 Classes and Prototypes",
          content: "ES6 classes are syntactic sugar over constructor functions and prototypes. They make inheritance easier but work the same way under the hood.\n\nES6 Classes:\n• class keyword\n• constructor method\n• Methods on prototype\n• extends for inheritance\n• super for parent access\n\nUnder the Hood:\n• Classes are constructor functions\n• Methods go on prototype\n• extends sets up prototype chain\n• Works exactly like constructor functions",
          videoUrl: "https://www.youtube.com/watch?v=wstwjQ1yqWQ",
          codeExample: {
            code: `// ES6 Class (syntactic sugar)
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    return \`Hello, I'm \${this.name}\`;
  }
  
  getAge() {
    return this.age;
  }
}

// Under the hood, this is equivalent to:
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// Person.prototype.greet = function() { ... };

const person = new Person("Alice", 30);
console.log(person.greet()); // "Hello, I'm Alice"

// Inheritance with classes
class Student extends Person {
  constructor(name, age, school) {
    super(name, age); // Call parent constructor
    this.school = school;
  }
  
  study() {
    return "Studying...";
  }
}

const student = new Student("Bob", 20, "University");
console.log(student.greet()); // Inherited
console.log(student.study()); // Own method

// Static methods
class MathUtils {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtils.add(5, 3)); // 8
// Called on class, not instance`,
            explanation: "ES6 classes are syntactic sugar over prototypes. They make inheritance easier but work the same way. extends sets up the prototype chain automatically."
          }
        },
        {
          title: "Object.create() for Prototype Inheritance",
          content: "Object.create() is a clean way to create objects with a specific prototype. It's useful for creating inheritance without constructor functions.\n\nObject.create():\n• Creates object with specified prototype\n• More explicit than constructor functions\n• Clean inheritance pattern\n• Used in modern JavaScript",
          videoUrl: "https://www.youtube.com/watch?v=wstwjQ1yqWQ",
          codeExample: {
            code: `// Object.create() for inheritance
const person = {
  name: "Unknown",
  greet() {
    return \`Hello, I'm \${this.name}\`;
  }
};

// Create object with person as prototype
const alice = Object.create(person);
alice.name = "Alice";
console.log(alice.greet()); // "Hello, I'm Alice"

// Factory function with Object.create
function createPerson(name, age) {
  const person = Object.create(personMethods);
  person.name = name;
  person.age = age;
  return person;
}

const personMethods = {
  greet() {
    return \`Hello, I'm \${this.name}\`;
  },
  getAge() {
    return this.age;
  }
};

const bob = createPerson("Bob", 25);
console.log(bob.greet()); // "Hello, I'm Bob"

// Multiple levels of inheritance
const animal = {
  eat() {
    return "Eating...";
  }
};

const dog = Object.create(animal);
dog.bark = function() {
  return "Woof!";
};

const myDog = Object.create(dog);
myDog.name = "Buddy";
console.log(myDog.eat()); // Inherited from animal
console.log(myDog.bark()); // Inherited from dog`,
            explanation: "Object.create() creates objects with specific prototypes. It's a clean way to implement inheritance without constructor functions. Useful for modern JavaScript patterns."
          }
        }
      ],
      conclusion: "Prototypes are fundamental to JavaScript. You've learned how the prototype chain works, constructor functions, ES6 classes (which are syntactic sugar), and Object.create(). Understanding prototypes helps you understand how JavaScript inheritance works, how classes work under the hood, and how to create efficient object hierarchies. This knowledge is valuable even in React, as it helps you understand JavaScript's object model."
    }
  },
  {
    id: "js-intermediate-3",
    title: "JavaScript Design Patterns",
    description: "Learn common JavaScript design patterns: Module, Singleton, Factory, Observer, and more. Essential for writing maintainable, scalable code.",
    level: "intermediate",
    estimatedTime: "80 min",
    topics: ["Module Pattern", "Singleton", "Factory", "Observer", "Strategy", "Decorator"],
    prerequisites: ["JavaScript Closures and Scope Deep Dive"],
    videoUrl: "https://www.youtube.com/watch?v=tv-_1er1mWI", // JavaScript Design Patterns Tutorial
    content: {
      overview: "Design patterns are reusable solutions to common programming problems. Understanding design patterns helps you write more maintainable, scalable, and testable code. This tutorial covers essential JavaScript design patterns including Module, Singleton, Factory, Observer, Strategy, and Decorator patterns. These patterns are used in React libraries and can help you structure your React applications better.",
      sections: [
        {
          title: "Module Pattern",
          content: "The Module pattern provides a way to create private and public members, encapsulating functionality.\n\nModule Pattern:\n• Encapsulates code\n• Private and public members\n• Avoids global namespace pollution\n• Can use IIFE or ES6 modules\n\nBenefits:\n• Code organization\n• Privacy\n• Reusability\n• Maintainability",
          videoUrl: "https://www.youtube.com/watch?v=tv-_1er1mWI",
          codeExample: {
            code: `// Module pattern with IIFE
const MyModule = (function() {
  // Private variables
  let privateVar = 0;
  
  // Private function
  function privateFunction() {
    return privateVar;
  }
  
  // Public API
  return {
    // Public method
    publicMethod: function() {
      return privateFunction();
    },
    
    // Public method that modifies private state
    setValue: function(val) {
      privateVar = val;
    },
    
    // Public property
    publicProperty: "I'm public"
  };
})();

MyModule.setValue(10);
console.log(MyModule.publicMethod()); // 10
console.log(MyModule.publicProperty); // "I'm public"
// console.log(MyModule.privateVar); // undefined (private)

// Module pattern with ES6 modules
// mathUtils.js
let privateCounter = 0;

export function increment() {
  privateCounter++;
  return privateCounter;
}

export function decrement() {
  privateCounter--;
  return privateCounter;
}

export function getCount() {
  return privateCounter;
}

// main.js
import { increment, decrement, getCount } from './mathUtils';

increment();
increment();
console.log(getCount()); // 2`,
            explanation: "Module pattern encapsulates code with private and public members. Use IIFE for traditional modules or ES6 modules for modern JavaScript. Keeps code organized and prevents global namespace pollution."
          }
        },
        {
          title: "Singleton Pattern",
          content: "Singleton ensures a class has only one instance and provides global access to it.\n\nSingleton Pattern:\n• Only one instance exists\n• Global access point\n• Lazy initialization\n• Useful for shared resources\n\nUse Cases:\n• Configuration objects\n• Database connections\n• Logging services\n• Cache managers",
          videoUrl: "https://www.youtube.com/watch?v=tv-_1er1mWI",
          codeExample: {
            code: `// Singleton with function
const Singleton = (function() {
  let instance;
  
  function createInstance() {
    return {
      name: "Singleton Instance",
      getData: function() {
        return "Some data";
      }
    };
  }
  
  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
console.log(instance1 === instance2); // true (same instance)

// Singleton with class
class Database {
  constructor() {
    if (Database.instance) {
      return Database.instance;
    }
    
    this.connection = "Connected";
    Database.instance = this;
    return this;
  }
  
  query(sql) {
    return \`Executing: \${sql}\`;
  }
}

const db1 = new Database();
const db2 = new Database();
console.log(db1 === db2); // true

// Modern ES6 singleton
class Config {
  static instance = null;
  
  constructor() {
    if (Config.instance) {
      return Config.instance;
    }
    
    this.settings = {};
    Config.instance = this;
  }
  
  set(key, value) {
    this.settings[key] = value;
  }
  
  get(key) {
    return this.settings[key];
  }
}

const config1 = new Config();
const config2 = new Config();
config1.set("theme", "dark");
console.log(config2.get("theme")); // "dark" (same instance)`,
            explanation: "Singleton ensures only one instance exists. Useful for shared resources like configuration, database connections, or logging services. Be careful - can make testing harder."
          }
        },
        {
          title: "Factory Pattern",
          content: "Factory pattern creates objects without specifying the exact class. It provides a way to create objects based on a condition or parameter.\n\nFactory Pattern:\n• Creates objects based on input\n• Hides object creation logic\n• Centralizes object creation\n• Flexible and extensible\n\nUse Cases:\n• Creating different object types\n• Complex object initialization\n• Dynamic object creation\n• Plugin systems",
          videoUrl: "https://www.youtube.com/watch?v=tv-_1er1mWI",
          codeExample: {
            code: `// Simple factory function
function createUser(type, name) {
  switch(type) {
    case "admin":
      return {
        name,
        role: "admin",
        permissions: ["read", "write", "delete"]
      };
    case "user":
      return {
        name,
        role: "user",
        permissions: ["read"]
      };
    default:
      throw new Error("Unknown user type");
  }
}

const admin = createUser("admin", "Alice");
const user = createUser("user", "Bob");

// Factory with classes
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
}

class Truck {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
}

class VehicleFactory {
  createVehicle(type, make, model) {
    switch(type) {
      case "car":
        return new Car(make, model);
      case "truck":
        return new Truck(make, model);
      default:
        throw new Error("Unknown vehicle type");
    }
  }
}

const factory = new VehicleFactory();
const car = factory.createVehicle("car", "Toyota", "Camry");
const truck = factory.createVehicle("truck", "Ford", "F-150");

// Factory in React (preview)
function createComponent(type, props) {
  const components = {
    button: () => <button {...props} />,
    input: () => <input {...props} />,
    div: () => <div {...props} />
  };
  
  return components[type]?.() || null;
}`,
            explanation: "Factory pattern centralizes object creation. Creates objects based on input without exposing creation logic. Useful for creating different types of objects dynamically."
          }
        },
        {
          title: "Observer Pattern",
          content: "Observer pattern defines a one-to-many dependency between objects. When one object changes state, all dependents are notified.\n\nObserver Pattern:\n• Subject maintains list of observers\n• Observers subscribe/unsubscribe\n• Subject notifies observers of changes\n• Loose coupling between subject and observers\n\nUse Cases:\n• Event systems\n• Model-View updates\n• React state management\n• Pub/Sub systems",
          videoUrl: "https://www.youtube.com/watch?v=tv-_1er1mWI",
          codeExample: {
            code: `// Observer pattern implementation
class Subject {
  constructor() {
    this.observers = [];
  }
  
  subscribe(observer) {
    this.observers.push(observer);
  }
  
  unsubscribe(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }
  
  notify(data) {
    this.observers.forEach(observer => observer.update(data));
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }
  
  update(data) {
    console.log(\`\${this.name} received: \${data}\`);
  }
}

// Usage
const subject = new Subject();
const observer1 = new Observer("Observer 1");
const observer2 = new Observer("Observer 2");

subject.subscribe(observer1);
subject.subscribe(observer2);

subject.notify("Hello!"); 
// Observer 1 received: Hello!
// Observer 2 received: Hello!

subject.unsubscribe(observer1);
subject.notify("Goodbye!");
// Observer 2 received: Goodbye!

// Observer pattern in React (preview)
// React's useState is similar to observer pattern
function useObserver(initialValue) {
  const [value, setValue] = useState(initialValue);
  const observers = useRef([]);
  
  const subscribe = useCallback((callback) => {
    observers.current.push(callback);
    return () => {
      observers.current = observers.current.filter(cb => cb !== callback);
    };
  }, []);
  
  const update = useCallback((newValue) => {
    setValue(newValue);
    observers.current.forEach(callback => callback(newValue));
  }, []);
  
  return { value, update, subscribe };
}`,
            explanation: "Observer pattern enables one-to-many communication. Subject notifies observers of changes. Similar to React's state management and event systems. Enables loose coupling."
          }
        }
      ],
      conclusion: "Design patterns provide proven solutions to common problems. You've learned Module, Singleton, Factory, and Observer patterns. These patterns help you write more maintainable, scalable code. Understanding patterns helps you recognize them in libraries and frameworks, and apply them in your own code. Practice implementing these patterns and look for opportunities to use them in your React applications."
    }
  },
  {
    id: "js-intermediate-4",
    title: "JavaScript Runtime Execution Order: Event Loop Deep Dive",
    description: "Master JavaScript's execution order: understand how synchronous code, Promises, and setTimeout execute. Learn the event loop, call stack, microtask queue, and macrotask queue.",
    level: "intermediate",
    estimatedTime: "70 min",
    topics: ["Event Loop", "Call Stack", "Microtask Queue", "Macrotask Queue", "Execution Order", "Promise Queue"],
    prerequisites: ["Asynchronous JavaScript: Promises and async/await"],
    videoUrl: "https://www.youtube.com/watch?v=8aGhZQoF2QU", // JavaScript Event Loop Explained
    content: {
      overview: "Understanding JavaScript's execution order is crucial for debugging async code and writing performant applications. JavaScript executes code in a specific order: synchronous code first, then microtasks (Promises), then macrotasks (setTimeout, setInterval). This tutorial covers the event loop, call stack, microtask queue, macrotask queue, and how to predict execution order. You'll learn to solve complex execution order problems and understand why certain code runs when it does.",
      sections: [
        {
          title: "Understanding the Event Loop",
          content: "The event loop is JavaScript's mechanism for handling asynchronous operations. It manages the execution of code, callbacks, and events.\n\nEvent Loop Components:\n• Call Stack - Where synchronous code executes\n• Web APIs - Browser APIs (setTimeout, fetch, DOM)\n• Callback Queue (Macrotask Queue) - For setTimeout, setInterval\n• Microtask Queue - For Promises, queueMicrotask\n• Event Loop - Coordinates everything\n\nExecution Flow:\n1. Execute all synchronous code from call stack\n2. Execute all microtasks (Promises)\n3. Execute one macrotask (setTimeout callback)\n4. Repeat from step 2\n\nKey Rule: Microtasks always run before macrotasks!",
          videoUrl: "https://www.youtube.com/watch?v=8aGhZQoF2QU",
          codeExample: {
            code: `// Basic execution order
console.log("1 - Synchronous");

setTimeout(() => {
  console.log("2 - setTimeout (Macrotask)");
}, 0);

Promise.resolve().then(() => {
  console.log("3 - Promise (Microtask)");
});

console.log("4 - Synchronous");

// Output: 1, 4, 3, 2
// Explanation:
// 1. "1" - Synchronous code runs first
// 2. setTimeout - Moved to Web API, callback queued in Macrotask Queue
// 3. Promise - Moved to Microtask Queue
// 4. "4" - Synchronous code continues
// 5. "3" - Microtasks run (Promises have higher priority)
// 6. "2" - Macrotasks run after microtasks

// Visual representation:
// Call Stack: [main]
// 1. console.log("1") executes → "1" printed
// 2. setTimeout → Web API → Macrotask Queue
// 3. Promise.resolve().then() → Microtask Queue
// 4. console.log("4") executes → "4" printed
// 5. Call stack empty → Process Microtask Queue → "3" printed
// 6. Process Macrotask Queue → "2" printed`,
            explanation: "The event loop coordinates execution. Synchronous code runs first, then all microtasks, then one macrotask. This is why Promises run before setTimeout callbacks."
          }
        },
        {
          title: "The Classic Interview Question",
          content: "This is one of the most common JavaScript interview questions. Understanding it demonstrates deep knowledge of the event loop.\n\nQuestion: What is the execution order?\n\nCode:\n```javascript\nconsole.log(1)\nnew Promise(resolve => resolve()).then(() => console.log(2))\nsetTimeout(() => console.log(3), 0)\nconsole.log(4)\n```\n\nAnswer: 1, 4, 2, 3\n\nWhy?\n• console.log(1) - Synchronous, runs immediately\n• Promise - Added to Microtask Queue\n• setTimeout - Added to Macrotask Queue\n• console.log(4) - Synchronous, runs immediately\n• Microtask Queue processed - console.log(2) runs\n• Macrotask Queue processed - console.log(3) runs",
          videoUrl: "https://www.youtube.com/watch?v=8aGhZQoF2QU",
          codeExample: {
            code: `// The classic question
console.log(1);

new Promise((resolve) => {
  resolve();
}).then(() => {
  console.log(2);
});

setTimeout(() => {
  console.log(3);
}, 0);

console.log(4);

// Output: 1, 4, 2, 3

// Step-by-step execution:
// Step 1: console.log(1) → "1" printed (synchronous)
// Step 2: Promise created, resolve() called immediately
//         → .then() callback added to Microtask Queue
// Step 3: setTimeout → Web API → callback added to Macrotask Queue
// Step 4: console.log(4) → "4" printed (synchronous)
// Step 5: Call stack empty, process Microtask Queue
//         → console.log(2) → "2" printed
// Step 6: Process Macrotask Queue
//         → console.log(3) → "3" printed

// More complex example
console.log("Start");

setTimeout(() => console.log("Timeout 1"), 0);

Promise.resolve().then(() => {
  console.log("Promise 1");
  setTimeout(() => console.log("Timeout 2"), 0);
});

Promise.resolve().then(() => {
  console.log("Promise 2");
});

setTimeout(() => console.log("Timeout 3"), 0);

console.log("End");

// Output: Start, End, Promise 1, Promise 2, Timeout 1, Timeout 3, Timeout 2
// Explanation:
// 1. "Start" - synchronous
// 2. setTimeout 1 → Macrotask Queue
// 3. Promise 1 → Microtask Queue
// 4. Promise 2 → Microtask Queue
// 5. setTimeout 3 → Macrotask Queue
// 6. "End" - synchronous
// 7. Process Microtasks: "Promise 1", "Promise 2"
//    - Promise 1 adds setTimeout 2 to Macrotask Queue
// 8. Process Macrotasks: "Timeout 1", "Timeout 3", "Timeout 2"`,
            explanation: "This classic question tests understanding of execution order. Remember: synchronous → all microtasks → one macrotask → repeat. Promises (microtasks) always run before setTimeout (macrotasks)."
          }
        },
        {
          title: "Microtask Queue vs Macrotask Queue",
          content: "Understanding the difference between microtasks and macrotasks is crucial for predicting execution order.\n\nMicrotask Queue (Higher Priority):\n• Promise.then() / Promise.catch() / Promise.finally()\n• queueMicrotask()\n• MutationObserver callbacks\n• Runs after current execution, before macrotasks\n• All microtasks run before next macrotask\n\nMacrotask Queue (Lower Priority):\n• setTimeout()\n• setInterval()\n• setImmediate() (Node.js)\n• I/O callbacks\n• UI rendering\n• Runs after all microtasks complete\n• One macrotask per event loop iteration",
          videoUrl: "https://www.youtube.com/watch?v=8aGhZQoF2QU",
          codeExample: {
            code: `// Microtasks vs Macrotasks
console.log("1");

// Macrotask
setTimeout(() => console.log("Macrotask 1"), 0);

// Microtask
Promise.resolve().then(() => console.log("Microtask 1"));

// Macrotask
setTimeout(() => console.log("Macrotask 2"), 0);

// Microtask
Promise.resolve().then(() => {
  console.log("Microtask 2");
  // This microtask adds another microtask
  Promise.resolve().then(() => console.log("Microtask 3"));
});

console.log("2");

// Output: 1, 2, Microtask 1, Microtask 2, Microtask 3, Macrotask 1, Macrotask 2

// All microtasks run before any macrotask
// Even if microtasks add more microtasks, they all run first

// queueMicrotask() - explicit microtask
console.log("Start");

queueMicrotask(() => {
  console.log("Microtask from queueMicrotask");
});

Promise.resolve().then(() => {
  console.log("Microtask from Promise");
});

setTimeout(() => {
  console.log("Macrotask from setTimeout");
}, 0);

console.log("End");

// Output: Start, End, Microtask from queueMicrotask, Microtask from Promise, Macrotask from setTimeout
// Note: queueMicrotask runs before Promise.then() in some engines, but both are microtasks

// Nested microtasks
Promise.resolve().then(() => {
  console.log("1");
  Promise.resolve().then(() => {
    console.log("2");
    Promise.resolve().then(() => {
      console.log("3");
    });
  });
});

setTimeout(() => console.log("4"), 0);

// Output: 1, 2, 3, 4
// All nested microtasks run before macrotasks`,
            explanation: "Microtasks (Promises, queueMicrotask) have higher priority than macrotasks (setTimeout). All microtasks run before any macrotask, even if microtasks create more microtasks."
          }
        },
        {
          title: "Async/Await and Execution Order",
          content: "async/await is syntactic sugar over Promises, so it follows the same microtask rules.\n\nAsync Function Behavior:\n• async functions return Promises\n• await pauses execution, doesn't block\n• Code after await runs as microtask\n• Follows Promise execution order\n\nExecution Flow:\n• Synchronous code before await runs immediately\n• await pauses, returns control\n• Remaining code runs as microtask\n• Other microtasks can run during await",
          videoUrl: "https://www.youtube.com/watch?v=8aGhZQoF2QU",
          codeExample: {
            code: `// async/await execution order
console.log("1");

async function asyncFunc() {
  console.log("2");
  await Promise.resolve();
  console.log("3");
}

asyncFunc();

console.log("4");

// Output: 1, 2, 4, 3
// Explanation:
// 1. "1" - synchronous
// 2. asyncFunc() called, "2" printed (synchronous part)
// 3. await pauses, returns control
// 4. "4" - synchronous code continues
// 5. "3" - runs as microtask after await resolves

// More complex async/await
console.log("Start");

async function func1() {
  console.log("func1 start");
  await Promise.resolve();
  console.log("func1 end");
}

async function func2() {
  console.log("func2 start");
  await Promise.resolve();
  console.log("func2 end");
}

func1();
func2();

setTimeout(() => console.log("setTimeout"), 0);

console.log("End");

// Output: Start, func1 start, func2 start, End, func1 end, func2 end, setTimeout
// Explanation:
// 1. "Start" - synchronous
// 2. func1() called, "func1 start" printed
// 3. func2() called, "func2 start" printed
// 4. Both await, return control
// 5. "End" - synchronous
// 6. Microtasks: "func1 end", "func2 end"
// 7. Macrotask: "setTimeout"

// async/await with setTimeout
async function test() {
  console.log("1");
  await new Promise(resolve => {
    setTimeout(() => {
      console.log("2");
      resolve();
    }, 0);
  });
  console.log("3");
}

test();
console.log("4");

// Output: 1, 4, 2, 3
// Explanation:
// 1. "1" - synchronous part of async function
// 2. await with setTimeout → setTimeout is macrotask
// 3. "4" - synchronous code continues
// 4. setTimeout callback runs → "2" printed, Promise resolves
// 5. Code after await runs → "3" printed`,
            explanation: "async/await follows Promise execution order. Code before await runs synchronously, code after await runs as microtask. await doesn't block the event loop."
          }
        },
        {
          title: "Common Execution Order Patterns",
          content: "Recognizing common patterns helps you predict execution order quickly.\n\nPattern 1: Promise Chain\n• Each .then() adds to microtask queue\n• All run before macrotasks\n\nPattern 2: setTimeout in Promise\n• setTimeout callback is macrotask\n• Runs after all microtasks\n\nPattern 3: Nested Async Operations\n• Inner operations queue before outer completes\n• Microtasks process in order\n\nPattern 4: Promise.all()\n• All Promises resolve, then .then() runs\n• Single microtask for all results",
          videoUrl: "https://www.youtube.com/watch?v=8aGhZQoF2QU",
          codeExample: {
            code: `// Pattern 1: Promise chain
Promise.resolve()
  .then(() => console.log("1"))
  .then(() => console.log("2"))
  .then(() => console.log("3"));

setTimeout(() => console.log("4"), 0);

// Output: 1, 2, 3, 4
// All .then() callbacks are microtasks

// Pattern 2: setTimeout in Promise
Promise.resolve().then(() => {
  console.log("1");
  setTimeout(() => console.log("2"), 0);
});

setTimeout(() => console.log("3"), 0);

// Output: 1, 3, 2
// Explanation:
// 1. Promise resolves → "1" printed (microtask)
// 2. setTimeout in Promise → added to Macrotask Queue
// 3. setTimeout outside → added to Macrotask Queue
// 4. Both macrotasks run: "3", "2" (order depends on queue)

// Pattern 3: Nested Promises
Promise.resolve().then(() => {
  console.log("1");
  Promise.resolve().then(() => {
    console.log("2");
    Promise.resolve().then(() => {
      console.log("3");
    });
  });
});

setTimeout(() => console.log("4"), 0);

// Output: 1, 2, 3, 4
// All nested microtasks run before macrotasks

// Pattern 4: Promise.all()
Promise.all([
  Promise.resolve().then(() => console.log("1")),
  Promise.resolve().then(() => console.log("2"))
]).then(() => console.log("3"));

setTimeout(() => console.log("4"), 0);

// Output: 1, 2, 3, 4
// Individual Promises run first, then Promise.all .then()`,
            explanation: "Recognize common patterns: Promise chains, setTimeout in Promises, nested async operations. Understanding these patterns helps predict execution order quickly."
          }
        },
        {
          title: "Debugging Execution Order Issues",
          content: "Common issues and how to debug them.\n\nCommon Issues:\n• Code running in unexpected order\n• State updates not reflecting\n• Race conditions\n• Stale closures\n\nDebugging Techniques:\n• Add console.logs with labels\n• Use debugger statement\n• Check call stack in DevTools\n• Understand microtask vs macrotask\n• Use async/await for clearer flow",
          videoUrl: "https://www.youtube.com/watch?v=8aGhZQoF2QU",
          codeExample: {
            code: `// Issue: State not updating as expected
function Component() {
  const [count, setCount] = useState(0);
  
  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    console.log(count); // Still 0! (stale closure)
  };
  
  // Solution: Use functional updates
  const handleClickFixed = () => {
    setCount(c => c + 1);
    setCount(c => c + 1);
    // Both updates batched, count will be 2
  };
}

// Issue: Execution order confusion
console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");

// Debug: Add labels
console.log("[SYNC] 1");
setTimeout(() => console.log("[MACRO] 2"), 0);
Promise.resolve().then(() => console.log("[MICRO] 3"));
console.log("[SYNC] 4");

// Use DevTools
// 1. Set breakpoints
// 2. Check Call Stack
// 3. Monitor Promise and setTimeout queues
// 4. Use Performance tab to see execution timeline

// Issue: Race condition
let data = null;

fetch("/api/data").then(res => {
  data = res.json();
});

// data might be null here!
console.log(data);

// Solution: Use async/await
async function loadData() {
  const data = await fetch("/api/data").then(r => r.json());
  console.log(data); // Guaranteed to have data
  return data;
}`,
            explanation: "Debug execution order issues by understanding microtasks vs macrotasks, using functional updates in React, and leveraging DevTools. async/await makes execution flow clearer."
          }
        }
      ],
      conclusion: "Understanding JavaScript's execution order is essential for writing correct async code and debugging issues. You've learned about the event loop, microtask queue, macrotask queue, and how to predict execution order. Remember: synchronous code → all microtasks → one macrotask → repeat. This knowledge helps you write better React code, especially when working with useEffect, async operations, and state updates. Practice predicting execution order with different combinations of Promises, setTimeout, and async/await."
    }
  },

  // ADVANCED LEVEL - JavaScript
  {
    id: "js-advanced-1",
    title: "Advanced JavaScript: Memory Management and Performance",
    description: "Deep dive into JavaScript memory management, garbage collection, memory leaks, and performance optimization techniques.",
    level: "advanced",
    estimatedTime: "90 min",
    topics: ["Memory Management", "Garbage Collection", "Memory Leaks", "Performance", "Profiling"],
    prerequisites: ["JavaScript Closures and Scope Deep Dive"],
    videoUrl: "https://www.youtube.com/watch?v=AeUCN2lBq0s", // JavaScript Memory Management
    content: {
      overview: "Understanding JavaScript memory management is crucial for building performant applications. This tutorial covers how JavaScript manages memory, garbage collection, common memory leaks, performance optimization techniques, and profiling tools. This knowledge is essential for building large-scale React applications that perform well.",
      sections: [
        {
          title: "JavaScript Memory Management",
          content: "JavaScript automatically manages memory through garbage collection. Understanding how this works helps you write efficient code.\n\nMemory Lifecycle:\n• Allocation - Memory is allocated when needed\n• Use - Memory is used by your program\n• Release - Memory is freed when no longer needed\n\nGarbage Collection:\n• Automatic memory management\n• Marks and sweeps unreachable objects\n• Runs periodically\n• Can cause performance hiccups",
          videoUrl: "https://www.youtube.com/watch?v=AeUCN2lBq0s",
          codeExample: {
            code: `// Memory allocation
let obj = { name: "Alice" }; // Memory allocated
obj = null; // Memory can be garbage collected

// Memory leaks - global variables
// ❌ BAD: Global variable never freed
window.data = new Array(1000000).fill(0);

// ✅ GOOD: Local variable
function processData() {
  const data = new Array(1000000).fill(0);
  // data is garbage collected after function ends
}

// Memory leaks - closures
// ❌ BAD: Closure holds reference
function createLeak() {
  const largeData = new Array(1000000).fill(0);
  
  return function() {
    // Closure holds reference to largeData even if unused
    console.log("Leak");
  };
}

// ✅ GOOD: Only capture what you need
function createNoLeak() {
  return function() {
    console.log("No leak");
  };
}

// Memory leaks - event listeners
// ❌ BAD: Event listeners not removed
function addListener() {
  const button = document.getElementById("btn");
  button.addEventListener("click", handleClick);
  // Listener never removed
}

// ✅ GOOD: Remove listeners
function addListener() {
  const button = document.getElementById("btn");
  button.addEventListener("click", handleClick);
  
  return () => {
    button.removeEventListener("click", handleClick);
  };
}

// Memory leaks in React
function Component() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    const controller = new AbortController();
    
    fetch("/api/data", { signal: controller.signal })
      .then(res => res.json())
      .then(setData);
    
    // ✅ Cleanup prevents memory leaks
    return () => {
      controller.abort();
    };
  }, []);
}`,
            explanation: "JavaScript automatically manages memory. Avoid memory leaks by: removing event listeners, cleaning up closures, avoiding global variables, and properly cleaning up in React useEffect."
          }
        },
        {
          title: "Performance Optimization Techniques",
          content: "Optimize JavaScript performance through various techniques: debouncing, throttling, lazy loading, and code splitting.\n\nOptimization Strategies:\n• Debounce/throttle event handlers\n• Lazy load resources\n• Code splitting\n• Memoization\n• Virtual scrolling\n• Web Workers for heavy computation",
          videoUrl: "https://www.youtube.com/watch?v=AeUCN2lBq0s",
          codeExample: {
            code: `// Debouncing (wait for pause)
function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

const debouncedSearch = debounce((query) => {
  console.log("Searching:", query);
}, 300);

// Throttling (limit execution frequency)
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

const throttledScroll = throttle(() => {
  console.log("Scrolled");
}, 100);

// Memoization
function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    }
    const result = fn.apply(this, args);
    cache[key] = result;
    return result;
  };
}

const expensiveFunction = memoize((n) => {
  // Expensive calculation
  return n * n;
});

// Lazy loading
const LazyComponent = React.lazy(() => import('./HeavyComponent'));

// Code splitting
import('./module').then(module => {
  module.doSomething();
});`,
            explanation: "Optimize performance with debouncing, throttling, memoization, lazy loading, and code splitting. These techniques reduce unnecessary work and improve user experience."
          }
        }
      ],
      conclusion: "Memory management and performance optimization are crucial for building scalable applications. You've learned about garbage collection, memory leaks, and optimization techniques. Apply these concepts in your React applications to ensure they perform well at scale."
    }
  },
  {
    id: "js-advanced-2",
    title: "Functional Programming in JavaScript",
    description: "Master functional programming concepts: pure functions, immutability, higher-order functions, and functional composition.",
    level: "advanced",
    estimatedTime: "90 min",
    topics: ["Pure Functions", "Immutability", "Higher-Order Functions", "Composition", "Currying", "Recursion"],
    prerequisites: ["JavaScript Functions and Scope"],
    videoUrl: "https://www.youtube.com/watch?v=e-5obm1G_FY", // Functional Programming in JavaScript
    content: {
      overview: "Functional programming is a programming paradigm that treats computation as the evaluation of mathematical functions. Many React patterns are inspired by functional programming. This tutorial covers pure functions, immutability, higher-order functions, function composition, currying, and recursion. Understanding functional programming helps you write better React code.",
      sections: [
        {
          title: "Pure Functions",
          content: "Pure functions always return the same output for the same input and have no side effects.\n\nPure Function Characteristics:\n• Same input → same output\n• No side effects\n• Doesn't depend on external state\n• Predictable and testable\n\nBenefits:\n• Easier to test\n• Easier to reason about\n• Can be memoized\n• Parallelizable",
          videoUrl: "https://www.youtube.com/watch?v=e-5obm1G_FY",
          codeExample: {
            code: `// ✅ Pure function
function add(a, b) {
  return a + b;
}

// Same input always gives same output
console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5

// ❌ Impure function (depends on external state)
let counter = 0;
function increment() {
  counter++;
  return counter;
}

// ❌ Impure function (side effect)
function logMessage(msg) {
  console.log(msg); // Side effect: logging
  return msg;
}

// ✅ Pure function (no side effects)
function formatMessage(msg) {
  return \`[LOG] \${msg}\`;
}

// Pure functions in React
function Button({ label, onClick }) {
  // Pure component - same props → same output
  return <button onClick={onClick}>{label}</button>;
}

// Impure component (uses external state)
function Clock() {
  const [time, setTime] = useState(new Date());
  // Uses state, but component itself is still "pure" in React's sense
  return <div>{time.toString()}</div>;
}`,
            explanation: "Pure functions are predictable and testable. They always return the same output for the same input and have no side effects. React components should be pure when possible."
          }
        },
        {
          title: "Immutability",
          content: "Immutability means data cannot be changed after creation. Instead, create new data structures.\n\nImmutability Benefits:\n• Prevents accidental mutations\n• Easier to track changes\n• Better for React (re-renders)\n• Enables time-travel debugging\n\nIn JavaScript:\n• Use const for variables\n• Create new objects/arrays\n• Use spread operator\n• Use immutable libraries",
          videoUrl: "https://www.youtube.com/watch?v=e-5obm1G_FY",
          codeExample: {
            code: `// ❌ Mutation
const user = { name: "Alice", age: 30 };
user.age = 31; // Mutates original object

// ✅ Immutability
const user = { name: "Alice", age: 30 };
const updatedUser = { ...user, age: 31 }; // New object

// ❌ Array mutation
const numbers = [1, 2, 3];
numbers.push(4); // Mutates array

// ✅ Immutable array operations
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4]; // New array

// Immutability in React
function Component() {
  const [items, setItems] = useState([1, 2, 3]);
  
  const addItem = (item) => {
    // ✅ Create new array
    setItems([...items, item]);
    
    // ❌ Don't mutate
    // items.push(item);
    // setItems(items);
  };
  
  const updateItem = (index, newValue) => {
    // ✅ Create new array with updated item
    setItems(items.map((item, i) => 
      i === index ? newValue : item
    ));
  };
}`,
            explanation: "Immutability prevents bugs and makes code easier to reason about. Always create new objects/arrays in React instead of mutating existing ones. Essential for React's re-rendering."
          }
        },
        {
          title: "Function Composition",
          content: "Function composition combines simple functions to build complex ones.\n\nComposition:\n• Combine functions\n• Output of one is input of next\n• Build complex behavior from simple parts\n• More readable than nested calls\n\nBenefits:\n• Reusable functions\n• Easier to test\n• More readable\n• Follows single responsibility",
          videoUrl: "https://www.youtube.com/watch?v=e-5obm1G_FY",
          codeExample: {
            code: `// Simple functions
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
const square = x => x * x;

// Composition
const addThenSquare = (a, b) => square(add(a, b));
console.log(addThenSquare(2, 3)); // 25

// Compose utility
const compose = (...fns) => (value) => 
  fns.reduceRight((acc, fn) => fn(acc), value);

const pipe = (...fns) => (value) => 
  fns.reduce((acc, fn) => fn(acc), value);

// Usage
const process = pipe(
  (x) => x + 1,
  (x) => x * 2,
  (x) => x.toString()
);

console.log(process(5)); // "12"

// Composition in React
const withAuth = (Component) => (props) => {
  if (!props.isAuthenticated) {
    return <Login />;
  }
  return <Component {...props} />;
};

const withLogging = (Component) => (props) => {
  console.log("Rendering:", Component.name);
  return <Component {...props} />;
};

const EnhancedComponent = withLogging(withAuth(MyComponent));`,
            explanation: "Function composition combines simple functions to build complex behavior. Makes code more reusable and readable. Used in React for higher-order components and hooks."
          }
        },
        {
          title: "Currying",
          content: "Currying transforms a function with multiple arguments into a sequence of functions with single arguments.\n\nCurrying:\n• Function returns another function\n• Each function takes one argument\n• Partial application\n• More flexible function usage\n\nBenefits:\n• Partial application\n• Function reuse\n• More flexible APIs\n• Functional composition",
          videoUrl: "https://www.youtube.com/watch?v=e-5obm1G_FY",
          codeExample: {
            code: `// Regular function
function add(a, b, c) {
  return a + b + c;
}

// Curried function
function curriedAdd(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

// Arrow function currying
const curriedAdd = a => b => c => a + b + c;

console.log(curriedAdd(1)(2)(3)); // 6

// Partial application
const add5 = curriedAdd(5);
const add5And10 = add5(10);
console.log(add5And10(15)); // 30

// Currying utility
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return function(...nextArgs) {
      return curried.apply(this, args.concat(nextArgs));
    };
  };
}

const curriedMultiply = curry((a, b, c) => a * b * c);
console.log(curriedMultiply(2)(3)(4)); // 24
console.log(curriedMultiply(2, 3)(4)); // 24
console.log(curriedMultiply(2)(3, 4)); // 24

// Currying in React
const handleChange = (field) => (event) => {
  setFormData({
    ...formData,
    [field]: event.target.value
  });
};

<input onChange={handleChange("name")} />
<input onChange={handleChange("email")} />`,
            explanation: "Currying transforms multi-argument functions into sequences of single-argument functions. Enables partial application and more flexible function usage. Useful in React for event handlers."
          }
        }
      ],
      conclusion: "Functional programming provides powerful patterns for writing maintainable code. You've learned pure functions, immutability, composition, and currying. These concepts are fundamental to React development. Practice these patterns and apply them in your React applications for cleaner, more testable code."
    }
  },

  // EXPERT LEVEL - JavaScript
  {
    id: "js-expert-1",
    title: "JavaScript Engine Internals: V8 and Execution",
    description: "Deep dive into JavaScript engine internals: how V8 works, execution context, call stack, event loop, and optimization techniques.",
    level: "expert",
    estimatedTime: "120 min",
    topics: ["V8 Engine", "Execution Context", "Call Stack", "Event Loop", "JIT Compilation", "Optimization"],
    prerequisites: ["Advanced JavaScript: Memory Management and Performance"],
    videoUrl: "https://www.youtube.com/watch?v=8aGhZQoF2QU", // JavaScript Event Loop
    content: {
      overview: "Understanding JavaScript engine internals helps you write more performant code and debug complex issues. This expert-level tutorial covers how the V8 engine works, execution context, call stack, event loop, JIT compilation, and optimization techniques. This knowledge is essential for optimizing React applications and understanding performance bottlenecks.",
      sections: [
        {
          title: "JavaScript Engine Overview",
          content: "JavaScript engines parse, compile, and execute JavaScript code. Understanding how they work helps optimize your code.\n\nEngine Components:\n• Parser - Converts code to AST\n• Compiler - Converts AST to bytecode/machine code\n• Interpreter - Executes code\n• JIT Compiler - Optimizes hot code\n• Garbage Collector - Manages memory\n\nPopular Engines:\n• V8 (Chrome, Node.js)\n• SpiderMonkey (Firefox)\n• JavaScriptCore (Safari)\n• Chakra (Edge, deprecated)",
          videoUrl: "https://www.youtube.com/watch?v=8aGhZQoF2QU",
          codeExample: {
            code: `// Understanding execution
// 1. Code is parsed into AST
function add(a, b) {
  return a + b;
}

// 2. AST is compiled to bytecode
// 3. Bytecode is executed by interpreter
// 4. Hot code is optimized by JIT compiler

// V8 optimization strategies
// - Inline caching
// - Hidden classes
// - Type feedback

// Optimize for V8
// ✅ Use consistent object shapes
function createUser(name, age) {
  return { name, age }; // Consistent shape
}

// ❌ Avoid changing object shapes
const obj = {};
obj.name = "Alice"; // Shape 1
obj.age = 30; // Shape 2 (different shape)

// ✅ Prefer arrays for numeric indices
const arr = [1, 2, 3]; // Optimized

// ❌ Avoid sparse arrays
const sparse = [];
sparse[1000] = 1; // Not optimized`,
            explanation: "JavaScript engines optimize code through parsing, compilation, and JIT optimization. Write code with consistent object shapes and avoid patterns that prevent optimization."
          }
        },
        {
          title: "Execution Context and Call Stack",
          content: "Understanding execution context and call stack is crucial for debugging and understanding JavaScript behavior.\n\nExecution Context:\n• Global context\n• Function context\n• Eval context\n\nContext Contains:\n• Variable environment\n• Lexical environment\n• this binding\n• Outer environment reference\n\nCall Stack:\n• Tracks function calls\n• LIFO structure\n• Stack overflow possible",
          videoUrl: "https://www.youtube.com/watch?v=8aGhZQoF2QU",
          codeExample: {
            code: `// Execution context creation
function outer() {
  const a = 1;
  
  function inner() {
    const b = 2;
    console.log(a, b);
  }
  
  inner();
}

outer();

// Call stack visualization:
// 1. Global context pushed
// 2. outer() context pushed
// 3. inner() context pushed
// 4. inner() context popped
// 5. outer() context popped
// 6. Global context remains

// Stack overflow
function recursive() {
  recursive(); // Infinite recursion
}

// Maximum call stack size exceeded
// recursive(); // ❌ Error

// Tail call optimization (ES6)
function factorial(n, acc = 1) {
  if (n <= 1) return acc;
  return factorial(n - 1, n * acc); // Tail call
}

// Proper tail calls allow infinite recursion (in strict mode)`,
            explanation: "Execution context contains variable environment, lexical environment, and this binding. Call stack tracks function calls. Understanding this helps debug and optimize code."
          }
        },
        {
          title: "Event Loop and Asynchronous Execution",
          content: "The event loop is JavaScript's mechanism for handling asynchronous operations. Understanding it is crucial for async code.\n\nEvent Loop Components:\n• Call stack\n• Web APIs (browser) / C++ APIs (Node.js)\n• Callback queue\n• Microtask queue\n\nExecution Order:\n• Synchronous code first\n• Microtasks (Promises) next\n• Macrotasks (setTimeout) last",
          videoUrl: "https://www.youtube.com/watch?v=8aGhZQoF2QU",
          codeExample: {
            code: `// Event loop execution order
console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => console.log("3"));

console.log("4");

// Output: 1, 4, 3, 2
// Explanation:
// 1. "1" - synchronous
// 2. setTimeout - moved to Web API, callback queued
// 3. Promise - moved to microtask queue
// 4. "4" - synchronous
// 5. "3" - microtask (runs before macrotasks)
// 6. "2" - macrotask (runs after microtasks)

// Microtasks vs Macrotasks
console.log("start");

setTimeout(() => console.log("timeout"), 0);

Promise.resolve().then(() => {
  console.log("promise 1");
  return Promise.resolve();
}).then(() => {
  console.log("promise 2");
});

console.log("end");

// Output: start, end, promise 1, promise 2, timeout

// Blocking the event loop
function blocking() {
  const start = Date.now();
  while (Date.now() - start < 5000) {
    // Block for 5 seconds
  }
}

// This blocks all JavaScript execution
// Use Web Workers for heavy computation`,
            explanation: "Event loop handles asynchronous execution. Microtasks (Promises) run before macrotasks (setTimeout). Understanding execution order is crucial for async code. Avoid blocking the event loop."
          }
        }
      ],
      conclusion: "Understanding JavaScript engine internals helps you write more performant code and debug complex issues. You've learned about V8, execution context, call stack, and the event loop. Apply this knowledge to optimize your React applications and understand performance characteristics."
    }
  },

  // STAFF LEVEL - JavaScript
  {
    id: "js-staff-1",
    title: "JavaScript Architecture and System Design",
    description: "Master-level JavaScript architecture: building scalable systems, microservices, design patterns at scale, and architectural decisions.",
    level: "staff",
    estimatedTime: "180 min",
    topics: ["System Architecture", "Microservices", "Scalability", "Design Patterns", "Performance", "Security"],
    prerequisites: ["JavaScript Engine Internals: V8 and Execution"],
    videoUrl: "https://www.youtube.com/watch?v=x2RNw4M6cME", // JavaScript Architecture
    content: {
      overview: "Staff engineers need to make architectural decisions that affect entire systems. This tutorial covers JavaScript architecture at scale: system design, microservices, scalability patterns, security, and performance optimization. You'll learn how to design systems that scale, maintain code quality at scale, and make informed architectural decisions.",
      sections: [
        {
          title: "System Architecture Patterns",
          content: "Designing JavaScript applications at scale requires understanding architectural patterns.\n\nArchitecture Patterns:\n• Monolithic vs Microservices\n• Serverless architecture\n• Event-driven architecture\n• Layered architecture\n• Modular monolith\n\nConsiderations:\n• Scalability requirements\n• Team size and structure\n• Deployment complexity\n• Performance needs\n• Cost constraints",
          videoUrl: "https://www.youtube.com/watch?v=x2RNw4M6cME",
          codeExample: {
            code: `// Modular architecture
// services/userService.js
export class UserService {
  async getUser(id) {
    // User logic
  }
}

// services/orderService.js
export class OrderService {
  async createOrder(data) {
    // Order logic
  }
}

// Event-driven architecture
class EventBus {
  constructor() {
    this.subscribers = {};
  }
  
  subscribe(event, handler) {
    if (!this.subscribers[event]) {
      this.subscribers[event] = [];
    }
    this.subscribers[event].push(handler);
  }
  
  publish(event, data) {
    if (this.subscribers[event]) {
      this.subscribers[event].forEach(handler => handler(data));
    }
  }
}

// Usage
const eventBus = new EventBus();

eventBus.subscribe('user.created', (user) => {
  // Send welcome email
});

eventBus.subscribe('user.created', (user) => {
  // Create user profile
});

// Publish event
eventBus.publish('user.created', { id: 1, name: 'Alice' });`,
            explanation: "Choose architecture patterns based on scale, team, and requirements. Modular architecture and event-driven patterns help build scalable systems. Consider trade-offs carefully."
          }
        },
        {
          title: "Scalability and Performance",
          content: "Designing for scale requires understanding bottlenecks and optimization strategies.\n\nScalability Strategies:\n• Horizontal scaling\n• Caching strategies\n• Database optimization\n• CDN usage\n• Load balancing\n• Database sharding\n\nPerformance Optimization:\n• Code splitting\n• Lazy loading\n• Memoization\n• Virtual scrolling\n• Web Workers\n• Service Workers",
          videoUrl: "https://www.youtube.com/watch?v=x2RNw4M6cME",
          codeExample: {
            code: `// Caching strategy
class Cache {
  constructor(ttl = 3600000) {
    this.cache = new Map();
    this.ttl = ttl;
  }
  
  set(key, value) {
    this.cache.set(key, {
      value,
      expires: Date.now() + this.ttl
    });
  }
  
  get(key) {
    const item = this.cache.get(key);
    if (!item) return null;
    
    if (Date.now() > item.expires) {
      this.cache.delete(key);
      return null;
    }
    
    return item.value;
  }
}

// Database connection pooling
class ConnectionPool {
  constructor(maxConnections = 10) {
    this.pool = [];
    this.maxConnections = maxConnections;
  }
  
  async getConnection() {
    if (this.pool.length < this.maxConnections) {
      const connection = await createConnection();
      this.pool.push(connection);
      return connection;
    }
    // Wait for available connection
    return this.waitForConnection();
  }
}

// Load balancing strategy
class LoadBalancer {
  constructor(servers) {
    this.servers = servers;
    this.current = 0;
  }
  
  getServer() {
    const server = this.servers[this.current];
    this.current = (this.current + 1) % this.servers.length;
    return server;
  }
}`,
            explanation: "Design for scale with caching, connection pooling, and load balancing. Consider horizontal scaling, database optimization, and performance patterns from the start."
          }
        }
      ],
      conclusion: "Staff-level JavaScript architecture requires understanding system design, scalability, and making informed architectural decisions. You've learned about architecture patterns, scalability strategies, and performance optimization. Apply these principles to design systems that scale and maintain code quality at scale."
    }
  },
  // BEGINNER LEVEL - React Tutorials
  {
    id: "beginner-1",
    title: "Introduction to React: Your First Component",
    description: "Learn the fundamentals of React - what it is, why it exists, and how to create your very first component.",
    level: "beginner",
    estimatedTime: "45 min",
    topics: ["What is React", "JSX Basics", "Components", "Rendering"],
    prerequisites: ["Basic JavaScript knowledge", "HTML & CSS basics"],
    videoUrl: "https://www.youtube.com/watch?v=SqcY0GlETPk", // React Tutorial for Beginners
    content: {
      overview: "React is a JavaScript library for building user interfaces. It lets you create reusable UI components and efficiently update them when your data changes. Created by Facebook (now Meta), React has become one of the most popular frontend frameworks, powering applications like Facebook, Instagram, Netflix, and many others. React's core philosophy is based on declarative programming - you describe what the UI should look like for any given state, and React takes care of efficiently updating the DOM when that state changes.",
      sections: [
        {
          title: "What is React and Why Use It?",
          content: "React is a declarative, efficient, and flexible JavaScript library for building user interfaces. Instead of manually manipulating the DOM (like with vanilla JavaScript or jQuery), you describe what the UI should look like, and React efficiently updates it when your data changes.\n\nKey Advantages:\n• Component-Based Architecture: Break your UI into reusable, independent pieces\n• Declarative Syntax: Write what you want, not how to do it\n• Virtual DOM: React creates a virtual representation of the DOM for efficient updates\n• One-Way Data Flow: Data flows down from parent to child, making debugging easier\n• Rich Ecosystem: Massive community and library ecosystem\n• Learn Once, Write Anywhere: Works on web, mobile (React Native), and desktop (Electron)",
          videoUrl: "https://www.youtube.com/watch?v=SqcY0GlETPk"
        },
        {
          title: "Setting Up a React Project",
          content: "To start building with React, you need a development environment. The easiest way is using Create React App or a modern framework like Next.js (which this tutorial is built with).\n\nCommon Setup Options:\n• Create React App: `npx create-react-app my-app`\n• Vite: `npm create vite@latest my-app -- --template react`\n• Next.js: `npx create-next-app@latest`\n\nOnce set up, you'll have a project structure with components, a package.json file, and a development server that hot-reloads your changes."
        },
        {
          title: "Creating Your First Component",
          content: "Components are the building blocks of React applications. They let you split the UI into independent, reusable pieces. Think of components like JavaScript functions - they accept inputs (called props) and return React elements describing what should appear on screen.\n\nThere are two ways to write components:\n1. Function Components (modern, recommended)\n2. Class Components (older, still supported but rarely used)\n\nFunction components are simpler and more modern. They're just JavaScript functions that return JSX.",
          videoUrl: "https://www.youtube.com/watch?v=OzqR10jG1pg", // React Components Tutorial
          codeExample: {
            code: `// Simple function component
function Welcome() {
  return <h1>Hello, World!</h1>;
}

// Using the component (JSX syntax)
function App() {
  return (
    <div>
      <Welcome />
      <Welcome />
      <Welcome />
    </div>
  );
}

// Components can be arrow functions too
const Greeting = () => {
  return <p>Hello from an arrow function component!</p>;
};

// Components can be exported for use in other files
export function Header() {
  return <header>My App Header</header>;
}`,
            explanation: "This shows different ways to create components. Notice how <Welcome /> is used like an HTML tag. Components can be used multiple times. The function name should be PascalCase (capitalized) to distinguish components from regular HTML elements."
          }
        },
        {
          title: "Understanding JSX Syntax",
          content: "JSX is a syntax extension for JavaScript that looks similar to HTML. It allows you to write HTML-like code in your JavaScript files. JSX gets transformed into React.createElement() calls, which create React elements.\n\nKey JSX Rules:\n• Must return a single root element (or use React Fragments)\n• Use className instead of class\n• Use camelCase for attributes (onClick, not onclick)\n• Self-closing tags must have a closing slash\n• JavaScript expressions go inside curly braces {}",
          videoUrl: "https://www.youtube.com/watch?v=7fPXI_MnBOY", // React JSX Tutorial
          codeExample: {
            code: `// Basic JSX with JavaScript expressions
const name = "Alice";
const element = <h1>Hello, {name}!</h1>;

// Multiple expressions
const user = { firstName: "John", lastName: "Doe" };
const greeting = (
  <div>
    <p>Hello, {user.firstName} {user.lastName}!</p>
    <p>Current time: {new Date().toLocaleTimeString()}</p>
    <p>2 + 2 = {2 + 2}</p>
  </div>
);

// Conditional rendering in JSX
const isLoggedIn = true;
const message = (
  <div>
    {isLoggedIn ? (
      <h1>Welcome back!</h1>
    ) : (
      <h1>Please log in.</h1>
    )}
  </div>
);

// Using fragments to avoid extra div
const Fragment = (
  <>
    <h1>Title</h1>
    <p>Content</p>
  </>
);`,
            explanation: "JSX allows you to embed JavaScript expressions inside curly braces. You can use variables, function calls, calculations, and even conditional logic. Fragments (<></>) let you group elements without adding extra DOM nodes."
          }
        },
        {
          title: "JSX vs HTML: Key Differences",
          content: "While JSX looks like HTML, there are important differences you must remember:\n\n• className instead of class: HTML uses 'class', JSX uses 'className'\n• camelCase attributes: onClick, onChange, htmlFor (not onclick, onchange, for)\n• Self-closing tags: <img /> and <input /> must be self-closing\n• Inline styles: Must be objects, not strings\n• Comments: Use {/* comment */} inside JSX",
          codeExample: {
            code: `// ❌ WRONG - HTML style
<div class="container" onclick="handleClick()">
  <img src="image.jpg">
  <input type="text">
</div>

// ✅ CORRECT - JSX style
<div className="container" onClick={handleClick}>
  <img src="image.jpg" />
  <input type="text" />
</div>

// Inline styles are objects in JSX
const style = { color: 'blue', fontSize: '16px' };
<div style={style}>Styled text</div>

// Or inline
<div style={{ color: 'blue', padding: '10px' }}>
  Inline styled element
</div>

// Comments in JSX
<div>
  {/* This is a comment */}
  <p>Visible content</p>
</div>`,
            explanation: "These differences are important. Forgetting className vs class is a common mistake. The style attribute takes an object with camelCase properties, not CSS strings."
          }
        },
        {
          title: "Rendering Components",
          content: "To display React components on the page, you need to render them. In a React application, you typically render your root component into a DOM element using ReactDOM.render() or createRoot() (React 18+).\n\nThe rendering process:\n1. React calls your component function\n2. Component returns JSX\n3. React converts JSX to React elements\n4. React efficiently updates the DOM\n5. Browser displays the result",
          codeExample: {
            code: `// In your index.js or main entry point
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// React 18+ way (recommended)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// Older way (React 17 and below)
ReactDOM.render(<App />, document.getElementById('root'));

// Your App component
function App() {
  return (
    <div>
      <h1>My React App</h1>
      <Welcome />
    </div>
  );
}

function Welcome() {
  return <h2>Welcome to React!</h2>;
}`,
            explanation: "The root.render() method tells React to render your App component into the DOM element with id='root'. React then handles all updates efficiently using its Virtual DOM."
          }
        },
        {
          title: "Common Pitfalls and Best Practices",
          content: "As you start with React, avoid these common mistakes:\n\nCommon Mistakes:\n• Forgetting to return JSX from component\n• Using 'class' instead of 'className'\n• Not capitalizing component names\n• Trying to modify props directly\n• Not providing keys in lists\n\nBest Practices:\n• Keep components small and focused\n• Use descriptive component names\n• Extract repeated logic into reusable components\n• Follow the single responsibility principle",
          codeExample: {
            code: `// ❌ WRONG - No return statement
function BadComponent() {
  <h1>This won't work!</h1>
}

// ✅ CORRECT - Has return
function GoodComponent() {
  return <h1>This works!</h1>;
}

// ❌ WRONG - Component name not capitalized
function myComponent() {
  return <div>Bad</div>;
}

// ✅ CORRECT - PascalCase component name
function MyComponent() {
  return <div>Good</div>;
}

// ❌ WRONG - Trying to modify props
function Bad(props) {
  props.name = "Changed"; // Don't do this!
  return <p>{props.name}</p>;
}

// ✅ CORRECT - Props are read-only
function Good({ name }) {
  return <p>{name}</p>;
}`,
            explanation: "Remember: components must return JSX, component names must be capitalized, and props are immutable. Following these rules prevents many common bugs."
          }
        }
      ],
      conclusion: "Congratulations! You've created your first React component. Components are the foundation of React applications - they encapsulate UI and logic together."
    },
    resources: [
      { title: "React Official Docs", url: "https://react.dev" },
      { title: "JSX Introduction", url: "https://react.dev/learn/writing-markup-with-jsx" }
    ]
  },
  {
    id: "beginner-2",
    title: "Understanding Props: Passing Data to Components",
    description: "Learn how to pass data between components using props and create dynamic, reusable components.",
    level: "beginner",
    estimatedTime: "20 min",
    topics: ["Props", "Component Communication", "Prop Types", "Default Props"],
    prerequisites: ["Introduction to React"],
    videoUrl: "https://www.youtube.com/watch?v=7fPXI_MnBOY", // React Props Tutorial - The Net Ninja
    content: {
      overview: "Props (short for properties) are how you pass data from parent components to child components. They make components reusable and dynamic. Props are React's way of making components customizable - like function parameters, but for components. Understanding props is fundamental to building React applications, as they enable the one-way data flow that makes React applications predictable and easy to debug.",
      sections: [
        {
          title: "What are Props and Why Do We Need Them?",
          content: "Props are read-only data passed from parent components to child components. They allow you to customize components and make them reusable. Think of props as 'configuration' for your components - they let you use the same component in different ways by passing different data.\n\nKey Characteristics:\n• Props are read-only (immutable) - components cannot modify their props\n• Props flow down from parent to child (one-way data flow)\n• Props can be any JavaScript value: strings, numbers, objects, arrays, functions\n• Props allow component reusability and customization"
        },
        {
          title: "Passing and Receiving Props",
          content: "You pass props like HTML attributes, and components receive them as function parameters. There are several ways to destructure and receive props in function components.",
          codeExample: {
            code: `// Method 1: Destructuring in function parameters (recommended)
function Greeting({ name, age }) {
  return <h1>Hello, {name}! You are {age} years old.</h1>;
}

// Method 2: Using props object
function Greeting(props) {
  return <h1>Hello, {props.name}! You are {props.age} years old.</h1>;
}

// Method 3: Destructuring inside function body
function Greeting(props) {
  const { name, age } = props;
  return <h1>Hello, {name}! You are {age} years old.</h1>;
}

// Using components with props
function App() {
  return (
    <div>
      <Greeting name="Alice" age={25} />
      <Greeting name="Bob" age={30} />
      <Greeting name="Charlie" age={35} />
    </div>
  );
}`,
            explanation: "Props are passed as attributes. Notice how `age` uses curly braces for numbers (not quotes). The destructuring syntax is cleaner and more commonly used. Props are read-only - components shouldn't modify them."
          }
        },
        {
          title: "Different Types of Props",
          content: "Props can be any JavaScript value. You can pass strings, numbers, booleans, objects, arrays, functions, and even other React elements as props. Understanding how to pass different types is crucial.",
          codeExample: {
            code: `function Profile({ 
  name,           // String
  age,            // Number
  isActive,       // Boolean
  user,           // Object
  tags,           // Array
  onClick,        // Function
  children        // React elements
}) {
  return (
    <div>
      <h1>{name} ({age})</h1>
      {isActive && <p>Active user</p>}
      <p>Email: {user.email}</p>
      <ul>
        {tags.map(tag => <li key={tag}>{tag}</li>)}
      </ul>
      <button onClick={onClick}>Click me</button>
      {children}
    </div>
  );
}

// Using the component with different prop types
function App() {
  const user = { email: "alice@example.com" };
  const handleClick = () => alert("Clicked!");
  
  return (
    <Profile
      name="Alice"
      age={25}
      isActive={true}
      user={user}
      tags={["developer", "designer"]}
      onClick={handleClick}
    >
      <p>This is children content</p>
    </Profile>
  );
}`,
            explanation: "You can pass any JavaScript value as props. Objects and arrays need curly braces. Functions are commonly passed for event handling. The special 'children' prop contains content between component tags."
          }
        },
        {
          title: "Default Props and Prop Defaults",
          content: "You can provide default values for props using default parameters or the defaultProps property. This makes components more flexible and prevents errors when props are not provided.",
          codeExample: {
            code: `// Method 1: Default parameters (recommended)
function Button({ 
  text = "Click me", 
  color = "blue",
  size = "medium" 
}) {
  return (
    <button className={\`btn btn-\${color} btn-\${size}\`}>
      {text}
    </button>
  );
}

// Method 2: Default props (older way, still works)
function Button({ text, color, size }) {
  return (
    <button className={\`btn btn-\${color} btn-\${size}\`}>
      {text}
    </button>
  );
}

Button.defaultProps = {
  text: "Click me",
  color: "blue",
  size: "medium"
};

// Using with and without props
function App() {
  return (
    <div>
      <Button /> {/* Uses all defaults */}
      <Button text="Submit" /> {/* Uses defaults for color and size */}
      <Button text="Delete" color="red" size="large" />
    </div>
  );
}`,
            explanation: "Default parameters are the modern way to set default props. They make components more flexible - if a prop isn't provided, the default is used. This prevents undefined errors."
          }
        },
        {
          title: "Props Validation with TypeScript",
          content: "While JavaScript doesn't enforce prop types, TypeScript can help catch prop errors at compile time. Defining prop types makes your components more maintainable and self-documenting.",
          codeExample: {
            code: `// With TypeScript
interface ButtonProps {
  text: string;
  color?: "blue" | "red" | "green";  // Optional with specific values
  size?: "small" | "medium" | "large";
  onClick: () => void;
  disabled?: boolean;
}

function Button({ 
  text, 
  color = "blue",
  size = "medium",
  onClick,
  disabled = false
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={\`btn btn-\${color} btn-\${size}\`}
    >
      {text}
    </button>
  );
}

// TypeScript will error if you pass wrong types
<Button 
  text="Click" 
  color="purple"  // ❌ Error: "purple" not in allowed values
  onClick={() => {}}
/>`,
            explanation: "TypeScript interfaces define what props a component expects. Optional props use '?'. This catches errors during development, not in production. TypeScript helps prevent many prop-related bugs."
          }
        },
        {
          title: "Common Pitfalls with Props",
          content: "Several common mistakes can cause bugs when working with props. Understanding these pitfalls helps you write better React code.\n\nCommon Mistakes:\n• Trying to modify props directly (they're read-only)\n• Not providing required props\n• Passing objects/arrays incorrectly\n• Not using keys when rendering lists of components\n• Passing functions without proper binding",
          codeExample: {
            code: `// ❌ WRONG - Trying to modify props
function BadComponent({ count }) {
  count = count + 1;  // Error! Props are read-only
  return <p>{count}</p>;
}

// ✅ CORRECT - Use state if you need to modify
function GoodComponent({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

// ❌ WRONG - Creating new object on every render
function BadApp() {
  return <Profile user={{ name: "Alice" }} />;  // New object each render
}

// ✅ CORRECT - Define outside or use useMemo
const user = { name: "Alice" };
function GoodApp() {
  return <Profile user={user} />;
}

// ❌ WRONG - Missing key in list
function BadList({ items }) {
  return items.map(item => <Item data={item} />);  // Missing key
}

// ✅ CORRECT - Provide unique key
function GoodList({ items }) {
  return items.map(item => (
    <Item key={item.id} data={item} />
  ));
}`,
            explanation: "Remember: props are immutable. If you need to modify data, use state. Always provide keys for list items. Avoid creating new objects/arrays in render (causes unnecessary re-renders)."
          }
        },
        {
          title: "Best Practices for Props",
          content: "Following best practices with props makes your code more maintainable and easier to debug.\n\nBest Practices:\n• Keep prop interfaces small and focused\n• Use descriptive prop names\n• Provide default values for optional props\n• Use TypeScript for prop validation\n• Document complex props\n• Avoid prop drilling (pass props through many levels)"
        }
      ],
      conclusion: "Props enable component reusability and data flow in React. Always remember: props flow down, and they're immutable."
    }
  },
  {
    id: "beginner-3",
    title: "Managing State with useState",
    description: "Learn how to add interactivity to your components by managing state with the useState hook.",
    level: "beginner",
    estimatedTime: "25 min",
    topics: ["State", "useState Hook", "Event Handlers", "State Updates"],
    prerequisites: ["Understanding Props"],
    videoUrl: "https://www.youtube.com/watch?v=O6P86uwfdR0", // React useState Hook Tutorial
    content: {
      overview: "State allows components to create and manage their own data. When state changes, React re-renders the component to reflect the new data. State is what makes React components interactive - it enables components to 'remember' information and react to user interactions, API responses, and other changes over time. Unlike props (which come from parent components), state is internal to the component and can be updated using setter functions.",
      sections: [
        {
          title: "Understanding State vs Props",
          content: "Understanding the difference between state and props is fundamental to React development.\n\nProps:\n• Passed from parent components\n• Read-only (immutable)\n• Used to configure components\n• Component cannot change its own props\n\nState:\n• Managed internally by component\n• Mutable (can be updated with setter)\n• Used for data that changes over time\n• Component controls its own state\n\nWhen to use each:\n• Use props for data that comes from parent or doesn't change\n• Use state for data that changes based on user interaction or events\n• Use state for form inputs, toggles, counters, API data after fetching"
        },
        {
          title: "The useState Hook Basics",
          content: "The useState hook lets you add state to functional components. It returns an array with the current state value and a function to update it. useState is the most commonly used React hook and is essential for building interactive components.",
          videoUrl: "https://www.youtube.com/watch?v=O6P86uwfdR0", // React useState Hook Tutorial
          codeExample: {
            code: `import { useState } from 'react';

// Basic usage
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

// Multiple state variables
function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);
  
  return (
    <form>
      <input 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Name"
      />
      <input 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Email"
      />
      <input 
        type="number"
        value={age} 
        onChange={(e) => setAge(Number(e.target.value))} 
        placeholder="Age"
      />
    </form>
  );
}`,
            explanation: "useState(0) initializes state with 0. The array destructuring gives us `count` (current value) and `setCount` (updater function). You can have multiple useState calls in one component, each managing its own piece of state."
          }
        },
        {
          title: "State Initialization Patterns",
          content: "useState can accept an initial value directly or a function that returns the initial value. Using a function for initialization is important when the initial value is expensive to compute or when you want to ensure it's only calculated once.",
          codeExample: {
            code: `// Direct initial value (calculated on every render - inefficient if expensive)
function Component1() {
  const [data, setData] = useState(expensiveCalculation());
  // ❌ expensiveCalculation() runs on every render!
}

// Function initializer (only runs once)
function Component2() {
  const [data, setData] = useState(() => expensiveCalculation());
  // ✅ expensiveCalculation() only runs on first render
}

// Example: Reading from localStorage
function Component3() {
  // ❌ Wrong - reads on every render
  const [value, setValue] = useState(
    localStorage.getItem('key') || 'default'
  );
  
  // ✅ Correct - only reads once
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem('key');
    return stored ? JSON.parse(stored) : 'default';
  });
}

// Example: Complex initial state
function Component4() {
  const [user, setUser] = useState(() => {
    // This function only runs once, even if component re-renders
    const defaultUser = {
      name: 'Guest',
      role: 'user',
      preferences: { theme: 'light', notifications: true }
    };
    return defaultUser;
  });
}`,
            explanation: "Use the function form of useState when initializing with values that are expensive to compute or when reading from localStorage/sessionStorage. The function only runs once on mount, not on every re-render."
          }
        },
        {
          title: "Updating State - Important Rules",
          content: "Understanding how state updates work in React is crucial. There are important rules and patterns you must follow.\n\nKey Rules:\n• State updates are asynchronous\n• State updates are batched for performance\n• Always use the setter function, never modify state directly\n• State updates trigger re-renders\n• Multiple setState calls may be batched together",
          codeExample: {
            code: `function Counter() {
  const [count, setCount] = useState(0);
  
  // ❌ WRONG - Direct mutation
  const badIncrement = () => {
    count = count + 1;  // Don't do this! Won't trigger re-render
  };
  
  // ✅ CORRECT - Using setter
  const goodIncrement = () => {
    setCount(count + 1);
  };
  
  // ✅ BETTER - Functional update (when new state depends on old)
  const betterIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };
  
  // Multiple updates in sequence
  const handleMultipleUpdates = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    // ❌ This will only increment once! (count is still 0 in all calls)
  };
  
  // ✅ Correct way - use functional updates
  const handleMultipleUpdatesCorrect = () => {
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    // ✅ This increments three times!
  };
  
  // Updating objects
  const [user, setUser] = useState({ name: 'Alice', age: 25 });
  
  // ❌ WRONG - Mutating object directly
  const badUpdate = () => {
    user.age = 26;  // Don't do this!
    setUser(user);  // React won't detect change
  };
  
  // ✅ CORRECT - Creating new object
  const goodUpdate = () => {
    setUser({ ...user, age: 26 });  // Spread operator
  };
  
  // ✅ OR functional update
  const goodUpdate2 = () => {
    setUser(prev => ({ ...prev, age: 26 }));
  };
}`,
            explanation: "Never mutate state directly. Always use setter functions. For updates that depend on previous state, use functional updates (prev => newValue). When updating objects/arrays, create new objects using spread operator or other immutable patterns."
          }
        },
        {
          title: "State Updates and Re-renders",
          content: "When you call a state setter function, React schedules a re-render. Understanding when and how re-renders happen helps you write performant code and avoid bugs.",
          codeExample: {
            code: `function Example() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Alice');
  
  console.log('Component rendered'); // This logs on every render
  
  // Setting state causes re-render
  const increment = () => {
    setCount(count + 1);
    console.log(count); // Still shows old value! State update is async
  };
  
  // Multiple state updates may be batched
  const handleClick = () => {
    setName('Bob');
    setCount(1);
    // React may batch these into one re-render
  };
  
  // React 18: Automatic batching (even in async code)
  const handleAsyncClick = async () => {
    await fetch('/api/data');
    setName('Charlie');
    setCount(2);
    // These are batched together!
  };
  
  return (
    <div>
      <p>{name}: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}`,
            explanation: "State updates are asynchronous - you won't see the new value immediately after calling setState. React batches multiple state updates for performance. In React 18+, batching happens automatically even in async functions."
          }
        },
        {
          title: "Common State Patterns",
          content: "There are several common patterns for managing state in React components. Understanding these patterns helps you structure your components better.",
          codeExample: {
            code: `// Pattern 1: Toggle state
function Toggle() {
  const [isOn, setIsOn] = useState(false);
  
  const toggle = () => setIsOn(prev => !prev);
  // OR
  const toggle2 = () => setIsOn(!isOn);
  
  return <button onClick={toggle}>{isOn ? 'ON' : 'OFF'}</button>;
}

// Pattern 2: Form state
function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: 0
  });
  
  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };
  
  return (
    <input 
      value={formData.name}
      onChange={(e) => updateField('name', e.target.value)}
    />
  );
}

// Pattern 3: Loading and error states
function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetch('/api/data');
      setData(await result.json());
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return <div>{/* Render data */}</div>;
}

// Pattern 4: Derived state
function Cart() {
  const [items, setItems] = useState([]);
  
  // Derived values - no need for separate state
  const total = items.reduce((sum, item) => sum + item.price, 0);
  const itemCount = items.length;
  
  return (
    <div>
      <p>{itemCount} items</p>
      <p>Total: {total}</p>
    </div>
  );
}`,
            explanation: "Common patterns include toggles, form state management, loading/error states, and derived values. Don't store values you can calculate from other state - use derived values instead."
          }
        },
        {
          title: "When NOT to Use State",
          content: "Not everything needs to be state! Using state unnecessarily can cause performance issues and bugs.\n\nDon't use state for:\n• Values that can be calculated from props or other state (derived values)\n• Values that don't affect rendering\n• Temporary variables used only in event handlers\n• Constants that don't change\n• Values that can be passed as props instead",
          codeExample: {
            code: `// ❌ BAD - Storing derived value in state
function UserProfile({ firstName, lastName }) {
  const [fullName, setFullName] = useState('');
  
  useEffect(() => {
    setFullName(\`\${firstName} \${lastName}\`);
  }, [firstName, lastName]);
  
  return <h1>{fullName}</h1>;
}

// ✅ GOOD - Calculate directly
function UserProfile({ firstName, lastName }) {
  const fullName = \`\${firstName} \${lastName}\`;
  return <h1>{fullName}</h1>;
}

// ❌ BAD - Unnecessary state
function Button() {
  const [clicked, setClicked] = useState(false);
  
  const handleClick = () => {
    setClicked(true);
    // Do something
  };
}

// ✅ GOOD - Just use local variable
function Button() {
  const handleClick = () => {
    const clicked = true;
    // Do something
  };
}

// ❌ BAD - Constant in state
function Component() {
  const [apiUrl, setApiUrl] = useState('https://api.example.com');
  // Never changes, shouldn't be state
}

// ✅ GOOD - Use constant
const API_URL = 'https://api.example.com';
function Component() {
  // Use API_URL directly
}`,
            explanation: "Only use state for values that change over time AND affect what's rendered. Avoid storing derived values, constants, or temporary variables in state."
          }
        },
        {
          title: "Rules of Hooks - useState Edition",
          content: "useState follows the Rules of Hooks. Breaking these rules causes bugs and errors.\n\nRules:\n• Only call hooks at the top level of your component\n• Don't call hooks inside loops, conditions, or nested functions\n• Only call hooks from React function components or custom hooks\n• Call hooks in the same order every render",
          codeExample: {
            code: `// ❌ WRONG - Conditional hook call
function BadComponent({ shouldUseState }) {
  if (shouldUseState) {
    const [count, setCount] = useState(0);  // ERROR!
  }
  return <div>...</div>;
}

// ✅ CORRECT - Always call hooks at top level
function GoodComponent({ shouldUseState }) {
  const [count, setCount] = useState(0);
  
  // Use conditionally if needed, but hook is always called
  if (!shouldUseState) {
    return <div>Static content</div>;
  }
  
  return <div>Count: {count}</div>;
}

// ❌ WRONG - Hook in loop
function BadList() {
  const items = ['a', 'b', 'c'];
  return items.map(item => {
    const [value, setValue] = useState(item);  // ERROR!
    return <div>{value}</div>;
  });
}

// ✅ CORRECT - Extract to component
function ListItem({ item }) {
  const [value, setValue] = useState(item);
  return <div>{value}</div>;
}

function GoodList() {
  const items = ['a', 'b', 'c'];
  return items.map(item => <ListItem key={item} item={item} />);
}`,
            explanation: "Hooks must be called in the same order every render. This allows React to track which state belongs to which hook. Conditional calls break this requirement."
          }
        }
      ],
      conclusion: "State is essential for interactive components. Remember: only call useState at the top level, never inside loops or conditions."
    }
  },
  
  // INTERMEDIATE LEVEL
  {
    id: "intermediate-1",
    title: "Side Effects and useEffect Hook",
    description: "Master the useEffect hook to handle side effects like data fetching, subscriptions, and DOM manipulation.",
    level: "intermediate",
    estimatedTime: "30 min",
    topics: ["Side Effects", "useEffect", "Dependency Arrays", "Cleanup"],
    prerequisites: ["Managing State with useState"],
    videoUrl: "https://www.youtube.com/watch?v=0ZJgIjI4Ywc", // React useEffect Hook - Web Dev Simplified
    content: {
      overview: "Side effects are operations that affect something outside the component's render, like API calls, setting up subscriptions, or manually changing the DOM. React components are 'pure functions' - given the same props and state, they should always return the same JSX. But applications need to do things like fetch data, set up subscriptions, or update the DOM - these are 'side effects'. The useEffect hook is React's way of handling side effects in function components. Understanding useEffect is crucial for building real-world applications that interact with APIs, manage subscriptions, and handle cleanup.",
      sections: [
        {
          title: "Understanding Side Effects in React",
          content: "In React, side effects are operations that interact with the outside world - anything that doesn't directly relate to rendering JSX. React components should be 'pure functions' that return JSX based on props and state, but real applications need to do more.\n\nCommon Side Effects:\n• Fetching data from an API\n• Setting up subscriptions (websockets, event listeners)\n• Manually changing the DOM (updating document title, focusing inputs)\n• Starting/stopping timers\n• Logging analytics\n• Reading from/writing to localStorage\n\nWhy useEffect?\n• Separates side effects from rendering logic\n• Runs after render, not during (won't block rendering)\n• Provides cleanup mechanism\n• Can control when effects run using dependencies",
          videoUrl: "https://www.youtube.com/watch?v=0ZJgIjI4Ywc" // React useEffect Explained
        },
        {
          title: "useEffect Basic Syntax",
          content: "useEffect accepts two arguments: a function (the effect) and an optional dependency array. The effect function runs after the component renders to the screen.",
          codeExample: {
            code: `import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  // Effect runs after every render
  useEffect(() => {
    document.title = \`Count: \${count}\`;
  });
  
  // Effect runs only once (after mount)
  useEffect(() => {
    console.log('Component mounted');
  }, []); // Empty dependency array
  
  // Effect runs when count changes
  useEffect(() => {
    console.log('Count changed to:', count);
  }, [count]); // List dependencies
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}`,
            explanation: "The dependency array controls when the effect runs. No array = every render. Empty array [] = once after mount. Array with values = when those values change."
          }
        },
        {
          title: "The Three Types of useEffect",
          content: "There are three main patterns for useEffect, each serving different purposes:\n\n1. Effect with no dependencies - runs after every render\n2. Effect with empty dependencies - runs once after mount\n3. Effect with dependencies - runs when dependencies change",
          videoUrl: "https://www.youtube.com/watch?v=0ZJgIjI4Ywc", // useEffect Dependency Array Explained
          codeExample: {
            code: `// Pattern 1: Run after every render (rarely needed)
useEffect(() => {
  console.log('Rendered');
  // This runs after EVERY render
  // Usually not what you want - can cause performance issues
});

// Pattern 2: Run once on mount (common for setup)
useEffect(() => {
  // Fetch initial data
  fetchUserData();
  
  // Set up subscriptions
  const subscription = subscribeToUpdates();
  
  // Update document title once
  document.title = 'My App';
  
  // Cleanup on unmount
  return () => {
    subscription.unsubscribe();
  };
}, []); // Empty array = run once

// Pattern 3: Run when dependencies change (most common)
useEffect(() => {
  // Fetch data when userId changes
  fetchUserPosts(userId);
  
  // Update title when count changes
  document.title = \`Count: \${count}\`;
}, [userId, count]); // List all dependencies`,
            explanation: "Most effects fall into pattern 2 or 3. Pattern 1 (no dependencies) is rarely needed and can cause infinite loops or performance issues if not careful."
          }
        },
        {
          title: "Dependency Array Rules",
          content: "The dependency array is crucial for useEffect. Understanding when to include dependencies and the rules around them prevents bugs.\n\nKey Rules:\n• Include ALL values from component scope used in the effect\n• Missing dependencies can cause stale closures\n• Extra dependencies cause unnecessary re-runs\n• Functions and objects should be wrapped in useCallback/useMemo if used as dependencies\n• ESLint's exhaustive-deps rule helps catch missing dependencies",
          codeExample: {
            code: `function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  
  // ❌ MISSING DEPENDENCY - userId not in array
  useEffect(() => {
    fetchUser(userId);  // Uses userId but not in deps
  }, []); // Missing userId!
  
  // ✅ CORRECT - includes userId
  useEffect(() => {
    fetchUser(userId);
  }, [userId]); // userId is a dependency
  
  // ❌ MISSING DEPENDENCY - function in effect
  const formatUser = (user) => {
    return user.name.toUpperCase();
  };
  
  useEffect(() => {
    const formatted = formatUser(user);  // Uses formatUser
  }, [user]); // Missing formatUser!
  
  // ✅ CORRECT - move function inside effect
  useEffect(() => {
    const formatUser = (user) => user.name.toUpperCase();
    const formatted = formatUser(user);
  }, [user]);
  
  // ✅ OR wrap in useCallback
  const formatUser = useCallback((user) => {
    return user.name.toUpperCase();
  }, []);
  
  useEffect(() => {
    const formatted = formatUser(user);
  }, [user, formatUser]);
  
  // Dependency on props/state
  useEffect(() => {
    if (showDetails) {
      loadUserDetails(userId);
    }
  }, [userId, showDetails]); // Both are used`,
            explanation: "Always include all values from component scope that the effect uses. Missing dependencies cause stale closures where the effect uses old values. The ESLint rule 'react-hooks/exhaustive-deps' helps catch these issues."
          }
        },
        {
          title: "Cleanup Functions - Preventing Memory Leaks",
          content: "Cleanup functions are essential for preventing memory leaks. They run before the component unmounts or before the effect runs again (if dependencies changed). Always clean up:\n• Timers (setInterval, setTimeout)\n• Subscriptions (websockets, event listeners)\n• Cancelled API requests\n• Event listeners added to DOM",
          codeExample: {
            code: `// Timer cleanup
useEffect(() => {
  const timer = setInterval(() => {
    console.log('Tick');
  }, 1000);
  
  // Cleanup function
  return () => {
    clearInterval(timer);
  };
}, []);

// Event listener cleanup
useEffect(() => {
  const handleResize = () => {
    console.log('Window resized');
  };
  
  window.addEventListener('resize', handleResize);
  
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

// Subscription cleanup
useEffect(() => {
  const subscription = dataStream.subscribe(data => {
    setData(data);
  });
  
  return () => {
    subscription.unsubscribe();
  };
}, []);

// Cleanup with dependencies - runs before re-running effect
useEffect(() => {
  const controller = new AbortController();
  
  fetch(\`/api/users/\${userId}\`, {
    signal: controller.signal
  })
    .then(res => res.json())
    .then(setUser);
  
  // Cleanup cancels request if userId changes or component unmounts
  return () => {
    controller.abort();
  };
}, [userId]);`,
            explanation: "Cleanup functions prevent memory leaks. They run before unmount AND before the effect runs again (if dependencies changed). Always clean up timers, subscriptions, and event listeners."
          }
        },
        {
          title: "Data Fetching with useEffect",
          content: "Fetching data is one of the most common use cases for useEffect. However, there are important patterns to follow to handle loading states, errors, and cleanup properly.",
          videoUrl: "https://www.youtube.com/watch?v=qdCHEUaFhBk", // React Data Fetching Tutorial
          codeExample: {
            code: `function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // Reset states when userId changes
    setLoading(true);
    setError(null);
    setUser(null);
    
    // AbortController for cleanup
    const controller = new AbortController();
    
    async function fetchUser() {
      try {
        const response = await fetch(
          \`/api/users/\${userId}\`,
          { signal: controller.signal }
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch user');
        }
        
        const userData = await response.json();
        setUser(userData);
      } catch (err) {
        // Don't set error if request was aborted
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }
    
    fetchUser();
    
    // Cleanup: abort request if userId changes or component unmounts
    return () => {
      controller.abort();
    };
  }, [userId]);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return null;
  
  return <div>{user.name}</div>;
}`,
            explanation: "Always handle loading and error states. Use AbortController to cancel requests when dependencies change or component unmounts. Reset states when fetching new data."
          }
        },
        {
          title: "Common useEffect Mistakes",
          content: "There are several common mistakes developers make with useEffect that can cause bugs, infinite loops, or performance issues.",
          codeExample: {
            code: `// ❌ MISTAKE 1: Infinite loop - missing dependency
function BadCounter() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    setCount(count + 1);  // Infinite loop!
  }); // Missing dependency array
  
  return <div>{count}</div>;
}

// ✅ CORRECT - Use dependency array or functional update
useEffect(() => {
  // Only run once on mount
  setCount(prev => prev + 1);
}, []);

// ❌ MISTAKE 2: Stale closure - object/array dependency
function BadEffect() {
  const [items, setItems] = useState([]);
  const filter = { category: 'electronics' };
  
  useEffect(() => {
    fetchItems(filter);  // filter is a new object each render
  }, [filter]); // filter changes every render!
}

// ✅ CORRECT - Use primitive values or memoize
useEffect(() => {
  const filter = { category: 'electronics' };
  fetchItems(filter);
}, []); // Or extract to state/useMemo

// ❌ MISTAKE 3: Not cleaning up
function BadTimer() {
  useEffect(() => {
    setInterval(() => {
      console.log('Tick');
    }, 1000);
    // Missing cleanup - memory leak!
  }, []);
}

// ✅ CORRECT - Always clean up
useEffect(() => {
  const timer = setInterval(() => {
    console.log('Tick');
  }, 1000);
  
  return () => clearInterval(timer);
}, []);

// ❌ MISTAKE 4: Effect that should be event handler
function BadForm() {
  const [email, setEmail] = useState('');
  
  useEffect(() => {
    validateEmail(email);  // Should be in onChange
  }, [email]);
}

// ✅ CORRECT - Use event handler
function GoodForm() {
  const [email, setEmail] = useState('');
  
  const handleChange = (e) => {
    setEmail(e.target.value);
    validateEmail(e.target.value);  // Directly in handler
  };
}`,
            explanation: "Common mistakes include infinite loops from missing dependencies, stale closures from object dependencies, not cleaning up resources, and using effects when event handlers are more appropriate."
          }
        },
        {
          title: "When NOT to Use useEffect",
          content: "Not everything needs useEffect! Many things can be handled differently, which is often cleaner and more performant.\n\nDon't use useEffect for:\n• Transforming data for rendering (do it during render)\n• Handling user events (use event handlers)\n• Resetting state on prop change (use key prop)\n• Computing derived state (calculate during render)\n• Initializing state (use useState initializer)",
          codeExample: {
            code: `// ❌ BAD - Transforming data in effect
function UserList({ users }) {
  const [filteredUsers, setFilteredUsers] = useState([]);
  
  useEffect(() => {
    setFilteredUsers(users.filter(u => u.active));
  }, [users]); // Unnecessary effect
  
  return <div>{/* render */}</div>;
}

// ✅ GOOD - Transform during render
function UserList({ users }) {
  const filteredUsers = users.filter(u => u.active);
  return <div>{/* render */}</div>;
}

// ❌ BAD - Event handling in effect
function SearchBox() {
  const [query, setQuery] = useState('');
  
  useEffect(() => {
    if (query) {
      search(query);
    }
  }, [query]); // Should be in onChange
  
  return <input value={query} onChange={e => setQuery(e.target.value)} />;
}

// ✅ GOOD - Handle in event handler
function SearchBox() {
  const [query, setQuery] = useState('');
  
  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value) {
      search(value);  // Directly in handler
    }
  };
  
  return <input value={query} onChange={handleChange} />;
}

// ❌ BAD - Resetting state when prop changes
function UserProfile({ userId }) {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    setData(null);  // Reset when userId changes
  }, [userId]);
}

// ✅ GOOD - Use key prop to reset component
<UserProfile key={userId} userId={userId} />`,
            explanation: "Many things that seem to need useEffect can be handled more simply. Transform data during render, handle events in event handlers, and use keys to reset components. Only use useEffect for true side effects."
          }
        }
      ],
      conclusion: "useEffect is powerful but requires careful dependency management. Always include all dependencies to avoid bugs."
    }
  },
  {
    id: "intermediate-2",
    title: "Component Composition and Context",
    description: "Learn advanced component patterns including composition, context API, and avoiding prop drilling.",
    level: "intermediate",
    estimatedTime: "90 min",
    topics: ["Composition", "Context API", "Prop Drilling", "Provider Pattern", "Children Props", "Render Props"],
    prerequisites: ["Side Effects and useEffect Hook"],
    videoUrl: "https://www.youtube.com/watch?v=35lXWvCuM8o", // React Context API Tutorial - The Net Ninja
    content: {
      overview: "As React applications grow, passing props through many component levels becomes tedious and hard to maintain. Component composition and the Context API provide elegant solutions to these problems. This tutorial covers composition patterns (children, render props, compound components), the Context API for sharing data across the component tree, when to use each pattern, and how to avoid common pitfalls. You'll learn to build flexible, maintainable component architectures.",
      sections: [
        {
          title: "Lesson 1: Understanding Prop Drilling",
          content: "Prop drilling occurs when you pass props through multiple component levels just to reach a deeply nested component.\n\nWhat is Prop Drilling?\n• Passing props through components that don't use them\n• Props 'drill down' through the component tree\n• Makes components less reusable\n• Harder to maintain and refactor\n\nProblems with Prop Drilling:\n• Components become tightly coupled\n• Hard to refactor\n• Unnecessary re-renders\n• Components receive props they don't need\n• Makes code harder to understand\n\nWhen Prop Drilling Becomes a Problem:\n• Props passed through 3+ levels\n• Many props being passed down\n• Components receiving props they don't use\n• Hard to understand data flow",
          codeExample: {
            code: `// ❌ BAD: Prop drilling example
function App() {
  const user = { name: 'Alice', role: 'admin' };
  const theme = 'dark';
  const language = 'en';
  
  return (
    <Layout user={user} theme={theme} language={language}>
      <Header user={user} theme={theme} />
      <MainContent user={user} language={language}>
        <Sidebar user={user} theme={theme} />
        <Content user={user} language={language}>
          <UserProfile user={user} /> {/* Finally uses user! */}
        </Content>
      </MainContent>
    </Layout>
  );
}

// Layout doesn't use user, theme, or language
function Layout({ children, user, theme, language }) {
  return <div className={theme}>{children}</div>;
}

// Header doesn't use language
function Header({ user, theme }) {
  return <header className={theme}>Welcome, {user.name}</header>;
}

// MainContent doesn't use theme
function MainContent({ children, user, language }) {
  return <main>{children}</main>;
}

// Sidebar doesn't use language
function Sidebar({ user, theme }) {
  return <aside className={theme}>Sidebar</aside>;
}

// Content doesn't use theme
function Content({ children, user, language }) {
  return <div>{children}</div>;
}

// Only UserProfile actually uses user
function UserProfile({ user }) {
  return <div>{user.name} - {user.role}</div>;
}

// Problems:
// - Layout, MainContent, Content receive props they don't use
// - Hard to refactor
// - Tight coupling
// - Unnecessary re-renders

// ✅ GOOD: Using Context (we'll learn this later)
// ✅ GOOD: Using Composition (we'll learn this now)`,
            explanation: "Prop drilling makes components receive props they don't need, creating tight coupling and maintenance issues. Composition and Context solve this problem."
          }
        },
        {
          title: "Lesson 2: Component Composition Basics",
          content: "Composition is building complex components from simpler ones. It's one of React's core principles.\n\nWhat is Composition?\n• Building complex UIs from simple components\n• Components contain other components\n• Using children prop\n• Flexible and reusable\n\nBenefits:\n• Reusability\n• Flexibility\n• Separation of concerns\n• Easier to test\n• Better maintainability\n\nComposition Patterns:\n• Children prop\n• Multiple children slots\n• Render props\n• Compound components",
          codeExample: {
            code: `// Basic composition with children
function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

function App() {
  return (
    <Card>
      <h2>Title</h2>
      <p>Content</p>
    </Card>
  );
}

// Multiple composition slots
function Layout({ header, sidebar, main, footer }) {
  return (
    <div className="layout">
      <header>{header}</header>
      <div className="body">
        <aside>{sidebar}</aside>
        <main>{main}</main>
      </div>
      <footer>{footer}</footer>
    </div>
  );
}

function App() {
  return (
    <Layout
      header={<Header />}
      sidebar={<Sidebar />}
      main={<MainContent />}
      footer={<Footer />}
    />
  );
}

// Composition with multiple children
function Container({ children, className }) {
  return (
    <div className={\`container \${className}\`}>
      {children}
    </div>
  );
}

function App() {
  return (
    <Container className="main">
      <Header />
      <Content />
      <Footer />
    </Container>
  );
}

// Flexible composition
function Button({ children, variant, size, ...props }) {
  return (
    <button
      className={\`btn btn-\${variant} btn-\${size}\`}
      {...props}
    >
      {children}
    </button>
  );
}

function App() {
  return (
    <Button variant="primary" size="lg">
      <Icon name="save" />
      Save Document
    </Button>
  );
}`,
            explanation: "Composition lets you build flexible, reusable components. Use the children prop to compose components together, creating complex UIs from simple building blocks."
          }
        },
        {
          title: "Lesson 3: Advanced Composition Patterns",
          content: "Learn advanced composition patterns for building flexible component APIs.\n\nAdvanced Patterns:\n• Multiple children slots\n• Render props\n• Compound components\n• Slot-based composition\n• Higher-order components\n\nWhen to Use Each:\n• Multiple slots: When you need named sections\n• Render props: When you need to share logic\n• Compound components: When components work together\n• Slots: For flexible layouts",
          codeExample: {
            code: `// Pattern 1: Multiple named children
function Dialog({ 
  title, 
  content, 
  footer 
}: { 
  title: React.ReactNode;
  content: React.ReactNode;
  footer: React.ReactNode;
}) {
  return (
    <div className="dialog">
      <div className="dialog-header">{title}</div>
      <div className="dialog-body">{content}</div>
      <div className="dialog-footer">{footer}</div>
    </div>
  );
}

function App() {
  return (
    <Dialog
      title={<h2>Confirm Action</h2>}
      content={<p>Are you sure?</p>}
      footer={
        <>
          <Button>Cancel</Button>
          <Button variant="primary">Confirm</Button>
        </>
      }
    />
  );
}

// Pattern 2: Render props
function DataFetcher({ 
  url, 
  children 
}: { 
  url: string;
  children: (data: any, loading: boolean, error: any) => React.ReactNode;
}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);
  
  return <>{children(data, loading, error)}</>;
}

function App() {
  return (
    <DataFetcher url="/api/users">
      {(data, loading, error) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error: {error.message}</div>;
        return <UserList users={data} />;
      }}
    </DataFetcher>
  );
}

// Pattern 3: Compound components
const CardContext = createContext<{ variant?: string }>({});

function Card({ children, variant }: { children: React.ReactNode; variant?: string }) {
  return (
    <CardContext.Provider value={{ variant }}>
      <div className={\`card card-\${variant}\`}>
        {children}
      </div>
    </CardContext.Provider>
  );
}

Card.Header = function CardHeader({ children }: { children: React.ReactNode }) {
  const { variant } = useContext(CardContext);
  return <div className={\`card-header \${variant}\`}>{children}</div>;
};

Card.Body = function CardBody({ children }: { children: React.ReactNode }) {
  return <div className="card-body">{children}</div>;
};

Card.Footer = function CardFooter({ children }: { children: React.ReactNode }) {
  return <div className="card-footer">{children}</div>;
};

// Usage
function App() {
  return (
    <Card variant="outlined">
      <Card.Header>Card Title</Card.Header>
      <Card.Body>Card content goes here</Card.Body>
      <Card.Footer>
        <Button>Action</Button>
      </Card.Footer>
    </Card>
  );
}

// Pattern 4: Slot-based composition
function PageLayout({ 
  slots 
}: { 
  slots: {
    header?: React.ReactNode;
    sidebar?: React.ReactNode;
    main?: React.ReactNode;
    footer?: React.ReactNode;
  };
}) {
  return (
    <div className="page-layout">
      {slots.header && <header>{slots.header}</header>}
      <div className="page-body">
        {slots.sidebar && <aside>{slots.sidebar}</aside>}
        {slots.main && <main>{slots.main}</main>}
      </div>
      {slots.footer && <footer>{slots.footer}</footer>}
    </div>
  );
}

function App() {
  return (
    <PageLayout
      slots={{
        header: <Header />,
        sidebar: <Sidebar />,
        main: <MainContent />,
        footer: <Footer />,
      }}
    />
  );
}

// Pattern 5: Flexible children with type checking
function Tabs({ children }: { children: React.ReactNode }) {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = React.Children.toArray(children).filter(
    child => React.isValidElement(child) && child.type === Tab
  );
  
  return (
    <div className="tabs">
      <div className="tab-list">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={activeTab === index ? 'active' : ''}
          >
            {React.isValidElement(tab) && tab.props.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs[activeTab]}
      </div>
    </div>
  );
}

function Tab({ label, children }: { label: string; children: React.ReactNode }) {
  return <div>{children}</div>;
}

function App() {
  return (
    <Tabs>
      <Tab label="Home">Home content</Tab>
      <Tab label="About">About content</Tab>
      <Tab label="Contact">Contact content</Tab>
    </Tabs>
  );
}`,
            explanation: "Advanced composition patterns include multiple slots, render props, compound components, and slot-based composition. Each pattern solves different problems and provides flexibility."
          }
        },
        {
          title: "Lesson 4: Introduction to Context API",
          content: "Context API solves prop drilling by providing a way to share data across the component tree.\n\nWhat is Context?\n• Provides a way to pass data through component tree\n• Avoids prop drilling\n• Shares data with many components\n• Works with Provider/Consumer pattern\n\nWhen to Use Context:\n• Theme data (light/dark mode)\n• User authentication\n• Language/locale\n• Shared configuration\n• Data that many components need\n\nWhen NOT to Use Context:\n• Simple prop passing (1-2 levels)\n• Frequently changing data (causes re-renders)\n• Component-specific data (use props)\n• Global state (consider Redux/Zustand)",
          codeExample: {
            code: `// Step 1: Create context
import { createContext } from 'react';

const ThemeContext = createContext<'light' | 'dark'>('light');

// Step 2: Create Provider component
function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };
  
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}

// Step 3: Use context in components
function Button() {
  const theme = useContext(ThemeContext);
  
  return (
    <button className={\`btn btn-\${theme}\`}>
      Click me
    </button>
  );
}

// Step 4: Wrap app with Provider
function App() {
  return (
    <ThemeProvider>
      <Header />
      <MainContent />
      <Footer />
    </ThemeProvider>
  );
}

// Complete example with value and setter
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook for easier access
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}

// Usage
function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button onClick={toggleTheme}>
      Current theme: {theme}
    </button>
  );
}

function ThemedButton() {
  const { theme } = useTheme();
  
  return (
    <button className={\`btn btn-\${theme}\`}>
      Themed Button
    </button>
  );
}`,
            explanation: "Context API solves prop drilling by providing a way to share data. Create context, provide it with a Provider, and consume it with useContext. Always create custom hooks for better developer experience."
          }
        },
        {
          title: "Lesson 5: Creating and Using Context",
          content: "Learn the complete process of creating and using Context in your applications.\n\nContext Creation Steps:\n1. Create context with createContext\n2. Create Provider component\n3. Wrap app/components with Provider\n4. Use useContext to access value\n5. Create custom hook (optional but recommended)\n\nBest Practices:\n• Always provide default values\n• Create custom hooks for context access\n• Split contexts by concern\n• Use TypeScript for type safety\n• Handle missing Provider errors",
          codeExample: {
            code: `// Complete context setup example

// Step 1: Define context type
interface UserContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

// Step 2: Create context
const UserContext = createContext<UserContextType | undefined>(undefined);

// Step 3: Create Provider
function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  
  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const userData = await authenticate(email, password);
      setUser(userData);
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };
  
  const logout = () => {
    setUser(null);
  };
  
  const value: UserContextType = {
    user,
    login,
    logout,
    loading,
  };
  
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

// Step 4: Create custom hook
function useUser() {
  const context = useContext(UserContext);
  
  if (context === undefined) {
    throw new Error('useUser must be used within UserProvider');
  }
  
  return context;
}

// Step 5: Use in components
function LoginButton() {
  const { login, loading } = useUser();
  
  const handleLogin = async () => {
    try {
      await login('user@example.com', 'password');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
  
  return (
    <button onClick={handleLogin} disabled={loading}>
      {loading ? 'Logging in...' : 'Login'}
    </button>
  );
}

function UserProfile() {
  const { user, logout } = useUser();
  
  if (!user) {
    return <div>Please log in</div>;
  }
  
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

// Step 6: Wrap app
function App() {
  return (
    <UserProvider>
      <Header />
      <MainContent />
    </UserProvider>
  );
}

// Multiple contexts
function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <LanguageProvider>
          <Header />
          <MainContent />
        </LanguageProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

// Using multiple contexts
function Header() {
  const { theme } = useTheme();
  const { user } = useUser();
  const { language } = useLanguage();
  
  return (
    <header className={theme}>
      <div>{language === 'en' ? 'Welcome' : 'Bienvenue'}</div>
      {user && <UserMenu user={user} />}
    </header>
  );
}`,
            explanation: "Creating context involves defining types, creating the context, building a Provider component, creating a custom hook, and using it in components. Always handle the case where context might be undefined."
          }
        },
        {
          title: "Lesson 6: Context Performance Considerations",
          content: "Context can cause performance issues if not used carefully. Learn how to optimize.\n\nPerformance Issues:\n• Context value changes cause all consumers to re-render\n• Large context objects cause unnecessary re-renders\n• Frequent context updates impact performance\n\nOptimization Strategies:\n• Split contexts by update frequency\n• Memoize context values\n• Use multiple contexts\n• Memoize consumers with React.memo\n• Only put frequently changing data in separate context",
          codeExample: {
            code: `// ❌ BAD: Single context with everything
interface AppContextType {
  user: User;
  theme: string;
  language: string;
  notifications: Notification[];
  // All in one context - any change re-renders everything!
}

// ✅ GOOD: Split contexts by concern
const UserContext = createContext<User | null>(null);
const ThemeContext = createContext<string>('light');
const LanguageContext = createContext<string>('en');
const NotificationsContext = createContext<Notification[]>([]);

// ❌ BAD: New object every render
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  // New object every render - causes re-renders!
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// ✅ GOOD: Memoize context value
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  const value = useMemo(
    () => ({ theme, setTheme }),
    [theme] // Only recreate when theme changes
  );
  
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// ✅ BETTER: Split value and setter
const ThemeContext = createContext<string>('light');
const ThemeUpdateContext = createContext<() => void>(() => {});

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  // Theme value context - only changes when theme changes
  // Update context - stable function reference
  return (
    <ThemeContext.Provider value={theme}>
      <ThemeUpdateContext.Provider value={() => setTheme(t => t === 'light' ? 'dark' : 'light')}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}

function useTheme() {
  return useContext(ThemeContext);
}

function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

// Components that only read theme don't re-render when toggle is called
function ThemedComponent() {
  const theme = useTheme(); // Only re-renders when theme changes
  return <div className={theme}>Content</div>;
}

// Component that only toggles doesn't re-render when theme changes
function ThemeToggle() {
  const toggle = useThemeUpdate(); // Stable reference, no re-renders
  return <button onClick={toggle}>Toggle</button>;
}

// Memoize consumers
const ExpensiveComponent = React.memo(function ExpensiveComponent() {
  const theme = useTheme();
  return <div className={theme}>Expensive content</div>;
});

// Context with stable references
function UserProvider({ children }) {
  const [user, setUser] = useState<User | null>(null);
  
  // Memoize functions
  const login = useCallback(async (email: string, password: string) => {
    const userData = await authenticate(email, password);
    setUser(userData);
  }, []);
  
  const logout = useCallback(() => {
    setUser(null);
  }, []);
  
  const value = useMemo(
    () => ({ user, login, logout }),
    [user, login, logout]
  );
  
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}`,
            explanation: "Optimize context performance by splitting contexts, memoizing values, separating read/write contexts, and using React.memo for expensive consumers. Avoid creating new objects in Provider values."
          }
        },
        {
          title: "Lesson 7: Real-World Context Examples",
          content: "See how Context is used in real applications.\n\nCommon Use Cases:\n• Theme management\n• User authentication\n• Language/locale\n• Shopping cart\n• Modal/dialog state\n• Form state\n• Feature flags",
          codeExample: {
            code: `// Example 1: Theme context (complete)
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    // Load from localStorage
    const saved = localStorage.getItem('theme');
    return (saved as 'light' | 'dark') || 'light';
  });
  
  useEffect(() => {
    // Save to localStorage
    localStorage.setItem('theme', theme);
    // Apply to document
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  
  const toggleTheme = useCallback(() => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  }, []);
  
  const value = useMemo(
    () => ({ theme, toggleTheme }),
    [theme, toggleTheme]
  );
  
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used in ThemeProvider');
  return context;
}

// Example 2: Authentication context
interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Check for existing session
    checkSession().then(setUser).finally(() => setLoading(false));
  }, []);
  
  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const userData = await authenticate(email, password);
      setUser(userData);
    } finally {
      setLoading(false);
    }
  };
  
  const logout = () => {
    setUser(null);
    clearSession();
  };
  
  const value = useMemo(
    () => ({ user, login, logout, loading }),
    [user, loading]
  );
  
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// Example 3: Shopping cart context
interface CartContextType {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  total: number;
  itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  
  const addItem = useCallback((product: Product) => {
    setItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  }, []);
  
  const removeItem = useCallback((id: string) => {
    setItems(prev => prev.filter(item => item.product.id !== id));
  }, []);
  
  const updateQuantity = useCallback((id: string, quantity: number) => {
    setItems(prev =>
      prev.map(item =>
        item.product.id === id ? { ...item, quantity } : item
      )
    );
  }, []);
  
  const total = useMemo(
    () => items.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
    [items]
  );
  
  const itemCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );
  
  const value = useMemo(
    () => ({ items, addItem, removeItem, updateQuantity, total, itemCount }),
    [items, addItem, removeItem, updateQuantity, total, itemCount]
  );
  
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

// Example 4: Modal context
interface ModalContextType {
  openModal: (content: React.ReactNode) => void;
  closeModal: () => void;
  isOpen: boolean;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<React.ReactNode>(null);
  
  const openModal = useCallback((modalContent: React.ReactNode) => {
    setContent(modalContent);
    setIsOpen(true);
  }, []);
  
  const closeModal = useCallback(() => {
    setIsOpen(false);
    setContent(null);
  }, []);
  
  const value = useMemo(
    () => ({ openModal, closeModal, isOpen }),
    [openModal, closeModal, isOpen]
  );
  
  return (
    <ModalContext.Provider value={value}>
      {children}
      {isOpen && (
        <Modal onClose={closeModal}>
          {content}
        </Modal>
      )}
    </ModalContext.Provider>
  );
}`,
            explanation: "Real-world context examples include theme management, authentication, shopping carts, and modals. Each demonstrates proper context setup with memoization and custom hooks."
          }
        },
        {
          title: "Lesson 8: When to Use Composition vs Context",
          content: "Understanding when to use composition versus context is crucial for good architecture.\n\nUse Composition When:\n• Building flexible component APIs\n• Creating reusable UI components\n• Components need to be customizable\n• You want to avoid prop drilling for UI structure\n• Building compound components\n\nUse Context When:\n• Sharing data across many components\n• Avoiding prop drilling for data\n• Theme, auth, language preferences\n• Data that doesn't change frequently\n• Configuration that many components need\n\nUse Both:\n• Context for data\n• Composition for structure\n• They complement each other",
          codeExample: {
            code: `// ✅ Use Composition for structure
function Card({ children, variant }) {
  return <div className={\`card \${variant}\`}>{children}</div>;
}

function App() {
  return (
    <Card variant="outlined">
      <h2>Title</h2>
      <p>Content</p>
    </Card>
  );
}

// ✅ Use Context for data
function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <Card variant="outlined">
          <CardHeader>
            <ThemedTitle /> {/* Uses theme from context */}
          </CardHeader>
          <CardBody>
            <UserProfile /> {/* Uses user from context */}
          </CardBody>
        </Card>
      </UserProvider>
    </ThemeProvider>
  );
}

// ✅ Combine both
function Dashboard() {
  return (
    <ThemeProvider>
      <Layout>
        <Header /> {/* Uses theme from context */}
        <Sidebar>
          <UserMenu /> {/* Uses user from context */}
        </Sidebar>
        <Main>
          <Content /> {/* Uses both theme and user */}
        </Main>
      </Layout>
    </ThemeProvider>
  );
}

// ❌ Don't use Context for structure
// Bad: Using context to pass layout components
const LayoutContext = createContext({ header: null, footer: null });

// ✅ Good: Use composition
function Layout({ header, footer, children }) {
  return (
    <div>
      {header}
      {children}
      {footer}
    </div>
  );
}

// ❌ Don't use Composition for deeply nested data
// Bad: Passing user through 10 components
function App() {
  const user = { name: 'Alice' };
  return (
    <Layout user={user}>
      <Header user={user}>
        <Nav user={user}>
          <UserMenu user={user} />
        </Nav>
      </Header>
    </Layout>
  );
}

// ✅ Good: Use context
function App() {
  return (
    <UserProvider>
      <Layout>
        <Header>
          <Nav>
            <UserMenu /> {/* Gets user from context */}
          </Nav>
        </Header>
      </Layout>
    </UserProvider>
  );
}`,
            explanation: "Use composition for structure and flexibility, context for sharing data. They work together - use context for data (theme, user) and composition for UI structure (layouts, cards)."
          }
        },
        {
          title: "Lesson 9: Common Mistakes and Best Practices",
          content: "Avoid common mistakes when using composition and context.\n\nCommon Mistakes:\n• Using context for everything\n• Not memoizing context values\n• Creating contexts that change too frequently\n• Not splitting contexts\n• Forgetting to handle missing Provider\n• Over-engineering simple prop passing\n\nBest Practices:\n• Split contexts by concern\n• Memoize context values\n• Create custom hooks\n• Handle missing Provider errors\n• Use composition for structure\n• Use context for data\n• Don't overuse context",
          codeExample: {
            code: `// ❌ MISTAKE 1: Using context for everything
const EverythingContext = createContext({
  user: null,
  theme: 'light',
  cart: [],
  notifications: [],
  settings: {},
  // Everything in one context!
});

// ✅ FIX: Split by concern
const UserContext = createContext(null);
const ThemeContext = createContext('light');
const CartContext = createContext([]);

// ❌ MISTAKE 2: New object every render
function Provider({ children }) {
  const [state, setState] = useState({});
  
  return (
    <Context.Provider value={{ state, setState }}>
      {/* New object every render! */}
    </Context.Provider>
  );
}

// ✅ FIX: Memoize value
function Provider({ children }) {
  const [state, setState] = useState({});
  
  const value = useMemo(
    () => ({ state, setState }),
    [state]
  );
  
  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
}

// ❌ MISTAKE 3: Not handling missing Provider
function Component() {
  const value = useContext(MyContext);
  // Crashes if Provider is missing!
  return <div>{value.data}</div>;
}

// ✅ FIX: Check for undefined
function useMyContext() {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within MyProvider');
  }
  return context;
}

// ❌ MISTAKE 4: Using context for simple prop passing
function App() {
  return (
    <NameProvider>
      <Component /> {/* Only 1 level deep! */}
    </NameProvider>
  );
}

// ✅ FIX: Just use props
function App() {
  const name = 'Alice';
  return <Component name={name} />;
}

// ❌ MISTAKE 5: Context with frequently changing data
function CounterProvider({ children }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => setCount(c => c + 1), 100);
    return () => clearInterval(timer);
  }, []);
  
  // Count changes 10 times per second!
  // All consumers re-render constantly!
  return (
    <CounterContext.Provider value={count}>
      {children}
    </CounterContext.Provider>
  );
}

// ✅ FIX: Don't use context for frequently changing data
// Use props or state management library instead

// Best practices checklist:
// ✅ Split contexts by concern
// ✅ Memoize context values
// ✅ Create custom hooks
// ✅ Handle missing Provider
// ✅ Use composition for structure
// ✅ Use context for shared data
// ✅ Don't overuse context`,
            explanation: "Common mistakes include using context for everything, not memoizing values, and using context for frequently changing data. Follow best practices: split contexts, memoize values, create custom hooks, and use composition for structure."
          }
        }
      ],
      conclusion: "Component composition and Context API are powerful tools for building maintainable React applications. Use composition for flexible UI structure and Context for sharing data across the component tree. Remember: composition for structure, context for data. Split contexts by concern, memoize values, and always create custom hooks for better developer experience."
    }
  },
  
  // ADVANCED LEVEL
  {
    id: "advanced-1",
    title: "Performance Optimization Techniques",
    description: "Learn advanced performance optimization including memo, useMemo, useCallback, and React.memo.",
    level: "advanced",
    estimatedTime: "45 min",
    topics: ["React.memo", "useMemo", "useCallback", "Performance Profiling"],
    prerequisites: ["Component Composition and Context"],
    content: {
      overview: "Performance optimization is crucial for large applications. React provides several tools to prevent unnecessary re-renders and expensive recalculations.",
      sections: [
        {
          title: "React.memo",
          content: "React.memo is a higher-order component that prevents re-renders when props haven't changed.",
          codeExample: {
            code: `const ExpensiveComponent = React.memo(function ExpensiveComponent({ data }) {
  // Expensive rendering logic
  return <div>{/* Complex UI */}</div>;
});`,
            explanation: "React.memo does a shallow comparison of props. Only re-renders if props actually change."
          }
        },
        {
          title: "useMemo for Expensive Calculations",
          content: "useMemo memoizes the result of expensive calculations, only recomputing when dependencies change.",
          codeExample: {
            code: `const expensiveValue = useMemo(() => {
  return heavyComputation(items);
}, [items]); // Only recompute when items change`,
            explanation: "Don't overuse useMemo. Only use it when the calculation is genuinely expensive or when referential equality matters."
          }
        }
      ],
      conclusion: "Optimize when you have measured a performance problem. Premature optimization can make code more complex without benefits."
    }
  },
  {
    id: "advanced-2",
    title: "Building Custom Hooks",
    description: "Create reusable custom hooks to extract component logic and share it across your application.",
    level: "advanced",
    estimatedTime: "40 min",
    topics: ["Custom Hooks", "Logic Extraction", "Hook Composition", "Best Practices"],
    prerequisites: ["Performance Optimization Techniques"],
    content: {
      overview: "Custom hooks let you extract component logic into reusable functions. They're a powerful way to share stateful logic between components.",
      sections: [
        {
          title: "What are Custom Hooks?",
          content: "Custom hooks are JavaScript functions whose names start with 'use' and may call other hooks. They let you reuse stateful logic."
        },
        {
          title: "Creating Custom Hooks",
          content: "Extract logic into a custom hook to share it between components.",
          codeExample: {
            code: `function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });
  
  const setStoredValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };
  
  return [value, setStoredValue];
}

// Use in component
function Component() {
  const [name, setName] = useLocalStorage('name', '');
  // ...
}`,
            explanation: "Custom hooks encapsulate logic. They can use other hooks and return any values you want components to use."
          }
        }
      ],
      conclusion: "Custom hooks are the recommended way to share logic. They keep components clean and logic reusable."
    }
  },
  
  // EXPERT LEVEL
  {
    id: "expert-1",
    title: "Concurrent Rendering and Suspense",
    description: "Deep dive into React's concurrent features, Suspense boundaries, and how React prioritizes updates.",
    level: "expert",
    estimatedTime: "60 min",
    topics: ["Concurrent Mode", "Suspense", "Time Slicing", "Priority Updates"],
    prerequisites: ["Building Custom Hooks"],
    content: {
      overview: "React 18 introduced concurrent rendering, allowing React to interrupt, pause, and resume rendering work. This makes UIs more responsive.",
      sections: [
        {
          title: "What is Concurrent Rendering?",
          content: "Concurrent rendering allows React to work on multiple versions of your UI simultaneously. React can pause rendering to handle urgent updates, then continue."
        },
        {
          title: "Suspense Boundaries",
          content: "Suspense lets components 'wait' for something before rendering. It's commonly used for code splitting and data fetching.",
          codeExample: {
            code: `import { Suspense } from 'react';

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <ProfilePage />
    </Suspense>
  );
}`,
            explanation: "If ProfilePage suspends (waits for data), Suspense shows the fallback. Once ready, it shows ProfilePage."
          }
        },
        {
          title: "useTransition for Non-Urgent Updates",
          content: "useTransition lets you mark updates as non-urgent, allowing React to keep the UI responsive.",
          codeExample: {
            code: `const [isPending, startTransition] = useTransition();

function handleInput(e) {
  setInputValue(e.target.value); // Urgent
  startTransition(() => {
    setSearchResults(search(e.target.value)); // Non-urgent
  });
}`,
            explanation: "Urgent updates (typing) happen immediately. Non-urgent updates (search results) can be interrupted for urgent ones."
          }
        }
      ],
      conclusion: "Concurrent features make React apps feel faster and more responsive. Use them strategically for better UX."
    }
  },
  {
    id: "expert-2",
    title: "Advanced State Management Patterns",
    description: "Explore advanced state management techniques including reducer patterns, state machines, and architectural patterns.",
    level: "expert",
    estimatedTime: "50 min",
    topics: ["Complex Reducers", "State Machines", "State Architecture", "Global State"],
    prerequisites: ["Concurrent Rendering and Suspense"],
    content: {
      overview: "Large applications require sophisticated state management. Learn patterns for managing complex state hierarchies and global state.",
      sections: [
        {
          title: "Complex Reducer Patterns",
          content: "useReducer excels at managing complex state with predictable updates. Combine multiple reducers for sophisticated state management."
        },
        {
          title: "State Machines",
          content: "State machines provide predictable state transitions. They're excellent for UI states with clear transitions.",
          codeExample: {
            code: `const reducer = (state, action) => {
  switch (state.status) {
    case 'idle':
      if (action.type === 'FETCH') return { ...state, status: 'loading' };
      return state;
    case 'loading':
      if (action.type === 'SUCCESS') return { status: 'success', data: action.data };
      if (action.type === 'ERROR') return { status: 'error', error: action.error };
      return state;
    // ... more states
  }
};`,
            explanation: "State machines make state transitions explicit and predictable. Every state has defined transitions."
          }
        }
      ],
      conclusion: "Choose state management patterns based on your app's complexity. Start simple, evolve as needed."
    }
  },
  {
    id: "expert-5",
    title: "React 19: Optimistic UI Updates with useOptimistic",
    description: "Master the useOptimistic hook to create instant, responsive user interfaces with automatic rollback on errors.",
    level: "expert",
    estimatedTime: "60 min",
    topics: ["useOptimistic", "Optimistic UI", "Error Handling", "Server Actions"],
    prerequisites: ["Advanced State Management Patterns"],
    content: {
      overview: "useOptimistic is a powerful React 19 hook that enables optimistic UI updates - showing immediate feedback to users before server confirmation. This creates a more responsive, modern user experience. When combined with error handling, it automatically reverts changes if the action fails, ensuring data consistency. This tutorial covers when and how to use useOptimistic effectively.",
      sections: [
        {
          title: "Lesson 1: Understanding Optimistic UI Patterns",
          content: "Optimistic UI updates show changes immediately, assuming the action will succeed. If it fails, the UI reverts to the previous state.\n\nBenefits:\n• Instant feedback - no waiting for server\n• Better perceived performance\n• Smoother user experience\n• Reduced perceived latency\n\nWhen to Use:\n• Actions likely to succeed (likes, follows, saves)\n• High success rate operations\n• When rollback is acceptable\n• Improving perceived performance\n\nWhen NOT to Use:\n• Critical financial transactions\n• Actions that frequently fail\n• When data integrity is paramount\n• Operations requiring server validation",
          codeExample: {
            code: `// Traditional approach (pessimistic)
async function handleLike() {
  setLoading(true);
  try {
    await likePost(postId);
    setLikes(prev => prev + 1);
  } catch (error) {
    showError('Failed to like');
  } finally {
    setLoading(false);
  }
}

// User sees: Loading... → Success
// Feels slow, waits for server

// Optimistic approach
async function handleLike() {
  addOptimisticLike(1); // Update immediately
  try {
    await likePost(postId);
    setLikes(prev => prev + 1); // Confirm
  } catch (error) {
    // Automatic rollback
    showError('Failed to like');
  }
}

// User sees: Immediate update
// Feels instant, confirms in background`,
            explanation: "Optimistic UI provides immediate feedback. The user sees changes instantly, and the UI confirms or reverts based on the server response."
          }
        },
        {
          title: "Lesson 2: useOptimistic Hook Basics",
          content: "useOptimistic manages optimistic state updates with automatic rollback.\n\nHook Signature:\n```typescript\nconst [optimisticState, addOptimistic] = useOptimistic(\n  state,\n  updateFn\n);\n```\n\nParameters:\n• state: The actual state value\n• updateFn: Function that computes optimistic state\n\nReturns:\n• optimisticState: The optimistic state (or actual if no pending updates)\n• addOptimistic: Function to trigger optimistic update",
          codeExample: {
            code: `import { useOptimistic, useState } from 'react';

function LikeButton() {
  const [likes, setLikes] = useState(10);
  
  const [optimisticLikes, addOptimisticLike] = useOptimistic(
    likes,
    // Update function: (currentState, optimisticValue) => newState
    (currentLikes, amount: number) => currentLikes + amount
  );
  
  async function handleLike() {
    // Step 1: Optimistic update (immediate)
    addOptimisticLike(1);
    
    try {
      // Step 2: Server call
      const response = await fetch('/api/like', {
        method: 'POST',
        body: JSON.stringify({ postId: 1 }),
      });
      
      if (!response.ok) throw new Error('Failed');
      
      // Step 3: Update actual state (confirms optimistic)
      const data = await response.json();
      setLikes(data.likes);
    } catch (error) {
      // Step 4: On error, useOptimistic automatically reverts
      // because we didn't update the actual state
      console.error('Like failed:', error);
    }
  }
  
  return (
    <button onClick={handleLike}>
      ❤️ {optimisticLikes}
    </button>
  );
}

// How it works:
// 1. User clicks → optimisticLikes becomes 11 (optimistic)
// 2. Server succeeds → setLikes(11) → optimisticLikes stays 11 (confirmed)
// 3. Server fails → setLikes not called → optimisticLikes reverts to 10`,
            explanation: "useOptimistic manages temporary optimistic state. When you call addOptimisticLike, it immediately shows the optimistic value. If the actual state updates, it confirms. If not (error case), it automatically reverts."
          }
        },
        {
          title: "Lesson 3: Complex Optimistic Updates",
          content: "useOptimistic can handle complex state structures, not just numbers.\n\nCommon Patterns:\n• Adding items to lists\n• Updating nested objects\n• Toggling boolean states\n• Incrementing/decrementing counters\n\nBest Practices:\n• Keep update function pure\n• Handle complex state transformations\n• Use proper TypeScript types\n• Consider edge cases",
          codeExample: {
            code: `// Complex state: Array of items
function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Learn React', completed: false },
  ]);
  
  const [optimisticTodos, addOptimisticTodo] = useOptimistic(
    todos,
    (currentTodos, newTodo: Todo) => [...currentTodos, newTodo]
  );
  
  async function handleAddTodo(text: string) {
    const tempTodo: Todo = {
      id: Date.now(), // Temporary ID
      text,
      completed: false,
    };
    
    // Add optimistically
    addOptimisticTodo(tempTodo);
    
    try {
      const savedTodo = await createTodo(text);
      // Replace temp with real todo
      setTodos(prev => [
        ...prev.filter(t => t.id !== tempTodo.id),
        savedTodo,
      ]);
    } catch (error) {
      // Auto-reverts, removing tempTodo
      console.error('Failed to add todo');
    }
  }
  
  // Complex: Updating nested state
  function CommentList() {
    const [comments, setComments] = useState<Comment[]>([]);
    
    const [optimisticComments, updateOptimistic] = useOptimistic(
      comments,
      (current, update: { id: number; likes: number }) =>
        current.map(comment =>
          comment.id === update.id
            ? { ...comment, likes: update.likes }
            : comment
        )
    );
    
    async function handleLikeComment(commentId: number) {
      const comment = comments.find(c => c.id === commentId);
      if (!comment) return;
      
      // Optimistic: increment likes
      updateOptimistic({ id: commentId, likes: comment.likes + 1 });
      
      try {
        const updated = await likeComment(commentId);
        setComments(prev =>
          prev.map(c => (c.id === commentId ? updated : c))
        );
      } catch (error) {
        // Auto-reverts
      }
    }
  }
  
  // Toggle pattern
  function FollowButton({ userId }: { userId: number }) {
    const [isFollowing, setIsFollowing] = useState(false);
    
    const [optimisticFollowing, toggleOptimistic] = useOptimistic(
      isFollowing,
      (current, _) => !current // Toggle
    );
    
    async function handleToggle() {
      toggleOptimistic(null); // Value doesn't matter for toggle
      
      try {
        if (isFollowing) {
          await unfollow(userId);
        } else {
          await follow(userId);
        }
        setIsFollowing(prev => !prev);
      } catch (error) {
        // Auto-reverts
      }
    }
    
    return (
      <button onClick={handleToggle}>
        {optimisticFollowing ? 'Unfollow' : 'Follow'}
      </button>
    );
  }`,
            explanation: "useOptimistic works with any state structure. The update function receives the current state and the optimistic value, returning the new optimistic state. Keep the function pure and predictable."
          }
        },
        {
          title: "Lesson 4: Error Handling and Rollback",
          content: "Proper error handling ensures data consistency when optimistic updates fail.\n\nError Handling Strategies:\n• Automatic rollback (built-in)\n• Manual error notifications\n• Retry mechanisms\n• Error state management\n\nCommon Patterns:\n• Show error messages\n• Retry failed operations\n• Log errors for debugging\n• Graceful degradation",
          codeExample: {
            code: `// Error handling with notifications
function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [error, setError] = useState<string | null>(null);
  
  const [optimisticLikes, addOptimistic] = useOptimistic(
    likes,
    (current, amount: number) => current + amount
  );
  
  async function handleLike() {
    // Clear previous errors
    setError(null);
    
    // Optimistic update
    addOptimistic(1);
    
    try {
      const response = await fetch('/api/like', {
        method: 'POST',
      });
      
      if (!response.ok) {
        throw new Error('Like failed');
      }
      
      const data = await response.json();
      setLikes(data.likes);
    } catch (error) {
      // Error occurred - optimistic state auto-reverts
      setError('Failed to like. Please try again.');
      
      // Optional: Retry mechanism
      setTimeout(() => {
        handleLike(); // Retry
      }, 2000);
    }
  }
  
  return (
    <div>
      <button onClick={handleLike}>
        ❤️ {optimisticLikes}
      </button>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

// With retry logic
function useOptimisticWithRetry<T, A>(
  state: T,
  updateFn: (current: T, optimisticValue: A) => T
) {
  const [optimisticState, addOptimistic] = useOptimistic(state, updateFn);
  const [retryCount, setRetryCount] = useState(0);
  
  return {
    optimisticState,
    addOptimistic: (value: A) => {
      addOptimistic(value);
      setRetryCount(0); // Reset retry count
    },
    retry: () => setRetryCount(prev => prev + 1),
    retryCount,
  };
}

// Advanced: Debounce rapid optimistic updates
function useDebouncedOptimistic<T, A>(
  state: T,
  updateFn: (current: T, optimisticValue: A) => T,
  delay: number = 300
) {
  const [optimisticState, addOptimistic] = useOptimistic(state, updateFn);
  const timeoutRef = useRef<NodeJS.Timeout>();
  
  const debouncedAdd = useCallback((value: A) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = setTimeout(() => {
      addOptimistic(value);
    }, delay);
  }, [addOptimistic, delay]);
  
  return { optimisticState, addOptimistic: debouncedAdd };
}`,
            explanation: "Error handling with useOptimistic is straightforward - if the actual state doesn't update, the optimistic state automatically reverts. Add error messages and retry logic for better UX."
          }
        },
        {
          title: "Lesson 5: Real-World Use Cases",
          content: "Explore practical applications of useOptimistic in real applications.\n\nCommon Use Cases:\n• Social media interactions (likes, comments)\n• Shopping cart updates\n• Form submissions\n• List item operations (add, delete, update)\n• Real-time collaboration features",
          codeExample: {
            code: `// Real-world examples

// 1. Social media like counter
function Post({ postId }: { postId: number }) {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  
  const [optimisticLikes, addOptimistic] = useOptimistic(
    likes,
    (current, delta: number) => current + delta
  );
  
  const [optimisticIsLiked, toggleOptimistic] = useOptimistic(
    isLiked,
    (current, _) => !current
  );
  
  async function handleLike() {
    const wasLiked = isLiked;
    toggleOptimistic(null);
    addOptimistic(wasLiked ? -1 : 1);
    
    try {
      if (wasLiked) {
        await unlikePost(postId);
        setIsLiked(false);
        setLikes(prev => prev - 1);
      } else {
        await likePost(postId);
        setIsLiked(true);
        setLikes(prev => prev + 1);
      }
    } catch (error) {
      // Both revert automatically
    }
  }
  
  return (
    <button onClick={handleLike}>
      {optimisticIsLiked ? '❤️' : '🤍'} {optimisticLikes}
    </button>
  );
}

// 2. Shopping cart
function ShoppingCart() {
  const [items, setItems] = useState<CartItem[]>([]);
  
  const [optimisticItems, addOptimistic] = useOptimistic(
    items,
    (current, newItem: CartItem) => [...current, newItem]
  );
  
  async function addToCart(product: Product) {
    const tempItem: CartItem = {
      id: \`temp-\${Date.now()}\`,
      product,
      quantity: 1,
    };
    
    addOptimistic(tempItem);
    
    try {
      const savedItem = await addToCartAPI(product.id);
      setItems(prev => [...prev.filter(i => i.id !== tempItem.id), savedItem]);
    } catch (error) {
      // Reverts
    }
  }
  
  const total = optimisticItems.reduce(
    (sum: number, item: CartItem) => sum + item.product.price * item.quantity,
    0
  );
  
  return (
    <div>
      {optimisticItems.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
      <div>Total: \${total.toFixed(2)}</div>
    </div>
  );
}

// 3. Comment submission
function CommentForm({ postId }: { postId: number }) {
  const [comments, setComments] = useState<Comment[]>([]);
  
  const [optimisticComments, addOptimistic] = useOptimistic(
    comments,
    (current, newComment: Comment) => [newComment, ...current]
  );
  
  async function handleSubmit(text: string) {
    const tempComment: Comment = {
      id: \`temp-\${Date.now()}\`,
      text,
      author: currentUser,
      createdAt: new Date(),
      pending: true,
    };
    
    addOptimistic(tempComment);
    
    try {
      const saved = await postComment(postId, text);
      setComments(prev => [
        saved,
        ...prev.filter(c => c.id !== tempComment.id),
      ]);
    } catch (error) {
      // Reverts, removing temp comment
    }
  }
  
  return (
    <div>
      {optimisticComments.map(comment => (
        <Comment
          key={comment.id}
          comment={comment}
          pending={comment.id.startsWith('temp-')}
        />
      ))}
      <CommentForm onSubmit={handleSubmit} />
    </div>
  );
}`,
            explanation: "useOptimistic shines in interactive applications where immediate feedback improves UX. Common patterns include likes, cart operations, comments, and real-time updates."
          }
        }
      ],
      conclusion: "useOptimistic enables modern, responsive UIs by providing instant feedback. Use it for actions likely to succeed, always handle errors gracefully, and enjoy the improved user experience. The automatic rollback ensures data consistency even when operations fail."
    }
  },
  {
    id: "expert-6",
    title: "React 19: Server Actions and useActionState",
    description: "Learn to build forms with server actions using useActionState, the React 19 replacement for useFormState.",
    level: "expert",
    estimatedTime: "70 min",
    topics: ["useActionState", "Server Actions", "Form Handling", "Next.js"],
    prerequisites: ["React 19: Optimistic UI Updates with useOptimistic"],
    content: {
      overview: "useActionState (formerly useFormState) is React 19's hook for managing form state with server actions. It simplifies form handling in Next.js and React Server Components, providing built-in pending state and error handling. This tutorial covers server actions, form state management, error handling, and integration with Next.js App Router.",
      sections: [
        {
          title: "Lesson 1: Understanding Server Actions",
          content: "Server actions are async functions that run on the server, called directly from client components.\n\nBenefits:\n• No API routes needed\n• Type-safe end-to-end\n• Progressive enhancement\n• Built-in security\n\nServer Action Requirements:\n• Marked with 'use server'\n• Async function\n• Can accept FormData or serializable data\n• Returns serializable response\n\nNext.js Integration:\n• Can be in separate files or inline\n• Automatically handled by Next.js\n• Works with App Router",
          codeExample: {
            code: `// Server action (app/actions.ts)
'use server';

export async function submitForm(formData: FormData) {
  const email = formData.get('email') as string;
  
  // Validate
  if (!email || !email.includes('@')) {
    return { error: 'Invalid email' };
  }
  
  // Database operations, API calls, etc.
  await saveToDatabase(email);
  
  return { success: true, message: 'Saved!' };
}

// Client component usage
'use client';

import { submitForm } from '@/app/actions';

export function Form() {
  async function handleSubmit(formData: FormData) {
    const result = await submitForm(formData);
    console.log(result);
  }
  
  return (
    <form action={handleSubmit}>
      <input name="email" type="email" />
      <button type="submit">Submit</button>
    </form>
  );
}

// Server actions can also accept objects
'use server';

export async function createUser(data: {
  name: string;
  email: string;
}) {
  // Server-side validation
  if (!data.name || !data.email) {
    return { error: 'Missing fields' };
  }
  
  const user = await db.user.create({ data });
  return { user };
}`,
            explanation: "Server actions run on the server, eliminating the need for API routes. They're type-safe, secure, and work seamlessly with forms."
          }
        },
        {
          title: "Lesson 2: useActionState Hook Basics",
          content: "useActionState manages form state with server actions, providing pending state and previous state.\n\nHook Signature:\n```typescript\nconst [state, formAction, pending] = useActionState(\n  action,\n  initialState\n);\n```\n\nParameters:\n• action: Server action function\n• initialState: Initial state value\n\nReturns:\n• state: Current state (result from last action)\n• formAction: Action wrapper for forms\n• pending: Boolean indicating if action is in progress\n\nKey Features:\n• Automatic pending state\n• Previous state tracking\n• Form integration\n• Error handling",
          codeExample: {
            code: `import { useActionState } from 'react';
import { submitForm } from './actions';

interface FormState {
  message?: string;
  error?: string;
}

const initialState: FormState = {};

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitForm, initialState);
  
  return (
    <form action={formAction}>
      <input
        name="email"
        type="email"
        required
        disabled={pending}
      />
      
      {state.error && (
        <p className="error">{state.error}</p>
      )}
      
      {state.message && (
        <p className="success">{state.message}</p>
      )}
      
      <button type="submit" disabled={pending}>
        {pending ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}

// Server action
'use server';

export async function submitForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const email = formData.get('email') as string;
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  if (!email || !email.includes('@')) {
    return {
      error: 'Please enter a valid email address',
    };
  }
  
  // Save to database
  await saveEmail(email);
  
  return {
    message: 'Thank you for subscribing!',
  };
}`,
            explanation: "useActionState wraps a server action, providing state management and pending status. The action receives previous state and FormData, returning new state."
          }
        },
        {
          title: "Lesson 3: Advanced Form Patterns",
          content: "Learn advanced patterns for complex forms with useActionState.\n\nCommon Patterns:\n• Multi-step forms\n• File uploads\n• Dynamic form fields\n• Real-time validation\n• Field-level errors\n\nBest Practices:\n• Validate on server\n• Show loading states\n• Handle errors gracefully\n• Provide feedback\n• Optimistic updates where appropriate",
          codeExample: {
            code: `// Multi-step form
function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [state, formAction, pending] = useActionState(submitStep, {});
  
  return (
    <form action={formAction}>
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      {step === 3 && <Step3 />}
      
      <div>
        {step > 1 && (
          <button type="button" onClick={() => setStep(s => s - 1)}>
            Back
          </button>
        )}
        <button type="submit" disabled={pending}>
          {step < 3 ? 'Next' : 'Submit'}
        </button>
      </div>
    </form>
  );
}

// File upload form
'use server';

export async function uploadFile(
  prevState: any,
  formData: FormData
) {
  const file = formData.get('file') as File;
  
  if (!file) {
    return { error: 'No file selected' };
  }
  
  if (file.size > 5 * 1024 * 1024) {
    return { error: 'File too large' };
  }
  
  // Upload to storage
  const url = await uploadToS3(file);
  
  return { success: true, url };
}

// Field-level errors
interface FormState {
  errors?: {
    email?: string;
    password?: string;
    name?: string;
  };
  message?: string;
}

'use server';

export async function registerUser(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const errors: FormState['errors'] = {};
  
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const name = formData.get('name') as string;
  
  if (!email || !email.includes('@')) {
    errors.email = 'Invalid email';
  }
  
  if (!password || password.length < 8) {
    errors.password = 'Password must be at least 8 characters';
  }
  
  if (!name || name.length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }
  
  if (Object.keys(errors).length > 0) {
    return { errors };
  }
  
  // Create user
  await createUser({ email, password, name });
  
  return { message: 'Account created successfully!' };
}

// Usage with field errors
function RegistrationForm() {
  const [state, formAction, pending] = useActionState(registerUser, {});
  
  return (
    <form action={formAction}>
      <div>
        <input name="email" type="email" />
        {state.errors?.email && (
          <span className="error">{state.errors.email}</span>
        )}
      </div>
      
      <div>
        <input name="password" type="password" />
        {state.errors?.password && (
          <span className="error">{state.errors.password}</span>
        )}
      </div>
      
      <button type="submit" disabled={pending}>
        Register
      </button>
    </form>
  );
}`,
            explanation: "useActionState handles complex forms with multi-step flows, file uploads, and field-level validation. Server-side validation ensures data integrity."
          }
        },
        {
          title: "Lesson 4: Combining with useOptimistic",
          content: "Combine useActionState with useOptimistic for the best user experience.\n\nCombination Benefits:\n• Instant UI feedback\n• Server-side validation\n• Automatic rollback on errors\n• Best of both worlds\n\nPattern:\n• useActionState for form submission\n• useOptimistic for immediate feedback\n• Handle errors gracefully",
          codeExample: {
            code: `// Combining useActionState and useOptimistic
function CommentForm({ postId }: { postId: number }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [state, formAction, pending] = useActionState(
    addComment,
    { comments }
  );
  
  const [optimisticComments, addOptimistic] = useOptimistic(
    comments,
    (current, newComment: Comment) => [newComment, ...current]
  );
  
  // Update comments when action succeeds
  useEffect(() => {
    if (state.comments) {
      setComments(state.comments);
    }
  }, [state.comments]);
  
  async function handleSubmit(formData: FormData) {
    const text = formData.get('text') as string;
    
    // Optimistic update
    const tempComment: Comment = {
      id: \`temp-\${Date.now()}\`,
      text,
      author: currentUser,
      createdAt: new Date(),
    };
    addOptimistic(tempComment);
    
    // Submit with action
    await formAction(formData);
    
    // State updates automatically via useEffect
  }
  
  return (
    <div>
      {optimisticComments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
      <form action={handleSubmit}>
        <textarea name="text" disabled={pending} />
        <button type="submit" disabled={pending}>
          {pending ? 'Posting...' : 'Post Comment'}
        </button>
      </form>
    </div>
  );
}

// Server action
'use server';

export async function addComment(
  prevState: { comments: Comment[] },
  formData: FormData
) {
  const text = formData.get('text') as string;
  
  if (!text || text.trim().length === 0) {
    return {
      ...prevState,
      error: 'Comment cannot be empty',
    };
  }
  
  const comment = await createComment({
    text,
    postId: formData.get('postId'),
  });
  
  return {
    comments: [comment, ...prevState.comments],
  };
}`,
            explanation: "Combining useActionState with useOptimistic provides instant feedback while maintaining server-side validation. Users see immediate updates, and errors are handled gracefully."
          }
        },
        {
          title: "Lesson 5: Migration from useFormState",
          content: "useActionState replaces useFormState in React 19. Here's how to migrate.\n\nKey Changes:\n• Renamed: useFormState → useActionState\n• Same API\n• Better TypeScript support\n• Improved performance\n\nMigration Steps:\n1. Update imports\n2. Rename hook usage\n3. Test thoroughly\n4. Update documentation",
          codeExample: {
            code: `// Before (React 18 - useFormState)
import { useFormState } from 'react-dom';

function Form() {
  const [state, formAction] = useFormState(submitForm, initialState);
  // ...
}

// After (React 19 - useActionState)
import { useActionState } from 'react';

function Form() {
  const [state, formAction, pending] = useActionState(
    submitForm,
    initialState
  );
  // pending is now available!
  // ...
}

// Migration checklist:
// ✅ Rename import
// ✅ Rename hook
// ✅ Add pending state usage (optional but recommended)
// ✅ Update TypeScript types if needed
// ✅ Test all forms

// Example migration
// OLD
const [state, formAction] = useFormState(submitForm, {});

// NEW
const [state, formAction, pending] = useActionState(submitForm, {});

// You can now use pending
<button disabled={pending || state.loading}>
  {pending ? 'Submitting...' : 'Submit'}
</button>`,
            explanation: "Migration is straightforward - just rename the hook. The API is identical, and you gain access to the pending state for better UX."
          }
        }
      ],
      conclusion: "useActionState simplifies form handling with server actions. It provides built-in state management, pending status, and seamless integration with Next.js. Combine with useOptimistic for the best user experience. Always validate on the server for security."
    }
  },
  {
    id: "expert-7",
    title: "React 19: The use Hook - Reading Promises and Context",
    description: "Master the use hook to handle promises and context values directly in render functions with Suspense support.",
    level: "expert",
    estimatedTime: "65 min",
    topics: ["use Hook", "Promises", "Suspense", "Context", "Async Rendering"],
    prerequisites: ["React 19: Server Actions and useActionState"],
    content: {
      overview: "The use hook is React 19's powerful new hook for reading promises and context values. It enables direct promise handling in components, automatically suspending until promises resolve. This simplifies data fetching patterns and works seamlessly with Suspense boundaries. This tutorial covers promise handling, context reading, error boundaries, and integration with data fetching libraries.",
      sections: [
        {
          title: "Lesson 1: Understanding the use Hook",
          content: "The use hook can read two types of resources: promises and context.\n\nWhat use Can Read:\n• Promises - automatically suspends until resolved\n• Context - reads context values (including conditional reading)\n\nKey Features:\n• Automatic Suspense integration\n• Promise unwrapping\n• Context reading (including conditional)\n• Error boundary integration\n\nWhen to Use:\n• Data fetching with promises\n• Reading context conditionally\n• Simplifying async component logic\n• Working with Suspense\n\nWhen NOT to Use:\n• Simple synchronous operations\n• Non-promise async operations (use useEffect)\n• Non-context values",
          codeExample: {
            code: `// Basic promise reading
import { use } from 'react';

function UserProfile({ userPromise }: { userPromise: Promise<User> }) {
  // use unwraps the promise and suspends until it resolves
  const user = use(userPromise);
  
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}

// Usage with Suspense
function App() {
  const userPromise = fetchUser(userId);
  
  return (
    <Suspense fallback={<UserSkeleton />}>
      <UserProfile userPromise={userPromise} />
    </Suspense>
  );
}

// Context reading
import { createContext, use } from 'react';

const ThemeContext = createContext<'light' | 'dark' | undefined>(undefined);

function ThemedButton() {
  // Conditional context reading - won't error if context not provided
  const theme = use(ThemeContext);
  
  // theme is 'light' | 'dark' | undefined
  return (
    <button className={theme === 'dark' ? 'dark' : 'light'}>
      Themed Button
    </button>
  );
}

// use vs useContext
// useContext: Requires context to be provided, throws if not
// use: Can read conditionally, returns undefined if not provided`,
            explanation: "The use hook simplifies async rendering by unwrapping promises automatically and suspending until they resolve. It also enables conditional context reading."
          }
        },
        {
          title: "Lesson 2: Reading Promises with use",
          content: "The use hook's primary use case is reading promises in components.\n\nPromise Reading Pattern:\n1. Pass promise as prop or create it\n2. Call use(promise) in component\n3. Component suspends until promise resolves\n4. Render with resolved value\n\nImportant Rules:\n• Promise should be stable (use useMemo or stable reference)\n• Wrap component in Suspense boundary\n• Handle errors with Error Boundaries\n• Use with data fetching libraries",
          codeExample: {
            code: `// Basic promise reading
function DataComponent({ dataPromise }: { dataPromise: Promise<Data> }) {
  const data = use(dataPromise);
  
  return <div>{data.content}</div>;
}

// Stable promise reference
function PostList({ postIds }: { postIds: number[] }) {
  // Memoize promise to prevent re-creation
  const postsPromise = useMemo(
    () => fetchPosts(postIds),
    [postIds]
  );
  
  const posts = use(postsPromise);
  
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

// Multiple promises
function Dashboard({ 
  userPromise, 
  postsPromise 
}: { 
  userPromise: Promise<User>;
  postsPromise: Promise<Post[]>;
}) {
  const user = use(userPromise);
  const posts = use(postsPromise);
  
  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <PostList posts={posts} />
    </div>
  );
}

// Error handling with Error Boundaries
function PostContent({ postPromise }: { postPromise: Promise<Post> }) {
  try {
    const post = use(postPromise);
    return <article>{post.content}</article>;
  } catch (error) {
    // Errors are thrown to nearest Error Boundary
    // Can also handle locally
    if (error instanceof Error) {
      return <div>Error: {error.message}</div>;
    }
    throw error; // Re-throw to Error Boundary
  }
}

// Integration with data fetching libraries
// React Query example
function useQueryData<T>(queryKey: string) {
  const queryClient = useQueryClient();
  const query = queryClient.getQueryState(queryKey);
  
  if (!query) {
    throw queryClient.fetchQuery(queryKey);
  }
  
  return use(query.dataPromise);
}

// SWR example
function useSWRData<T>(key: string) {
  const { data } = useSWR(key, fetcher);
  
  if (!data) {
    throw new Promise(resolve => {
      // Wait for SWR to resolve
      const unwatch = watch(() => {
        if (data) {
          unwatch();
          resolve(data);
        }
      });
    });
  }
  
  return data;
}`,
            explanation: "use automatically suspends components until promises resolve. Keep promises stable with useMemo, wrap in Suspense boundaries, and handle errors with Error Boundaries."
          }
        },
        {
          title: "Lesson 3: Reading Context with use",
          content: "use can also read context values, including conditional reading.\n\nContext Reading:\n• Similar to useContext\n• Can read conditionally\n• Returns undefined if context not provided\n• No error if context missing\n\nUse Cases:\n• Conditional context reading\n• Optional context values\n• Avoiding context provider requirements\n\nComparison with useContext:\n• useContext: Required, throws if missing\n• use: Optional, returns undefined if missing",
          codeExample: {
            code: `// Conditional context reading
import { createContext, use } from 'react';

const FeatureFlagsContext = createContext<Record<string, boolean> | undefined>(
  undefined
);

function FeatureComponent({ feature }: { feature: string }) {
  // Won't error if context not provided
  const flags = use(FeatureFlagsContext);
  
  if (!flags || !flags[feature]) {
    return null; // Feature disabled
  }
  
  return <div>Feature enabled!</div>;
}

// Usage - context is optional
function App() {
  // Works even without FeatureFlagsProvider
  return <FeatureComponent feature="newUI" />;
}

// With provider
function AppWithFlags() {
  return (
    <FeatureFlagsContext.Provider value={{ newUI: true }}>
      <FeatureComponent feature="newUI" />
    </FeatureFlagsContext.Provider>
  );
}

// Multiple context reading
const ThemeContext = createContext<'light' | 'dark' | undefined>(undefined);
const LanguageContext = createContext<'en' | 'es' | undefined>(undefined);

function ThemedComponent() {
  const theme = use(ThemeContext);
  const language = use(LanguageContext);
  
  // Both are optional
  const className = theme === 'dark' ? 'dark' : 'light';
  const text = language === 'es' ? 'Hola' : 'Hello';
  
  return <div className={className}>{text}</div>;
}

// vs useContext (required)
function RequiredContextComponent() {
  // Throws if context not provided
  const theme = useContext(ThemeContext); // Error if no provider!
  
  return <div className={theme}>Content</div>;
}

// use is safer for optional contexts
function OptionalContextComponent() {
  const theme = use(ThemeContext); // Safe, returns undefined if no provider
  
  return <div className={theme || 'light'}>Content</div>;
}`,
            explanation: "use enables optional context reading, returning undefined if context isn't provided. This is safer than useContext for optional features."
          }
        },
        {
          title: "Lesson 4: Suspense Integration",
          content: "use works seamlessly with Suspense boundaries.\n\nSuspense Behavior:\n• Component suspends when promise pending\n• Shows fallback from Suspense boundary\n• Resumes when promise resolves\n• Handles errors with Error Boundaries\n\nBest Practices:\n• Always wrap use(promise) in Suspense\n• Provide meaningful fallbacks\n• Use nested Suspense for granular loading\n• Handle errors properly",
          codeExample: {
            code: `// Basic Suspense integration
function App() {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <UserProfile userPromise={fetchUser()} />
    </Suspense>
  );
}

// Nested Suspense boundaries
function Dashboard() {
  return (
    <div>
      <Suspense fallback={<HeaderSkeleton />}>
        <UserHeader userPromise={fetchUser()} />
      </Suspense>
      
      <Suspense fallback={<PostsSkeleton />}>
        <PostsList postsPromise={fetchPosts()} />
      </Suspense>
      
      <Suspense fallback={<StatsSkeleton />}>
        <Stats statsPromise={fetchStats()} />
      </Suspense>
    </div>
  );
}

// Error boundaries
function AppWithErrorHandling() {
  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      <Suspense fallback={<Loading />}>
        <DataComponent dataPromise={fetchData()} />
      </Suspense>
    </ErrorBoundary>
  );
}

// Parallel data fetching
function ProfilePage({ userId }: { userId: number }) {
  // These promises can resolve independently
  const userPromise = fetchUser(userId);
  const postsPromise = fetchUserPosts(userId);
  const followersPromise = fetchFollowers(userId);
  
  return (
    <Suspense fallback={<ProfileSkeleton />}>
      <UserProfile userPromise={userPromise} />
      <Suspense fallback={<PostsSkeleton />}>
        <PostsList postsPromise={postsPromise} />
      </Suspense>
      <Suspense fallback={<FollowersSkeleton />}>
        <FollowersList followersPromise={followersPromise} />
      </Suspense>
    </Suspense>
  );
}

// Streaming with Suspense
function StreamingPage() {
  return (
    <div>
      {/* Renders immediately */}
      <Header />
      
      {/* Suspends, streams when ready */}
      <Suspense fallback={<ContentSkeleton />}>
        <MainContent contentPromise={fetchContent()} />
      </Suspense>
      
      {/* Suspends, streams when ready */}
      <Suspense fallback={<SidebarSkeleton />}>
        <Sidebar sidebarPromise={fetchSidebar()} />
      </Suspense>
    </div>
  );
}`,
            explanation: "Suspense boundaries control loading states for use hooks. Use nested boundaries for granular loading, and always include Error Boundaries for error handling."
          }
        },
        {
          title: "Lesson 5: Real-World Patterns",
          content: "Explore practical patterns using the use hook in production applications.\n\nCommon Patterns:\n• Data fetching in components\n• Conditional data loading\n• Parallel data fetching\n• Error handling\n• Loading states\n• Integration with data libraries",
          codeExample: {
            code: `// Real-world patterns

// 1. Server Components with use
// app/user/[id]/page.tsx (Next.js)
async function UserPage({ params }: { params: { id: string } }) {
  const userPromise = fetchUser(params.id);
  const postsPromise = fetchUserPosts(params.id);
  
  return (
    <div>
      <Suspense fallback={<UserSkeleton />}>
        <UserProfile userPromise={userPromise} />
      </Suspense>
      <Suspense fallback={<PostsSkeleton />}>
        <PostsList postsPromise={postsPromise} />
      </Suspense>
    </div>
  );
}

// 2. Conditional data fetching
function ConditionalData({ shouldFetch, id }: { 
  shouldFetch: boolean;
  id: number;
}) {
  const dataPromise = useMemo(
    () => (shouldFetch ? fetchData(id) : null),
    [shouldFetch, id]
  );
  
  if (!dataPromise) {
    return <div>Data not needed</div>;
  }
  
  return (
    <Suspense fallback={<Loading />}>
      <DataComponent dataPromise={dataPromise} />
    </Suspense>
  );
}

// 3. Cache promises for reuse
const promiseCache = new Map<string, Promise<any>>();

function getCachedPromise<T>(
  key: string,
  fetcher: () => Promise<T>
): Promise<T> {
  if (!promiseCache.has(key)) {
    promiseCache.set(key, fetcher());
  }
  return promiseCache.get(key)!;
}

function CachedComponent({ id }: { id: string }) {
  const dataPromise = useMemo(
    () => getCachedPromise(\`data-\${id}\`, () => fetchData(id)),
    [id]
  );
  
  const data = use(dataPromise);
  return <div>{data.content}</div>;
}

// 4. Retry pattern
function useRetryablePromise<T>(
  key: string,
  fetcher: () => Promise<T>,
  retries = 3
) {
  const [attempt, setAttempt] = useState(0);
  
  const promise = useMemo(() => {
    return fetcher().catch(error => {
      if (attempt < retries) {
        setAttempt(a => a + 1);
        throw error; // Will retry
      }
      throw error;
    });
  }, [key, attempt, retries]);
  
  return promise;
}

// 5. Parallel independent loading
function Dashboard() {
  const userPromise = useMemo(() => fetchUser(), []);
  const notificationsPromise = useMemo(() => fetchNotifications(), []);
  const statsPromise = useMemo(() => fetchStats(), []);
  
  return (
    <>
      <Suspense fallback={<UserSkeleton />}>
        <UserWidget userPromise={userPromise} />
      </Suspense>
      <Suspense fallback={<NotificationsSkeleton />}>
        <NotificationsWidget promise={notificationsPromise} />
      </Suspense>
      <Suspense fallback={<StatsSkeleton />}>
        <StatsWidget promise={statsPromise} />
      </Suspense>
    </>
  );
}`,
            explanation: "Real-world patterns include caching promises, conditional fetching, retry logic, and parallel data loading. The use hook simplifies these patterns significantly."
          }
        }
      ],
      conclusion: "The use hook revolutionizes async data handling in React. It simplifies promise-based data fetching, enables conditional context reading, and works seamlessly with Suspense. Use it for cleaner, more declarative async components. Remember to wrap in Suspense boundaries and handle errors with Error Boundaries."
    }
  },
  {
    id: "expert-8",
    title: "React 19: useFormStatus for Form State Access",
    description: "Learn to use useFormStatus to access form submission status from child components without prop drilling.",
    level: "expert",
    estimatedTime: "50 min",
    topics: ["useFormStatus", "Form State", "Prop Drilling", "Server Actions"],
    prerequisites: ["React 19: The use Hook - Reading Promises and Context"],
    content: {
      overview: "useFormStatus is React 19's hook for accessing form submission status from child components. It eliminates the need to pass pending state through props, enabling better component composition. This tutorial covers when and how to use useFormStatus effectively, its limitations, and best practices for form state management.",
      sections: [
        {
          title: "Lesson 1: Understanding useFormStatus",
          content: "useFormStatus provides access to the nearest form's submission status.\n\nKey Features:\n• Accesses form status automatically\n• No prop drilling needed\n• Works with Server Actions\n• Must be used inside a form\n\nLimitations:\n• Only works inside <form> elements\n• Requires Server Action or form action\n• Cannot be used outside form context\n\nWhen to Use:\n• Submit buttons in forms\n• Form validation messages\n• Loading indicators\n• Avoiding prop drilling\n\nWhen NOT to Use:\n• Outside form elements\n• Simple controlled forms\n• When prop passing is clear",
          codeExample: {
            code: `// Basic usage
import { useFormStatus } from 'react-dom';

function SubmitButton() {
  const { pending, data, method, action } = useFormStatus();
  
  return (
    <button type="submit" disabled={pending}>
      {pending ? 'Submitting...' : 'Submit'}
    </button>
  );
}

function Form() {
  return (
    <form action={serverAction}>
      <input name="email" />
      <SubmitButton /> {/* Automatically knows form status */}
    </form>
  );
}

// Without useFormStatus (prop drilling)
function FormWithoutHook() {
  const [pending, setPending] = useState(false);
  
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setPending(true);
    await serverAction(new FormData(e.currentTarget));
    setPending(false);
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input name="email" />
      <SubmitButton pending={pending} /> {/* Must pass prop */}
    </form>
  );
}

// With useFormStatus (no props needed)
function FormWithHook() {
  return (
    <form action={serverAction}>
      <input name="email" />
      <SubmitButton /> {/* No props! */}
    </form>
  );
}`,
            explanation: "useFormStatus eliminates prop drilling by automatically detecting form submission status. The component must be inside a form element that uses a Server Action."
          }
        },
        {
          title: "Lesson 2: useFormStatus API",
          content: "useFormStatus returns an object with form submission information.\n\nReturned Properties:\n• pending: Boolean - true when form is submitting\n• data: FormData - current form data being submitted\n• method: 'get' | 'post' - HTTP method\n• action: string | Function - form action\n\nHook Location:\n• Must be inside a <form> element\n• Can be deeply nested\n• Accesses nearest parent form\n• Throws error if used outside form",
          codeExample: {
            code: `import { useFormStatus } from 'react-dom';

function FormStatusDisplay() {
  const { pending, data, method, action } = useFormStatus();
  
  return (
    <div>
      {pending && (
        <div>
          <p>Submitting form...</p>
          {data && (
            <p>Email: {data.get('email')}</p>
          )}
          <p>Method: {method}</p>
        </div>
      )}
    </div>
  );
}

function ComplexForm() {
  return (
    <form action={serverAction} method="post">
      <div>
        <label>Email</label>
        <input name="email" type="email" />
      </div>
      
      <div>
        <label>Message</label>
        <textarea name="message" />
      </div>
      
      {/* Deeply nested, still works */}
      <div>
        <div>
          <FormStatusDisplay /> {/* Accesses parent form */}
          <SubmitButton />
        </div>
      </div>
    </form>
  );
}

// Accessing form data
function FormDataDisplay() {
  const { pending, data } = useFormStatus();
  
  if (!pending || !data) {
    return null;
  }
  
  return (
    <div className="form-data-preview">
      <p>Submitting:</p>
      <ul>
        {Array.from(data.entries()).map(([key, value]) => (
          <li key={key}>
            {key}: {String(value)}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Error handling
function SafeFormStatus() {
  try {
    const { pending } = useFormStatus();
    return pending ? <Spinner /> : null;
  } catch (error) {
    // Not inside a form
    return null;
  }
}`,
            explanation: "useFormStatus provides pending status, form data, method, and action. Use these properties to create dynamic form UI that responds to submission state."
          }
        },
        {
          title: "Lesson 3: Practical Use Cases",
          content: "Explore real-world use cases for useFormStatus.\n\nCommon Patterns:\n• Submit buttons with loading states\n• Form validation messages\n• Progress indicators\n• Disabled inputs during submission\n• Success/error messages\n\nBest Practices:\n• Use in submit buttons\n• Disable inputs during submission\n• Show loading indicators\n• Provide user feedback\n• Handle errors gracefully",
          codeExample: {
            code: `// 1. Submit button with loading
function SubmitButton({ children }: { children: React.ReactNode }) {
  const { pending } = useFormStatus();
  
  return (
    <button type="submit" disabled={pending}>
      {pending ? (
        <>
          <Spinner />
          Submitting...
        </>
      ) : (
        children
      )}
    </button>
  );
}

// 2. Disable inputs during submission
function FormInput({ name, ...props }: InputProps) {
  const { pending } = useFormStatus();
  
  return (
    <input
      name={name}
      disabled={pending}
      aria-disabled={pending}
      {...props}
    />
  );
}

// 3. Form-wide loading overlay
function FormOverlay() {
  const { pending } = useFormStatus();
  
  if (!pending) return null;
  
  return (
    <div className="form-overlay">
      <Spinner />
      <p>Submitting form...</p>
    </div>
  );
}

// 4. Character counter with submission state
function TextAreaWithCounter({ 
  name, 
  maxLength 
}: { 
  name: string;
  maxLength: number;
}) {
  const { pending, data } = useFormStatus();
  const currentValue = data?.get(name)?.toString() || '';
  const remaining = maxLength - currentValue.length;
  
  return (
    <div>
      <textarea
        name={name}
        maxLength={maxLength}
        disabled={pending}
      />
      <span className={remaining < 10 ? 'warning' : ''}>
        {remaining} characters remaining
      </span>
      {pending && <span className="submitting">Saving...</span>}
    </div>
  );
}

// 5. Complete form example
function ContactForm() {
  return (
    <form action={submitContactForm}>
      <FormOverlay />
      
      <div>
        <label>Name</label>
        <FormInput name="name" required />
      </div>
      
      <div>
        <label>Email</label>
        <FormInput name="email" type="email" required />
      </div>
      
      <div>
        <label>Message</label>
        <TextAreaWithCounter name="message" maxLength={500} />
      </div>
      
      <SubmitButton>Send Message</SubmitButton>
      
      <FormStatusDisplay />
    </form>
  );
}

// 6. Multi-step form with status
function MultiStepForm() {
  const [step, setStep] = useState(1);
  const { pending } = useFormStatus();
  
  return (
    <form action={handleSubmit}>
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      {step === 3 && <Step3 />}
      
      <div className="form-actions">
        {step > 1 && (
          <button
            type="button"
            onClick={() => setStep(s => s - 1)}
            disabled={pending}
          >
            Back
          </button>
        )}
        <SubmitButton>
          {step < 3 ? 'Next' : 'Submit'}
        </SubmitButton>
      </div>
      
      {pending && <ProgressBar />}
    </form>
  );
}`,
            explanation: "Common use cases include submit buttons, input disabling, loading indicators, and form-wide overlays. useFormStatus simplifies all of these patterns."
          }
        },
        {
          title: "Lesson 4: Combining with useActionState",
          content: "useFormStatus works seamlessly with useActionState for complete form state management.\n\nCombination Pattern:\n• useActionState: Form state and action\n• useFormStatus: Access pending from children\n• Result: Clean, composable forms\n\nBenefits:\n• No prop drilling\n• Better component composition\n• Automatic status detection\n• Type-safe form handling",
          codeExample: {
            code: `// Complete form with useActionState + useFormStatus
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';

function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContact,
    { message: '', error: '' }
  );
  
  return (
    <form action={formAction}>
      <FormInput name="name" />
      <FormInput name="email" type="email" />
      
      {state.error && (
        <ErrorMessage>{state.error}</ErrorMessage>
      )}
      
      {state.message && (
        <SuccessMessage>{state.message}</SuccessMessage>
      )}
      
      {/* Child component automatically knows form status */}
      <SubmitButton>Submit</SubmitButton>
      
      {/* Can also use pending from useActionState */}
      {pending && <FormOverlay />}
    </form>
  );
}

// SubmitButton uses useFormStatus (no props needed)
function SubmitButton({ children }: { children: React.ReactNode }) {
  const { pending } = useFormStatus();
  
  return (
    <button type="submit" disabled={pending}>
      {pending ? 'Submitting...' : children}
    </button>
  );
}

// FormInput also uses useFormStatus
function FormInput(props: InputProps) {
  const { pending } = useFormStatus();
  
  return (
    <input
      {...props}
      disabled={pending || props.disabled}
    />
  );
}

// Benefits:
// - No need to pass pending to every child
// - Components are reusable
// - Cleaner component tree
// - Automatic status synchronization`,
            explanation: "Combining useActionState with useFormStatus provides complete form state management without prop drilling. Child components automatically access form status."
          }
        },
        {
          title: "Lesson 5: Limitations and Workarounds",
          content: "Understand useFormStatus limitations and how to work around them.\n\nLimitations:\n• Must be inside <form> element\n• Requires Server Action\n• Cannot access form state outside form\n• No access to validation state\n\nWorkarounds:\n• Use useActionState for form state\n• Combine with other hooks\n• Use Error Boundaries for errors\n• Create wrapper components",
          codeExample: {
            code: `// Limitation: Must be inside form
// ❌ This won't work
function App() {
  return (
    <div>
      <Form />
      <FormStatus /> {/* Error: Not inside form */}
    </div>
  );
}

// ✅ Workaround: Move inside form
function App() {
  return (
    <Form>
      <FormStatus /> {/* Works */}
    </Form>
  );
}

// Limitation: Only works with Server Actions
// ❌ Won't work with regular form handlers
function Form() {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Regular form handler
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <SubmitButton /> {/* useFormStatus won't work */}
    </form>
  );
}

// ✅ Use Server Actions instead
'use server';
async function submitForm(formData: FormData) {
  // Server action
}

function Form() {
  return (
    <form action={submitForm}>
      <SubmitButton /> {/* Works with useFormStatus */}
    </form>
  );
}

// Accessing form state outside form
function FormWrapper() {
  const [state, formAction, pending] = useActionState(submitForm, {});
  
  return (
    <div>
      <Form formAction={formAction} />
      {/* Can access state here */}
      {state.error && <ErrorMessage>{state.error}</ErrorMessage>}
    </div>
  );
}

// Combining multiple hooks
function AdvancedForm() {
  const [state, formAction] = useActionState(submitForm, {});
  const [optimisticState, addOptimistic] = useOptimistic(state, updateFn);
  
  return (
    <form action={formAction}>
      {/* useFormStatus works here */}
      <SubmitButton />
      
      {/* Can also use state from useActionState */}
      {state.error && <ErrorDisplay error={state.error} />}
    </form>
  );
}`,
            explanation: "Understand useFormStatus limitations. It requires a form element and Server Action. For complex scenarios, combine with useActionState or other hooks."
          }
        }
      ],
      conclusion: "useFormStatus eliminates prop drilling for form submission status. It enables better component composition and cleaner code. Always use it inside form elements with Server Actions. Combine with useActionState for complete form state management."
    }
  },
  
  // STAFF ENGINEER LEVEL
  {
    id: "staff-1",
    title: "React Internals: How React Works Under the Hood",
    description: "Deep dive into React's internal architecture, reconciliation algorithm, fiber architecture, and rendering pipeline.",
    level: "staff",
    estimatedTime: "180 min",
    topics: ["Fiber Architecture", "Reconciliation", "Render Phase", "Commit Phase", "Scheduler"],
    prerequisites: ["Advanced State Management Patterns"],
    content: {
      overview: "Understanding React's internals helps you write better code, debug issues, and make informed architectural decisions. This knowledge is essential for Staff-level engineers who need to optimize performance, debug complex issues, and make system-level decisions. In this tutorial, we'll explore React's fiber architecture, the reconciliation process, rendering phases, and how React schedules and prioritizes work.",
      sections: [
        {
          title: "Lesson 1: Understanding the Fiber Architecture",
          content: "React 16 introduced the Fiber architecture, a complete rewrite of React's core algorithm. Understanding fibers is crucial for understanding how React works.\n\nWhat is a Fiber?\nA fiber is a JavaScript object that represents a unit of work. In React's virtual DOM, each component instance and DOM node corresponds to a fiber object.\n\nKey Properties of a Fiber:\n• type: The component type (function, class, or DOM element type)\n• key: Unique identifier for reconciliation\n• stateNode: Reference to the actual DOM node or component instance\n• child: First child fiber\n• sibling: Next sibling fiber\n• return: Parent fiber\n• alternate: Reference to the previous version of this fiber (for diffing)\n• effectTag: What needs to be done with this fiber (place, update, delete)\n• expirationTime: Priority level for this work\n\nFiber Structure:\nThe fiber tree mirrors the component tree, but React builds a linked list structure for efficient traversal.",
          codeExample: {
            code: `// Simplified fiber structure
interface Fiber {
  // Identity
  type: Function | string | Class;
  key: string | null;
  stateNode: any;
  
  // Tree structure
  child: Fiber | null;
  sibling: Fiber | null;
  return: Fiber | null;
  
  // Work
  alternate: Fiber | null;
  effectTag: number;
  expirationTime: number;
  updateQueue: any;
  
  // Hook state (for function components)
  memoizedState: any;
  memoizedProps: any;
}

// Example: When you have this component tree:
function App() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

// React creates a fiber tree like:
// App (fiber)
//   - child: div (fiber)
//     - child: Header (fiber)
//     - sibling: Main (fiber)
//       - return: div (fiber)
//         - return: App (fiber)`,
            explanation: "Each component and DOM element becomes a fiber. The tree structure allows React to traverse and update efficiently. The alternate property links to the previous version for comparison during reconciliation."
          }
        },
        {
          title: "Lesson 2: How React Traverses the Fiber Tree",
          content: "React doesn't use recursion for traversal. Instead, it uses an iterative approach with a linked list structure that allows it to pause, resume, and prioritize work.\n\nTraversal Process:\n1. Begin at the root fiber\n2. Visit the current fiber (work on it)\n3. Move to child if exists\n4. If no child, move to sibling\n5. If no sibling, return to parent\n6. Continue until all fibers are processed\n\nThis iterative approach enables concurrent rendering - React can pause traversal, handle urgent updates, then resume."
        },
        {
          title: "Lesson 3: The Reconciliation Algorithm Step-by-Step",
          content: "Reconciliation is React's diffing algorithm - comparing the new virtual DOM with the previous one to determine minimal changes.\n\nStep-by-Step Reconciliation Process:\n\nStep 1: Element Type Comparison\nReact first compares the element type at the root:\n• Same type: Update props and continue diffing children\n• Different type: Tear down old tree, build new tree\n• Function vs Class: Treated as different types even if render same output\n\nStep 2: Props Diffing\nIf types match, React compares props:\n• Old props vs new props\n• Identifies changed props\n• Prepares update operations\n\nStep 3: Recursive Children Diffing\nFor each child:\n• Use keys to match old and new children\n• Compare matched children\n• Handle additions, removals, reordering\n\nStep 4: Generate Effect List\nReact builds a list of effects (changes) to apply:\n• PLACEMENT: New nodes to insert\n• UPDATE: Existing nodes to modify\n• DELETION: Nodes to remove",
          codeExample: {
            code: `// Example: Reconciliation scenario

// Before (previous render)
<div>
  <Header />
  <Main />
</div>

// After (current render)
<div>
  <Header />
  <Sidebar />
  <Main />
</div>

// Reconciliation process:

// 1. Compare root <div>: Same type, continue
// 2. Compare children:
//    - Header: Same type, same key (if any), update props if changed
//    - Sidebar: NEW (no matching child), mark for PLACEMENT
//    - Main: Same type, but position changed, mark for UPDATE/MOVE

// Effect list generated:
// [PLACEMENT: Sidebar, UPDATE: Main (position changed)]

// React then commits these changes efficiently`,
            explanation: "React uses keys to efficiently match old and new children. Without keys, React might unnecessarily recreate components. With keys, React can track moves and reuses components when possible."
          }
        },
        {
          title: "Lesson 4: Understanding Keys in Reconciliation",
          content: "Keys are crucial for React's reconciliation efficiency. Let's understand why with a detailed example.\n\nWhy Keys Matter:\n• Help React identify which items changed\n• Enable React to reuse components when items move\n• Prevent unnecessary recreations\n• Improve performance significantly\n\nKey Rules:\n• Must be unique among siblings\n• Should be stable (don't use array indices if items can reorder)\n• Should be predictable (not random)\n\nCommon Mistakes:\n• Using array index when items can reorder\n• Using random values\n• Using non-unique keys",
          codeExample: {
            code: `// ❌ BAD: Using index as key when items can reorder
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} />
      ))}
    </ul>
  );
}

// Problem: If todos reorder, React thinks items changed
// React will recreate components instead of moving them

// ✅ GOOD: Using stable, unique IDs
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

// React can now:
// 1. Match old and new items by key
// 2. Reuse component instances when items move
// 3. Only update props if data changed
// 4. Efficiently handle additions/removals

// When items reorder:
// Before: [A(id:1), B(id:2), C(id:3)]
// After:  [C(id:3), A(id:1), B(id:2)]

// With keys, React knows:
// - C moved from position 2 to 0 (move, don't recreate)
// - A moved from 0 to 1 (move, don't recreate)
// - B moved from 1 to 2 (move, don't recreate)

// Without keys (using index), React would think:
// - Item at 0 changed from A to C (recreate)
// - Item at 1 changed from B to A (recreate)
// - Item at 2 changed from C to B (recreate)
// All components get destroyed and recreated!`,
            explanation: "Keys enable React to efficiently track which items moved, were added, or removed. Without proper keys, React will unnecessarily recreate components, losing state and causing performance issues."
          }
        },
        {
          title: "Lesson 5: The Two-Phase Rendering Model",
          content: "React 16+ splits rendering into two distinct phases, enabling concurrent rendering capabilities.\n\nPhase 1: Render Phase (Can be Interrupted)\n• Pure computation - no side effects\n• Can be paused, aborted, or restarted\n• Builds the fiber tree\n• Determines what needs to change\n• Can be interrupted for higher priority work\n• Can be time-sliced across multiple frames\n\nPhase 2: Commit Phase (Synchronous)\n• Applies changes to DOM\n• Runs synchronously to prevent visual inconsistencies\n• Runs lifecycle methods\n• Runs effects (useEffect callbacks)\n• Cannot be interrupted\n• Happens in one batch",
          codeExample: {
            code: `// Understanding the phases with code:

function Component() {
  const [count, setCount] = useState(0);
  
  // This runs during RENDER PHASE
  console.log('Render phase - can be interrupted');
  
  useEffect(() => {
    // This runs during COMMIT PHASE
    console.log('Commit phase - runs after DOM updates');
  });
  
  return <div>{count}</div>;
}

// React's internal process:

// RENDER PHASE (interruptible)
// 1. React calls Component()
// 2. Component returns JSX
// 3. React creates/updates fiber tree
// 4. React identifies changes needed
//    - If urgent update arrives, can pause here
// 5. React completes render phase

// COMMIT PHASE (synchronous)
// 1. React applies all DOM updates
// 2. React calls componentDidMount/Update (class components)
// 3. React runs useEffect callbacks
// 4. User sees updates

// Why this matters:
// - Render phase can be time-sliced across frames
// - High priority updates can interrupt low priority work
// - Commit phase ensures UI consistency`,
            explanation: "The separation of phases enables React's concurrent features. The render phase can be interrupted for urgent updates, while the commit phase ensures all DOM updates happen atomically."
          }
        },
        {
          title: "Lesson 6: Work Priority and Time Slicing",
          content: "React uses expiration times to prioritize work. Higher priority work can interrupt lower priority work.\n\nPriority Levels:\n• Immediate: User input, blocking transitions\n• High: Hover effects, urgent animations\n• Normal: Regular updates, data fetching results\n• Low: Offscreen updates, prefetching\n• Never: Background work\n\nTime Slicing:\nReact breaks work into small units and can pause between units to check for higher priority work. This keeps the UI responsive even during heavy renders.",
          codeExample: {
            code: `// Example: Priority interruption

// Low priority work starts
React starts rendering a large list (1000 items)

// After rendering 100 items, user clicks a button

// React:
// 1. Pauses the list rendering
// 2. Processes the button click (high priority)
// 3. Updates the button immediately
// 4. Resumes list rendering when possible

// Without time slicing:
// - Button click waits for list to finish
// - UI feels unresponsive
// - Poor user experience

// With time slicing:
// - Button responds immediately
// - List continues in background
// - Smooth, responsive UI

// Using useTransition for non-urgent updates
import { useTransition } from 'react';

function SearchResults({ query }) {
  const [isPending, startTransition] = useTransition();
  
  const handleInput = (e) => {
    // Urgent: Update input immediately
    setInputValue(e.target.value);
    
    // Non-urgent: Search results can be interrupted
    startTransition(() => {
      setSearchResults(search(e.target.value));
    });
  };
  
  return (
    <div>
      <input 
        value={inputValue} 
        onChange={handleInput}
      />
      {isPending && <Spinner />}
      <ResultsList results={searchResults} />
    </div>
  );
}`,
            explanation: "Time slicing allows React to keep the UI responsive by breaking work into chunks and prioritizing user interactions. useTransition lets you mark updates as non-urgent so they don't block urgent updates."
          }
        },
        {
          title: "Lesson 7: The Commit Phase Deep Dive",
          content: "The commit phase happens synchronously and applies all changes to the DOM.\n\nCommit Phase Steps:\n\n1. Before Mutation:\n   - Call getSnapshotBeforeUpdate (class components)\n   - Store snapshot values\n\n2. Mutation:\n   - Apply DOM updates\n   - Call componentWillUnmount (class components)\n   - Handle refs\n\n3. Layout:\n   - Call componentDidMount/Update (class components)\n   - Run useLayoutEffect callbacks\n   - Read layout properties if needed\n\n4. Effect:\n   - Run useEffect callbacks\n   - Schedule passive effects",
          codeExample: {
            code: `// Commit phase execution order

function Component() {
  const ref = useRef(null);
  
  useEffect(() => {
    // Phase 4: Effect
    console.log('useEffect runs here - after DOM updates');
  });
  
  useLayoutEffect(() => {
    // Phase 3: Layout
    console.log('useLayoutEffect runs here - synchronous, before paint');
    // Can read layout and synchronously update
    if (ref.current) {
      ref.current.style.width = '100px';
    }
  });
  
  return <div ref={ref}>Content</div>;
}

// Execution order:
// 1. Mutation: DOM updates applied
// 2. Layout: useLayoutEffect runs (synchronous)
// 3. Browser paints
// 4. Effect: useEffect runs (after paint)

// Why this matters:
// - useLayoutEffect: Need to read/write layout synchronously
// - useEffect: Side effects that don't need to block paint`,
            explanation: "Understanding the commit phase order helps you choose between useEffect and useLayoutEffect. Layout effects run synchronously before paint, while regular effects run asynchronously after paint."
          }
        },
        {
          title: "Lesson 8: Debugging with React Internals Knowledge",
          content: "Understanding React's internals helps you debug complex issues.\n\nDebugging Techniques:\n• Use React DevTools Profiler to see render phases\n• Check fiber tree structure in DevTools\n• Monitor commit phases and effect timing\n• Identify unnecessary re-renders\n• Find reconciliation inefficiencies\n\nCommon Issues and Solutions:\n• Performance problems: Check reconciliation, use keys properly\n• State updates not working: Understand render phases\n• Effects running too often: Understand dependency arrays\n• UI flickering: Understand commit phase timing",
          codeExample: {
            code: `// Example: Debugging with React DevTools

// 1. Open React DevTools
// 2. Go to Profiler tab
// 3. Record a render
// 4. Analyze:

// You'll see:
// - Which components rendered
// - Render time
// - Commit time
// - Phase breakdown

// Common findings:

// Issue: Component re-rendering unnecessarily
// Solution: Use React.memo, useMemo, useCallback

function ExpensiveComponent({ data }) {
  // Re-renders even when data hasn't changed
  const expensiveValue = expensiveCalculation(data);
  return <div>{expensiveValue}</div>;
}

// Fix:
const ExpensiveComponent = React.memo(function ExpensiveComponent({ data }) {
  const expensiveValue = useMemo(
    () => expensiveCalculation(data),
    [data]
  );
  return <div>{expensiveValue}</div>;
});

// Issue: Reconciliation inefficient
// Solution: Use proper keys

// Issue: Effects running too often
// Solution: Fix dependency arrays

useEffect(() => {
  fetchData();
}, [userId]); // Only runs when userId changes

// Use React DevTools to verify:
// - Component renders
// - Effect runs
// - Dependencies match`,
            explanation: "React DevTools Profiler shows you exactly what React is doing. Use it to identify performance bottlenecks, unnecessary re-renders, and reconciliation inefficiencies."
          }
        }
      ],
      conclusion: "Understanding React internals enables you to reason about performance, debug complex issues, and make architectural decisions. You now understand fibers, reconciliation, render phases, and how React prioritizes work. Use this knowledge to write more performant code and debug issues effectively."
    }
  },
  {
    id: "staff-2",
    title: "Building Scalable React Applications: Architecture Patterns",
    description: "Learn enterprise-level architecture patterns, code organization, and strategies for building maintainable large-scale applications.",
    level: "staff",
    estimatedTime: "180 min",
    topics: ["Folder Structure", "Module Boundaries", "Dependency Management", "Testing Strategy", "Monorepos"],
    prerequisites: ["React Internals: How React Works Under the Hood"],
    content: {
      overview: "Staff engineers design systems, not just features. This tutorial teaches you patterns and strategies for building applications that scale to hundreds of developers and millions of users. We'll cover architecture decisions, folder structures, dependency management, testing strategies, and organizational patterns used by companies like Facebook, Google, and Netflix.",
      sections: [
        {
          title: "Lesson 1: Choosing the Right Architecture Pattern",
          content: "The architecture pattern you choose impacts every aspect of your application. Let's explore different patterns and when to use them.\n\nArchitecture Patterns:\n\n1. Feature-Based (Recommended for Large Apps)\n   • Organize by feature/domain\n   • Each feature is self-contained\n   • Scales well with team size\n   • Used by: Facebook, Airbnb\n\n2. Layer-Based (Good for Smaller Apps)\n   • Organize by technical layers\n   • Simple but can lead to coupling\n   • Good for: Startups, MVPs\n\n3. Domain-Driven Design (Enterprise)\n   • Organize by business domains\n   • Clear bounded contexts\n   • Used by: Financial systems, Enterprise apps\n\nDecision Framework:\n• Team size: < 5 → Layer-based, > 10 → Feature-based\n• Application complexity: Simple → Layers, Complex → Features\n• Team structure: Monolith team → Layers, Feature teams → Features",
          codeExample: {
            code: `// ❌ BAD: Type-based organization (doesn't scale)
src/
  components/
    Button.tsx
    Input.tsx
    Header.tsx
    Dashboard.tsx
    UserProfile.tsx
    LoginForm.tsx
  hooks/
    useAuth.ts
    useDashboard.ts
    useProfile.ts
  services/
    auth.ts
    dashboard.ts
    profile.ts
// Problem: Hard to find related code
// Problem: Circular dependencies
// Problem: Doesn't scale with team

// ✅ GOOD: Feature-based organization
src/
  features/
    authentication/
      components/
        LoginForm.tsx
        SignUpForm.tsx
      hooks/
        useAuth.ts
        useSession.ts
      services/
        authService.ts
        sessionService.ts
      types/
        auth.types.ts
      index.ts  // Public API
    dashboard/
      components/
        Dashboard.tsx
        DashboardCard.tsx
      hooks/
        useDashboard.ts
        useDashboardData.ts
      services/
        dashboardService.ts
      types/
        dashboard.types.ts
      index.ts
    user-profile/
      components/
        UserProfile.tsx
        ProfileEdit.tsx
      hooks/
        useProfile.ts
      services/
        profileService.ts
      types/
        profile.types.ts
      index.ts
  shared/
    components/
      Button.tsx
      Input.tsx
    hooks/
      useDebounce.ts
    utils/
      format.ts
      validation.ts
  app/
    routes.tsx
    App.tsx
    layout.tsx`,
            explanation: "Feature-based organization keeps related code together. Each feature exports a public API through index.ts. Shared code is truly shared. This scales to large teams where different teams own different features."
          }
        },
        {
          title: "Lesson 2: Setting Up Module Boundaries and Dependency Rules",
          content: "Clear boundaries prevent coupling and make the codebase maintainable. Let's establish dependency rules step by step.\n\nStep 1: Define Dependency Direction\n• Features cannot import from other features\n• Features can import from shared\n• Shared cannot import from features\n• App can import from features and shared\n\nStep 2: Use Barrel Exports (index.ts)\nEach feature should export a public API\n\nStep 3: Enforce with Tooling\n• Use ESLint rules\n• Use TypeScript path mapping\n• Document the rules clearly",
          codeExample: {
            code: `// ✅ GOOD: Feature with clear boundaries

// features/authentication/index.ts (Public API)
export { LoginForm, SignUpForm } from './components';
export { useAuth, useSession } from './hooks';
export { authService } from './services';
export type { User, AuthState } from './types';

// ❌ BAD: Direct internal imports from outside
// features/dashboard/components/Dashboard.tsx
import { LoginForm } from '../authentication/components/LoginForm';
// Should use:
import { LoginForm } from '@/features/authentication';

// ✅ GOOD: Using public API
import { LoginForm } from '@/features/authentication';

// ✅ GOOD: Shared utilities
// shared/utils/format.ts
export function formatCurrency(amount: number): string {
  return \`$\${amount.toFixed(2)}\`;
}

// Can be used by any feature
import { formatCurrency } from '@/shared/utils/format';

// ❌ BAD: Feature importing from another feature directly
// features/dashboard/services/dashboardService.ts
import { authService } from '../authentication/services/authService';
// Should use shared or re-export through public API

// ✅ GOOD: TypeScript path aliases enforce structure
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/features/*": ["src/features/*"],
      "@/shared/*": ["src/shared/*"],
      "@/app/*": ["src/app/*"]
    }
  }
}

// ESLint rule to enforce boundaries
// .eslintrc.js
module.exports = {
  rules: {
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['features/*/services/*', 'features/*/hooks/*'],
            message: 'Use public API from features/*/index.ts instead'
          }
        ]
      }
    ]
  }
};`,
            explanation: "Clear boundaries prevent features from coupling. Use barrel exports to define public APIs. Enforce with tooling to prevent accidental violations."
          }
        },
        {
          title: "Lesson 3: Dependency Injection and Service Layer",
          content: "For large applications, use dependency injection to decouple features and make testing easier.\n\nBenefits:\n• Testable: Easy to mock dependencies\n• Flexible: Swap implementations\n• Decoupled: Features don't depend on concrete implementations\n\nImplementation Pattern:\n• Create service interfaces\n• Implement services\n• Inject through context or props\n• Use factories for complex creation",
          codeExample: {
            code: `// Step 1: Define service interface
// shared/services/api/IApiService.ts
export interface IApiService {
  get<T>(url: string): Promise<T>;
  post<T>(url: string, data: any): Promise<T>;
}

// Step 2: Implement service
// shared/services/api/ApiService.ts
export class ApiService implements IApiService {
  constructor(private baseUrl: string) {}
  
  async get<T>(url: string): Promise<T> {
    const response = await fetch(\`\${this.baseUrl}\${url}\`);
    return response.json();
  }
  
  async post<T>(url: string, data: any): Promise<T> {
    const response = await fetch(\`\${this.baseUrl}\${url}\`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
    return response.json();
  }
}

// Step 3: Create context for dependency injection
// shared/services/ServiceContext.tsx
import { createContext, useContext } from 'react';

interface Services {
  api: IApiService;
  // Add other services
}

const ServiceContext = createContext<Services | null>(null);

export function ServiceProvider({ 
  children, 
  services 
}: { 
  children: React.ReactNode;
  services: Services;
}) {
  return (
    <ServiceContext.Provider value={services}>
      {children}
    </ServiceContext.Provider>
  );
}

export function useServices() {
  const services = useContext(ServiceContext);
  if (!services) {
    throw new Error('useServices must be used within ServiceProvider');
  }
  return services;
}

// Step 4: Use in features
// features/dashboard/services/dashboardService.ts
import { useServices } from '@/shared/services/ServiceContext';

export function useDashboardService() {
  const { api } = useServices();
  
  return {
    getDashboardData: () => api.get('/dashboard'),
    updateDashboard: (data: any) => api.post('/dashboard', data),
  };
}

// Step 5: Setup in app
// app/App.tsx
const services: Services = {
  api: new ApiService(process.env.API_URL),
};

function App() {
  return (
    <ServiceProvider services={services}>
      {/* Your app */}
    </ServiceProvider>
  );
}

// Step 6: Testing with mocks
// __tests__/Dashboard.test.tsx
const mockServices: Services = {
  api: {
    get: jest.fn(),
    post: jest.fn(),
  },
};

test('loads dashboard data', () => {
  render(
    <ServiceProvider services={mockServices}>
      <Dashboard />
    </ServiceProvider>
  );
});`,
            explanation: "Dependency injection decouples features from concrete implementations. Services are injected through context, making components testable and flexible."
          }
        },
        {
          title: "Lesson 4: Code Splitting Strategy at Scale",
          content: "At scale, code splitting becomes crucial for performance. Let's design a comprehensive splitting strategy.\n\nSplitting Levels:\n1. Route-based: Split by routes (largest chunks)\n2. Feature-based: Split by feature\n3. Component-based: Split heavy components\n4. Library-based: Split vendor libraries\n\nPerformance Targets:\n• Initial bundle: < 200KB (gzipped)\n• Route chunks: < 100KB each\n• Load time: < 3s on 3G\n\nMonitoring:\n• Use webpack-bundle-analyzer\n• Track bundle sizes in CI\n• Monitor real user metrics",
          codeExample: {
            code: `// Step 1: Route-based splitting
// app/routes.tsx
import { lazy } from 'react';

// Split by route
const HomePage = lazy(() => import('@/features/home'));
const DashboardPage = lazy(() => import('@/features/dashboard'));
const ProfilePage = lazy(() => import('@/features/user-profile'));

// Step 2: Feature-based splitting
// features/dashboard/index.ts
// Re-export only public API, internal components stay lazy
export { Dashboard } from './components/Dashboard';
export { useDashboard } from './hooks/useDashboard';

// Heavy internal components are lazy loaded
const HeavyChart = lazy(() => import('./components/HeavyChart'));

// Step 3: Component-based splitting
// components/Editor.tsx
import { lazy, Suspense } from 'react';

const CodeEditor = lazy(() => import('./CodeEditor'));
const RichTextEditor = lazy(() => import('./RichTextEditor'));

function Editor({ type }) {
  return (
    <Suspense fallback={<EditorSkeleton />}>
      {type === 'code' ? <CodeEditor /> : <RichTextEditor />}
    </Suspense>
  );
}

// Step 4: Library-based splitting
// Split large vendor libraries
const MonacoEditor = lazy(() => 
  import('monaco-editor').then(module => ({ default: module.Editor }))
);

// Step 5: Bundle analysis
// webpack.config.js or next.config.js
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer && process.env.ANALYZE === 'true') {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          openAnalyzer: false,
        })
      );
    }
    return config;
  },
};

// Step 6: Preload critical routes
// Preload route when user hovers
<Link
  to="/dashboard"
  onMouseEnter={() => {
    import('@/features/dashboard');
  }}
>
  Dashboard
</Link>`,
            explanation: "Multi-level code splitting strategy: routes first, then features, then heavy components. Use bundle analysis to identify opportunities. Preload critical routes on interaction."
          }
        },
        {
          title: "Lesson 5: Testing Strategy for Large Applications",
          content: "Large applications need a comprehensive testing strategy. Different types of tests serve different purposes.\n\nTesting Pyramid:\n• Unit Tests (70%): Test individual functions/components\n• Integration Tests (20%): Test feature interactions\n• E2E Tests (10%): Test critical user flows\n\nTest Organization:\n• Mirror source structure\n• Co-locate tests with code\n• Use test utilities for common patterns\n\nCI/CD Integration:\n• Run unit tests on every commit\n• Run integration tests on PR\n• Run E2E tests on merge",
          codeExample: {
            code: `// Step 1: Test structure mirrors source
src/
  features/
    dashboard/
      components/
        Dashboard.tsx
        Dashboard.test.tsx
      hooks/
        useDashboard.ts
        useDashboard.test.ts
      services/
        dashboardService.ts
        dashboardService.test.ts
      __tests__/  // Integration tests
        Dashboard.integration.test.tsx

// Step 2: Unit test example
// features/dashboard/hooks/useDashboard.test.ts
import { renderHook, waitFor } from '@testing-library/react';
import { useDashboard } from './useDashboard';
import { ServiceProvider } from '@/shared/services/ServiceContext';

const mockServices = {
  api: {
    get: jest.fn(),
  },
};

test('loads dashboard data', async () => {
  mockServices.api.get.mockResolvedValue({ data: [] });
  
  const { result } = renderHook(() => useDashboard(), {
    wrapper: ({ children }) => (
      <ServiceProvider services={mockServices}>
        {children}
      </ServiceProvider>
    ),
  });
  
  await waitFor(() => {
    expect(result.current.data).toBeDefined();
  });
});

// Step 3: Integration test example
// features/dashboard/__tests__/Dashboard.integration.test.tsx
import { render, screen } from '@testing-library/react';
import { Dashboard } from '../components/Dashboard';
import { ServiceProvider } from '@/shared/services/ServiceContext';

const mockServices = createMockServices();

test('dashboard loads and displays data', async () => {
  render(
    <ServiceProvider services={mockServices}>
      <Dashboard />
    </ServiceProvider>
  );
  
  expect(screen.getByText('Loading...')).toBeInTheDocument();
  
  await waitFor(() => {
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });
});

// Step 4: Test utilities
// shared/test-utils/index.tsx
export function renderWithProviders(
  ui: React.ReactElement,
  options = {}
) {
  const defaultServices = createMockServices();
  
  function Wrapper({ children }) {
    return (
      <ServiceProvider services={defaultServices}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </ServiceProvider>
    );
  }
  
  return render(ui, { wrapper: Wrapper, ...options });
}

// Use in tests
test('component renders', () => {
  renderWithProviders(<MyComponent />);
});

// Step 5: E2E test example (Playwright/Cypress)
// e2e/dashboard.spec.ts
test('user can view dashboard', async ({ page }) => {
  await page.goto('/dashboard');
  await expect(page.locator('h1')).toContainText('Dashboard');
});`,
            explanation: "Comprehensive testing strategy: unit tests for components/hooks, integration tests for features, E2E tests for critical flows. Use test utilities to reduce boilerplate."
          }
        },
        {
          title: "Lesson 6: State Management Architecture",
          content: "For large applications, you need a clear state management strategy.\n\nState Management Layers:\n1. Local State: Component-specific (useState)\n2. Shared State: Feature-level (Context/Redux slice)\n3. Global State: App-level (Redux/Zustand)\n4. Server State: API data (React Query/SWR)\n\nDecision Tree:\n• Only one component? → useState\n• Shared within feature? → Context or feature store\n• Shared across features? → Global store\n• Server data? → React Query/SWR\n\nBest Practices:\n• Don't put server state in global store\n• Keep state close to where it's used\n• Normalize complex state",
          codeExample: {
            code: `// Step 1: Local state (component-specific)
function Counter() {
  const [count, setCount] = useState(0);
  // Only used in this component
}

// Step 2: Feature-level state (Context)
// features/dashboard/DashboardContext.tsx
const DashboardContext = createContext<DashboardState | null>(null);

export function DashboardProvider({ children }) {
  const [state, setState] = useState<DashboardState>({
    widgets: [],
    layout: 'grid',
  });
  
  return (
    <DashboardContext.Provider value={{ state, setState }}>
      {children}
    </DashboardContext.Provider>
  );
}

// Step 3: Global state (Redux Toolkit)
// store/slices/dashboardSlice.ts
import { createSlice } from '@reduxjs/toolkit';

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: { widgets: [] },
  reducers: {
    addWidget: (state, action) => {
      state.widgets.push(action.payload);
    },
  },
});

// Step 4: Server state (React Query)
// features/dashboard/hooks/useDashboardData.ts
import { useQuery } from '@tanstack/react-query';

export function useDashboardData() {
  return useQuery({
    queryKey: ['dashboard'],
    queryFn: () => dashboardService.getDashboard(),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

// Step 5: Combining layers
function Dashboard() {
  // Local state
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Feature state
  const { layout } = useDashboardContext();
  
  // Server state
  const { data, isLoading } = useDashboardData();
  
  // Global state
  const user = useSelector(state => state.user);
  
  // Each layer serves its purpose
}`,
            explanation: "Multi-layer state management: local for component, context for feature, global store for app-wide, React Query for server. Each layer has its purpose."
          }
        },
        {
          title: "Lesson 7: Monorepo Strategy",
          content: "Monorepos enable code sharing across multiple applications and services.\n\nWhen to Use Monorepos:\n• Multiple apps sharing code\n• Design system components\n• Shared utilities across projects\n• Micro-frontend architecture\n\nTools:\n• Nx: Advanced build system\n• Turborepo: Fast build system\n• Yarn/NPM workspaces: Simple setup\n\nStructure:\n• apps/: Applications\n• packages/: Shared packages\n• tools/: Build tools\n\nBenefits:\n• Code sharing\n• Atomic changes\n• Consistent versions\n• Single CI/CD pipeline"
        }
      ],
      conclusion: "Architecture is about trade-offs. Make decisions based on team size, application scale, and long-term maintainability. Start simple, add structure as you grow. Document your decisions and enforce them with tooling."
    }
  },
  {
    id: "staff-3",
    title: "Creating Your Own React Library",
    description: "Build a reusable React library from scratch, including hooks, components, TypeScript types, build configuration, and publishing.",
    level: "staff",
    estimatedTime: "180 min",
    topics: ["Library Architecture", "Build Tools", "TypeScript Setup", "Publishing", "Documentation"],
    prerequisites: ["Building Scalable React Applications"],
    content: {
      overview: "Creating reusable React libraries is a critical skill for Staff Engineers. Whether building a design system, shared component library, or utility hooks, understanding the entire library development lifecycle is essential. This comprehensive tutorial will walk you through creating a production-ready React library from scratch, including architecture decisions, build configuration, TypeScript setup, testing, documentation, and publishing to npm. You'll learn patterns used by popular libraries like Material-UI, Chakra UI, and React Hook Form.",
      sections: [
        {
          title: "Lesson 1: Planning Your Library Architecture",
          content: "Before writing code, plan your library's architecture. This determines everything else.\n\nStep 1: Define Scope\nWhat will your library include?\n• Components only?\n• Hooks only?\n• Utilities?\n• All of the above?\n\nStep 2: Define Target Audience\n• Internal teams (private npm org)\n• Public open source\n• Design system for company\n\nStep 3: Choose Module Format\n• ESM (ES Modules) - Modern, tree-shakeable\n• CJS (CommonJS) - Node.js compatibility\n• UMD - Browser globals\n• Multiple formats for maximum compatibility\n\nStep 4: Dependencies Strategy\n• Peer dependencies for React (prevents duplicate React)\n• External dependencies vs bundled\n• Size considerations",
          codeExample: {
            code: `// Example: Library architecture planning

// MyAwesomeUI Library Plan
// Scope: React components + hooks
// Target: Public npm package
// Formats: ESM + CJS
// React: Peer dependency

library-name/
├── src/                    # Source code
│   ├── components/        # React components
│   ├── hooks/            # Custom hooks
│   ├── utils/            # Utility functions
│   ├── types/            # TypeScript types
│   └── index.ts          # Main entry point
├── dist/                  # Build output (generated)
├── tests/                 # Test files
├── docs/                  # Documentation
├── package.json          # Package configuration
├── tsconfig.json         # TypeScript config
├── rollup.config.js      # Build configuration
└── README.md             # Documentation`,
            explanation: "Plan your structure first. A clear structure makes everything easier - building, testing, and maintaining."
          }
        },
        {
          title: "Lesson 2: Setting Up Project Structure",
          content: "Create a professional library structure that scales.\n\nStep 1: Initialize Project\n```bash\nmkdir my-react-library\ncd my-react-library\nnpm init -y\n```\n\nStep 2: Create Folder Structure\nOrganize code logically:\n• src/: Source code\n• dist/: Build output\n• tests/: Test files\n• docs/: Documentation\n• examples/: Usage examples\n\nStep 3: Setup Git\nInitialize repository and add .gitignore\n\nStep 4: Install Dependencies\nDevelopment dependencies:\n• TypeScript\n• Build tool (Rollup/Vite/tsup)\n• Testing library\n• Linting tools",
          codeExample: {
            code: `// Complete project structure

my-react-library/
├── .gitignore
├── .npmignore
├── package.json
├── tsconfig.json
├── tsconfig.build.json    # Separate build config
├── rollup.config.js       # or vite.config.ts, etc.
├── jest.config.js         # Testing config
├── .eslintrc.js          # Linting
├── README.md
├── LICENSE
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.test.tsx
│   │   │   ├── Button.stories.tsx
│   │   │   └── index.ts
│   │   └── Input/
│   │       ├── Input.tsx
│   │       └── index.ts
│   ├── hooks/
│   │   ├── useToggle.ts
│   │   └── useLocalStorage.ts
│   ├── utils/
│   │   └── cn.ts          # className utility
│   ├── types/
│   │   └── index.ts
│   └── index.ts           # Main export
├── dist/                  # Generated
│   ├── index.esm.js
│   ├── index.cjs.js
│   ├── index.d.ts
│   └── index.d.ts.map
├── tests/
│   └── setup.ts
├── docs/
│   └── getting-started.md
└── examples/
    └── basic/
        └── App.tsx

// .gitignore
node_modules/
dist/
coverage/
*.log
.DS_Store

// .npmignore (opposite of .gitignore)
src/
tests/
examples/
*.config.js
*.config.ts
tsconfig*.json
.gitignore`,
            explanation: "A well-organized structure makes your library professional and easy to navigate. Separate source, build output, tests, and documentation clearly."
          }
        },
        {
          title: "Lesson 3: Package.json Configuration",
          content: "Configure package.json for a modern, tree-shakeable library.\n\nKey Fields:\n• name: npm package name\n• version: Semantic versioning\n• main: CommonJS entry point\n• module: ESM entry point\n• types: TypeScript declarations\n• exports: Modern package exports\n• peerDependencies: React dependencies\n• files: What to include in package\n• sideEffects: Enable tree-shaking\n\nModern Package Exports:\nThe \"exports\" field is the modern way to define entry points. It enables:\n• Tree-shaking\n• Conditional exports\n• Multiple entry points\n• Subpath exports",
          codeExample: {
            code: `// package.json for a React library

{
  "name": "@my-org/my-react-library",
  "version": "1.0.0",
  "description": "A collection of React components and hooks",
  "license": "MIT",
  "author": "Your Name",
  "repository": {
    "type": "git",
    "url": "https://github.com/my-org/my-react-library"
  },
  
  // Entry points
  "main": "./dist/index.cjs.js",           // CommonJS
  "module": "./dist/index.esm.js",         // ESM
  "types": "./dist/index.d.ts",            // TypeScript types
  
  // Modern exports (preferred)
  "exports": {
    ".": {
      "import": {
        "types": "./dist/index.d.ts",
        "default": "./dist/index.esm.js"
      },
      "require": {
        "types": "./dist/index.d.ts",
        "default": "./dist/index.cjs.js"
      }
    },
    "./styles": "./dist/styles.css",
    "./package.json": "./package.json"
  },
  
  // Files to include in npm package
  "files": [
    "dist",
    "README.md",
    "LICENSE"
  ],
  
  // Peer dependencies (not bundled)
  "peerDependencies": {
    "react": ">=16.8.0",
    "react-dom": ">=16.8.0"
  },
  
  // Peer dependency ranges
  "peerDependenciesMeta": {
    "react": {
      "optional": false
    },
    "react-dom": {
      "optional": false
    }
  },
  
  // Enable tree-shaking
  "sideEffects": false,
  
  // Scripts
  "scripts": {
    "build": "rollup -c",
    "dev": "rollup -c -w",
    "test": "jest",
    "test:watch": "jest --watch",
    "lint": "eslint src",
    "type-check": "tsc --noEmit",
    "prepare": "npm run build"
  },
  
  // Keywords for npm search
  "keywords": [
    "react",
    "components",
    "hooks",
    "ui-library"
  ]
}`,
            explanation: "Modern package.json configuration enables tree-shaking, supports multiple module formats, and follows npm best practices. The \"exports\" field is the modern standard."
          }
        },
        {
          title: "Lesson 4: TypeScript Configuration for Libraries",
          content: "Proper TypeScript configuration is crucial for library consumers.\n\nKey Configuration Options:\n• declaration: Generate .d.ts files\n• declarationMap: Source maps for declarations\n• outDir: Output directory\n• module: Module system (ESNext)\n• target: JavaScript target (ES2015+)\n• jsx: React JSX handling\n• strict: Enable strict mode\n• esModuleInterop: Enable ESM/CJS interop\n\nSeparate Configs:\n• tsconfig.json: Development config\n• tsconfig.build.json: Build config (stricter)",
          codeExample: {
            code: `// tsconfig.json (Development)
{
  "compilerOptions": {
    // Target and Module
    "target": "ES2015",
    "module": "ESNext",
    "lib": ["ES2015", "DOM", "DOM.Iterable"],
    
    // Module Resolution
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    
    // Type Checking
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedIndexedAccess": true,
    
    // Emit
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "outDir": "./dist",
    
    // JSX
    "jsx": "react-jsx",
    
    // Paths
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "tests"]
}

// tsconfig.build.json (Build - stricter)
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    // Remove paths for build
    "paths": {},
    // Emit only declarations
    "emitDeclarationOnly": false
  },
  "include": ["src/**/*.ts", "src/**/*.tsx"],
  "exclude": ["**/*.test.ts", "**/*.test.tsx", "**/*.stories.tsx"]
}

// Using in build script
// "build": "tsc -p tsconfig.build.json && rollup -c"`,
            explanation: "Two TypeScript configs: one for development (with paths, includes tests) and one for building (stricter, excludes tests). Declaration files enable TypeScript support for consumers."
          }
        },
        {
          title: "Lesson 5: Choosing and Configuring Build Tools",
          content: "Multiple build tools can build React libraries. Choose based on your needs.\n\nBuild Tool Options:\n\n1. Rollup (Recommended for Libraries)\n   • Optimized for libraries\n   • Excellent tree-shaking\n   • Multiple output formats\n   • Plugin ecosystem\n\n2. Vite\n   • Fast development\n   • Easy configuration\n   • Good for modern setups\n\n3. tsup\n   • Zero-config TypeScript bundler\n   • Uses esbuild (very fast)\n   • Simple setup\n\n4. Webpack\n   • More complex\n   • Better for apps than libraries\n\nWe'll focus on Rollup as it's the most popular for libraries.",
          codeExample: {
            code: `// rollup.config.js - Complete configuration

import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import dts from 'rollup-plugin-dts';

const packageJson = require('./package.json');

export default [
  // ESM and CJS builds
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.module,
        format: 'es',
        sourcemap: true,
        exports: 'named',
      },
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
        exports: 'named',
      },
    ],
    plugins: [
      peerDepsExternal(), // Don't bundle peer deps
      resolve({
        browser: true,
      }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.build.json',
        declaration: false, // Handled by dts plugin
      }),
      terser(), // Minify
    ],
    external: ['react', 'react-dom'], // External dependencies
  },
  
  // TypeScript declarations
  {
    input: 'src/index.ts',
    output: {
      file: packageJson.types,
      format: 'es',
    },
    plugins: [dts()],
    external: [/\.css$/], // Exclude CSS from declarations
  },
];

// Install dependencies:
// npm install -D rollup @rollup/plugin-node-resolve @rollup/plugin-commonjs @rollup/plugin-typescript rollup-plugin-terser rollup-plugin-peer-deps-external rollup-plugin-dts

// Alternative: Vite configuration (simpler)
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'MyReactLibrary',
      formats: ['es', 'cjs'],
      fileName: (format) => \`index.\${format === 'es' ? 'esm' : 'cjs'}.js\`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});

// Alternative: tsup (zero-config)
// tsup.config.ts
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
});`,
            explanation: "Rollup is the most popular choice for libraries due to excellent tree-shaking. Vite is simpler but less flexible. tsup is fastest but less customizable. Choose based on your needs."
          }
        },
        {
          title: "Lesson 6: Creating Library Entry Point",
          content: "The entry point (index.ts) is your library's public API. Design it carefully.\n\nPrinciples:\n• Export only what consumers need\n• Use barrel exports\n• Group related exports\n• Document everything\n\nExport Patterns:\n• Named exports for components/hooks\n• Type exports for TypeScript\n• Re-export from sub-modules\n• Avoid default exports (tree-shaking issues)",
          codeExample: {
            code: `// src/index.ts - Main entry point

// Components
export { Button } from './components/Button';
export type { ButtonProps } from './components/Button';

export { Input } from './components/Input';
export type { InputProps } from './components/Input';

// Hooks
export { useToggle } from './hooks/useToggle';
export { useLocalStorage } from './hooks/useLocalStorage';

// Utils
export { cn } from './utils/cn';

// Types
export type { Theme } from './types/theme';

// Version info (optional)
export const version = '1.0.0';

// Alternative: Barrel export pattern
// If you have many exports, use barrel files

// src/components/index.ts
export { Button } from './Button';
export { Input } from './Input';

// src/hooks/index.ts
export { useToggle } from './useToggle';
export { useLocalStorage } from './useLocalStorage';

// src/index.ts (then re-exports)
export * from './components';
export * from './hooks';
export * from './utils';
export * from './types';

// ❌ Avoid: Default exports
// export default { Button, Input }; // Bad for tree-shaking

// ✅ Good: Named exports
export { Button, Input }; // Tree-shakeable

// Example component structure:
// src/components/Button/Button.tsx
export interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  children,
  ...props 
}: ButtonProps) {
  return (
    <button
      className={\`btn btn-\${variant} btn-\${size}\`}
      {...props}
    >
      {children}
    </button>
  );
}

// src/components/Button/index.ts
export { Button } from './Button';
export type { ButtonProps } from './Button';`,
            explanation: "Clean entry points enable tree-shaking. Use named exports, barrel exports for organization, and export types separately. Avoid default exports for better optimization."
          }
        },
        {
          title: "Lesson 7: Building Components for Libraries",
          content: "Library components have different requirements than app components.\n\nKey Considerations:\n• Composability: Flexible and reusable\n• Props API: Clear, intuitive\n• Styling: CSS-in-JS, CSS modules, or utility classes\n• Accessibility: ARIA attributes\n• TypeScript: Full type safety\n• Forwarding refs: Use forwardRef\n• Polymorphism: Support different element types\n\nBest Practices:\n• Forward refs for DOM components\n• Use polymorphic patterns for flexibility\n• Provide sensible defaults\n• Document all props",
          codeExample: {
            code: `// Library component best practices

// 1. Forward refs
import { forwardRef } from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', loading, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={\`btn btn-\${variant} btn-\${size}\`}
        disabled={disabled || loading}
        aria-busy={loading}
        {...props}
      >
        {loading ? <Spinner /> : children}
      </button>
    );
  }
);

Button.displayName = 'Button';

// 2. Polymorphic component
type BoxProps<C extends React.ElementType> = {
  as?: C;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<C>;

export function Box<C extends React.ElementType = 'div'>({
  as,
  children,
  ...props
}: BoxProps<C>) {
  const Component = as || 'div';
  return <Component {...props}>{children}</Component>;
}

// Usage:
// <Box as="button" onClick={handleClick}>Click</Box>
// <Box as="section" id="content">Content</Box>

// 3. Compound components
const CardContext = createContext<{ variant?: string }>({});

function Card({ children, variant }: CardProps) {
  return (
    <CardContext.Provider value={{ variant }}>
      <div className={\`card card-\${variant}\`}>{children}</div>
    </CardContext.Provider>
  );
}

Card.Header = function CardHeader({ children }: { children: React.ReactNode }) {
  return <div className="card-header">{children}</div>;
};

Card.Body = function CardBody({ children }: { children: React.ReactNode }) {
  return <div className="card-body">{children}</div>;
};

// Usage:
// <Card variant="outlined">
//   <Card.Header>Title</Card.Header>
//   <Card.Body>Content</Card.Body>
// </Card>

// 4. Controlled/Uncontrolled components
export interface InputProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export function Input({ value, defaultValue, onChange, ...props }: InputProps) {
  const [internalValue, setInternalValue] = useState(defaultValue || '');
  const isControlled = value !== undefined;
  
  const currentValue = isControlled ? value : internalValue;
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (!isControlled) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };
  
  return <input value={currentValue} onChange={handleChange} {...props} />;
}`,
            explanation: "Library components need to be flexible, composable, and accessible. Forward refs for DOM access, use polymorphic patterns for flexibility, and support both controlled and uncontrolled modes."
          }
        },
        {
          title: "Lesson 8: Testing Your Library",
          content: "Testing ensures your library works correctly and prevents regressions.\n\nTesting Strategy:\n• Unit tests: Components and hooks\n• Integration tests: Component interactions\n• Snapshot tests: Prevent UI regressions\n• Visual tests: Storybook with Chromatic\n\nTesting Tools:\n• Jest: Test runner\n• React Testing Library: Component testing\n• @testing-library/react-hooks: Hook testing\n• Storybook: Component development and visual testing",
          codeExample: {
            code: `// Testing setup

// jest.config.js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.stories.{ts,tsx}',
    '!src/**/*.d.ts',
  ],
};

// Component test example
// src/components/Button/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
  
  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  
  it('is disabled when loading', () => {
    render(<Button loading>Click</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});

// Hook test example
// src/hooks/useToggle.test.ts
import { renderHook, act } from '@testing-library/react';
import { useToggle } from './useToggle';

describe('useToggle', () => {
  it('toggles value', () => {
    const { result } = renderHook(() => useToggle(false));
    
    expect(result.current[0]).toBe(false);
    
    act(() => {
      result.current[1]();
    });
    
    expect(result.current[0]).toBe(true);
  });
});`,
            explanation: "Comprehensive testing prevents bugs and gives confidence. Test components, hooks, and integrations. Use React Testing Library for user-centric tests."
          }
        },
        {
          title: "Lesson 9: Publishing to npm",
          content: "Publishing your library makes it available to others.\n\nStep 1: Prepare for Publishing\n• Build the library\n• Test everything\n• Update version\n• Write/update README\n• Add LICENSE\n\nStep 2: Create npm Account\n• Sign up at npmjs.com\n• Verify email\n\nStep 3: Login\n```bash\nnpm login\n```\n\nStep 4: Publish\n```bash\nnpm publish\n# or for scoped packages:\nnpm publish --access public\n```\n\nVersioning:\n• Use semantic versioning (semver)\n• Major.Minor.Patch (1.0.0)\n• Use npm version command\n\nPublishing Checklist:\n• [ ] Library builds successfully\n• [ ] All tests pass\n• [ ] README is complete\n• [ ] LICENSE is included\n• [ ] Version is updated\n• [ ] package.json is correct",
          codeExample: {
            code: `// Publishing workflow

// 1. Build your library
npm run build

// 2. Run tests
npm test

// 3. Update version (semantic versioning)
npm version patch   # 1.0.0 -> 1.0.1 (bug fixes)
npm version minor   # 1.0.0 -> 1.1.0 (new features)
npm version major   # 1.0.0 -> 2.0.0 (breaking changes)

// Or manually edit package.json
{
  "version": "1.0.0"
}

// 4. Login to npm
npm login

// 5. Publish
npm publish

// For scoped packages (@my-org/my-lib):
npm publish --access public

// Publishing with tags
npm publish --tag beta    # Publish as beta
npm publish --tag latest  # Publish as latest (default)

// Using in another project
npm install @my-org/my-react-library

// Or with specific version
npm install @my-org/my-react-library@1.0.0

// Publishing checklist script
// package.json
{
  "scripts": {
    "prepublishOnly": "npm run build && npm test",
    "version": "npm run build"
  }
}

// This ensures:
// - Build runs before publish
// - Tests pass before publish
// - Build runs on version bump`,
            explanation: "Follow the publishing workflow: build, test, version, publish. Use semantic versioning. The prepublishOnly script ensures quality before publishing."
          }
        },
        {
          title: "Lesson 10: Documentation and Developer Experience",
          content: "Great documentation makes your library successful.\n\nDocumentation Essentials:\n• README.md: Getting started, examples\n• API documentation: All props and methods\n• Examples: Code samples\n• Storybook: Interactive component playground\n• Migration guides: For breaking changes\n\nDeveloper Experience:\n• Clear prop names\n• TypeScript types for autocomplete\n• Error messages\n• Examples in README\n• Storybook for visual testing",
          codeExample: {
            code: `// README.md template

# My React Library

> A collection of React components and hooks

## Installation

\`\`\`bash
npm install @my-org/my-react-library
\`\`\`

## Usage

\`\`\`tsx
import { Button, useToggle } from '@my-org/my-react-library';

function App() {
  const [isOpen, toggle] = useToggle(false);
  
  return (
    <Button onClick={toggle}>
      {isOpen ? 'Close' : 'Open'}
    </Button>
  );
}
\`\`\`

## Components

### Button

A versatile button component.

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | 'primary' \| 'secondary' | 'primary' | Button style |
| size | 'sm' \| 'md' \| 'lg' | 'md' | Button size |
| loading | boolean | false | Show loading state |
| children | ReactNode | - | Button content |

**Example:**

\`\`\`tsx
<Button variant="primary" size="lg" loading>
  Submit
</Button>
\`\`\`

## Hooks

### useToggle

Toggle a boolean value.

\`\`\`tsx
const [value, toggle] = useToggle(false);
\`\`\`

## Storybook Setup

// .storybook/main.js
module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
};

// Component story
// src/components/Button/Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
  },
};`,
            explanation: "Comprehensive documentation is crucial. Include installation, usage examples, API docs, and Storybook for visual testing. Good docs = successful library."
          }
        }
      ],
      conclusion: "Building libraries requires deep understanding of the ecosystem. Focus on DX (Developer Experience) and clear APIs. Start simple, iterate based on feedback, and maintain backwards compatibility. Remember: great libraries are used because they solve real problems and are easy to use."
    }
  },
  {
    id: "beginner-4",
    title: "Conditional Rendering and Lists",
    description: "Learn how to conditionally render content and render lists of items in React.",
    level: "beginner",
    estimatedTime: "60 min",
    topics: ["Conditional Rendering", "Lists", "Keys", "Array Methods"],
    prerequisites: ["Understanding Props"],
    content: {
      overview: "Conditional rendering and lists are two of the most fundamental patterns in React. Almost every component you build will use these patterns. Conditional rendering lets you show different content based on state or props, while list rendering allows you to display collections of data efficiently. This tutorial covers all the ways to conditionally render content, how to render lists properly, the importance of keys, and common patterns you'll use in real applications.",
      sections: [
        {
          title: "Lesson 1: Understanding Conditional Rendering",
          content: "Conditional rendering means showing different UI based on conditions. React provides several ways to do this, each with its own use case.\n\nWhy Conditional Rendering?\n• Show/hide elements based on state\n• Display different content for different users\n• Handle loading and error states\n• Create dynamic, interactive UIs\n\nCommon Use Cases:\n• User authentication states\n• Loading indicators\n• Error messages\n• Feature flags\n• Empty states\n• Form validation messages",
          codeExample: {
            code: `// Basic conditional rendering examples

// Example 1: User authentication
function App() {
  const [user, setUser] = useState(null);
  
  // Different content for logged in vs logged out
  if (user) {
    return <Dashboard user={user} />;
  }
  return <LoginForm onLogin={setUser} />;
}

// Example 2: Loading state
function DataDisplay() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (!data) {
    return <div>No data available</div>;
  }
  
  return <div>{data.content}</div>;
}

// Example 3: Feature flags
function Feature({ enabled }: { enabled: boolean }) {
  if (!enabled) {
    return null; // Don't render anything
  }
  
  return <div>New Feature Content</div>;
}`,
            explanation: "Conditional rendering is essential for dynamic UIs. Use it to show different content based on state, user permissions, loading states, and more."
          }
        },
        {
          title: "Lesson 2: Conditional Rendering Methods",
          content: "React provides three main ways to conditionally render content. Each has its place.\n\nMethod 1: If Statements (Early Returns)\n• Best for: Completely different components\n• Use when: You want to return different JSX entirely\n• Clean and readable\n• Can't use inside JSX\n\nMethod 2: Ternary Operator (? :)\n• Best for: Two options\n• Use when: You want to choose between two elements\n• Can be used inside JSX\n• More concise than if/else\n\nMethod 3: Logical AND (&&)\n• Best for: Show/hide single element\n• Use when: You want to show something or nothing\n• Can be used inside JSX\n• Beware of falsy values!",
          codeExample: {
            code: `// Method 1: If statements (early returns)
function UserProfile({ user, isAdmin }) {
  // Early return for different cases
  if (!user) {
    return <div>Please log in</div>;
  }
  
  if (isAdmin) {
    return <AdminDashboard user={user} />;
  }
  
  return <RegularDashboard user={user} />;
}

// Method 2: Ternary operator (two options)
function Greeting({ isLoggedIn, userName }) {
  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome back, {userName}!</h1>
      ) : (
        <h1>Please log in to continue</h1>
      )}
    </div>
  );
}

// Ternary for inline values
function PriceDisplay({ price, discount }: { price: number; discount: boolean }) {
  return (
    <div>
      Price: \${discount ? price * 0.9 : price}
      {discount && <span className="badge">On Sale!</span>}
    </div>
  );
}

// Method 3: Logical AND (show/hide)
function NotificationBanner({ message }) {
  return (
    <div>
      {message && (
        <div className="banner">
          {message}
        </div>
      )}
    </div>
  );
}

// ⚠️ Common mistake with &&
function Counter({ count }) {
  // ❌ BAD: If count is 0, nothing renders!
  return <div>{count && <span>Count: {count}</span>}</div>;
  
  // ✅ GOOD: Explicit check
  return <div>{count > 0 && <span>Count: {count}</span>}</div>;
  
  // ✅ BETTER: Use ternary for clarity
  return <div>{count > 0 ? <span>Count: {count}</span> : null}</div>;
}

// Complex conditional rendering
function StatusDisplay({ status, data, error }) {
  // Multiple conditions
  if (error) {
    return <ErrorMessage error={error} />;
  }
  
  if (!data) {
    return <LoadingSpinner />;
  }
  
  if (data.length === 0) {
    return <EmptyState />;
  }
  
  return <DataList data={data} />;
}

// Nested conditionals
function ProductCard({ product, user }) {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      
      {/* Multiple conditions */}
      {product.onSale && (
        <span className="sale-badge">Sale!</span>
      )}
      
      {user?.isPremium ? (
        <PremiumPrice price={product.price} />
      ) : (
        <RegularPrice price={product.price} />
      )}
      
      {user && (
        <button onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      )}
    </div>
  );
}`,
            explanation: "Each conditional rendering method has its place. Use if statements for early returns, ternary for two options, and && for show/hide. Be careful with && and falsy values like 0."
          }
        },
        {
          title: "Lesson 3: Common Conditional Rendering Patterns",
          content: "Learn common patterns you'll use in real applications.\n\nCommon Patterns:\n• Loading states\n• Error states\n• Empty states\n• Authentication states\n• Permission-based rendering\n• Feature flags\n• Form validation\n\nBest Practices:\n• Keep conditions clear and readable\n• Extract complex conditionals to variables\n• Use early returns for clarity\n• Avoid deeply nested ternaries",
          codeExample: {
            code: `// Pattern 1: Loading, Error, Success states
function DataFetcher() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  
  // Early returns for different states
  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} />;
  if (!data) return <EmptyState />;
  
  return <DataDisplay data={data} />;
}

// Pattern 2: Permission-based rendering
function AdminPanel({ user }) {
  const isAdmin = user?.role === 'admin';
  const canEdit = user?.permissions?.includes('edit');
  
  return (
    <div>
      <h1>Admin Panel</h1>
      
      {isAdmin && (
        <div>
          <AdminControls />
          {canEdit && <EditButton />}
        </div>
      )}
      
      {!isAdmin && (
        <div>You don't have permission to view this</div>
      )}
    </div>
  );
}

// Pattern 3: Feature flags
function App() {
  const features = {
    newDashboard: true,
    darkMode: false,
    betaFeatures: true,
  };
  
  return (
    <div>
      <Header />
      {features.newDashboard ? (
        <NewDashboard />
      ) : (
        <OldDashboard />
      )}
      {features.darkMode && <DarkModeToggle />}
    </div>
  );
}

// Pattern 4: Form validation messages
function FormField({ value, error, touched }) {
  return (
    <div>
      <input value={value} />
      {touched && error && (
        <span className="error">{error}</span>
      )}
      {touched && !error && value && (
        <span className="success">✓</span>
      )}
    </div>
  );
}

// Pattern 5: Conditional classes
function Button({ variant, disabled, children }) {
  const className = [
    'btn',
    variant && \`btn-\${variant}\`,
    disabled && 'btn-disabled',
  ]
    .filter(Boolean)
    .join(' ');
  
  return (
    <button className={className} disabled={disabled}>
      {children}
    </button>
  );
}

// Pattern 6: Extract complex conditions
function ProductList({ products, user }) {
  // Extract complex condition to variable
  const hasDiscount = products.some(p => p.onSale);
  const canViewPremium = user?.subscription === 'premium';
  const showPremiumProducts = canViewPremium && hasDiscount;
  
  return (
    <div>
      {showPremiumProducts && (
        <PremiumProductsBanner />
      )}
      
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          showDiscount={hasDiscount}
        />
      ))}
    </div>
  );
}

// Pattern 7: Multiple conditions with helper
function getStatusMessage(status, data) {
  if (status === 'loading') return 'Loading...';
  if (status === 'error') return 'Something went wrong';
  if (!data || data.length === 0) return 'No items found';
  return null;
}

function StatusDisplay({ status, data }) {
  const message = getStatusMessage(status, data);
  
  if (message) {
    return <div className="status">{message}</div>;
  }
  
  return <DataList data={data} />;
}`,
            explanation: "Common patterns include loading/error/success states, permission checks, feature flags, and form validation. Extract complex conditions to variables for readability."
          }
        },
        {
          title: "Lesson 4: Rendering Lists with map()",
          content: "Rendering lists is one of the most common tasks in React. The map() method is your primary tool.\n\nWhy map()?\n• Transforms array into JSX elements\n• Returns new array (doesn't mutate original)\n• Works with any array length\n• Can be combined with other array methods\n\nBasic Pattern:\n```jsx\n{array.map(item => <Component key={item.id} item={item} />)}\n```\n\nImportant Rules:\n• Always provide a key prop\n• Keys must be unique\n• Keys should be stable\n• Don't use array index as key (if items can reorder)",
          codeExample: {
            code: `// Basic list rendering
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}

// With component extraction
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

function TodoItem({ todo }) {
  return (
    <li>
      <input type="checkbox" checked={todo.completed} />
      <span>{todo.text}</span>
    </li>
  );
}

// Rendering with index (when items don't reorder)
function StaticList({ items }) {
  // Only use index if list is static and won't reorder
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

// Rendering nested data
function UserList({ users }) {
  return (
    <div>
      {users.map(user => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <ul>
            {user.posts.map(post => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

// Conditional rendering within lists
function ProductList({ products, showPrices }) {
  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          {showPrices && <p>\${product.price}</p>}
          {product.onSale && <span>On Sale!</span>}
        </div>
      ))}
    </div>
  );
}

// Empty list handling
function TodoList({ todos }) {
  if (todos.length === 0) {
    return <div>No todos yet. Add one to get started!</div>;
  }
  
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

// Filtered lists
function CompletedTodos({ todos }) {
  const completed = todos.filter(todo => todo.completed);
  
  return (
    <ul>
      {completed.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

// Sorted lists
function SortedProducts({ products }) {
  const sorted = [...products].sort((a, b) => a.price - b.price);
  
  return (
    <div>
      {sorted.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}`,
            explanation: "Use map() to transform arrays into JSX. Always provide unique, stable keys. Handle empty lists gracefully. Combine with filter, sort, and other array methods."
          }
        },
        {
          title: "Lesson 5: Understanding Keys in Lists",
          content: "Keys are crucial for React's reconciliation algorithm. Understanding them prevents bugs and improves performance.\n\nWhat are Keys?\n• Special prop that helps React identify items\n• Must be unique among siblings\n• Should be stable across renders\n• Not accessible in component (not a prop)\n\nWhy Keys Matter:\n• Help React identify which items changed\n• Enable efficient updates\n• Prevent unnecessary re-renders\n• Maintain component state correctly\n\nKey Rules:\n• Must be unique among siblings\n• Should be stable (don't change)\n• Should be predictable (not random)\n• Use item IDs when available\n• Only use index if list is static",
          codeExample: {
            code: `// ✅ GOOD: Using unique IDs
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

// ❌ BAD: Using index when items can reorder
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} />
        // Problem: If todos reorder, React thinks items changed
        // Component state gets mixed up!
      ))}
    </ul>
  );
}

// ✅ GOOD: Using index only for static lists
function StaticMenu({ items }) {
  // OK because menu items never reorder
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

// ❌ BAD: No key (React warning)
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem todo={todo} /> {/* Missing key! */}
      ))}
    </ul>
  );
}

// ✅ GOOD: Creating keys from multiple fields
function UserList({ users }) {
  return (
    <ul>
      {users.map(user => (
        <UserItem
          key={\`\${user.id}-\${user.email}\`}
          user={user}
        />
      ))}
    </ul>
  );
}

// ✅ GOOD: Using stable IDs from API
function ProductList({ products }) {
  return (
    <div>
      {products.map(product => (
        <ProductCard
          key={product.sku} // Stable, unique identifier
          product={product}
        />
      ))}
    </div>
  );
}

// ❌ BAD: Using random keys
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={Math.random()} // ❌ New key every render!
          todo={todo}
        />
      ))}
    </ul>
  );
}

// What happens without proper keys:
// Before: [A(id:1), B(id:2), C(id:3)]
// After:  [C(id:3), A(id:1), B(id:2)]

// With proper keys:
// React knows C moved from position 2 to 0
// React reuses components, just moves them
// State is preserved correctly

// Without proper keys (using index):
// React thinks item at 0 changed from A to C
// React destroys A and creates new C
// State is lost!

// Example: Input state gets mixed up
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoInput key={index} todo={todo} />
        // If todos reorder, input values get mixed up!
      ))}
    </ul>
  );
}

// Fix: Use stable IDs
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoInput key={todo.id} todo={todo} />
        // Now input state is preserved correctly
      ))}
    </ul>
  );
}`,
            explanation: "Keys are essential for React's reconciliation. Use stable, unique identifiers (like IDs) when items can reorder. Only use index for static lists. Bad keys cause bugs and performance issues."
          }
        },
        {
          title: "Lesson 6: Advanced List Patterns",
          content: "Learn advanced patterns for rendering lists in real applications.\n\nAdvanced Patterns:\n• Filtered lists\n• Sorted lists\n• Grouped lists\n• Paginated lists\n• Virtual scrolling\n• Nested lists\n• Lists with actions\n\nBest Practices:\n• Extract list items to components\n• Handle empty states\n• Optimize with React.memo for large lists\n• Use keys properly\n• Consider virtualization for very long lists",
          codeExample: {
            code: `// Pattern 1: Filtered and sorted lists
function ProductList({ products, category, sortBy }) {
  const filtered = products.filter(
    product => product.category === category
  );
  
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'price') return a.price - b.price;
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    return 0;
  });
  
  return (
    <div>
      {sorted.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

// Pattern 2: Grouped lists
function GroupedList({ items }) {
  const grouped = items.reduce((groups, item) => {
    const category = item.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(item);
    return groups;
  }, {});
  
  return (
    <div>
      {Object.entries(grouped).map(([category, items]) => (
        <div key={category}>
          <h2>{category}</h2>
          <ul>
            {items.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

// Pattern 3: Lists with actions
function TodoList({ todos, onToggle, onDelete }) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={() => onToggle(todo.id)}
          onDelete={() => onDelete(todo.id)}
        />
      ))}
    </ul>
  );
}

// Pattern 4: Conditional list items
function NotificationList({ notifications }) {
  return (
    <ul>
      {notifications.map(notification => (
        <li key={notification.id}>
          {notification.type === 'error' && (
            <ErrorIcon />
          )}
          {notification.type === 'success' && (
            <SuccessIcon />
          )}
          <span>{notification.message}</span>
          {notification.actionable && (
            <button>Action</button>
          )}
        </li>
      ))}
    </ul>
  );
}

// Pattern 5: Lists with loading states
function DataList({ data, loading, error }) {
  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  
  if (data.length === 0) {
    return <div>No items found</div>;
  }
  
  return (
    <ul>
      {data.map(item => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

// Pattern 6: Memoized list items (performance)
const TodoItem = React.memo(function TodoItem({ todo, onToggle }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={onToggle}
      />
      <span>{todo.text}</span>
    </li>
  );
});

function TodoList({ todos, onToggle }) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={() => onToggle(todo.id)}
        />
      ))}
    </ul>
  );
}

// Pattern 7: Lists with pagination
function PaginatedList({ items, page, pageSize }) {
  const startIndex = page * pageSize;
  const endIndex = startIndex + pageSize;
  const pageItems = items.slice(startIndex, endIndex);
  
  return (
    <div>
      <ul>
        {pageItems.map(item => (
          <ListItem key={item.id} item={item} />
        ))}
      </ul>
      <Pagination
        currentPage={page}
        totalPages={Math.ceil(items.length / pageSize)}
      />
    </div>
  );
}

// Pattern 8: Nested lists
function CategoryList({ categories }) {
  return (
    <ul>
      {categories.map(category => (
        <li key={category.id}>
          <h3>{category.name}</h3>
          <ul>
            {category.items.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}`,
            explanation: "Advanced list patterns include filtering, sorting, grouping, pagination, and conditional rendering. Extract list items to components and use React.memo for performance with large lists."
          }
        },
        {
          title: "Lesson 7: Common Mistakes and How to Fix Them",
          content: "Avoid common mistakes when rendering lists and conditional content.\n\nCommon Mistakes:\n• Missing keys\n• Using index as key when items reorder\n• Mutating arrays directly\n• Not handling empty lists\n• Falsy values with &&\n• Deeply nested ternaries\n• Forgetting to handle loading/error states",
          codeExample: {
            code: `// ❌ MISTAKE 1: Missing keys
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <li>{todo.text}</li> // Missing key!
      ))}
    </ul>
  );
}

// ✅ FIX: Add unique key
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}

// ❌ MISTAKE 2: Using index when items reorder
function SortableList({ items }) {
  const [sorted, setSorted] = useState(items);
  
  return (
    <ul>
      {sorted.map((item, index) => (
        <li key={index}>{item.name}</li>
        // Bug: State gets mixed up when sorted!
      ))}
    </ul>
  );
}

// ✅ FIX: Use stable IDs
function SortableList({ items }) {
  const [sorted, setSorted] = useState(items);
  
  return (
    <ul>
      {sorted.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

// ❌ MISTAKE 3: Mutating arrays
function TodoList({ todos, onAdd }) {
  todos.push({ id: 1, text: 'New' }); // Mutates original!
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}

// ✅ FIX: Create new array
function TodoList({ todos, onAdd }) {
  const newTodos = [...todos, { id: 1, text: 'New' }];
  return (
    <ul>
      {newTodos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}

// ❌ MISTAKE 4: Falsy values with &&
function Counter({ count }) {
  return <div>{count && <span>Count: {count}</span>}</div>;
  // If count is 0, nothing renders!
}

// ✅ FIX: Explicit check
function Counter({ count }) {
  return (
    <div>
      {count !== null && count !== undefined && (
        <span>Count: {count}</span>
      )}
    </div>
  );
  
  // Or use ternary
  return <div>{count != null ? <span>Count: {count}</span> : null}</div>;
}

// ❌ MISTAKE 5: Not handling empty lists
function ProductList({ products }) {
  return (
    <div>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
  // If products is empty, shows nothing (confusing)
}

// ✅ FIX: Handle empty state
function ProductList({ products }) {
  if (products.length === 0) {
    return <div>No products found</div>;
  }
  
  return (
    <div>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

// ❌ MISTAKE 6: Deeply nested ternaries
function StatusDisplay({ status, data, error }) {
  return (
    <div>
      {status === 'loading' ? (
        <Loading />
      ) : status === 'error' ? (
        <Error error={error} />
      ) : data ? (
        <Data data={data} />
      ) : (
        <Empty />
      )}
    </div>
  );
  // Hard to read!
}

// ✅ FIX: Early returns or extract logic
function StatusDisplay({ status, data, error }) {
  if (status === 'loading') return <Loading />;
  if (status === 'error') return <Error error={error} />;
  if (!data) return <Empty />;
  
  return <Data data={data} />;
}

// ❌ MISTAKE 7: Forgetting loading/error states
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetchUser(userId).then(setUser);
  }, [userId]);
  
  return <div>{user.name}</div>; // Crashes if user is null!
}

// ✅ FIX: Handle all states
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    setLoading(true);
    fetchUser(userId)
      .then(setUser)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [userId]);
  
  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (!user) return <div>User not found</div>;
  
  return <div>{user.name}</div>;
}`,
            explanation: "Common mistakes include missing keys, using index for reorderable lists, mutating arrays, not handling empty states, falsy value issues with &&, and forgetting loading/error states. Always handle all possible states."
          }
        },
        {
          title: "Lesson 8: Performance Considerations",
          content: "Rendering large lists can impact performance. Learn optimization techniques.\n\nPerformance Tips:\n• Use React.memo for list items\n• Virtual scrolling for very long lists\n• Avoid inline functions in map\n• Use stable keys\n• Consider pagination\n• Lazy load items\n\nWhen to Optimize:\n• Lists with 100+ items\n• Complex list items\n• Frequent re-renders\n• Slow interactions",
          codeExample: {
            code: `// Optimize with React.memo
const TodoItem = React.memo(function TodoItem({ todo, onToggle }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={onToggle}
      />
      <span>{todo.text}</span>
    </li>
  );
});

// ❌ BAD: Inline function creates new function every render
function TodoList({ todos, onToggle }) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={() => onToggle(todo.id)} // New function each render
        />
      ))}
    </ul>
  );
}

// ✅ GOOD: Use useCallback
function TodoList({ todos, onToggle }) {
  const handleToggle = useCallback((id) => {
    onToggle(id);
  }, [onToggle]);
  
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={handleToggle}
        />
      ))}
    </ul>
  );
}

// ✅ BETTER: Pass ID and handler separately
function TodoList({ todos, onToggle }) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          id={todo.id}
          onToggle={onToggle} // Stable reference
        />
      ))}
    </ul>
  );
}

// Virtual scrolling for very long lists
import { FixedSizeList } from 'react-window';

function VirtualizedList({ items }) {
  const Row = ({ index, style }) => (
    <div style={style}>
      <ListItem item={items[index]} />
    </div>
  );
  
  return (
    <FixedSizeList
      height={600}
      itemCount={items.length}
      itemSize={50}
      width="100%"
    >
      {Row}
    </FixedSizeList>
  );
}

// Pagination for large datasets
function PaginatedList({ items }) {
  const [page, setPage] = useState(0);
  const pageSize = 20;
  const startIndex = page * pageSize;
  const pageItems = items.slice(startIndex, startIndex + pageSize);
  
  return (
    <div>
      <ul>
        {pageItems.map(item => (
          <ListItem key={item.id} item={item} />
        ))}
      </ul>
      <Pagination
        currentPage={page}
        totalPages={Math.ceil(items.length / pageSize)}
        onPageChange={setPage}
      />
    </div>
  );
}`,
            explanation: "Optimize large lists with React.memo, useCallback, virtual scrolling, and pagination. Avoid inline functions in map() that create new functions on every render."
          }
        }
      ],
      conclusion: "Conditional rendering and lists are fundamental React patterns you'll use in every application. Master the different conditional rendering methods, always use proper keys for lists, handle all states (loading, error, empty), and optimize for performance when needed. These patterns form the foundation of dynamic React applications."
    }
  },
  {
    id: "intermediate-3",
    title: "Handling Forms and User Input",
    description: "Learn how to handle forms, controlled components, validation, and user interactions in React.",
    level: "intermediate",
    estimatedTime: "90 min",
    topics: ["Controlled Components", "Form Handling", "Validation", "useActionState", "useFormStatus", "Server Actions"],
    prerequisites: ["Managing State with useState"],
    videoUrl: "https://www.youtube.com/watch?v=IkMND33x0qQ", // React Forms Tutorial - The Net Ninja
    content: {
      overview: "Forms are central to most web applications. This tutorial covers both traditional form handling with controlled components and modern React 19 patterns using useActionState and useFormStatus. You'll learn how to create forms with validation, handle submissions, manage form state, and leverage React 19's powerful form features for better developer experience and user experience.",
      sections: [
        {
          title: "Lesson 1: Understanding Controlled Components",
          content: "Controlled components are the foundation of React form handling. Understanding them is essential before moving to React 19 patterns.\n\nWhat are Controlled Components?\n• Input value is controlled by React state\n• onChange handler updates state\n• State is the single source of truth\n• Enables validation and transformation\n\nBenefits:\n• Predictable form state\n• Easy validation\n• Full control over input values\n• Can transform values before setting state\n\nvs Uncontrolled Components:\n• Controlled: Value in state, onChange updates state\n• Uncontrolled: Value in DOM, use ref to access",
          codeExample: {
            code: `// Controlled component
function ControlledInput() {
  const [value, setValue] = useState('');
  
  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

// Uncontrolled component
function UncontrolledInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  
  const handleSubmit = () => {
    const value = inputRef.current?.value;
    console.log(value);
  };
  
  return (
    <input
      ref={inputRef}
      defaultValue="initial"
    />
  );
}

// Controlled form example
function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
    // Submit form
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
}

// Why controlled?
// ✅ Can validate in real-time
// ✅ Can transform values (uppercase, format)
// ✅ Can disable submit button based on state
// ✅ Can reset form easily
// ✅ Can access values without refs`,
            explanation: "Controlled components give you full control over form state. The value comes from state, and onChange updates state. This enables validation, transformation, and better form management."
          }
        },
        {
          title: "Lesson 2: Form Validation Patterns",
          content: "Validation ensures users enter correct data. Learn different validation approaches.\n\nValidation Types:\n• Client-side validation (immediate feedback)\n• Server-side validation (security)\n• Real-time validation (as user types)\n• On-submit validation (before sending)\n\nBest Practices:\n• Validate on both client and server\n• Show clear error messages\n• Don't block user input\n• Validate on blur for better UX\n• Use HTML5 validation attributes",
          codeExample: {
            code: `// Real-time validation
function EmailInput() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    
    // Validate as user types
    if (value && !value.includes('@')) {
      setError('Please enter a valid email');
    } else {
      setError('');
    }
  };
  
  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={handleChange}
        className={error ? 'error' : ''}
      />
      {error && <span className="error-text">{error}</span>}
    </div>
  );
}

// Validation on blur (better UX)
function EmailInputBlur() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [touched, setTouched] = useState(false);
  
  const validate = (value: string) => {
    if (!value) return 'Email is required';
    if (!value.includes('@')) return 'Invalid email format';
    return '';
  };
  
  const handleBlur = () => {
    setTouched(true);
    setError(validate(email));
  };
  
  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={handleBlur}
        className={touched && error ? 'error' : ''}
      />
      {touched && error && (
        <span className="error-text">{error}</span>
      )}
    </div>
  );
}

// Multiple field validation
function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const validate = (name: string, value: string) => {
    switch (name) {
      case 'email':
        if (!value.includes('@')) return 'Invalid email';
        break;
      case 'password':
        if (value.length < 8) return 'Password must be 8+ characters';
        break;
      case 'name':
        if (value.length < 2) return 'Name must be 2+ characters';
        break;
    }
    return '';
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Validate field
    const error = validate(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors: Record<string, string> = {};
    Object.entries(formData).forEach(([key, value]) => {
      const error = validate(key, value);
      if (error) newErrors[key] = error;
    });
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Submit form
    console.log('Form valid:', formData);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        className={errors.name ? 'error' : ''}
      />
      {errors.name && <span>{errors.name}</span>}
      
      <input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        className={errors.email ? 'error' : ''}
      />
      {errors.email && <span>{errors.email}</span>}
      
      <input
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        className={errors.password ? 'error' : ''}
      />
      {errors.password && <span>{errors.password}</span>}
      
      <button type="submit">Register</button>
    </form>
  );
}

// HTML5 validation
function HTML5Form() {
  return (
    <form>
      <input
        type="email"
        required
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"
        title="Enter a valid email address"
      />
      <input
        type="password"
        required
        minLength={8}
        title="Password must be at least 8 characters"
      />
      <button type="submit">Submit</button>
    </form>
  );
}`,
            explanation: "Validation can happen in real-time, on blur, or on submit. Combine client-side validation with server-side validation for security. Show clear error messages and don't block user input."
          }
        },
        {
          title: "Lesson 3: React 19 - Server Actions and useActionState",
          content: "React 19 introduces useActionState (formerly useFormState) for managing forms with server actions. This is the modern way to handle forms in React 19 and Next.js.\n\nWhat are Server Actions?\n• Async functions that run on the server\n• Called directly from client components\n• Type-safe end-to-end\n• No API routes needed\n\nuseActionState Benefits:\n• Built-in pending state\n• Automatic form state management\n• Works with Server Actions\n• Better TypeScript support\n• Simplified form handling\n\nWhen to Use:\n• Forms with server-side processing\n• Next.js App Router applications\n• When you want built-in pending state\n• Type-safe form handling",
          codeExample: {
            code: `// Step 1: Create Server Action
// app/actions.ts
'use server';

export interface FormState {
  message?: string;
  error?: string;
  success?: boolean;
}

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;
  
  // Validate
  if (!email || !email.includes('@')) {
    return {
      error: 'Please enter a valid email address',
      success: false,
    };
  }
  
  if (!message || message.trim().length < 10) {
    return {
      error: 'Message must be at least 10 characters',
      success: false,
    };
  }
  
  // Process (save to database, send email, etc.)
  try {
    await saveContactForm({ email, message });
    return {
      message: 'Thank you for your message!',
      success: true,
    };
  } catch (error) {
    return {
      error: 'Failed to send message. Please try again.',
      success: false,
    };
  }
}

// Step 2: Use in Component
'use client';

import { useActionState } from 'react';
import { submitContactForm } from '@/app/actions';

const initialState: FormState = {};

function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialState
  );
  
  return (
    <form action={formAction}>
      <input
        name="email"
        type="email"
        required
        disabled={pending}
      />
      
      <textarea
        name="message"
        required
        disabled={pending}
        minLength={10}
      />
      
      {state.error && (
        <div className="error">{state.error}</div>
      )}
      
      {state.message && (
        <div className="success">{state.message}</div>
      )}
      
      <button type="submit" disabled={pending}>
        {pending ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}

// useActionState returns:
// - state: Current form state (from server action)
// - formAction: Action wrapper for form
// - pending: Boolean indicating if action is in progress

// Field-level errors
interface RegistrationState {
  errors?: {
    email?: string;
    password?: string;
    name?: string;
  };
  message?: string;
}

'use server';
export async function registerUser(
  prevState: RegistrationState,
  formData: FormData
): Promise<RegistrationState> {
  const errors: RegistrationState['errors'] = {};
  
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const name = formData.get('name') as string;
  
  // Validate each field
  if (!email || !email.includes('@')) {
    errors.email = 'Invalid email address';
  }
  
  if (!password || password.length < 8) {
    errors.password = 'Password must be at least 8 characters';
  }
  
  if (!name || name.length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }
  
  if (Object.keys(errors).length > 0) {
    return { errors };
  }
  
  // Create user
  await createUser({ email, password, name });
  
  return { message: 'Account created successfully!' };
}

// Using field-level errors
function RegistrationForm() {
  const [state, formAction, pending] = useActionState(
    registerUser,
    {}
  );
  
  return (
    <form action={formAction}>
      <div>
        <input name="name" disabled={pending} />
        {state.errors?.name && (
          <span className="error">{state.errors.name}</span>
        )}
      </div>
      
      <div>
        <input name="email" type="email" disabled={pending} />
        {state.errors?.email && (
          <span className="error">{state.errors.email}</span>
        )}
      </div>
      
      <div>
        <input name="password" type="password" disabled={pending} />
        {state.errors?.password && (
          <span className="error">{state.errors.password}</span>
        )}
      </div>
      
      {state.message && (
        <div className="success">{state.message}</div>
      )}
      
      <button type="submit" disabled={pending}>
        {pending ? 'Creating Account...' : 'Register'}
      </button>
    </form>
  );
}`,
            explanation: "useActionState simplifies form handling with server actions. It provides built-in pending state and automatic form state management. Server actions run on the server, providing security and type safety."
          }
        },
        {
          title: "Lesson 4: useFormStatus for Form State Access",
          content: "useFormStatus lets child components access form submission status without prop drilling.\n\nKey Features:\n• Automatically detects form status\n• No props needed\n• Works with Server Actions\n• Must be used inside <form> element\n\nBenefits:\n• Eliminates prop drilling\n• Better component composition\n• Cleaner code\n• Automatic status detection\n\nWhen to Use:\n• Submit buttons\n• Form inputs that need to disable during submission\n• Loading indicators\n• Form validation messages",
          codeExample: {
            code: `import { useFormStatus } from 'react-dom';
import { useActionState } from 'react';

// Server action
'use server';
export async function submitForm(
  prevState: any,
  formData: FormData
) {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return { message: 'Submitted!' };
}

// Form component
function ContactForm() {
  const [state, formAction] = useActionState(submitForm, {});
  
  return (
    <form action={formAction}>
      <FormInput name="email" type="email" />
      <FormInput name="message" type="textarea" />
      
      {/* Child components automatically know form status */}
      <SubmitButton>Send Message</SubmitButton>
      
      {state.message && <SuccessMessage>{state.message}</SuccessMessage>}
    </form>
  );
}

// SubmitButton uses useFormStatus (no props needed!)
function SubmitButton({ children }: { children: React.ReactNode }) {
  const { pending } = useFormStatus();
  
  return (
    <button type="submit" disabled={pending}>
      {pending ? (
        <>
          <Spinner />
          Submitting...
        </>
      ) : (
        children
      )}
    </button>
  );
}

// FormInput also uses useFormStatus
function FormInput({ 
  name, 
  type = 'text',
  ...props 
}: { 
  name: string;
  type?: string;
}) {
  const { pending } = useFormStatus();
  
  if (type === 'textarea') {
    return (
      <textarea
        name={name}
        disabled={pending}
        {...props}
      />
    );
  }
  
  return (
    <input
      name={name}
      type={type}
      disabled={pending}
      {...props}
    />
  );
}

// Form-wide loading overlay
function FormOverlay() {
  const { pending } = useFormStatus();
  
  if (!pending) return null;
  
  return (
    <div className="form-overlay">
      <Spinner />
      <p>Submitting form...</p>
    </div>
  );
}

// Complete form example
function CompleteForm() {
  const [state, formAction] = useActionState(submitForm, {});
  
  return (
    <form action={formAction}>
      <FormOverlay />
      
      <FormInput name="name" required />
      <FormInput name="email" type="email" required />
      <FormInput name="message" type="textarea" required />
      
      <SubmitButton>Submit</SubmitButton>
      
      {state.error && <ErrorMessage>{state.error}</ErrorMessage>}
      {state.message && <SuccessMessage>{state.message}</SuccessMessage>}
    </form>
  );
}

// useFormStatus provides:
// - pending: Boolean - true when form is submitting
// - data: FormData - current form data
// - method: 'get' | 'post' - HTTP method
// - action: string | Function - form action

// Accessing form data
function FormDataPreview() {
  const { pending, data } = useFormStatus();
  
  if (!pending || !data) return null;
  
  return (
    <div className="form-preview">
      <p>Submitting:</p>
      <ul>
        {Array.from(data.entries()).map(([key, value]) => (
          <li key={key}>
            {key}: {String(value)}
          </li>
        ))}
      </ul>
    </div>
  );
}`,
            explanation: "useFormStatus eliminates prop drilling by automatically detecting form submission status. Child components can access pending state, form data, and other form information without receiving props."
          }
        },
        {
          title: "Lesson 5: Combining Traditional and React 19 Patterns",
          content: "You can combine traditional controlled components with React 19 hooks for maximum flexibility.\n\nHybrid Approach:\n• Use controlled components for complex validation\n• Use useActionState for submission\n• Use useFormStatus for child components\n• Combine client and server validation\n\nBest Practices:\n• Validate on client for UX\n• Validate on server for security\n• Use controlled components for complex forms\n• Use useActionState for simple forms\n• Leverage useFormStatus to avoid prop drilling",
          codeExample: {
            code: `// Hybrid: Controlled inputs + useActionState
function AdvancedForm() {
  // Traditional controlled state for complex validation
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [clientErrors, setClientErrors] = useState<Record<string, string>>({});
  
  // React 19 for submission
  const [serverState, formAction, pending] = useActionState(
    submitForm,
    {}
  );
  
  // Client-side validation
  const validateField = (name: string, value: string) => {
    const errors: Record<string, string> = {};
    
    if (name === 'email' && value && !value.includes('@')) {
      errors.email = 'Invalid email';
    }
    
    if (name === 'password' && value && value.length < 8) {
      errors.password = 'Password too short';
    }
    
    setClientErrors(prev => ({ ...prev, ...errors }));
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    validateField(name, value);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Client-side validation before submit
    if (Object.keys(clientErrors).length > 0) {
      return;
    }
    
    // Convert to FormData for server action
    const formDataObj = new FormData();
    formDataObj.append('email', formData.email);
    formDataObj.append('password', formData.password);
    
    // Submit with server action
    await formAction(formDataObj);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        disabled={pending}
      />
      {clientErrors.email && (
        <span className="error">{clientErrors.email}</span>
      )}
      {serverState.errors?.email && (
        <span className="error">{serverState.errors.email}</span>
      )}
      
      <input
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        disabled={pending}
      />
      {clientErrors.password && (
        <span className="error">{clientErrors.password}</span>
      )}
      
      <SubmitButton />
    </form>
  );
}

// SubmitButton uses useFormStatus
function SubmitButton() {
  const { pending } = useFormStatus();
  
  return (
    <button type="submit" disabled={pending}>
      {pending ? 'Submitting...' : 'Submit'}
    </button>
  );
}

// Progressive enhancement pattern
function ProgressiveForm() {
  // Works without JavaScript (HTML5 validation)
  // Enhanced with React for better UX
  const [state, formAction, pending] = useActionState(submitForm, {});
  
  return (
    <form action={formAction}>
      <input
        name="email"
        type="email"
        required
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"
        disabled={pending}
      />
      
      <SubmitButton />
      
      {/* Enhanced with React */}
      {state.error && <ErrorMessage>{state.error}</ErrorMessage>}
      {state.message && <SuccessMessage>{state.message}</SuccessMessage>}
    </form>
  );
}`,
            explanation: "Combine traditional controlled components with React 19 hooks for maximum flexibility. Use controlled components for complex client-side validation and useActionState for server-side processing."
          }
        },
        {
          title: "Lesson 6: Form State Management Patterns",
          content: "Learn different patterns for managing form state effectively.\n\nState Management Options:\n• Individual useState for each field\n• Single useState object for all fields\n• useReducer for complex forms\n• useActionState for server actions\n• Custom hooks for reusable logic\n\nChoosing the Right Pattern:\n• Simple forms: Individual useState or object\n• Complex forms: useReducer\n• Server actions: useActionState\n• Reusable logic: Custom hooks",
          codeExample: {
            code: `// Pattern 1: Individual useState (simple forms)
function SimpleForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  
  return (
    <form>
      <input value={name} onChange={e => setName(e.target.value)} />
      <input value={email} onChange={e => setEmail(e.target.value)} />
    </form>
  );
}

// Pattern 2: Single state object (better for multiple fields)
function ObjectForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  return (
    <form>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
    </form>
  );
}

// Pattern 3: useReducer (complex forms)
type FormAction =
  | { type: 'SET_FIELD'; field: string; value: string }
  | { type: 'SET_ERRORS'; errors: Record<string, string> }
  | { type: 'RESET' };

function reducer(state: any, action: FormAction) {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value };
    case 'SET_ERRORS':
      return { ...state, errors: action.errors };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

function ComplexForm() {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    email: '',
    errors: {},
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'SET_FIELD',
      field: e.target.name,
      value: e.target.value,
    });
  };
  
  return (
    <form>
      <input
        name="name"
        value={state.name}
        onChange={handleChange}
      />
    </form>
  );
}

// Pattern 4: Custom hook for reusable form logic
function useForm<T extends Record<string, any>>(initialValues: T) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  
  const setValue = (name: keyof T, value: any) => {
    setValues(prev => ({ ...prev, [name]: value }));
    // Clear error when field changes
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const setError = (name: keyof T, error: string) => {
    setErrors(prev => ({ ...prev, [name]: error }));
  };
  
  const reset = () => {
    setValues(initialValues);
    setErrors({});
  };
  
  return {
    values,
    errors,
    setValue,
    setError,
    reset,
  };
}

// Using custom hook
function FormWithHook() {
  const { values, errors, setValue, setError } = useForm({
    email: '',
    password: '',
  });
  
  return (
    <form>
      <input
        value={values.email}
        onChange={e => setValue('email', e.target.value)}
      />
      {errors.email && <span>{errors.email}</span>}
    </form>
  );
}

// Pattern 5: React 19 with useActionState
function ModernForm() {
  const [state, formAction, pending] = useActionState(submitForm, {});
  
  // Simpler - state managed by useActionState
  return (
    <form action={formAction}>
      <input name="email" disabled={pending} />
      {state.errors?.email && <span>{state.errors.email}</span>}
      <button type="submit" disabled={pending}>Submit</button>
    </form>
  );
}`,
            explanation: "Choose the right state management pattern based on form complexity. Simple forms can use individual useState, complex forms benefit from useReducer, and React 19 forms can use useActionState for built-in state management."
          }
        },
        {
          title: "Lesson 7: Real-World Form Examples",
          content: "See complete, production-ready form examples using React 19 patterns.\n\nExample Forms:\n• Contact form\n• Registration form\n• Login form\n• Search form\n• Multi-step form\n\nEach example demonstrates:\n• Proper validation\n• Error handling\n• Loading states\n• Success feedback\n• Accessibility",
          codeExample: {
            code: `// Example 1: Contact Form with React 19
'use server';
export async function submitContact(
  prevState: any,
  formData: FormData
) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;
  
  if (!name || name.trim().length < 2) {
    return { error: 'Name must be at least 2 characters' };
  }
  
  if (!email || !email.includes('@')) {
    return { error: 'Invalid email address' };
  }
  
  if (!message || message.trim().length < 10) {
    return { error: 'Message must be at least 10 characters' };
  }
  
  await sendEmail({ name, email, message });
  
  return { message: 'Message sent successfully!' };
}

function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, {});
  
  return (
    <form action={formAction} className="contact-form">
      <FormInput
        name="name"
        label="Name"
        required
        minLength={2}
      />
      
      <FormInput
        name="email"
        type="email"
        label="Email"
        required
      />
      
      <FormTextarea
        name="message"
        label="Message"
        required
        minLength={10}
      />
      
      {state.error && (
        <ErrorMessage>{state.error}</ErrorMessage>
      )}
      
      {state.message && (
        <SuccessMessage>{state.message}</SuccessMessage>
      )}
      
      <SubmitButton>Send Message</SubmitButton>
    </form>
  );
}

// Reusable form components
function FormInput({ 
  name, 
  label, 
  type = 'text',
  ...props 
}: {
  name: string;
  label: string;
  type?: string;
}) {
  const { pending } = useFormStatus();
  
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        disabled={pending}
        {...props}
      />
    </div>
  );
}

function FormTextarea({ 
  name, 
  label,
  ...props 
}: {
  name: string;
  label: string;
}) {
  const { pending } = useFormStatus();
  
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <textarea
        id={name}
        name={name}
        disabled={pending}
        {...props}
      />
    </div>
  );
}

function SubmitButton({ children }: { children: React.ReactNode }) {
  const { pending } = useFormStatus();
  
  return (
    <button type="submit" disabled={pending}>
      {pending ? (
        <>
          <Spinner />
          Submitting...
        </>
      ) : (
        children
      )}
    </button>
  );
}

// Example 2: Multi-step form
function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    personal: { name: '', email: '' },
    address: { street: '', city: '' },
    payment: { card: '', cvv: '' },
  });
  
  const [state, formAction, pending] = useActionState(submitForm, {});
  
  const handleNext = () => {
    setStep(s => s + 1);
  };
  
  const handleBack = () => {
    setStep(s => s - 1);
  };
  
  return (
    <form action={formAction}>
      {step === 1 && (
        <PersonalInfoStep
          data={formData.personal}
          onChange={(data) => setFormData(prev => ({
            ...prev,
            personal: data,
          }))}
        />
      )}
      
      {step === 2 && (
        <AddressStep
          data={formData.address}
          onChange={(data) => setFormData(prev => ({
            ...prev,
            address: data,
          }))}
        />
      )}
      
      {step === 3 && (
        <PaymentStep
          data={formData.payment}
          onChange={(data) => setFormData(prev => ({
            ...prev,
            payment: data,
          }))}
        />
      )}
      
      <div className="form-actions">
        {step > 1 && (
          <button type="button" onClick={handleBack} disabled={pending}>
            Back
          </button>
        )}
        {step < 3 ? (
          <button type="button" onClick={handleNext}>
            Next
          </button>
        ) : (
          <SubmitButton>Submit</SubmitButton>
        )}
      </div>
    </form>
  );
}

// Example 3: Search form with debouncing
function SearchForm() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const debouncedQuery = useDebounce(query, 300);
  
  useEffect(() => {
    if (debouncedQuery) {
      search(debouncedQuery).then(setResults);
    }
  }, [debouncedQuery]);
  
  return (
    <form>
      <input
        type="search"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search..."
      />
      {results.length > 0 && (
        <ul>
          {results.map(result => (
            <li key={result.id}>{result.title}</li>
          ))}
        </ul>
      )}
    </form>
  );
}`,
            explanation: "Real-world forms combine validation, error handling, loading states, and user feedback. Use React 19 hooks for simpler, more maintainable form code. Extract reusable form components for consistency."
          }
        },
        {
          title: "Lesson 8: Accessibility and Best Practices",
          content: "Accessible forms are essential for all users. Learn best practices.\n\nAccessibility Requirements:\n• Proper labels for all inputs\n• Error messages associated with fields\n• Keyboard navigation\n• Screen reader support\n• Focus management\n• ARIA attributes\n\nBest Practices:\n• Use semantic HTML\n• Associate labels with inputs\n• Provide clear error messages\n• Use proper input types\n• Support keyboard navigation\n• Test with screen readers",
          codeExample: {
            code: `// Accessible form example
function AccessibleForm() {
  const [state, formAction, pending] = useActionState(submitForm, {});
  
  return (
    <form action={formAction} aria-label="Contact form">
      <div>
        <label htmlFor="name">
          Name <span aria-label="required">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          aria-required="true"
          aria-invalid={!!state.errors?.name}
          aria-describedby={state.errors?.name ? 'name-error' : undefined}
          disabled={pending}
        />
        {state.errors?.name && (
          <span id="name-error" role="alert" className="error">
            {state.errors.name}
          </span>
        )}
      </div>
      
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          aria-required="true"
          aria-invalid={!!state.errors?.email}
          aria-describedby={state.errors?.email ? 'email-error' : undefined}
          disabled={pending}
        />
        {state.errors?.email && (
          <span id="email-error" role="alert" className="error">
            {state.errors.email}
          </span>
        )}
      </div>
      
      <button
        type="submit"
        disabled={pending}
        aria-busy={pending}
      >
        {pending ? 'Submitting...' : 'Submit'}
      </button>
      
      {state.message && (
        <div role="status" aria-live="polite">
          {state.message}
        </div>
      )}
    </form>
  );
}

// Accessible form components
function AccessibleInput({
  id,
  label,
  error,
  ...props
}: {
  id: string;
  label: string;
  error?: string;
}) {
  const { pending } = useFormStatus();
  
  return (
    <div>
      <label htmlFor={id}>
        {label}
        {props.required && <span aria-label="required">*</span>}
      </label>
      <input
        id={id}
        aria-invalid={!!error}
        aria-describedby={error ? \`\${id}-error\` : undefined}
        disabled={pending}
        {...props}
      />
      {error && (
        <span
          id={\`\${id}-error\`}
          role="alert"
          className="error"
        >
          {error}
        </span>
      )}
    </div>
  );
}

// Form validation feedback
function FormField({ 
  id, 
  label, 
  error, 
  children 
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      {children}
      {error && (
        <span
          id={\`\${id}-error\`}
          role="alert"
          aria-live="polite"
          className="error"
        >
          {error}
        </span>
      )}
    </div>
  );
}

// Keyboard navigation
function KeyboardAccessibleForm() {
  const formRef = useRef<HTMLFormElement>(null);
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Escape to reset form
    if (e.key === 'Escape') {
      formRef.current?.reset();
    }
  };
  
  return (
    <form
      ref={formRef}
      onKeyDown={handleKeyDown}
      aria-label="Form with keyboard shortcuts"
    >
      {/* Form fields */}
    </form>
  );
}`,
            explanation: "Accessible forms use proper labels, ARIA attributes, error associations, and keyboard navigation. Always test with screen readers and ensure all users can use your forms effectively."
          }
        }
      ],
      conclusion: "Form handling in React has evolved significantly with React 19. Use controlled components for complex validation, useActionState for server-side processing, and useFormStatus to eliminate prop drilling. Always validate on both client and server, provide clear feedback, and ensure your forms are accessible to all users."
    }
  },
  {
    id: "intermediate-4",
    title: "Error Handling and Error Boundaries",
    description: "Learn comprehensive error handling strategies including error boundaries, error logging, and graceful error recovery in React applications.",
    level: "intermediate",
    estimatedTime: "90 min",
    topics: ["Error Boundaries", "Error Handling", "Fallback UI", "Error Logging", "Async Errors", "Error Recovery"],
    prerequisites: ["Handling Forms and User Input"],
    videoUrl: "https://www.youtube.com/watch?v=2U9jJ9Riykk", // React Error Boundaries - Web Dev Simplified
    content: {
      overview: "Errors are inevitable in production applications. React error boundaries provide a way to catch JavaScript errors anywhere in the component tree and display fallback UI instead of crashing the entire app. This tutorial covers error boundaries (both class components and modern alternatives), error logging, handling async errors, form validation errors, error recovery patterns, and best practices for building resilient React applications. You'll learn to create graceful error experiences that inform users while providing developers with actionable error information.",
      sections: [
        {
          title: "Lesson 1: Understanding Errors in React",
          content: "Before diving into error boundaries, it's important to understand what types of errors occur in React applications and how they behave.\n\nTypes of Errors:\n• Render errors (component crashes)\n• Event handler errors (don't break UI)\n• Async errors (promises, setTimeout)\n• Lifecycle errors (useEffect, etc.)\n• Third-party library errors\n\nWhat Error Boundaries Catch:\n✅ Errors during rendering\n✅ Errors in lifecycle methods\n✅ Errors in constructors\n\nWhat Error Boundaries DON'T Catch:\n❌ Event handler errors\n❌ Async code (setTimeout, promises)\n❌ Errors during server-side rendering\n❌ Errors in the error boundary itself\n❌ Errors in error recovery code\n\nDefault Behavior:\n• Without error boundaries, React unmounts the entire component tree\n• Users see blank screen\n• No way to recover\n• Errors logged to console only",
          codeExample: {
            code: `// Error that WILL be caught by error boundary
function BuggyComponent() {
  const data = null;
  return <div>{data.name}</div>; // TypeError: Cannot read property 'name' of null
}

// Error that WON'T be caught (event handler)
function ComponentWithEventError() {
  const handleClick = () => {
    throw new Error('Event handler error');
  };
  return <button onClick={handleClick}>Click</button>;
}

// Error that WON'T be caught (async)
function ComponentWithAsyncError() {
  useEffect(() => {
    // This won't be caught by error boundary!
    setTimeout(() => {
      throw new Error('Async error');
    }, 1000);
  }, []);
  
  return <div>Component</div>;
}

// Error that WILL be caught (render error)
function ComponentWithRenderError() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    setData({ name: 'Test' });
  }, []);
  
  // This will be caught if data is null
  return <div>{data.name}</div>;
}

// Complete example showing error behavior
function App() {
  return (
    <div>
      {/* Without error boundary - app crashes */}
      <BuggyComponent />
      
      {/* Event handler error - doesn't crash app */}
      <ComponentWithEventError />
      
      {/* Async error - doesn't crash app but can cause issues */}
      <ComponentWithAsyncError />
    </div>
  );
}`,
            explanation: "Understanding what errors boundaries catch and don't catch is crucial. Render errors are caught, but event handler errors and async errors need different handling strategies."
          }
        },
        {
          title: "Lesson 2: Introduction to Error Boundaries",
          content: "Error boundaries are React components that catch JavaScript errors anywhere in their child component tree.\n\nKey Concepts:\n• Error boundaries are React components\n• They catch errors in child components\n• Display fallback UI instead of crashing\n• Allow graceful error handling\n• Can log errors for monitoring\n\nBenefits:\n• Prevent entire app crashes\n• Better user experience\n• Error isolation\n• Graceful degradation\n• Better error visibility\n\nWhen to Use:\n• Wrap route components\n• Wrap feature sections\n• Wrap third-party components\n• Wrap unstable components\n• Wrap data-fetching components",
          codeExample: {
            code: `// Basic error boundary concept
// Error boundaries catch errors in their child tree
function App() {
  return (
    <ErrorBoundary>
      <Header />
      <MainContent /> {/* If this crashes, ErrorBoundary catches it */}
      <Footer />
    </ErrorBoundary>
  );
}

// Without error boundary
function AppWithoutBoundary() {
  return (
    <div>
      <Header />
      <BuggyComponent /> {/* App crashes entirely */}
      <Footer />
    </div>
  );
}

// With error boundary
function AppWithBoundary() {
  return (
    <ErrorBoundary>
      <Header />
      <BuggyComponent /> {/* Only this section shows error UI */}
      <Footer /> {/* This still renders */}
    </ErrorBoundary>
  );
}

// Multiple error boundaries for isolation
function AppWithMultipleBoundaries() {
  return (
    <ErrorBoundary fallback={<AppErrorFallback />}>
      <Header />
      
      <ErrorBoundary fallback={<FeatureErrorFallback />}>
        <MainFeature />
      </ErrorBoundary>
      
      <ErrorBoundary fallback={<SidebarErrorFallback />}>
        <Sidebar />
      </ErrorBoundary>
      
      <Footer />
    </ErrorBoundary>
  );
}`,
            explanation: "Error boundaries catch errors in their child tree and display fallback UI. You can use multiple error boundaries to isolate errors and prevent cascading failures."
          }
        },
        {
          title: "Lesson 3: Creating Error Boundaries with Class Components",
          content: "Error boundaries must be class components. They need to implement getDerivedStateFromError or componentDidCatch (or both).\n\nRequired Methods:\n• getDerivedStateFromError: Update state to render fallback UI\n• componentDidCatch: Log errors, send to monitoring service\n\nError Boundary Lifecycle:\n1. Error occurs in child component\n2. getDerivedStateFromError called\n3. componentDidCatch called\n4. Fallback UI rendered\n5. Error logged/monitored\n\nBest Practices:\n• Always implement both methods\n• Log errors to monitoring service\n• Provide helpful fallback UI\n• Allow error recovery\n• Reset error state when needed",
          codeExample: {
            code: `// Basic error boundary
interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }
  
  // Called during render phase - update state to show fallback UI
  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return {
      hasError: true,
      error,
    };
  }
  
  // Called after render - log error, send to monitoring
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error details
    console.error('Error caught by boundary:', error);
    console.error('Error info:', errorInfo);
    
    // Send to error monitoring service (Sentry, LogRocket, etc.)
    // logErrorToService(error, errorInfo);
    
    // Store error info for display
    this.setState({
      errorInfo,
    });
  }
  
  render() {
    if (this.state.hasError) {
      // Custom fallback UI or default
      if (this.props.fallback) {
        return this.props.fallback;
      }
      
      // Default fallback UI
      return (
        <div className="error-boundary">
          <h2>Something went wrong</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo?.componentStack}
          </details>
        </div>
      );
    }
    
    return this.props.children;
  }
}

// Usage
function App() {
  return (
    <ErrorBoundary fallback={<ErrorFallback />}>
      <MainApp />
    </ErrorBoundary>
  );
}

// Error boundary with reset capability
class ResettableErrorBoundary extends React.Component<
  { children: React.ReactNode; resetKeys?: unknown[] },
  ErrorBoundaryState
> {
  constructor(props: { children: React.ReactNode; resetKeys?: unknown[] }) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }
  
  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return { hasError: true, error };
  }
  
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error:', error, errorInfo);
    this.setState({ errorInfo });
  }
  
  // Reset error state when resetKeys change
  componentDidUpdate(prevProps: { resetKeys?: unknown[] }) {
    if (
      this.state.hasError &&
      prevProps.resetKeys &&
      this.props.resetKeys &&
      prevProps.resetKeys.some((key, i) => key !== this.props.resetKeys?.[i])
    ) {
      this.setState({
        hasError: false,
        error: null,
        errorInfo: null,
      });
    }
  }
  
  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Something went wrong</h2>
          <button onClick={() => this.setState({ hasError: false, error: null })}>
            Try again
          </button>
        </div>
      );
    }
    
    return this.props.children;
  }
}

// Usage with reset
function AppWithReset() {
  const [userId, setUserId] = useState(1);
  
  return (
    <ResettableErrorBoundary resetKeys={[userId]}>
      <UserProfile userId={userId} />
      <button onClick={() => setUserId(id => id + 1)}>
        Switch User
      </button>
    </ResettableErrorBoundary>
  );
}`,
            explanation: "Error boundaries are class components that implement getDerivedStateFromError (for state updates) and componentDidCatch (for error logging). You can add reset functionality by watching for prop changes."
          }
        },
        {
          title: "Lesson 4: Modern Error Boundary Patterns",
          content: "Since error boundaries must be class components, developers have created patterns and libraries to make them easier to use with hooks.\n\nModern Approaches:\n• react-error-boundary library (recommended)\n• Custom hooks wrapper pattern\n• Higher-order component pattern\n• Functional component wrappers\n\nBenefits:\n• Simpler API\n• Built-in features (reset, logging)\n• Better TypeScript support\n• More flexible fallback handling\n• Hook-like usage patterns",
          codeExample: {
            code: `// Using react-error-boundary library (most popular)
// npm install react-error-boundary

import { ErrorBoundary } from 'react-error-boundary';

// Simple usage
function App() {
  return (
    <ErrorBoundary fallback={<ErrorFallback />}>
      <MyComponent />
    </ErrorBoundary>
  );
}

// With error reset
function ErrorFallback({ error, resetErrorBoundary }: { 
  error: Error; 
  resetErrorBoundary: () => void;
}) {
  return (
    <div role="alert">
      <h2>Something went wrong:</h2>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // Reset app state, reload, etc.
        window.location.reload();
      }}
      resetKeys={['userId']} // Reset when userId changes
    >
      <MyComponent />
    </ErrorBoundary>
  );
}

// With error logging
function AppWithLogging() {
  const logError = (error: Error, errorInfo: { componentStack: string }) => {
    // Send to error monitoring service
    console.error('Logged error:', error, errorInfo);
    // sendToErrorService(error, errorInfo);
  };
  
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={logError}
    >
      <MyComponent />
    </ErrorBoundary>
  );
}

// Error boundary with retry
function ErrorFallbackWithRetry({ 
  error, 
  resetErrorBoundary 
}: { 
  error: Error; 
  resetErrorBoundary: () => void;
}) {
  const [retryCount, setRetryCount] = useState(0);
  
  const handleRetry = () => {
    setRetryCount(c => c + 1);
    resetErrorBoundary();
  };
  
  return (
    <div role="alert">
      <h2>Error occurred</h2>
      <p>{error.message}</p>
      {retryCount < 3 ? (
        <button onClick={handleRetry}>
          Retry (attempt {retryCount + 1}/3)
        </button>
      ) : (
        <p>Max retries reached. Please refresh the page.</p>
      )}
    </div>
  );
}

// Custom hook wrapper pattern
function useErrorHandler() {
  const [error, setError] = useState<Error | null>(null);
  
  if (error) {
    throw error;
  }
  
  return setError;
}

function ComponentWithErrorHandler() {
  const handleError = useErrorHandler();
  
  const handleClick = () => {
    try {
      // Something that might throw
      riskyOperation();
    } catch (error) {
      handleError(error as Error);
    }
  };
  
  return <button onClick={handleClick}>Do Risky Thing</button>;
}

function App() {
  return (
    <ErrorBoundary>
      <ComponentWithErrorHandler />
    </ErrorBoundary>
  );
}

// Higher-order component pattern
function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  fallback?: React.ReactNode
) {
  return function WrappedComponent(props: P) {
    return (
      <ErrorBoundary fallback={fallback}>
        <Component {...props} />
      </ErrorBoundary>
    );
  };
}

// Usage
const SafeComponent = withErrorBoundary(UnsafeComponent, <ErrorFallback />);

function App() {
  return <SafeComponent />;
}`,
            explanation: "Modern patterns like react-error-boundary library provide simpler APIs for error boundaries. You can also create custom hooks and HOCs for reusable error handling patterns."
          }
        },
        {
          title: "Lesson 5: Handling Async Errors",
          content: "Error boundaries don't catch errors in async code. You need special handling for promises, setTimeout, event handlers, etc.\n\nAsync Error Challenges:\n• Error boundaries only catch render/lifecycle errors\n• Async errors happen outside React's render cycle\n• Event handlers throw but don't trigger error boundaries\n• Need explicit error handling\n\nStrategies:\n• Try-catch in async functions\n• Error handling in useEffect\n• Promise error handlers\n• Error event listeners\n• Custom hooks for async operations",
          codeExample: {
            code: `// ❌ ERROR: This won't be caught by error boundary
function ComponentWithAsyncError() {
  useEffect(() => {
    // Uncaught promise rejection!
    fetch('/api/data')
      .then(res => res.json())
      .then(data => {
        // If this throws, error boundary won't catch it
        console.log(data.nonexistent.property);
      });
  }, []);
  
  return <div>Component</div>;
}

// ✅ FIX: Handle async errors properly
function ComponentWithAsyncErrorHandling() {
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        // Catch and set error state
        setError(err);
      });
  }, []);
  
  if (error) {
    throw error; // Now error boundary will catch it
  }
  
  return <div>Component</div>;
}

// Custom hook for async operations
function useAsync<T>(
  asyncFunction: () => Promise<T>
): {
  data: T | null;
  error: Error | null;
  loading: boolean;
} {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    asyncFunction()
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [asyncFunction]);
  
  return { data, error, loading };
}

// Usage with error boundary
function DataComponent() {
  const { data, error, loading } = useAsync(() => fetch('/api/data').then(r => r.json()));
  
  if (error) {
    throw error; // Error boundary catches this
  }
  
  if (loading) return <div>Loading...</div>;
  
  return <div>{JSON.stringify(data)}</div>;
}

// Async error boundary pattern
class AsyncErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { error: null };
  }
  
  static getDerivedStateFromError(error: Error) {
    return { error };
  }
  
  componentDidMount() {
    // Listen for unhandled promise rejections
    window.addEventListener('unhandledrejection', this.handleRejection);
  }
  
  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.handleRejection);
  }
  
  handleRejection = (event: PromiseRejectionEvent) => {
    this.setState({ error: event.reason });
    event.preventDefault(); // Prevent default console error
  };
  
  render() {
    if (this.state.error) {
      return <div>Error: {this.state.error.message}</div>;
    }
    return this.props.children;
  }
}

// Error handling in event handlers
function ComponentWithEventHandler() {
  const [error, setError] = useState<Error | null>(null);
  
  const handleClick = () => {
    try {
      // Risky operation
      riskyFunction();
    } catch (error) {
      setError(error as Error);
    }
  };
  
  // Throw error to trigger error boundary
  if (error) {
    throw error;
  }
  
  return <button onClick={handleClick}>Click</button>;
}

// Global error handler for uncaught errors
useEffect(() => {
  const handleError = (event: ErrorEvent) => {
    // Send to error monitoring service
    console.error('Global error:', event.error);
    // logError(event.error);
  };
  
  const handleRejection = (event: PromiseRejectionEvent) => {
    // Send to error monitoring service
    console.error('Unhandled rejection:', event.reason);
    // logError(event.reason);
  };
  
  window.addEventListener('error', handleError);
  window.addEventListener('unhandledrejection', handleRejection);
  
  return () => {
    window.removeEventListener('error', handleError);
    window.removeEventListener('unhandledrejection', handleRejection);
  };
}, []);`,
            explanation: "Async errors require explicit handling since error boundaries don't catch them. Use try-catch in async functions, handle promise rejections, and throw errors in component state to trigger error boundaries."
          }
        },
        {
          title: "Lesson 6: Error Logging and Monitoring",
          content: "Logging errors is crucial for debugging production issues. Learn how to integrate error monitoring services.\n\nError Logging Benefits:\n• Track errors in production\n• Get alerts for critical errors\n• See error frequency and patterns\n• Debug with stack traces\n• Monitor error trends\n\nPopular Services:\n• Sentry (most popular)\n• LogRocket\n• Bugsnag\n• Rollbar\n• Datadog\n\nWhat to Log:\n• Error message and stack trace\n• Component stack\n• User context (userId, route)\n• Browser/environment info\n• User actions before error\n• Redux state (if applicable)",
          codeExample: {
            code: `// Basic error logging utility
class ErrorLogger {
  static log(error: Error, errorInfo?: React.ErrorInfo, context?: Record<string, unknown>) {
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error:', error);
      console.error('Error Info:', errorInfo);
      console.error('Context:', context);
    }
    
    // Send to monitoring service in production
    if (process.env.NODE_ENV === 'production') {
      // Example: Send to Sentry
      // Sentry.captureException(error, {
      //   contexts: {
      //     react: { componentStack: errorInfo?.componentStack },
      //   },
      //   extra: context,
      // });
      
      // Or send to your own API
      fetch('/api/errors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: error.message,
          stack: error.stack,
          componentStack: errorInfo?.componentStack,
          context,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          url: window.location.href,
        }),
      }).catch(() => {
        // Silently fail if logging fails
      });
    }
  }
}

// Error boundary with logging
class LoggingErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }
  
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error with context
    ErrorLogger.log(error, errorInfo, {
      userId: this.getUserId(),
      route: window.location.pathname,
      timestamp: new Date().toISOString(),
    });
  }
  
  getUserId() {
    // Get from context, localStorage, etc.
    return localStorage.getItem('userId') || 'anonymous';
  }
  
  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }
    return this.props.children;
  }
}

// Sentry integration example
// npm install @sentry/react

import * as Sentry from '@sentry/react';

// Initialize Sentry
Sentry.init({
  dsn: 'YOUR_SENTRY_DSN',
  environment: process.env.NODE_ENV,
  integrations: [
    new Sentry.BrowserTracing(),
    new Sentry.Replay(),
  ],
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

// Wrap app with Sentry error boundary
function App() {
  return (
    <Sentry.ErrorBoundary fallback={<ErrorFallback />}>
      <MyApp />
    </Sentry.ErrorBoundary>
  );
}

// Add user context
Sentry.setUser({
  id: '123',
  email: 'user@example.com',
});

// Add breadcrumbs for context
Sentry.addBreadcrumb({
  category: 'user',
  message: 'User clicked button',
  level: 'info',
});

// Manual error reporting
try {
  riskyOperation();
} catch (error) {
  Sentry.captureException(error, {
    tags: {
      section: 'checkout',
    },
    extra: {
      cartId: cartId,
      total: total,
    },
  });
}

// Custom error boundary with Sentry
class SentryErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    Sentry.captureException(error, {
      contexts: {
        react: {
          componentStack: errorInfo.componentStack,
        },
      },
    });
  }
  
  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }
    return this.props.children;
  }
}

// Error logging with retry tracking
class ErrorWithRetryLogger {
  private static retryCounts = new Map<string, number>();
  
  static log(
    error: Error,
    errorInfo?: React.ErrorInfo,
    maxRetries = 3
  ) {
    const errorKey = error.message + error.stack?.slice(0, 100);
    const retryCount = this.retryCounts.get(errorKey) || 0;
    
    if (retryCount < maxRetries) {
      this.retryCounts.set(errorKey, retryCount + 1);
      
      ErrorLogger.log(error, errorInfo, {
        retryCount: retryCount + 1,
        maxRetries,
      });
    } else {
      // Alert for repeated errors
      console.error('Error exceeded max retries:', error);
      // sendAlert(error);
    }
  }
  
  static reset(error: Error) {
    const errorKey = error.message + error.stack?.slice(0, 100);
    this.retryCounts.delete(errorKey);
  }
}`,
            explanation: "Error logging is essential for production debugging. Use error monitoring services like Sentry, or build your own logging system. Include context like user ID, route, and component stack for better debugging."
          }
        },
        {
          title: "Lesson 7: Form and Validation Errors",
          content: "Form errors are different from component errors. They're expected and part of normal user flow.\n\nForm Error Types:\n• Validation errors (client-side)\n• Server validation errors\n• Network errors\n• Business logic errors\n\nBest Practices:\n• Show errors inline with fields\n• Clear errors when user fixes input\n• Show general form errors\n• Prevent submission if errors exist\n• Use React 19 useActionState for server errors\n\nError Display Patterns:\n• Inline field errors\n• Summary at top of form\n• Toast notifications\n• Error modals for critical errors",
          codeExample: {
            code: `// Form error handling with React 19 useActionState
'use server';
export async function submitForm(
  prevState: { errors?: Record<string, string>; message?: string },
  formData: FormData
) {
  const errors: Record<string, string> = {};
  
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  
  // Validation errors
  if (!email || !email.includes('@')) {
    errors.email = 'Please enter a valid email';
  }
  
  if (!password || password.length < 8) {
    errors.password = 'Password must be at least 8 characters';
  }
  
  if (Object.keys(errors).length > 0) {
    return { errors };
  }
  
  // Business logic errors
  try {
    await createUser({ email, password });
    return { message: 'Account created successfully!' };
  } catch (error) {
    if (error instanceof EmailExistsError) {
      return { errors: { email: 'This email is already registered' } };
    }
    return { errors: { _form: 'Something went wrong. Please try again.' } };
  }
}

// Client component with error handling
'use client';
import { useActionState } from 'react';

function RegistrationForm() {
  const [state, formAction, pending] = useActionState(submitForm, {});
  
  return (
    <form action={formAction}>
      {/* General form error */}
      {state.errors?._form && (
        <div className="form-error">{state.errors._form}</div>
      )}
      
      {/* Field-level errors */}
      <div>
        <input
          name="email"
          type="email"
          disabled={pending}
          aria-invalid={!!state.errors?.email}
          aria-describedby={state.errors?.email ? 'email-error' : undefined}
        />
        {state.errors?.email && (
          <span id="email-error" className="field-error" role="alert">
            {state.errors.email}
          </span>
        )}
      </div>
      
      <div>
        <input
          name="password"
          type="password"
          disabled={pending}
          aria-invalid={!!state.errors?.password}
          aria-describedby={state.errors?.password ? 'password-error' : undefined}
        />
        {state.errors?.password && (
          <span id="password-error" className="field-error" role="alert">
            {state.errors.password}
          </span>
        )}
      </div>
      
      {/* Success message */}
      {state.message && (
        <div className="success-message" role="alert">
          {state.message}
        </div>
      )}
      
      <button type="submit" disabled={pending}>
        {pending ? 'Creating Account...' : 'Register'}
      </button>
    </form>
  );
}

// Traditional form with error state
function FormWithErrorHandling() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  
  const validate = (name: string, value: string) => {
    const newErrors: Record<string, string> = {};
    
    if (name === 'email' && value && !value.includes('@')) {
      newErrors.email = 'Invalid email format';
    }
    
    if (name === 'password' && value && value.length < 8) {
      newErrors.password = 'Password must be 8+ characters';
    }
    
    setErrors(prev => ({ ...prev, ...newErrors }));
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
    
    // Validate
    validate(name, value);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    
    // Final validation
    const finalErrors: Record<string, string> = {};
    if (!formData.email.includes('@')) {
      finalErrors.email = 'Please enter a valid email';
    }
    if (formData.password.length < 8) {
      finalErrors.password = 'Password must be 8+ characters';
    }
    
    if (Object.keys(finalErrors).length > 0) {
      setErrors(finalErrors);
      return;
    }
    
    try {
      await submitForm(formData);
    } catch (error) {
      if (error instanceof NetworkError) {
        setSubmitError('Network error. Please check your connection.');
      } else if (error instanceof ValidationError) {
        setErrors(error.errors);
      } else {
        setSubmitError('An unexpected error occurred. Please try again.');
        // Log unexpected errors
        ErrorLogger.log(error as Error);
      }
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      {submitError && (
        <div className="form-error" role="alert">
          {submitError}
        </div>
      )}
      
      <div>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <span className="field-error" role="alert">{errors.email}</span>
        )}
      </div>
      
      <div>
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          aria-invalid={!!errors.password}
        />
        {errors.password && (
          <span className="field-error" role="alert">{errors.password}</span>
        )}
      </div>
      
      <button type="submit">Submit</button>
    </form>
  );
}

// Error summary pattern
function FormWithErrorSummary() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const errorSummary = Object.entries(errors);
  
  return (
    <form>
      {/* Error summary at top */}
      {errorSummary.length > 0 && (
        <div className="error-summary" role="alert">
          <h3>Please fix the following errors:</h3>
          <ul>
            {errorSummary.map(([field, message]) => (
              <li key={field}>
                <a href={\`#\${field}\`}>{message}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {/* Form fields with errors */}
      {/* ... */}
    </form>
  );
}`,
            explanation: "Form errors are expected and part of normal user flow. Use React 19's useActionState for server errors, show inline field errors, clear errors as users fix issues, and provide error summaries for accessibility."
          }
        },
        {
          title: "Lesson 8: Error Recovery and Resilience",
          content: "Good error handling doesn't just catch errors—it helps users recover from them.\n\nRecovery Strategies:\n• Retry failed operations\n• Provide alternative actions\n• Save user progress\n• Allow graceful degradation\n• Show helpful error messages\n• Provide clear next steps\n\nError Message Best Practices:\n• Use plain language\n• Explain what went wrong\n• Suggest what to do next\n• Avoid technical jargon\n• Include error codes for support\n• Make errors actionable",
          codeExample: {
            code: `// Error boundary with recovery
class RecoverableErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { error: Error | null; retryCount: number }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { error: null, retryCount: 0 };
  }
  
  static getDerivedStateFromError(error: Error) {
    return { error };
  }
  
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error:', error, errorInfo);
  }
  
  handleRetry = () => {
    if (this.state.retryCount < 3) {
      this.setState(prev => ({
        error: null,
        retryCount: prev.retryCount + 1,
      }));
    } else {
      // Max retries reached
      window.location.reload();
    }
  };
  
  render() {
    if (this.state.error) {
      return (
        <div className="error-boundary">
          <h2>Oops! Something went wrong</h2>
          <p>We encountered an unexpected error. Don't worry, your data is safe.</p>
          
          {this.state.retryCount < 3 ? (
            <div>
              <p>You can try again, or refresh the page.</p>
              <button onClick={this.handleRetry}>
                Try Again ({this.state.retryCount + 1}/3)
              </button>
              <button onClick={() => window.location.reload()}>
                Refresh Page
              </button>
            </div>
          ) : (
            <div>
              <p>We're having trouble loading this page. Please refresh or contact support.</p>
              <button onClick={() => window.location.reload()}>
                Refresh Page
              </button>
              <a href="/support">Contact Support</a>
            </div>
          )}
          
          {process.env.NODE_ENV === 'development' && (
            <details>
              <summary>Error Details</summary>
              <pre>{this.state.error.stack}</pre>
            </details>
          )}
        </div>
      );
    }
    
    return this.props.children;
  }
}

// Error with fallback content
function ComponentWithFallback() {
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch('/api/data')
      .then(r => r.json())
      .then(setData)
      .catch(setError);
  }, []);
  
  if (error) {
    // Graceful degradation
    return (
      <div className="fallback-content">
        <h3>Unable to load content</h3>
        <p>Please try again later or contact support if the problem persists.</p>
        <button onClick={() => window.location.reload()}>
          Retry
        </button>
      </div>
    );
  }
  
  if (!data) {
    return <div>Loading...</div>;
  }
  
  return <DataDisplay data={data} />;
}

// Error with partial rendering
function ResilientComponent() {
  const [sections, setSections] = useState<{
    header: { error?: Error; data?: any };
    main: { error?: Error; data?: any };
    sidebar: { error?: Error; data?: any };
  }>({
    header: {},
    main: {},
    sidebar: {},
  });
  
  return (
    <div>
      <ErrorBoundary fallback={<HeaderFallback />}>
        <Header data={sections.header.data} />
      </ErrorBoundary>
      
      <ErrorBoundary fallback={<MainFallback />}>
        <Main data={sections.main.data} />
      </ErrorBoundary>
      
      <ErrorBoundary fallback={<SidebarFallback />}>
        <Sidebar data={sections.sidebar.data} />
      </ErrorBoundary>
    </div>
  );
}

// User-friendly error messages
const ERROR_MESSAGES: Record<string, string> = {
  NETWORK_ERROR: 'Please check your internet connection and try again.',
  TIMEOUT_ERROR: 'The request took too long. Please try again.',
  NOT_FOUND: 'The requested resource could not be found.',
  UNAUTHORIZED: 'Please log in to continue.',
  FORBIDDEN: "You don't have permission to access this resource.",
  SERVER_ERROR: 'Our servers are experiencing issues. Please try again later.',
  UNKNOWN: 'Something unexpected happened. Please try again or contact support.',
};

function UserFriendlyError({ error }: { error: Error }) {
  const errorType = error.name || 'UNKNOWN';
  const message = ERROR_MESSAGES[errorType] || ERROR_MESSAGES.UNKNOWN;
  
  return (
    <div className="user-friendly-error">
      <h2>Oops!</h2>
      <p>{message}</p>
      <div className="actions">
        <button onClick={() => window.location.reload()}>Try Again</button>
        <a href="/support">Get Help</a>
      </div>
      {process.env.NODE_ENV === 'development' && (
        <details>
          <summary>Technical Details</summary>
          <pre>{error.message}</pre>
        </details>
      )}
    </div>
  );
}

// Error with auto-retry
function ComponentWithAutoRetry() {
  const [error, setError] = useState<Error | null>(null);
  const [retryCount, setRetryCount] = useState(0);
  const [data, setData] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data');
        if (!response.ok) throw new Error('Fetch failed');
        const result = await response.json();
        setData(result);
        setError(null);
        setRetryCount(0);
      } catch (err) {
        setError(err as Error);
        
        // Auto-retry with exponential backoff
        if (retryCount < 3) {
          const delay = Math.pow(2, retryCount) * 1000; // 1s, 2s, 4s
          setTimeout(() => {
            setRetryCount(c => c + 1);
          }, delay);
        }
      }
    };
    
    fetchData();
  }, [retryCount]);
  
  if (error && retryCount >= 3) {
    return (
      <div>
        <p>Failed to load after multiple attempts.</p>
        <button onClick={() => setRetryCount(0)}>Try Again</button>
      </div>
    );
  }
  
  if (error) {
    return (
      <div>
        <p>Loading... (retry {retryCount + 1}/3)</p>
      </div>
    );
  }
  
  return <DataDisplay data={data} />;
}`,
            explanation: "Error recovery is about helping users continue after errors. Provide retry mechanisms, clear error messages, fallback content, and graceful degradation. Make errors actionable with helpful suggestions."
          }
        },
        {
          title: "Lesson 9: Best Practices and Real-World Patterns",
          content: "Combine all error handling strategies for production-ready applications.\n\nBest Practices Checklist:\n✅ Use error boundaries strategically\n✅ Log errors to monitoring service\n✅ Handle async errors explicitly\n✅ Provide user-friendly error messages\n✅ Implement error recovery\n✅ Test error scenarios\n✅ Monitor error rates\n✅ Handle errors at appropriate levels\n\nStrategic Error Boundary Placement:\n• Top level (catch-all)\n• Route boundaries\n• Feature boundaries\n• Third-party component boundaries\n• Data-fetching boundaries",
          codeExample: {
            code: `// Production-ready error handling setup

// 1. Error boundary at app level
function App() {
  return (
    <Sentry.ErrorBoundary
      fallback={({ error, resetError }) => (
        <AppErrorFallback error={error} resetError={resetError} />
      )}
      showDialog
    >
      <ErrorBoundary fallback={<RouteErrorFallback />}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={
              <ErrorBoundary fallback={<DashboardErrorFallback />}>
                <Dashboard />
              </ErrorBoundary>
            } />
          </Routes>
        </Router>
      </ErrorBoundary>
    </Sentry.ErrorBoundary>
  );
}

// 2. Route-level error boundary
function RouteErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary
      FallbackComponent={RouteErrorFallback}
      onReset={() => {
        // Navigate home on error
        window.location.href = '/';
      }}
    >
      {children}
    </ErrorBoundary>
  );
}

// 3. Feature-level error boundary
function DashboardFeature() {
  return (
    <ErrorBoundary fallback={<FeatureFallback />}>
      <ErrorBoundary fallback={<ChartFallback />}>
        <RevenueChart />
      </ErrorBoundary>
      <ErrorBoundary fallback={<TableFallback />}>
        <DataTable />
      </ErrorBoundary>
    </ErrorBoundary>
  );
}

// 4. Data-fetching error boundary
function DataFetcher({ url, children }: { url: string; children: (data: any) => React.ReactNode }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    fetch(url)
      .then(r => r.json())
      .then(setData)
      .catch(setError);
  }, [url]);
  
  if (error) {
    throw error; // Error boundary catches this
  }
  
  if (!data) {
    return <LoadingSpinner />;
  }
  
  return <>{children(data)}</>;
}

// 5. Complete error handling hook
function useErrorHandler() {
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    if (error) {
      // Log error
      ErrorLogger.log(error);
      
      // Show user notification
      // showErrorToast(error.message);
      
      // Reset after delay
      const timer = setTimeout(() => setError(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);
  
  const handleError = useCallback((err: Error) => {
    setError(err);
  }, []);
  
  return { error, handleError };
}

// 6. Error boundary with context
class ContextualErrorBoundary extends React.Component<
  { children: React.ReactNode; context: Record<string, unknown> },
  { error: Error | null }
> {
  constructor(props: { children: React.ReactNode; context: Record<string, unknown> }) {
    super(props);
    this.state = { error: null };
  }
  
  static getDerivedStateFromError(error: Error) {
    return { error };
  }
  
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    ErrorLogger.log(error, errorInfo, this.props.context);
  }
  
  render() {
    if (this.state.error) {
      return <ErrorFallback error={this.state.error} context={this.props.context} />;
    }
    return this.props.children;
  }
}

// 7. Testing error boundaries
function ErrorTrigger() {
  const [shouldError, setShouldError] = useState(false);
  
  if (shouldError) {
    throw new Error('Test error');
  }
  
  return (
    <button onClick={() => setShouldError(true)}>
      Trigger Error (for testing)
    </button>
  );
}

// 8. Error monitoring dashboard integration
function ErrorMonitoring() {
  useEffect(() => {
    // Track error rates
    const errorCounts = new Map<string, number>();
    
    const originalError = window.onerror;
    window.onerror = (message, source, lineno, colno, error) => {
      const key = \`\${source}:\${lineno}\`;
      errorCounts.set(key, (errorCounts.get(key) || 0) + 1);
      
      // Alert if error rate is high
      if (errorCounts.get(key)! > 10) {
        console.warn('High error rate detected:', key);
        // sendAlert({ error, count: errorCounts.get(key) });
      }
      
      if (originalError) {
        originalError(message, source, lineno, colno, error);
      }
    };
    
    return () => {
      window.onerror = originalError;
    };
  }, []);
  
  return null;
}

// Complete production setup
function ProductionApp() {
  return (
    <>
      <ErrorMonitoring />
      <Sentry.ErrorBoundary fallback={<AppErrorFallback />}>
        <ErrorBoundary fallback={<RouteErrorFallback />}>
          <App />
        </ErrorBoundary>
      </Sentry.ErrorBoundary>
    </>
  );
}`,
            explanation: "Production error handling requires multiple layers: app-level boundaries, route-level boundaries, feature boundaries, and data-fetching boundaries. Combine error boundaries with logging, monitoring, and recovery mechanisms for resilient applications."
          }
        }
      ],
      conclusion: "Error handling is crucial for production React applications. Use error boundaries strategically throughout your component tree to catch errors, log them for debugging, and provide graceful fallback UI. Handle async errors explicitly, implement error recovery mechanisms, and always provide user-friendly error messages. Remember: error boundaries catch render/lifecycle errors, but you need explicit handling for async errors and event handlers. Combine error boundaries with monitoring services like Sentry for comprehensive error tracking and debugging."
    }
  },
  {
    id: "advanced-3",
    title: "Code Splitting and Lazy Loading",
    description: "Optimize your application's load time by splitting code and lazy loading components.",
    level: "advanced",
    estimatedTime: "35 min",
    topics: ["Code Splitting", "Lazy Loading", "React.lazy", "Dynamic Imports"],
    prerequisites: ["Building Custom Hooks"],
    content: {
      overview: "Code splitting allows you to split your bundle into smaller chunks that load on demand, reducing initial load time.",
      sections: [
        {
          title: "What is Code Splitting?",
          content: "Code splitting allows you to split your bundle into smaller chunks. Instead of loading all JavaScript at once, you load only what's needed for the current page or feature."
        },
        {
          title: "React.lazy for Component Splitting",
          content: "React.lazy lets you load components dynamically using dynamic imports. Combine it with Suspense for smooth loading experiences.",
          codeExample: {
            code: `import { lazy, Suspense } from 'react';

// Lazy load the component
const Dashboard = lazy(() => import('./Dashboard'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Dashboard />
    </Suspense>
  );
}`,
            explanation: "React.lazy creates a separate bundle for the component. Suspense handles the loading state while the component is being fetched."
          }
        },
        {
          title: "Route-based Code Splitting",
          content: "The most common use case is splitting by route. Each route loads its own bundle, reducing initial load time significantly."
        }
      ],
      conclusion: "Code splitting is essential for large applications. Balance bundle size with user experience."
    }
  },
  {
    id: "advanced-4",
    title: "Testing React Components",
    description: "Learn comprehensive testing strategies for React components using React Testing Library and Jest.",
    level: "advanced",
    estimatedTime: "50 min",
    topics: ["Unit Testing", "Integration Testing", "React Testing Library", "Mocking"],
    prerequisites: ["Code Splitting and Lazy Loading"],
    content: {
      overview: "Testing ensures your components work correctly and prevents regressions. Learn best practices for testing React applications.",
      sections: [
        {
          title: "Testing Philosophy",
          content: "Test user behavior, not implementation details. React Testing Library encourages testing from the user's perspective - what they see and interact with, not internal state or implementation."
        },
        {
          title: "Writing Tests with React Testing Library",
          content: "React Testing Library provides utilities to test components by simulating user interactions.",
          codeExample: {
            code: `import { render, screen, fireEvent } from '@testing-library/react';
import { Counter } from './Counter';

test('increments counter on button click', () => {
  render(<Counter />);
  
  const button = screen.getByRole('button', { name: /increment/i });
  fireEvent.click(button);
  
  expect(screen.getByText('Count: 1')).toBeInTheDocument();
});`,
            explanation: "Query by accessible roles and text, not by implementation details. This makes tests more resilient to refactoring."
          }
        }
      ],
      conclusion: "Good tests give you confidence to refactor and add features. Focus on testing behavior, not implementation."
    }
  },
  {
    id: "expert-3",
    title: "React 19 Server Components and Next.js Integration",
    description: "Master React Server Components, streaming SSR, and integration with Next.js App Router.",
    level: "expert",
    estimatedTime: "70 min",
    topics: ["Server Components", "Streaming SSR", "Next.js App Router", "Data Fetching"],
    prerequisites: ["Advanced State Management Patterns"],
    content: {
      overview: "Server Components run on the server, reducing JavaScript sent to clients. Next.js provides excellent integration with Server Components.",
      sections: [
        {
          title: "Server vs Client Components",
          content: "Server Components render on the server and send HTML to the client. They can't use hooks or browser APIs but reduce bundle size significantly.",
          codeExample: {
            code: `// Server Component (default in Next.js App Router)
async function ServerComponent() {
  // Can access server resources directly
  const data = await fetch('https://api.example.com/data');
  return <div>{/* Rendered on server */}</div>;
}

// Client Component (needs 'use client')
'use client';
function ClientComponent() {
  const [state, setState] = useState(0);
  // Can use hooks and browser APIs
  return <button onClick={() => setState(state + 1)}>Click</button>;
}`,
            explanation: "Use Server Components by default. Add 'use client' only when you need interactivity, hooks, or browser APIs."
          }
        },
        {
          title: "Streaming SSR",
          content: "Streaming allows React to send HTML incrementally as it renders, improving perceived performance. Users see content sooner."
        }
      ],
      conclusion: "Server Components are the future of React. They enable better performance and simpler data fetching."
    }
  },
  {
    id: "expert-4",
    title: "Advanced Hooks Patterns and Hook Composition",
    description: "Explore advanced hook patterns, hook composition, and creating sophisticated custom hooks.",
    level: "expert",
    estimatedTime: "55 min",
    topics: ["Hook Composition", "Advanced Patterns", "Hook Libraries", "Performance"],
    prerequisites: ["React 19 Server Components"],
    content: {
      overview: "Advanced hook patterns enable complex, reusable logic. Learn to compose hooks effectively and build hook libraries.",
      sections: [
        {
          title: "Composing Hooks",
          content: "Build complex functionality by composing simpler hooks together. This creates powerful, reusable abstractions.",
          codeExample: {
            code: `// Base hooks
function useCounter(initial = 0) {
  const [count, setCount] = useState(initial);
  const increment = () => setCount(c => c + 1);
  return [count, increment];
}

function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initial;
  });
  // ... implementation
  return [value, setValue];
}

// Composed hook
function useCounterWithStorage(key, initial = 0) {
  const [count, setCount] = useLocalStorage(key, initial);
  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, [setCount]);
  
  return [count, increment];
}`,
            explanation: "Compose simpler hooks to build complex functionality. This pattern creates maintainable, testable abstractions."
          }
        }
      ],
      conclusion: "Hook composition is a powerful pattern for building complex, maintainable logic."
    }
  },
  {
    id: "staff-4",
    title: "Performance Optimization at Enterprise Scale",
    description: "Deep dive into performance optimization strategies, profiling, monitoring, and optimization patterns for large-scale applications.",
    level: "staff",
    estimatedTime: "150 min",
    topics: ["Profiling", "Bundle Optimization", "Runtime Performance", "Monitoring"],
    prerequisites: ["Creating Your Own React Library"],
    content: {
      overview: "At enterprise scale, performance optimization is a systematic discipline requiring measurement, optimization, and continuous monitoring. This tutorial covers the complete performance optimization lifecycle used by companies like Google, Facebook, and Netflix. You'll learn profiling techniques, bundle optimization strategies, runtime performance patterns, monitoring solutions, and how to establish performance budgets and SLAs for large-scale React applications serving millions of users.",
      sections: [
        {
          title: "Lesson 1: Establishing Performance Metrics and Goals",
          content: "Before optimizing, establish what you're optimizing for. Different metrics matter at different stages.\n\nCore Web Vitals (Google's Metrics):\n• LCP (Largest Contentful Paint): < 2.5s\n• FID (First Input Delay): < 100ms\n• CLS (Cumulative Layout Shift): < 0.1\n\nPerformance Metrics:\n• Time to First Byte (TTFB): < 600ms\n• First Contentful Paint (FCP): < 1.8s\n• Time to Interactive (TTI): < 3.8s\n• Total Blocking Time (TBT): < 200ms\n• Bundle Size: Track JavaScript bundle sizes\n\nSetting Performance Budgets:\n• Maximum bundle size per route\n• Maximum number of requests\n• Performance budgets in CI/CD\n• Alerting thresholds\n\nReal User Monitoring (RUM):\n• Collect metrics from real users\n• Identify slow devices/networks\n• Track p50, p75, p95, p99 percentiles",
          codeExample: {
            code: `// Example: Performance budget configuration

// .budgetrc.js or package.json
module.exports = {
  budget: [
    {
      path: '/',
      timings: [
        {
          metric: 'interactive',
          budget: 3000, // 3 seconds
        },
        {
          metric: 'first-meaningful-paint',
          budget: 2000,
        },
      ],
      resourceSizes: [
        {
          resourceType: 'script',
          budget: 200, // 200KB
        },
        {
          resourceType: 'total',
          budget: 500, // 500KB total
        },
      ],
      resourceCounts: [
        {
          resourceType: 'third-party',
          budget: 10, // Max 10 third-party requests
        },
      ],
    },
  ],
};

// Lighthouse CI configuration
// .lighthouserc.js
module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
      url: ['http://localhost:3000'],
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'first-contentful-paint': ['error', { maxNumericValue: 2000 }],
        'largest-contentful-paint': ['error', { maxNumericValue: 2500 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
      },
    },
  },
};

// Performance monitoring setup
// utils/performance.ts
export function trackPerformance() {
  // Core Web Vitals
  import('web-vitals').then(({ onCLS, onFID, onLCP }) => {
    onCLS(console.log);
    onFID(console.log);
    onLCP(console.log);
  });
  
  // Custom metrics
  performance.mark('app-start');
  window.addEventListener('load', () => {
    performance.mark('app-loaded');
    performance.measure('app-load-time', 'app-start', 'app-loaded');
    
    const measure = performance.getEntriesByName('app-load-time')[0];
    // Send to analytics
    analytics.track('performance', {
      loadTime: measure.duration,
    });
  });
}`,
            explanation: "Establish clear performance budgets and metrics. Use Lighthouse CI to enforce budgets in CI/CD. Track Core Web Vitals and custom metrics from real users."
          }
        },
        {
          title: "Lesson 2: Profiling with React DevTools and Chrome DevTools",
          content: "Profiling identifies bottlenecks. Learn to use professional profiling tools effectively.\n\nReact DevTools Profiler:\n• Record component renders\n• Identify expensive renders\n• Find unnecessary re-renders\n• Measure render times\n\nChrome DevTools Performance:\n• Record JavaScript execution\n• Analyze flame charts\n• Identify long tasks\n• Find memory leaks\n\nChrome DevTools Memory:\n• Heap snapshots\n• Allocation timeline\n• Memory leaks detection",
          codeExample: {
            code: `// Using React DevTools Profiler

// 1. Install React DevTools browser extension
// 2. Open DevTools → Profiler tab
// 3. Click record
// 4. Interact with your app
// 5. Stop recording
// 6. Analyze results

// What to look for:
// - Components rendering unnecessarily
// - Long render times
// - Components causing cascading re-renders
// - Expensive calculations during render

// Programmatic profiling
// utils/profiler.ts
import { Profiler } from 'react';

interface ProfilerResult {
  id: string;
  phase: 'mount' | 'update';
  actualDuration: number;
  baseDuration: number;
  startTime: number;
  commitTime: number;
}

function onRenderCallback(
  id: string,
  phase: 'mount' | 'update',
  actualDuration: number,
  baseDuration: number,
  startTime: number,
  commitTime: number
) {
  // Log slow renders
  if (actualDuration > 16) { // More than one frame
    console.warn(\`Slow render: \${id} took \${actualDuration}ms\`);
    
    // Send to monitoring
    analytics.track('slow-render', {
      component: id,
      duration: actualDuration,
      phase,
    });
  }
}

// Wrap expensive components
<Profiler id="Dashboard" onRender={onRenderCallback}>
  <Dashboard />
</Profiler>

// Chrome DevTools Performance Recording
// 1. Open DevTools → Performance tab
// 2. Click record
// 3. Interact with app
// 4. Stop recording
// 5. Analyze flame chart

// What to look for:
// - Long tasks (blocking main thread > 50ms)
// - Layout thrashing (repeated layout recalculations)
// - Paint storms (many repaints)
// - JavaScript execution time

// Performance.mark API for custom timing
performance.mark('component-render-start');
renderComponent();
performance.mark('component-render-end');
performance.measure(
  'component-render',
  'component-render-start',
  'component-render-end'
);

// Get all measures
const measures = performance.getEntriesByType('measure');
measures.forEach(measure => {
  console.log(\`\${measure.name}: \${measure.duration}ms\`);
});

// Memory profiling
// Take heap snapshot before/after actions
const snapshot1 = performance.memory;
// ... do action
const snapshot2 = performance.memory;
const memoryDiff = snapshot2.usedJSHeapSize - snapshot1.usedJSHeapSize;
console.log(\`Memory increased by: \${memoryDiff / 1024 / 1024}MB\`);`,
            explanation: "Profiling is the foundation of optimization. Use React DevTools for component-level profiling and Chrome DevTools for JavaScript/memory profiling. Measure before optimizing."
          }
        },
        {
          title: "Lesson 3: Bundle Size Optimization Strategies",
          content: "Bundle size directly impacts load time. At enterprise scale, every KB matters.\n\nOptimization Strategies:\n• Code splitting (route-based, component-based)\n• Tree-shaking (remove unused code)\n• Minification and compression\n• Dependency analysis\n• Bundle analysis\n• Dynamic imports\n\nBundle Analysis Tools:\n• webpack-bundle-analyzer\n• source-map-explorer\n• Bundlephobia (for npm packages)\n• Lighthouse\n\nCommon Issues:\n• Large dependencies\n• Duplicate dependencies\n• Unused code\n• Large images in bundles",
          codeExample: {
            code: `// Bundle analysis setup

// Install webpack-bundle-analyzer
// npm install -D webpack-bundle-analyzer

// next.config.js or webpack.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  // Your config
});

// Run: ANALYZE=true npm run build

// Analyze bundle composition
// utils/bundle-analysis.js
const fs = require('fs');
const { execSync } = require('child_process');

// Find large dependencies
execSync('npx source-map-explorer .next/static/chunks/*.js', {
  stdio: 'inherit',
});

// Code splitting strategies

// 1. Route-based splitting (automatic in Next.js)
// Already handled by framework

// 2. Component-based splitting
import { lazy, Suspense } from 'react';

const HeavyChart = lazy(() => import('./HeavyChart'));
const CodeEditor = lazy(() => import('./CodeEditor'));

function Dashboard() {
  return (
    <Suspense fallback={<ChartSkeleton />}>
      <HeavyChart />
    </Suspense>
  );
}

// 3. Library splitting
// Split large libraries into chunks
const MonacoEditor = lazy(() =>
  import('monaco-editor').then(module => ({
    default: module.editor,
  }))
);

// 4. Dynamic imports with conditions
const Chart = lazy(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return import('./SimpleChart');
  }
  return import('./AdvancedChart');
});

// Tree-shaking optimization
// ✅ GOOD: Named imports (tree-shakeable)
import { debounce } from 'lodash-es';
// or
import debounce from 'lodash-es/debounce';

// ❌ BAD: Import entire library
import _ from 'lodash';

// Configure tree-shaking in package.json
{
  "sideEffects": false, // Enable tree-shaking
  // or
  "sideEffects": [
    "*.css",
    "./src/polyfills.js"
  ]
}

// Bundle size budgets in CI
// package.json scripts
{
  "scripts": {
    "build": "next build",
    "analyze": "ANALYZE=true next build",
    "check-size": "bundlesize"
  }
}

// bundlesize.config.js
module.exports = [
  {
    path: '.next/static/chunks/pages/_app-*.js',
    maxSize: '200 KB',
  },
  {
    path: '.next/static/chunks/pages/index-*.js',
    maxSize: '100 KB',
  },
];

// Dependency optimization
// Analyze dependency sizes
// Use Bundlephobia or size-limit

// Replace heavy dependencies
// ❌ moment.js (70KB) → ✅ date-fns (2KB)
// ❌ lodash (70KB) → ✅ lodash-es (tree-shakeable) or individual functions
// ❌ axios (13KB) → ✅ native fetch or ky (4KB)

// Remove unused dependencies
// Use depcheck to find unused deps
// npm install -D depcheck
// npx depcheck

// Optimize images
// Use next/image for automatic optimization
// Or use WebP format
// Compress images before bundling`,
            explanation: "Bundle size optimization requires systematic analysis. Use bundle analyzers to identify large dependencies, implement code splitting, enable tree-shaking, and set size budgets. Replace heavy dependencies with lighter alternatives."
          }
        },
        {
          title: "Lesson 4: Runtime Performance Optimization",
          content: "Optimize how your application runs, not just how it loads.\n\nKey Optimization Areas:\n• Reduce re-renders\n• Memoization strategies\n• Virtual scrolling for large lists\n• Debouncing/throttling\n• Web Workers for heavy computations\n• Efficient state updates\n• Event handler optimization\n\nReact Performance Patterns:\n• React.memo for components\n• useMemo for expensive calculations\n• useCallback for stable function references\n• Code splitting at component level\n• Lazy loading non-critical components",
          codeExample: {
            code: `// Runtime performance optimization patterns

// 1. Reduce unnecessary re-renders
// ❌ BAD: Component re-renders on every parent render
function ExpensiveComponent({ data }) {
  const result = expensiveCalculation(data); // Runs every render
  return <div>{result}</div>;
}

// ✅ GOOD: Memoize expensive calculations
function ExpensiveComponent({ data }) {
  const result = useMemo(
    () => expensiveCalculation(data),
    [data] // Only recalculate when data changes
  );
  return <div>{result}</div>;
}

// 2. Memoize components
// ❌ BAD: Re-renders even with same props
function ListItem({ item, onClick }) {
  return (
    <div onClick={onClick}>
      {item.name}
    </div>
  );
}

// ✅ GOOD: Memo prevents re-render with same props
const ListItem = React.memo(function ListItem({ item, onClick }) {
  return (
    <div onClick={onClick}>
      {item.name}
    </div>
  );
}, (prevProps, nextProps) => {
  // Custom comparison
  return prevProps.item.id === nextProps.item.id &&
         prevProps.item.name === nextProps.item.name;
});

// 3. Stable function references
// ❌ BAD: New function created every render
function Parent({ items }) {
  const handleClick = (id) => {
    // handle click
  };
  
  return items.map(item => (
    <ListItem key={item.id} item={item} onClick={handleClick} />
  ));
}

// ✅ GOOD: Stable reference with useCallback
function Parent({ items }) {
  const handleClick = useCallback((id) => {
    // handle click
  }, []); // Stable reference
  
  return items.map(item => (
    <ListItem key={item.id} item={item} onClick={handleClick} />
  ));
}

// 4. Virtual scrolling for large lists
// Use react-window or react-virtualized
import { FixedSizeList } from 'react-window';

function VirtualizedList({ items }) {
  const Row = ({ index, style }) => (
    <div style={style}>
      {items[index].name}
    </div>
  );
  
  return (
    <FixedSizeList
      height={600}
      itemCount={items.length}
      itemSize={50}
      width="100%"
    >
      {Row}
    </FixedSizeList>
  );
}

// 5. Debounce/throttle expensive operations
import { useMemo } from 'react';
import { debounce } from 'lodash-es';

function SearchInput() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  
  // Debounce search API calls
  const debouncedSearch = useMemo(
    () => debounce(async (searchQuery) => {
      const results = await searchAPI(searchQuery);
      setResults(results);
    }, 300),
    []
  );
  
  useEffect(() => {
    if (query) {
      debouncedSearch(query);
    }
    
    return () => {
      debouncedSearch.cancel();
    };
  }, [query, debouncedSearch]);
  
  return (
    <input
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

// 6. Web Workers for heavy computations
// worker.js
self.onmessage = function(e) {
  const { data } = e.data;
  const result = heavyComputation(data);
  self.postMessage({ result });
};

// Component
function Component() {
  const [result, setResult] = useState(null);
  const workerRef = useRef<Worker>();
  
  useEffect(() => {
    workerRef.current = new Worker('/worker.js');
    workerRef.current.onmessage = (e) => {
      setResult(e.data.result);
    };
    
    return () => {
      workerRef.current?.terminate();
    };
  }, []);
  
  const handleCompute = () => {
    workerRef.current?.postMessage({ data: largeDataSet });
  };
}

// 7. Efficient state updates
// ❌ BAD: Multiple state updates
function Component() {
  const [count, setCount] = useState(0);
  
  const increment = () => {
    setCount(count + 1);
    setCount(count + 1); // Doesn't work as expected
    setCount(count + 1);
  };
}

// ✅ GOOD: Functional updates
function Component() {
  const [count, setCount] = useState(0);
  
  const increment = () => {
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1); // Works correctly
  };
}

// 8. Batch state updates (React 18+ automatic)
// React 18 automatically batches all updates
function Component() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  
  const handleClick = () => {
    setA(1);
    setB(2);
    // React 18: Single re-render
    // React 17: Two re-renders
  };
}`,
            explanation: "Runtime performance requires careful optimization of renders, calculations, and updates. Use memoization strategically, implement virtual scrolling for large lists, debounce/throttle expensive operations, and use Web Workers for heavy computations."
          }
        },
        {
          title: "Lesson 5: Network and Loading Optimization",
          content: "Optimize how your application loads resources from the network.\n\nOptimization Strategies:\n• Resource hints (preload, prefetch, preconnect)\n• HTTP/2 and HTTP/3\n• CDN usage\n• Image optimization\n• Font optimization\n• Critical CSS\n• Service Workers for caching\n• Compression (gzip, brotli)\n\nLoading Strategies:\n• Preload critical resources\n• Prefetch likely-needed resources\n• Lazy load below-the-fold content\n• Progressive loading",
          codeExample: {
            code: `// Network optimization techniques

// 1. Resource hints in Next.js
// app/layout.tsx or pages/_document.tsx
<Head>
  {/* Preconnect to external domains */}
  <link rel="preconnect" href="https://api.example.com" />
  <link rel="dns-prefetch" href="https://api.example.com" />
  
  {/* Preload critical resources */}
  <link
    rel="preload"
    href="/fonts/main-font.woff2"
    as="font"
    type="font/woff2"
    crossOrigin="anonymous"
  />
  
  {/* Prefetch likely-needed resources */}
  <link rel="prefetch" href="/dashboard" />
</Head>

// 2. Image optimization
// Use Next.js Image component
import Image from 'next/image';

<Image
  src="/hero.jpg"
  width={800}
  height={600}
  priority // Preload above-the-fold images
  placeholder="blur" // Show blur while loading
  alt="Hero image"
/>

// 3. Font optimization
// fonts.css
@font-face {
  font-family: 'CustomFont';
  src: url('/fonts/font.woff2') format('woff2');
  font-display: swap; // Show fallback immediately
  font-weight: 400;
}

// 4. Critical CSS
// Extract above-the-fold CSS
// Use tools like critical or purgecss
const critical = require('critical');

critical.generate({
  src: 'index.html',
  target: 'styles/critical.css',
  width: 1300,
  height: 900,
});

// 5. Service Worker for caching
// public/sw.js
const CACHE_NAME = 'my-app-v1';
const urlsToCache = [
  '/',
  '/styles/main.css',
  '/scripts/main.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

// 6. HTTP compression
// next.config.js
module.exports = {
  compress: true, // Enable gzip compression
  // Also enable brotli at server level
};

// 7. CDN configuration
// next.config.js
module.exports = {
  images: {
    domains: ['cdn.example.com'],
    loader: 'custom',
    loaderFile: './image-loader.js',
  },
};

// 8. Streaming SSR
// Next.js 13+ supports streaming by default
// app/layout.tsx
export default async function Layout({ children }) {
  return (
    <html>
      <body>
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}

// 9. Progressive enhancement
// Load critical content first, enhance later
function App() {
  const [enhanced, setEnhanced] = useState(false);
  
  useEffect(() => {
    // Load enhancements after initial render
    import('./enhancements').then(() => {
      setEnhanced(true);
    });
  }, []);
  
  return enhanced ? <EnhancedApp /> : <BasicApp />;
}

// 10. Request deduplication
// Prevent duplicate requests
const requestCache = new Map();

async function fetchData(url: string) {
  if (requestCache.has(url)) {
    return requestCache.get(url);
  }
  
  const promise = fetch(url).then(res => res.json());
  requestCache.set(url, promise);
  
  return promise;
}`,
            explanation: "Network optimization reduces load times through resource hints, image optimization, font optimization, caching strategies, and compression. Use CDNs and Service Workers for efficient resource delivery."
          }
        },
        {
          title: "Lesson 6: Monitoring and Alerting",
          content: "Performance monitoring ensures you catch regressions before users do.\n\nMonitoring Solutions:\n• Real User Monitoring (RUM)\n• Synthetic monitoring\n• Performance budgets\n• Error tracking\n• Custom metrics\n\nTools:\n• Google Analytics (Core Web Vitals)\n• New Relic\n• Datadog\n• Sentry (errors + performance)\n• Custom dashboards\n\nAlerting:\n• Performance budget violations\n• Error rate spikes\n• Slow API responses\n• Bundle size increases",
          codeExample: {
            code: `// Performance monitoring setup

// 1. Core Web Vitals tracking
// utils/analytics.ts
import { onCLS, onFID, onLCP, onTTFB, onINP } from 'web-vitals';

function sendToAnalytics(metric: any) {
  // Send to your analytics service
  analytics.track('web-vital', {
    name: metric.name,
    value: metric.value,
    rating: metric.rating, // 'good', 'needs-improvement', 'poor'
    id: metric.id,
    delta: metric.delta,
  });
}

onCLS(sendToAnalytics);
onFID(sendToAnalytics);
onLCP(sendToAnalytics);
onTTFB(sendToAnalytics);
onINP(sendToAnalytics);

// 2. Custom performance metrics
// utils/performance-monitor.ts
export class PerformanceMonitor {
  private metrics: Map<string, number[]> = new Map();
  
  mark(name: string) {
    performance.mark(name);
  }
  
  measure(name: string, startMark: string, endMark: string) {
    performance.measure(name, startMark, endMark);
    const measure = performance.getEntriesByName(name)[0];
    
    if (!this.metrics.has(name)) {
      this.metrics.set(name, []);
    }
    this.metrics.get(name)?.push(measure.duration);
    
    // Send to monitoring service
    this.sendMetric(name, measure.duration);
  }
  
  private sendMetric(name: string, value: number) {
    // Send to monitoring service (DataDog, New Relic, etc.)
    if (window.monitoring) {
      window.monitoring.track(name, value);
    }
  }
  
  getMetrics() {
    const result: Record<string, any> = {};
    this.metrics.forEach((values, name) => {
      result[name] = {
        avg: values.reduce((a, b) => a + b, 0) / values.length,
        p50: this.percentile(values, 50),
        p95: this.percentile(values, 95),
        p99: this.percentile(values, 99),
      };
    });
    return result;
  }
  
  private percentile(arr: number[], p: number) {
    const sorted = arr.sort((a, b) => a - b);
    const index = Math.ceil((sorted.length * p) / 100) - 1;
    return sorted[index];
  }
}

// 3. Performance budget monitoring
// utils/budget-monitor.ts
export function checkPerformanceBudget() {
  // Check bundle sizes
  const scripts = Array.from(document.querySelectorAll('script'));
  const totalSize = scripts.reduce((total, script) => {
    return total + (script.src ? getScriptSize(script.src) : 0);
  }, 0);
  
  const budget = 500 * 1024; // 500KB
  if (totalSize > budget) {
    alertMonitoring({
      type: 'budget-exceeded',
      metric: 'bundle-size',
      value: totalSize,
      budget,
    });
  }
  
  // Check load time
  window.addEventListener('load', () => {
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    if (loadTime > 3000) { // 3 seconds
      alertMonitoring({
        type: 'budget-exceeded',
        metric: 'load-time',
        value: loadTime,
        budget: 3000,
      });
    }
  });
}

// 4. Error tracking with performance context
// utils/error-monitor.ts
window.addEventListener('error', (event) => {
  const performanceData = {
    loadTime: performance.timing.loadEventEnd - performance.timing.navigationStart,
    domContentLoaded: performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart,
    firstPaint: performance.getEntriesByType('paint')[0]?.startTime,
  };
  
  errorTracking.captureException(event.error, {
    contexts: {
      performance: performanceData,
    },
  });
});

// 5. API performance monitoring
// utils/api-monitor.ts
const originalFetch = window.fetch;

window.fetch = async function(...args) {
  const startTime = performance.now();
  const url = args[0];
  
  try {
    const response = await originalFetch(...args);
    const duration = performance.now() - startTime;
    
    // Track slow API calls
    if (duration > 1000) {
      monitoring.track('slow-api', {
        url,
        duration,
        status: response.status,
      });
    }
    
    return response;
  } catch (error) {
    const duration = performance.now() - startTime;
    monitoring.track('api-error', {
      url,
      duration,
      error: error.message,
    });
    throw error;
  }
};

// 6. React component render monitoring
// HOC for automatic monitoring
function withPerformanceMonitoring<P extends object>(
  Component: React.ComponentType<P>,
  componentName: string
) {
  return function MonitoredComponent(props: P) {
    return (
      <Profiler
        id={componentName}
        onRender={(id, phase, actualDuration) => {
          if (actualDuration > 16) { // More than one frame
            monitoring.track('slow-render', {
              component: id,
              phase,
              duration: actualDuration,
            });
          }
        }}
      >
        <Component {...props} />
      </Profiler>
    );
  };
}

// Usage
export default withPerformanceMonitoring(ExpensiveComponent, 'ExpensiveComponent');`,
            explanation: "Continuous monitoring catches performance regressions early. Track Core Web Vitals, custom metrics, performance budgets, and errors. Set up alerting for violations to maintain performance standards."
          }
        },
        {
          title: "Lesson 7: Performance Testing in CI/CD",
          content: "Automate performance testing to prevent regressions.\n\nCI/CD Performance Testing:\n• Lighthouse CI integration\n• Bundle size checks\n• Performance budget enforcement\n• Visual regression testing\n• Load testing\n\nTools:\n• Lighthouse CI\n• bundlesize\n• Performance budgets\n• WebPageTest API",
          codeExample: {
            code: `// CI/CD performance testing setup

// .github/workflows/performance.yml
name: Performance Tests

on: [pull_request]

jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: npm install
      - run: npm run build
      - run: npm run start &
      - name: Run Lighthouse CI
        uses: treosh/lighthouse-ci-action@v7
        with:
          urls: |
            http://localhost:3000
            http://localhost:3000/dashboard
          uploadArtifacts: true
          temporaryPublicStorage: true

// bundlesize check
// package.json
{
  "scripts": {
    "test:size": "bundlesize"
  }
}

// bundlesize.config.js
module.exports = [
  {
    path: '.next/static/chunks/main-*.js',
    maxSize: '200 KB',
  },
  {
    path: '.next/static/chunks/pages/_app-*.js',
    maxSize: '100 KB',
  },
];

// Lighthouse CI config
// .lighthouserc.js
module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:3000'],
      numberOfRuns: 3,
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'first-contentful-paint': ['error', { maxNumericValue: 2000 }],
        'largest-contentful-paint': ['error', { maxNumericValue: 2500 }],
      },
    },
  },
};

// Performance regression testing
// scripts/performance-test.js
const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');

async function runLighthouse(url) {
  const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] });
  const options = { logLevel: 'info', output: 'json', port: chrome.port };
  const runnerResult = await lighthouse(url, options);
  
  await chrome.kill();
  
  const { lhr } = runnerResult;
  const score = lhr.categories.performance.score * 100;
  
  if (score < 90) {
    console.error(\`Performance score \${score} below threshold of 90\`);
    process.exit(1);
  }
  
  return score;
}

// Run in CI
runLighthouse('http://localhost:3000');`,
            explanation: "Automate performance testing in CI/CD to catch regressions before they reach production. Use Lighthouse CI for performance scores and bundlesize for bundle size checks."
          }
        },
        {
          title: "Lesson 8: Performance Optimization Checklist",
          content: "Use this comprehensive checklist for performance optimization.\n\nInitial Load:\n• [ ] Code splitting implemented\n• [ ] Images optimized and lazy loaded\n• [ ] Fonts optimized with font-display\n• [ ] Critical CSS extracted\n• [ ] Bundle size under budget\n• [ ] Gzip/Brotli compression enabled\n• [ ] CDN configured\n\nRuntime:\n• [ ] Unnecessary re-renders eliminated\n• [ ] Expensive calculations memoized\n• [ ] Virtual scrolling for long lists\n• [ ] Debounce/throttle expensive operations\n• [ ] Web Workers for heavy computations\n\nMonitoring:\n• [ ] Core Web Vitals tracked\n• [ ] Performance budgets configured\n• [ ] Error tracking with performance context\n• [ ] Alerting set up\n• [ ] Dashboard for metrics\n\nTesting:\n• [ ] Lighthouse CI integrated\n• [ ] Bundle size checks in CI\n• [ ] Performance regression tests",
          codeExample: {
            code: `// Performance optimization checklist implementation

// scripts/performance-check.js
const fs = require('fs');
const { execSync } = require('child_process');

class PerformanceChecklist {
  async runChecks() {
    const checks = {
      bundleSize: await this.checkBundleSize(),
      lighthouse: await this.checkLighthouse(),
      dependencies: await this.checkDependencies(),
      images: await this.checkImages(),
    };
    
    const allPassed = Object.values(checks).every(check => check.passed);
    
    if (!allPassed) {
      console.error('Performance checks failed');
      console.log(checks);
      process.exit(1);
    }
    
    console.log('All performance checks passed!');
  }
  
  async checkBundleSize() {
    const bundlePath = '.next/static/chunks/main-*.js';
    const maxSize = 200 * 1024; // 200KB
    
    // Check bundle size
    // Implementation here
    
    return { passed: true, message: 'Bundle size within budget' };
  }
  
  async checkLighthouse() {
    // Run Lighthouse and check scores
    return { passed: true, message: 'Lighthouse scores passed' };
  }
  
  async checkDependencies() {
    // Check for large dependencies
    return { passed: true, message: 'No oversized dependencies' };
  }
  
  async checkImages() {
    // Check image optimization
    return { passed: true, message: 'Images optimized' };
  }
}

// Run checklist
new PerformanceChecklist().runChecks();`,
            explanation: "Use a comprehensive checklist to ensure all performance optimizations are implemented. Automate checks where possible."
          }
        }
      ],
      conclusion: "Performance is a feature, not an afterthought. At enterprise scale, systematic measurement, optimization, and monitoring are essential. Establish performance budgets, profile regularly, optimize continuously, and monitor in production. Remember: optimize based on real user data, not synthetic benchmarks. Performance optimization is an ongoing process, not a one-time task."
    }
  },
  {
    id: "staff-5",
    title: "Design Systems and Component Libraries",
    description: "Build comprehensive design systems, component libraries, and documentation systems used by large engineering organizations.",
    level: "staff",
    estimatedTime: "240 min",
    topics: ["Design Systems", "Component APIs", "Documentation", "Accessibility", "Design Tokens", "Component Architecture", "Storybook", "Testing"],
    prerequisites: ["Performance Optimization at Enterprise Scale"],
    content: {
      overview: "Design systems are the foundation of consistent, scalable product experiences across large organizations. As a Staff Engineer, you'll lead the creation of design systems that serve multiple teams, products, and platforms. This tutorial covers the complete lifecycle of building a design system: from foundational design tokens and component architecture to documentation, testing strategies, accessibility compliance, and organizational adoption. You'll learn how to make architectural decisions that balance flexibility with consistency, create developer-friendly APIs, establish governance models, and ensure long-term maintainability. This knowledge is essential for leading design system initiatives that scale across hundreds of developers and multiple product lines.",
      sections: [
        {
          title: "Lesson 1: Understanding Design System Fundamentals",
          content: "Design systems are comprehensive collections of reusable components, design patterns, style guidelines, and tools that ensure consistency across products. At a Staff Engineer level, you need to understand the full scope and strategic importance of design systems.\n\nWhat is a Design System?\n• Collection of reusable components and patterns\n• Design tokens (colors, spacing, typography, etc.)\n• Style guides and documentation\n• Tools and workflows for designers and developers\n• Governance and contribution models\n\nComponents of a Design System:\n• Design Tokens: Atomic design values (colors, spacing, typography)\n• Components: Reusable UI building blocks\n• Patterns: Combinations of components for common use cases\n• Documentation: Guidelines, examples, and API references\n• Tools: Design tools, code generators, testing frameworks\n\nStrategic Benefits:\n• Consistency across products and teams\n• Faster development velocity\n• Improved accessibility by default\n• Easier maintenance and updates\n• Brand consistency at scale\n\nCommon Design System Examples:\n• Material Design (Google)\n• Carbon Design System (IBM)\n• Ant Design (Ant Financial)\n• Chakra UI\n• MUI (Material-UI)\n• Polaris (Shopify)",
          codeExample: {
            code: `// Design System Structure Example
// A well-architected design system has clear layers:

// Layer 1: Design Tokens (Foundation)
// tokens/colors.ts
export const colors = {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    // ... more shades
    900: '#0c4a6e',
  },
  semantic: {
    success: '#10b981',
    error: '#ef4444',
    warning: '#f59e0b',
    info: '#3b82f6',
  },
};

// tokens/spacing.ts
export const spacing = {
  xs: '0.25rem',  // 4px
  sm: '0.5rem',   // 8px
  md: '1rem',     // 16px
  lg: '1.5rem',   // 24px
  xl: '2rem',     // 32px
};

// Layer 2: Primitive Components
// components/Button/Button.tsx
import { ButtonHTMLAttributes } from 'react';
import { colors, spacing } from '../../tokens';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export function Button({
  variant = 'primary',
  size = 'md',
  isLoading,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={getButtonClasses(variant, size)}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  );
}

// Layer 3: Composite Components
// components/Form/FormField.tsx
import { Button } from '../Button';
import { Input } from '../Input';
import { Label } from '../Label';

export function FormField({ label, error, ...inputProps }) {
  return (
    <div className="form-field">
      <Label htmlFor={inputProps.id}>{label}</Label>
      <Input {...inputProps} aria-invalid={!!error} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
}`,
            explanation: "Design systems are built in layers: tokens (foundation), primitives (basic components), composites (combined components), and patterns (page-level compositions). Each layer builds upon the previous one, ensuring consistency and reusability."
          }
        },
        {
          title: "Lesson 2: Design Tokens Architecture",
          content: "Design tokens are the atomic design values that define your design language. They're the foundation upon which all components are built. A well-structured token system enables theming, maintains consistency, and allows for easy design updates.\n\nTypes of Design Tokens:\n• Color tokens (palette, semantic colors)\n• Spacing tokens (consistent spacing scale)\n• Typography tokens (font families, sizes, weights)\n• Shadow tokens (elevation system)\n• Border radius tokens\n• Animation/transition tokens\n• Breakpoint tokens (responsive design)\n\nToken Categories:\n• Base tokens: Raw values (colors, numbers)\n• Semantic tokens: Named by purpose (primary, danger, success)\n• Component tokens: Specific to components\n\nToken Formats:\n• CSS custom properties (CSS variables)\n• JSON/YAML files\n• TypeScript/JavaScript objects\n• Style dictionary format\n\nToken Distribution:\n• Design tools (Figma, Sketch)\n• Code (CSS, JavaScript, TypeScript)\n• Documentation\n• Style guides",
          codeExample: {
            code: `// tokens/index.ts - Complete token system
export const tokens = {
  // Color System
  color: {
    semantic: {
      primary: {
        base: 'var(--color-blue-600)',
        hover: 'var(--color-blue-700)',
        active: 'var(--color-blue-800)',
        disabled: 'var(--color-gray-300)',
      },
      success: {
        base: 'var(--color-green-600)',
        light: 'var(--color-green-100)',
        dark: 'var(--color-green-800)',
      },
    },
    background: {
      primary: 'var(--color-white)',
      secondary: 'var(--color-gray-50)',
      tertiary: 'var(--color-gray-100)',
    },
  },
  
  // Spacing System
  spacing: {
    scale: {
      0: '0',
      1: '0.25rem',  // 4px
      2: '0.5rem',   // 8px
      4: '1rem',     // 16px
      6: '1.5rem',   // 24px
      8: '2rem',     // 32px
    },
  },
  
  // Typography System
  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'].join(', '),
      mono: ['Fira Code', 'Monaco', 'monospace'].join(', '),
    },
    fontSize: {
      xs: { value: '0.75rem', lineHeight: '1rem' },
      sm: { value: '0.875rem', lineHeight: '1.25rem' },
      base: { value: '1rem', lineHeight: '1.5rem' },
    },
  },
};`,
            explanation: "Design tokens provide a single source of truth for design values. They're organized by category (color, spacing, typography, etc.) and can be semantic (purpose-based) or base (raw values). CSS variables enable runtime theming while TypeScript provides type safety."
          }
        },
        {
          title: "Lesson 3: Component Architecture and API Design",
          content: "Component architecture is the backbone of your design system. Well-designed components are composable, flexible, accessible, and maintainable. Staff engineers make critical architectural decisions about component APIs, composition patterns, and extensibility.\n\nComponent Design Principles:\n• Single Responsibility: Each component has one clear purpose\n• Composition over Configuration: Prefer composition for flexibility\n• Accessibility First: Built-in a11y support\n• Progressive Enhancement: Works without JavaScript\n• Polymorphic Components: Same component, different HTML elements\n• Controlled vs Uncontrolled: Support both patterns\n\nComponent API Patterns:\n• Compound Components: Related components work together\n• Render Props: Flexible rendering control\n• Slots/Children: Flexible content placement\n• Variant System: Consistent styling options\n• Size System: Consistent sizing scale",
          codeExample: {
            code: `// Well-architected component example
import { forwardRef } from 'react';
import { cn } from '../../utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', isLoading, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={isLoading || props.disabled}
        className={cn(/* styles */)}
        {...props}
      >
        {isLoading ? <Spinner /> : children}
      </button>
    );
  }
);`,
            explanation: "Well-architected components use forwardRef for ref forwarding, TypeScript for type safety, variant systems for styling, and composition patterns for flexibility. Compound components allow related components to share context while maintaining a clean API."
          }
        },
        {
          title: "Lesson 4: Accessibility (a11y) in Design Systems",
          content: "Accessibility is not optional - it's a requirement. A design system must ensure all components are accessible by default. Staff engineers establish accessibility standards and ensure they're enforced throughout the system.\n\nWCAG Guidelines:\n• Perceivable: Information must be presentable to users\n• Operable: Interface components must be operable\n• Understandable: Information must be understandable\n• Robust: Content must be robust enough for assistive technologies\n\nAccessibility Requirements:\n• Keyboard navigation support\n• Screen reader support (ARIA labels, roles)\n• Focus management\n• Color contrast (WCAG AA minimum)\n• Touch target sizes (minimum 44x44px)\n• Form label associations\n• Error messaging",
          codeExample: {
            code: `// Accessible Modal Component
export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  
  // Trap focus within modal
  useEffect(() => {
    if (isOpen) {
      const firstFocusable = modalRef.current?.querySelector(
        'button, [href], input, select, textarea'
      ) as HTMLElement;
      firstFocusable?.focus();
      
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      document.addEventListener('keydown', handleEscape);
      
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);
  
  if (!isOpen) return null;
  
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      ref={modalRef}
    >
      <h2 id="modal-title">{title}</h2>
      {children}
    </div>
  );
}`,
            explanation: "Accessibility must be built into every component. Use proper ARIA attributes, manage focus, trap focus in modals, support keyboard navigation, provide screen reader announcements, and test with automated and manual methods."
          }
        },
        {
          title: "Lesson 5: Component Documentation and Storybook",
          content: "Documentation is crucial for design system adoption. Well-documented components reduce onboarding time, improve consistency, and increase developer productivity. Storybook has become the standard tool for component documentation.\n\nDocumentation Requirements:\n• Component API documentation (props, types)\n• Usage examples (basic, advanced)\n• Design guidelines (when to use, when not to use)\n• Accessibility information\n• Design specs (from design tools)\n• Code examples (copy-paste ready)\n\nStorybook Setup:\n• Installation and configuration\n• Addons (controls, actions, accessibility, viewport)\n• Story organization\n• Documentation pages\n• Design tokens integration\n• Automated visual regression testing",
          codeExample: {
            code: `// Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
    </div>
  ),
};`,
            explanation: "Storybook provides interactive documentation for components. Stories showcase different variants, states, and use cases. Well-documented components with comprehensive stories reduce onboarding time and improve consistency."
          }
        },
        {
          title: "Lesson 6: Testing Strategies for Design Systems",
          content: "Design systems require comprehensive testing to ensure quality, consistency, and prevent regressions. Multiple testing strategies work together to catch issues at different levels.\n\nTesting Layers:\n• Unit Tests: Component logic and behavior\n• Integration Tests: Component interactions\n• Visual Regression Tests: Screenshot comparisons\n• Accessibility Tests: A11y compliance\n• E2E Tests: User workflows\n• Performance Tests: Bundle size, render performance\n\nTesting Tools:\n• Jest + React Testing Library: Unit/integration tests\n• Chromatic/Percy: Visual regression testing\n• axe-core: Accessibility testing\n• Lighthouse CI: Performance testing\n• Playwright/Cypress: E2E testing",
          codeExample: {
            code: `// Button.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });
  
  it('calls onClick when clicked', async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    await userEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  
  it('has no accessibility violations', async () => {
    const { container } = render(<Button>Click me</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});`,
            explanation: "Comprehensive testing ensures design system quality. Unit tests verify behavior, integration tests check interactions, visual regression tests catch styling bugs, accessibility tests ensure a11y compliance, and performance tests maintain speed."
          }
        },
        {
          title: "Lesson 7: Versioning, Distribution, and Package Management",
          content: "Design systems need proper versioning and distribution strategies. Staff engineers establish processes for versioning, publishing, and managing breaking changes across multiple consuming applications.\n\nSemantic Versioning:\n• MAJOR: Breaking changes\n• MINOR: New features (backward compatible)\n• PATCH: Bug fixes (backward compatible)\n\nDistribution Methods:\n• npm package: Most common\n• Monorepo packages: Internal distribution\n• CDN: For non-bundled scenarios\n• Private registries: Enterprise packages\n\nBreaking Change Strategy:\n• Deprecation warnings before removal\n• Migration guides\n• Codemods for automated migration\n• Support multiple versions during transition",
          codeExample: {
            code: `// package.json - Design System Package Configuration
{
  "name": "@company/design-system",
  "version": "2.0.0",
  "main": "./dist/index.js",
  "module": "./dist/index.esm.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.esm.js",
      "require": "./dist/index.js",
      "types": "./dist/index.d.ts"
    },
    "./styles": "./dist/styles.css"
  },
  "peerDependencies": {
    "react": ">=16.8.0",
    "react-dom": ">=16.8.0"
  }
}`,
            explanation: "Proper versioning and distribution are crucial for design systems. Use semantic versioning, provide clear migration guides, include deprecation warnings before breaking changes, offer codemods for automated migration, and structure packages for optimal tree-shaking."
          }
        },
        {
          title: "Lesson 8: Governance, Contribution, and Adoption",
          content: "Design systems succeed or fail based on organizational adoption. Staff engineers establish governance models, contribution processes, and adoption strategies that ensure the system serves the entire organization.\n\nGovernance Model:\n• Design System Team: Core maintainers\n• Design System Council: Cross-functional leadership\n• Working Groups: Domain experts\n• Contributors: Community contributors\n\nContribution Process:\n• RFC (Request for Comments) process\n• Design review workflow\n• Code review standards\n• Testing requirements\n• Documentation requirements\n\nAdoption Strategy:\n• Pilot programs with early adopters\n• Training and onboarding\n• Migration support\n• Success metrics\n• Feedback loops\n\nSuccess Metrics:\n• Adoption rate across teams\n• Component usage statistics\n• Time to implement features\n• Design consistency scores\n• Developer satisfaction\n• Bug reports and support tickets",
          codeExample: {
            code: `// Contribution workflow example

// 1. RFC Process
// RFCs document proposed changes for review

// 2. Component Contribution Template
// CONTRIBUTING.md provides checklist:
// - Design review completed
// - TypeScript types defined
// - Unit tests written (80%+ coverage)
// - Accessibility tests pass
// - Storybook stories created
// - Documentation complete

// 3. Adoption tracking
export function trackComponentUsage(componentName: string) {
  window.analytics?.track('Design System: Component Used', {
    component: componentName,
    version: getDesignSystemVersion(),
  });
}`,
            explanation: "Governance, contribution processes, and adoption strategies are critical for design system success. Establish clear contribution workflows, track adoption metrics, provide feedback mechanisms, support migrations, and maintain transparent communication."
          }
        }
      ],
      conclusion: "Building a design system is a long-term investment that requires careful architecture, comprehensive documentation, rigorous testing, and organizational commitment. As a Staff Engineer, you balance technical excellence with practical adoption, ensuring the system scales across teams while maintaining quality and consistency. Focus on developer experience, accessibility by default, clear documentation, and robust governance. Remember: a design system is only as successful as its adoption and the value it provides to teams building products. Plan for extensibility, maintainability, and evolution from the start, and you'll create a foundation that serves your organization for years to come."
    }
  },
  
  // TYPESCRIPT TUTORIALS
  {
    id: "beginner-5",
    title: "TypeScript Basics for React Developers",
    description: "Learn TypeScript fundamentals specifically for React development. Understand type annotations, interfaces, and how to add type safety to your React components.",
    level: "beginner",
    estimatedTime: "60 min",
    topics: ["TypeScript Basics", "Type Annotations", "Interfaces", "React with TypeScript", "Props Typing"],
    prerequisites: ["Introduction to React: Your First Component", "Basic JavaScript knowledge"],
    videoUrl: "https://www.youtube.com/watch?v=BwuLxPH8IDs", // TypeScript Tutorial for Beginners - Programming with Mosh
    content: {
      overview: "TypeScript is JavaScript with type safety. It adds static typing to help catch errors during development, provides better IDE support, and makes your code more maintainable. This tutorial covers TypeScript fundamentals specifically for React developers. You'll learn how to type React components, props, state, and events. TypeScript helps prevent bugs, improves developer experience with autocomplete, and makes refactoring safer and easier.",
      sections: [
        {
          title: "Lesson 1: What is TypeScript and Why Use It?",
          content: "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It adds static type checking to catch errors before runtime.\n\nBenefits of TypeScript:\n• Catch errors during development, not in production\n• Better IDE support (autocomplete, refactoring)\n• Self-documenting code (types serve as documentation)\n• Easier refactoring (confidence when changing code)\n• Better collaboration (clear contracts between components)\n\nTypeScript vs JavaScript:\n• JavaScript: Dynamic typing (types checked at runtime)\n• TypeScript: Static typing (types checked at compile time)\n• All valid JavaScript is valid TypeScript\n• TypeScript compiles to JavaScript\n\nGetting Started:\n• Install TypeScript: `npm install -D typescript @types/react @types/react-dom`\n• Create tsconfig.json\n• Rename .js files to .tsx for React components\n• Start adding types gradually",
          codeExample: {
            code: `// JavaScript (no types)
function greet(name) {
  return "Hello, " + name;
}

greet(42); // Works but wrong! Should be string

// TypeScript (with types)
function greet(name: string): string {
  return "Hello, " + name;
}

greet(42); // Error: Argument of type 'number' is not assignable to parameter of type 'string'

// React Component with TypeScript
interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean; // Optional prop
}

function Button({ label, onClick, disabled = false }: ButtonProps) {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}

// TypeScript catches errors
<Button label="Click me" onClick={() => {}} /> // ✅ Correct
<Button label={123} onClick={() => {}} /> // ❌ Error: label must be string
<Button /> // ❌ Error: label and onClick are required`,
            explanation: "TypeScript adds type annotations to catch errors before runtime. In React, you type props using interfaces. Optional props use '?' and can have default values."
          }
        },
        {
          title: "Lesson 2: Basic TypeScript Types",
          content: "TypeScript provides several built-in types. Understanding these is fundamental to using TypeScript effectively.\n\nPrimitive Types:\n• string: Text data\n• number: Numbers (both integers and floats)\n• boolean: true or false\n• null: Explicitly null\n• undefined: Not defined\n• symbol: Unique identifier\n\nType Annotations:\n• Explicit typing: `let name: string = 'John'`\n• Type inference: `let name = 'John'` (TypeScript infers string)\n• Union types: `string | number` (can be either)\n• Arrays: `string[]` or `Array<string>`\n• Objects: Define structure with interfaces\n\nAny and Unknown:\n• any: Disables type checking (use sparingly)\n• unknown: Type-safe version of any\n\nVoid and Never:\n• void: No return value (functions that don't return)\n• never: Function that never returns (throws error or infinite loop)",
          codeExample: {
            code: `// Primitive types
let name: string = "Alice";
let age: number = 30;
let isActive: boolean = true;
let data: null = null;
let value: undefined = undefined;

// Type inference (TypeScript guesses the type)
let city = "New York"; // TypeScript knows this is string
// city = 123; // Error: can't assign number to string

// Union types (can be multiple types)
let id: string | number = "abc123";
id = 12345; // Also valid

// Arrays
let fruits: string[] = ["apple", "banana", "orange"];
let numbers: Array<number> = [1, 2, 3, 4, 5];

// Objects with interface
interface User {
  name: string;
  age: number;
  email?: string; // Optional property
}

let user: User = {
  name: "John",
  age: 25,
  // email is optional, so we can omit it
};

// Functions
function add(a: number, b: number): number {
  return a + b;
}

function logMessage(message: string): void {
  console.log(message);
  // No return value
}

function throwError(message: string): never {
  throw new Error(message);
  // Never returns (always throws)`,
            explanation: "TypeScript has many built-in types. Use type annotations explicitly or let TypeScript infer types. Union types allow multiple types. Interfaces define object shapes."
          }
        },
        {
          title: "Lesson 3: Typing React Components",
          content: "React components in TypeScript need proper typing for props, state, and events. This is where TypeScript shines in React development.\n\nComponent Types:\n• Function components: Most common\n• Props interfaces: Define component props\n• Event handlers: Type React events\n• State: Use useState with types\n\nCommon Patterns:\n• Interface for props\n• Generic types for flexible components\n• Event handler types\n• Children prop typing\n• Ref typing",
          codeExample: {
            code: `// Typing Function Components

// Props interface
interface CardProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

function Card({ title, description, children, onClick }: CardProps) {
  return (
    <div onClick={onClick}>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      {children}
    </div>
  );
}

// Typing state
function Counter() {
  const [count, setCount] = useState<number>(0);
  //                  ^^^^^ Explicit type (optional but good practice)
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

// Typing event handlers
function Form() {
  const [email, setEmail] = useState<string>("");
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

// Typing children
interface LayoutProps {
  children: React.ReactNode; // Can be any valid React child
}

function Layout({ children }: LayoutProps) {
  return <div className="layout">{children}</div>;
}

// Typing refs
function InputWithRef() {
  const inputRef = useRef<HTMLInputElement>(null);
  
  const focusInput = () => {
    inputRef.current?.focus(); // Optional chaining for safety
  };
  
  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}`,
            explanation: "Type React components with interfaces for props. Type state with useState generics. Type events with React event types. Use React.ReactNode for children. Type refs with the HTML element type."
          }
        },
        {
          title: "Lesson 4: Common React TypeScript Patterns",
          content: "Learn common patterns for typing React features in TypeScript.\n\nPatterns Covered:\n• Optional props\n• Default props\n• Event handlers\n• Conditional rendering types\n• Form handling\n• List rendering\n• Custom hooks typing\n\nBest Practices:\n• Use interfaces for props\n• Leverage type inference when possible\n• Use React.ReactNode for children\n• Type event handlers explicitly\n• Use union types for variants",
          codeExample: {
            code: `// Optional and default props
interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}

function Button({
  label,
  variant = "primary", // Default value
  size = "md",
  disabled = false,
}: ButtonProps) {
  return (
    <button
      className={\`btn btn-\${variant} btn-\${size}\`}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

// Union types for variants
type Status = "loading" | "success" | "error";

interface StatusBadgeProps {
  status: Status;
}

function StatusBadge({ status }: StatusBadgeProps) {
  const colors = {
    loading: "gray",
    success: "green",
    error: "red",
  };
  
  return (
    <span className={\`badge badge-\${colors[status]}\`}>
      {status}
    </span>
  );
}

// Typing custom hooks
function useCounter(initialValue: number = 0) {
  const [count, setCount] = useState<number>(initialValue);
  
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);
  
  return { count, increment, decrement, reset };
}

// Using the hook
function App() {
  const { count, increment, decrement } = useCounter(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

// Typing API responses
interface User {
  id: number;
  name: string;
  email: string;
}

function UserProfile({ userId }: { userId: number }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    fetch(\`/api/users/\${userId}\`)
      .then((res) => res.json())
      .then((data: User) => {
        setUser(data);
        setLoading(false);
      });
  }, [userId]);
  
  if (loading) return <div>Loading...</div>;
  if (!user) return <div>User not found</div>;
  
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}`,
            explanation: "Common patterns include optional props with defaults, union types for variants, typing custom hooks, and handling async data with proper types. TypeScript makes these patterns safer and more maintainable."
          }
        }
      ],
      conclusion: "TypeScript brings type safety to React development, catching errors early and improving developer experience. Start by typing your props with interfaces, then gradually add types to state, events, and functions. Remember: TypeScript is there to help, not to slow you down. Use type inference when types are obvious, and be explicit when it adds clarity. The investment in typing pays off with fewer bugs and easier refactoring."
    }
  },
  {
    id: "intermediate-5",
    title: "Advanced TypeScript Patterns in React",
    description: "Learn advanced TypeScript patterns for React: generics, utility types, type guards, and complex component typing.",
    level: "intermediate",
    estimatedTime: "90 min",
    topics: ["Generics", "Utility Types", "Type Guards", "Advanced Patterns", "Type Narrowing"],
    prerequisites: ["TypeScript Basics for React Developers", "Component Composition and Context"],
    videoUrl: "https://www.youtube.com/watch?v=Z5iWr6Srsj8", // TypeScript for React - Programming with Mosh
    content: {
      overview: "As you build more complex React applications, you'll encounter situations that require advanced TypeScript patterns. This tutorial covers generics for reusable components, utility types for transforming types, type guards for runtime type checking, and advanced patterns for complex scenarios. You'll learn how to create flexible, type-safe components that work with different data types while maintaining full type safety.",
      sections: [
        {
          title: "Lesson 1: Generics in React Components",
          content: "Generics allow you to create reusable components that work with different types while maintaining type safety.\n\nWhat are Generics?\n• Type parameters that make components flexible\n• Maintain type safety while working with different types\n• Written with angle brackets: <T>\n\nUse Cases:\n• Lists with different item types\n• Data fetchers for different API responses\n• Form components with different value types\n• Utility hooks that work with any type\n\nBenefits:\n• Type safety preserved\n• Code reuse\n• Better autocomplete\n• Catch errors at compile time",
          codeExample: {
            code: `// Generic List Component
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  keyExtractor: (item: T) => string | number;
}

function List<T>({ items, renderItem, keyExtractor }: ListProps<T>) {
  return (
    <ul>
      {items.map((item) => (
        <li key={keyExtractor(item)}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

// Usage with different types
interface User {
  id: number;
  name: string;
}

interface Product {
  sku: string;
  title: string;
  price: number;
}

function App() {
  const users: User[] = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ];
  
  const products: Product[] = [
    { sku: "PROD-1", title: "Widget", price: 29.99 },
    { sku: "PROD-2", title: "Gadget", price: 49.99 },
  ];
  
  return (
    <div>
      <List
        items={users}
        renderItem={(user) => <span>{user.name}</span>}
        keyExtractor={(user) => user.id}
      />
      
      <List
        items={products}
        renderItem={(product) => (
          <span>
            {product.title} - {'$'}{product.price}
          </span>
        )}
        keyExtractor={(product) => product.sku}
      />
    </div>
  );
}

// Generic Hook
function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data: T) => {
        setData(data);
        setLoading(false);
      })
      .catch((err: Error) => {
        setError(err);
        setLoading(false);
      });
  }, [url]);
  
  return { data, loading, error };
}

// Usage
function UserProfile({ userId }: { userId: number }) {
  const { data: user, loading, error } = useFetch<User>(
    \`/api/users/\${userId}\`
  );
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!user) return <div>Not found</div>;
  
  return <div>{user.name}</div>; // TypeScript knows user is User type
}`,
            explanation: "Generics make components flexible and reusable while maintaining type safety. Use angle brackets <T> to define type parameters. TypeScript infers the generic type from usage, preserving full type safety."
          }
        },
        {
          title: "Lesson 2: Utility Types",
          content: "TypeScript provides utility types that transform existing types. These are incredibly useful for React development.\n\nCommon Utility Types:\n• Partial<T>: Makes all properties optional\n• Required<T>: Makes all properties required\n• Pick<T, K>: Select specific properties\n• Omit<T, K>: Remove specific properties\n• Readonly<T>: Make all properties readonly\n• Record<K, V>: Create object type with specific keys\n\nUse Cases:\n• Form state (Partial of main type)\n• Update functions (Partial of entity)\n• Component variants (Pick specific props)\n• Configuration objects (Record types)\n• Immutable data (Readonly)",
          codeExample: {
            code: `// Base interface
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  role: "admin" | "user";
}

// Partial: All properties optional (useful for forms)
type PartialUser = Partial<User>;
// Equivalent to:
// {
//   id?: number;
//   name?: string;
//   email?: string;
//   age?: number;
//   role?: "admin" | "user";
// }

function EditUserForm({ user }: { user: User }) {
  const [formData, setFormData] = useState<Partial<User>>({
    name: user.name,
    email: user.email,
    // Other fields optional
  });
  
  return (
    <form>
      <input
        value={formData.name || ""}
        onChange={(e) =>
          setFormData({ ...formData, name: e.target.value })
        }
      />
    </form>
  );
}

// Pick: Select specific properties
type UserPreview = Pick<User, "id" | "name" | "email">;
// Only has: id, name, email

function UserCard({ user }: { user: UserPreview }) {
  return (
    <div>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
}

// Omit: Remove specific properties
type UserWithoutId = Omit<User, "id">;
// Has everything except id

function CreateUserForm() {
  const [formData, setFormData] = useState<UserWithoutId>({
    name: "",
    email: "",
    age: 0,
    role: "user",
  });
  
  // id will be generated on server
}

// Required: Make all properties required
interface Config {
  apiUrl?: string;
  timeout?: number;
}

type RequiredConfig = Required<Config>;
// apiUrl and timeout are now required

// Record: Create object type with specific keys
type StatusColors = Record<"success" | "error" | "warning", string>;
// Equivalent to:
// {
//   success: string;
//   error: string;
//   warning: string;
// }

const colors: StatusColors = {
  success: "green",
  error: "red",
  warning: "yellow",
};

// Readonly: Make all properties readonly
type ImmutableUser = Readonly<User>;
// Cannot modify properties after creation`,
            explanation: "Utility types transform existing types. Partial is great for forms, Pick/Omit for selective properties, Record for key-value objects, and Readonly for immutable data. These utilities help create precise types without duplication."
          }
        },
        {
          title: "Lesson 3: Type Guards and Type Narrowing",
          content: "Type guards are functions that check types at runtime and narrow TypeScript's type checking accordingly.\n\nWhat are Type Guards?\n• Functions that return type predicates\n• Narrow types based on runtime checks\n• Make code type-safe with runtime validation\n\nCommon Patterns:\n• typeof checks\n• instanceof checks\n• Property checks\n• Custom type predicates\n• Discriminated unions\n\nUse Cases:\n• API response validation\n• Form validation\n• Error handling\n• Conditional rendering",
          codeExample: {
            code: `// Type guards
function isString(value: unknown): value is string {
  return typeof value === "string";
}

function isUser(value: unknown): value is User {
  return (
    typeof value === "object" &&
    value !== null &&
    "id" in value &&
    "name" in value &&
    "email" in value
  );
}

// Using type guards
function processData(data: unknown) {
  if (isString(data)) {
    // TypeScript knows data is string here
    console.log(data.toUpperCase());
  }
  
  if (isUser(data)) {
    // TypeScript knows data is User here
    console.log(data.name, data.email);
  }
}

// Discriminated unions
type ApiResponse<T> =
  | { status: "success"; data: T }
  | { status: "error"; error: string }
  | { status: "loading" };

function handleResponse<T>(response: ApiResponse<T>) {
  if (response.status === "success") {
    // TypeScript knows data exists
    return response.data;
  } else if (response.status === "error") {
    // TypeScript knows error exists
    throw new Error(response.error);
  } else {
    // TypeScript knows this is loading state
    return null;
  }
}

// React component with type guards
function DataDisplay({ data }: { data: unknown }) {
  if (isUser(data)) {
    return (
      <div>
        <h2>{data.name}</h2>
        <p>{data.email}</p>
      </div>
    );
  }
  
  if (isString(data)) {
    return <p>{data}</p>;
  }
  
  return <div>Unknown data type</div>;
}

// Form validation with type guards
function validateEmail(email: unknown): email is string {
  return (
    isString(email) &&
    email.includes("@") &&
    email.length > 5
  );
}

function EmailInput() {
  const [email, setEmail] = useState<string>("");
  const [isValid, setIsValid] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setIsValid(validateEmail(value));
  };
  
  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={handleChange}
        aria-invalid={!isValid}
      />
      {isValid && <span>✓ Valid email</span>}
    </div>
  );
}`,
            explanation: "Type guards narrow types based on runtime checks. Use type predicates (value is Type) to tell TypeScript what type something is after checking. Discriminated unions work great with type narrowing for handling different states or response types."
          }
        },
        {
          title: "Lesson 4: Advanced Component Patterns",
          content: "Advanced TypeScript patterns for complex React components.\n\nPatterns Covered:\n• Polymorphic components\n• Higher-order components with types\n• Render props pattern\n• Compound components\n• Forward refs with generics\n\nBest Practices:\n• Use generics for flexibility\n• Maintain type safety\n• Leverage utility types\n• Type event handlers precisely",
          codeExample: {
            code: `// Polymorphic component
type PolymorphicProps<T extends React.ElementType> = {
  as?: T;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

function Polymorphic<T extends React.ElementType = "div">({
  as,
  children,
  ...props
}: PolymorphicProps<T>) {
  const Component = as || "div";
  return <Component {...props}>{children}</Component>;
}

// Usage
<Polymorphic as="button" onClick={() => {}}>Click</Polymorphic>
<Polymorphic as="a" href="/link">Link</Polymorphic>
<Polymorphic>Default div</Polymorphic>

// Higher-order component with types
function withLoading<P extends object>(
  Component: React.ComponentType<P>
) {
  return function WithLoadingComponent(
    props: P & { loading?: boolean }
  ) {
    if (props.loading) {
      return <div>Loading...</div>;
    }
    
    const { loading, ...componentProps } = props;
    return <Component {...(componentProps as P)} />;
  };
}

// Render props pattern
interface DataProps<T> {
  url: string;
  children: (data: T | null, loading: boolean, error: Error | null) => React.ReactNode;
}

function DataFetcher<T>({ url, children }: DataProps<T>) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data: T) => setData(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [url]);
  
  return <>{children(data, loading, error)}</>;
}

// Usage
<DataFetcher<User> url="/api/user/1">
  {(user, loading, error) => {
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!user) return <div>Not found</div>;
    return <div>{user.name}</div>;
  }}
</DataFetcher>`,
            explanation: "Advanced patterns like polymorphic components, HOCs, and render props can be fully type-safe with TypeScript. Use generics to maintain flexibility while preserving type safety. These patterns enable powerful, reusable components."
          }
        }
      ],
      conclusion: "Advanced TypeScript patterns make your React code more flexible and type-safe. Generics enable reusable components, utility types transform types efficiently, type guards provide runtime safety, and advanced patterns unlock powerful component architectures. Remember: TypeScript's type system is powerful - leverage it to create robust, maintainable code. Start simple and add complexity only when needed."
    }
  },
  {
    id: "advanced-5",
    title: "TypeScript Generics and Utility Types Deep Dive",
    description: "Master TypeScript generics, conditional types, mapped types, and advanced utility type patterns for complex React applications.",
    level: "advanced",
    estimatedTime: "120 min",
    topics: ["Generics", "Conditional Types", "Mapped Types", "Template Literal Types", "Type Utilities"],
    prerequisites: ["Advanced TypeScript Patterns in React", "Performance Optimization Techniques"],
    content: {
      overview: "This tutorial dives deep into TypeScript's advanced type system features. You'll learn how to create sophisticated generic types, use conditional types for type-level logic, leverage mapped types for transformations, and build reusable type utilities. These advanced features enable you to create type-safe abstractions, build better APIs, and catch errors at compile time that would otherwise only appear at runtime.",
      sections: [
        {
          title: "Lesson 1: Advanced Generics",
          content: "Go beyond basic generics to create sophisticated type-safe abstractions.\n\nAdvanced Generic Concepts:\n• Generic constraints (extends keyword)\n• Multiple type parameters\n• Default type parameters\n• Generic utility functions\n• Generic type inference\n\nUse Cases:\n• Type-safe API clients\n• Generic data structures\n• Flexible component APIs\n• Utility functions that work with any type",
          codeExample: {
            code: `// Generic constraints
interface HasId {
  id: string | number;
}

function getById<T extends HasId>(items: T[], id: T["id"]): T | undefined {
  return items.find((item) => item.id === id);
}

// Multiple type parameters
function mapArray<T, U>(
  array: T[],
  mapper: (item: T) => U
): U[] {
  return array.map(mapper);
}

// Default type parameters
interface CacheOptions<T = string> {
  key: string;
  value: T;
  ttl?: number;
}

// Generic utility functions
function createApiClient<T extends Record<string, any>>(
  endpoints: T
) {
  return {
    async get<K extends keyof T>(
      endpoint: K,
      params?: Parameters<T[K]>[0]
    ): Promise<ReturnType<T[K]>> {
      // Implementation
      return {} as ReturnType<T[K]>;
    },
  };
}

// Usage
const api = createApiClient({
  users: () => ({ id: 1, name: "Alice" }),
  products: (id: number) => ({ id, title: "Widget" }),
});

const user = await api.get("users"); // Type-safe!
const product = await api.get("products", 123); // Type-safe!`,
            explanation: "Advanced generics use constraints to limit type parameters, multiple parameters for complex relationships, and default types for convenience. Generic utilities create powerful, type-safe abstractions."
          }
        },
        {
          title: "Lesson 2: Conditional Types",
          content: "Conditional types enable type-level logic - types that depend on other types.\n\nConditional Type Syntax:\n• `T extends U ? X : Y`\n• Checks if T extends U\n• Returns X if true, Y if false\n\nCommon Patterns:\n• Type extraction\n• Type filtering\n• Type transformation based on conditions\n• Utility type building\n\nUse Cases:\n• Extract return types\n• Filter union types\n• Create type-safe utilities\n• Build complex type systems",
          codeExample: {
            code: `// Basic conditional type
type IsString<T> = T extends string ? true : false;

type A = IsString<string>; // true
type B = IsString<number>; // false

// Extract return type
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

// Extract function parameters
type Parameters<T> = T extends (...args: infer P) => any ? P : never;

// Non-nullable type
type NonNullable<T> = T extends null | undefined ? never : T;

// Extract array element type
type ArrayElement<T> = T extends (infer U)[] ? U : never;

type Numbers = ArrayElement<number[]>; // number

// Extract promise type
type Awaited<T> = T extends Promise<infer U> ? U : T;

type Result = Awaited<Promise<string>>; // string

// Filter types
type StringKeys<T> = {
  [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

type UserStringKeys = StringKeys<User>; // "name" | "email"

// Exclude/Extract helpers
type Exclude<T, U> = T extends U ? never : T;
type Extract<T, U> = T extends U ? T : never;

type T1 = Exclude<"a" | "b" | "c", "a">; // "b" | "c"
type T2 = Extract<"a" | "b" | "c", "a" | "b">; // "a" | "b"`,
            explanation: "Conditional types perform type-level logic using the ternary operator. Use 'infer' to extract types from other types. Conditional types are powerful for building utility types and complex type transformations."
          }
        },
        {
          title: "Lesson 3: Mapped Types",
          content: "Mapped types create new types by transforming properties of existing types.\n\nMapped Type Syntax:\n• `{ [K in keyof T]: ... }`\n• Iterates over keys of T\n• Transforms each property\n\nCommon Patterns:\n• Make all properties optional/required\n• Make all properties readonly\n• Transform property types\n• Add/remove modifiers\n\nBuilt-in Mapped Types:\n• Partial<T>\n• Required<T>\n• Readonly<T>\n• Record<K, V>\n• Pick<T, K>\n• Omit<T, K>",
          codeExample: {
            code: `// How built-in mapped types work

// Partial implementation
type MyPartial<T> = {
  [P in keyof T]?: T[P];
};

// Required implementation
type MyRequired<T> = {
  [P in keyof T]-?: T[P];
};

// Readonly implementation
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

// Record implementation
type MyRecord<K extends keyof any, T> = {
  [P in K]: T;
};

// Custom mapped types
// Make all properties nullable
type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

// Transform to getters
type Getters<T> = {
  [P in keyof T as \`get\${Capitalize<string & P>}\`]: () => T[P];
};

interface User {
  name: string;
  age: number;
}

type UserGetters = Getters<User>;
// {
//   getName: () => string;
//   getAge: () => number;
// }

// Filter properties by type
type StringProperties<T> = {
  [P in keyof T as T[P] extends string ? P : never]: T[P];
};

interface Person {
  id: number;
  name: string;
  email: string;
  age: number;
}

type PersonStrings = StringProperties<Person>;
// { name: string; email: string; }

// Add prefix to keys
type Prefixed<T, Prefix extends string> = {
  [P in keyof T as \`\${Prefix}\${string & P}\`]: T[P];
};

type PrefixedUser = Prefixed<User, "user_">;
// { user_name: string; user_age: number; }`,
            explanation: "Mapped types transform existing types by iterating over their properties. Use 'as' clauses to filter or rename keys. Mapped types enable powerful type transformations while maintaining type safety."
          }
        },
        {
          title: "Lesson 4: Template Literal Types",
          content: "Template literal types combine string literal types to create new string types.\n\nFeatures:\n• String concatenation at type level\n• Pattern matching\n• Type-safe string manipulation\n• Union type combinations\n\nUse Cases:\n• Type-safe CSS class names\n• API endpoint types\n• Event name types\n• Route types\n• ID generation",
          codeExample: {
            code: `// Basic template literal types
type Greeting = \`Hello, \${string}\`;
type Email = \`\${string}@\${string}.\${string}\`;

// With unions
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
type Endpoint = "/users" | "/posts" | "/comments";

type ApiRoute = \`\${HttpMethod} \${Endpoint}\`;
// "GET /users" | "POST /users" | "GET /posts" | ...

// Pattern matching
type ExtractMethod<T> = T extends \`\${infer M} \${string}\` ? M : never;
type ExtractPath<T> = T extends \`\${string} \${infer P}\` ? P : never;

type Method = ExtractMethod<"GET /users">; // "GET"
type Path = ExtractPath<"GET /users">; // "/users"

// CSS class utilities
type Spacing = "sm" | "md" | "lg";
type Direction = "top" | "bottom" | "left" | "right";

type MarginClass = \`m\${Capitalize<Direction>}-\${Spacing}\`;
// "mTop-sm" | "mTop-md" | "mBottom-sm" | ...

// Event types
type EventType = "click" | "change" | "submit";
type ElementType = "button" | "input" | "form";

type EventName = \`\${ElementType}\${Capitalize<EventType>}\`;
// "buttonClick" | "inputChange" | "formSubmit" | ...

// Utility type for event handlers
type EventHandlers<T extends EventName> = {
  [K in T]: (event: Event) => void;
};

const handlers: EventHandlers<EventName> = {
  buttonClick: (e) => {},
  inputChange: (e) => {},
  formSubmit: (e) => {},
};`,
            explanation: "Template literal types create new string types by combining literal types. Use 'infer' to extract parts of template literals. They're powerful for type-safe strings, CSS classes, API routes, and event names."
          }
        },
        {
          title: "Lesson 5: Building Type Utilities",
          content: "Combine all advanced TypeScript features to build reusable type utilities.\n\nUtility Building Principles:\n• Start with clear purpose\n• Use composition\n• Document with comments\n• Test with examples\n• Make it reusable\n\nCommon Utilities:\n• Deep readonly\n• Deep partial\n• Optional by key\n• Required by key\n• Function parameter extraction",
          codeExample: {
            code: `// Deep readonly
type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object
    ? DeepReadonly<T[P]>
    : T[P];
};

// Deep partial
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// Make specific keys optional
type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

type UserWithoutRole = Optional<User, "role">;
// { id: number; name: string; email: string; role?: string; }

// Make specific keys required
type Required<T, K extends keyof T> = T & { [P in K]-?: T[P] };

// Extract function overloads
type Overloads<T> = T extends {
  (...args: infer A1): infer R1;
  (...args: infer A2): infer R2;
  (...args: infer A3): infer R3;
  (...args: infer A4): infer R4;
}
  ? [
      (...args: A1) => R1,
      (...args: A2) => R2,
      (...args: A3) => R3,
      (...args: A4) => R4
    ]
  : T extends {
      (...args: infer A1): infer R1;
      (...args: infer A2): infer R2;
      (...args: infer A3): infer R3;
    }
  ? [(...args: A1) => R1, (...args: A2) => R2, (...args: A3) => R3]
  : T extends {
      (...args: infer A1): infer R1;
      (...args: infer A2): infer R2;
    }
  ? [(...args: A1) => R1, (...args: A2) => R2]
  : T extends (...args: infer A) => infer R
  ? [(...args: A) => R]
  : never;

// React component prop utilities
type ComponentProps<T> = T extends React.ComponentType<infer P>
  ? P
  : never;

type ComponentPropsWithoutRef<T> = T extends React.ForwardRefExoticComponent<
  infer P
>
  ? P
  : React.ComponentProps<T>;`,
            explanation: "Build reusable type utilities by combining advanced TypeScript features. Start simple, compose utilities, and create powerful type transformations. These utilities can be shared across projects and improve type safety throughout your codebase."
          }
        }
      ],
      conclusion: "Advanced TypeScript features enable sophisticated type-safe code. Generics provide flexibility, conditional types add type-level logic, mapped types transform types, and template literal types create precise string types. Combine these features to build powerful type utilities that catch errors at compile time. Remember: these advanced features are tools - use them when they add value, not just because they're possible. Start with simpler solutions and add complexity only when needed."
    }
  },
  {
    id: "expert-9",
    title: "Advanced TypeScript: Conditional Types and Type Manipulation",
    description: "Master TypeScript's most advanced features: recursive conditional types, type-level programming, and building complex type systems for React applications.",
    level: "expert",
    estimatedTime: "150 min",
    topics: ["Recursive Types", "Type-Level Programming", "Type Inference", "Complex Type Systems", "Type Safety Patterns"],
    prerequisites: ["TypeScript Generics and Utility Types Deep Dive", "Creating Your Own React Library"],
    content: {
      overview: "This expert-level tutorial explores TypeScript's most advanced type system features. You'll learn recursive conditional types, type-level programming techniques, advanced type inference patterns, and how to build complex type systems that provide incredible type safety for React applications. These techniques enable you to create type-safe abstractions that would be impossible in other languages, catching entire classes of errors at compile time.",
      sections: [
        {
          title: "Lesson 1: Recursive Conditional Types",
          content: "Recursive conditional types enable type-level computation and complex type transformations.\n\nRecursive Patterns:\n• Types that reference themselves\n• Conditional recursion\n• Type-level loops\n• Deep type transformations\n\nUse Cases:\n• Deep type utilities\n• Complex type extraction\n• Type-level algorithms\n• Schema validation types",
          codeExample: {
            code: `// Deep type operations with recursion

// Deep readonly (recursive)
type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object
    ? T[P] extends any[]
      ? ReadonlyArray<DeepReadonly<T[P][number]>>
      : DeepReadonly<T[P]>
    : T[P];
};

// Deep required
type DeepRequired<T> = {
  [P in keyof T]-?: T[P] extends object
    ? DeepRequired<T[P]>
    : T[P];
};

// Extract all string paths from object
type Paths<T> = T extends object
  ? {
      [K in keyof T]: K extends string
        ? T[K] extends object
          ? K | \`\${K}.\${Paths<T[K]>}\`
          : K
        : never;
    }[keyof T]
  : never;

interface User {
  profile: {
    name: string;
    address: {
      street: string;
      city: string;
    };
  };
  settings: {
    theme: string;
  };
}

type UserPaths = Paths<User>;
// "profile" | "profile.name" | "profile.address" | "profile.address.street" | ...

// Get value type at path
type PathValue<T, P extends Paths<T>> = P extends \`\${infer K}.\${infer Rest}\`
  ? K extends keyof T
    ? PathValue<T[K], Rest>
    : never
  : P extends keyof T
  ? T[P]
  : never;

type StreetType = PathValue<User, "profile.address.street">; // string`,
            explanation: "Recursive conditional types enable deep type transformations and type-level computation. Use conditional types with recursion to traverse nested structures and build powerful type utilities."
          }
        },
        {
          title: "Lesson 2: Type-Level Programming",
          content: "Type-level programming performs computations at the type level, catching logic errors at compile time.\n\nConcepts:\n• Type-level functions\n• Type-level conditionals\n• Type-level loops\n• Type-level arithmetic\n• Type-level data structures\n\nApplications:\n• Schema validation\n• API type generation\n• Type-safe routing\n• Complex business logic validation",
          codeExample: {
            code: `// Type-level arithmetic (simplified)
type Length<T extends readonly any[]> = T["length"];

type A = Length<[1, 2, 3]>; // 3

// Type-level array operations
type Head<T extends readonly any[]> = T extends readonly [infer H, ...any[]]
  ? H
  : never;

type Tail<T extends readonly any[]> = T extends readonly [any, ...infer Rest]
  ? Rest
  : never;

type Last<T extends readonly any[]> = T extends readonly [...any[], infer L]
  ? L
  : never;

// Type-level string manipulation
type Split<
  S extends string,
  D extends string
> = S extends \`\${infer First}\${D}\${infer Rest}\`
  ? [First, ...Split<Rest, D>]
  : [S];

type Parts = Split<"a.b.c", ".">; // ["a", "b", "c"]

// Type-safe state machine
type State = "idle" | "loading" | "success" | "error";

type ValidTransition<S extends State> = S extends "idle"
  ? "loading"
  : S extends "loading"
  ? "success" | "error"
  : never;

function transition<S extends State>(
  current: S,
  next: ValidTransition<S>
): ValidTransition<S> {
  return next;
}

// Type-safe, compile-time validated state transitions
transition("idle", "loading"); // ✅
transition("loading", "success"); // ✅
transition("idle", "success"); // ❌ Error`,
            explanation: "Type-level programming performs computations in the type system. Build type-level functions, conditionals, and data structures to validate logic at compile time. This catches entire classes of errors before runtime."
          }
        },
        {
          title: "Lesson 3: Advanced Type Inference",
          content: "Master TypeScript's type inference system to create APIs that infer types automatically.\n\nInference Techniques:\n• Inference from function parameters\n• Inference from return types\n• Conditional inference\n• Variadic tuple types\n• Const assertions\n\nBenefits:\n• Better developer experience\n• Automatic type detection\n• Less manual typing\n• More flexible APIs",
          codeExample: {
            code: `// Inference from usage
function createStore<T>(initialValue: T) {
  let value = initialValue;
  
  return {
    get: () => value,
    set: (newValue: T) => {
      value = newValue;
    },
  };
}

const store = createStore(0); // T inferred as number
const count = store.get(); // number

// Variadic tuple types
function zip<A extends readonly any[], B extends readonly any[]>(
  a: A,
  b: B
): {
  [K in keyof A]: [A[K], B[K extends keyof B ? K : never]];
} {
  return a.map((item, i) => [item, b[i]]) as any;
}

const zipped = zip([1, 2, 3] as const, ["a", "b", "c"] as const);
// [[1, "a"], [2, "b"], [3, "c"]]

// Const assertions
const config = {
  apiUrl: "https://api.example.com",
  timeout: 5000,
  retries: 3,
} as const;

// All properties are readonly literals

// Function overloads with inference
function createElement<T extends keyof HTMLElementTagNameMap>(
  tag: T
): HTMLElementTagNameMap[T];
function createElement<T extends React.ComponentType<any>>(
  component: T
): React.ComponentProps<T>;
function createElement(tag: any): any {
  // Implementation
}

const div = createElement("div"); // HTMLDivElement
const button = createElement("button"); // HTMLButtonElement

// Infer component props
type InferProps<T> = T extends React.ComponentType<infer P> ? P : never;

// Type-safe event emitter
type EventMap = {
  click: { x: number; y: number };
  change: { value: string };
  submit: { data: FormData };
};

class TypedEventEmitter<T extends Record<string, any>> {
  private listeners: {
    [K in keyof T]?: Array<(event: T[K]) => void>;
  } = {};
  
  on<K extends keyof T>(event: K, handler: (data: T[K]) => void) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event]!.push(handler);
  }
  
  emit<K extends keyof T>(event: K, data: T[K]) {
    this.listeners[event]?.forEach((handler) => handler(data));
  }
}

const emitter = new TypedEventEmitter<EventMap>();
emitter.on("click", (data) => {
  // data is { x: number; y: number }
});
emitter.emit("click", { x: 10, y: 20 }); // Type-safe!`,
            explanation: "Advanced type inference creates APIs that automatically detect and enforce types. Use variadic tuple types, const assertions, and conditional inference to build flexible, type-safe APIs that require minimal manual typing."
          }
        },
        {
          title: "Lesson 4: Building Complex Type Systems",
          content: "Combine all advanced TypeScript features to build complex, type-safe systems.\n\nSystem Building:\n• Type-safe API clients\n• Schema validation types\n• Form state types\n• Routing types\n• State management types\n\nPrinciples:\n• Start with simple types\n• Compose complex types\n• Leverage inference\n• Document complex types\n• Test with examples",
          codeExample: {
            code: `// Type-safe API client builder
type EndpointDefinition = {
  [K: string]: (params?: any) => Promise<any>;
};

type ApiClient<T extends EndpointDefinition> = {
  [K in keyof T]: T[K] extends (params: infer P) => Promise<infer R>
    ? P extends undefined
      ? () => Promise<R>
      : (params: P) => Promise<R>
    : never;
};

function createApiClient<T extends EndpointDefinition>(
  config: T
): ApiClient<T> {
  // Implementation
  return {} as ApiClient<T>;
}

const api = createApiClient({
  getUser: (id: number) => Promise.resolve({ id, name: "Alice" }),
  createPost: (data: { title: string; content: string }) =>
    Promise.resolve({ id: 1, ...data }),
});

// Fully type-safe!
const user = await api.getUser(123);
const post = await api.createPost({ title: "Hello", content: "World" });

// Type-safe form state
type FormField<T> = {
  value: T;
  error?: string;
  touched: boolean;
};

type FormState<T extends Record<string, any>> = {
  [K in keyof T]: FormField<T[K]>;
} & {
  isValid: boolean;
  isSubmitting: boolean;
};

function createFormState<T extends Record<string, any>>(
  initialValues: T
): FormState<T> {
  // Implementation
  return {} as FormState<T>;
}

const form = createFormState({
  email: "",
  password: "",
  age: 0,
});

// form.email.value is string
// form.age.value is number
// form.isValid is boolean`,
            explanation: "Complex type systems combine all advanced TypeScript features. Build type-safe APIs, form systems, routing, and state management with full compile-time validation. These systems catch errors before runtime and provide excellent developer experience."
          }
        }
      ],
      conclusion: "Advanced TypeScript features enable incredible type safety. Recursive conditional types perform type-level computation, type-level programming validates logic at compile time, and advanced inference creates flexible APIs. Build complex type systems that catch entire classes of errors before runtime. Remember: these are powerful tools that require careful design. Start simple, add complexity gradually, and always prioritize readability and maintainability over cleverness."
    }
  },
  {
    id: "staff-6",
    title: "TypeScript at Scale: Type-Safe Architecture",
    description: "Design type-safe architectures for large-scale React applications. Learn monorepo type strategies, shared type libraries, API contract types, and enterprise patterns.",
    level: "staff",
    estimatedTime: "180 min",
    topics: ["Type Architecture", "Monorepo Types", "API Contracts", "Shared Types", "Enterprise Patterns"],
    prerequisites: ["Advanced TypeScript: Conditional Types and Type Manipulation", "Design Systems and Component Libraries"],
    content: {
      overview: "At the Staff Engineer level, you design type-safe architectures that scale across teams, products, and organizations. This tutorial covers monorepo type strategies, shared type libraries, API contract management, cross-service type sharing, and enterprise patterns for maintaining type safety at scale. You'll learn how to establish type governance, create shared type systems, manage API contracts with types, and ensure type safety across large codebases with multiple teams.",
      sections: [
        {
          title: "Lesson 1: Type Architecture for Large Applications",
          content: "Design type architectures that scale across teams and products.\n\nArchitectural Principles:\n• Shared type libraries\n• Type boundaries between modules\n• Type versioning strategies\n• Type governance\n• Documentation standards\n\nStructure Patterns:\n• Monorepo type organization\n• Shared types package\n• Domain-specific types\n• API contract types\n• Cross-cutting types\n\nBest Practices:\n• Define clear type boundaries\n• Version types independently\n• Document type decisions\n• Establish type review process\n• Monitor type usage",
          codeExample: {
            code: `// Monorepo type structure
// packages/
//   types/
//     shared/          # Cross-cutting types
//     api/            # API contract types
//     domain/         # Domain-specific types
//   apps/
//     web/           # Web app (uses types package)
//     mobile/        # Mobile app (uses types package)

// packages/types/shared/index.ts
export interface BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export type ID<T extends BaseEntity> = T["id"];

// packages/types/api/contracts.ts
export interface ApiResponse<T> {
  data: T;
  meta?: {
    pagination?: {
      page: number;
      limit: number;
      total: number;
    };
  };
  errors?: ApiError[];
}

export interface ApiError {
  code: string;
  message: string;
  field?: string;
}

// packages/types/domain/user.ts
import { BaseEntity } from "../shared";

export interface User extends BaseEntity {
  email: string;
  name: string;
  role: "admin" | "user" | "guest";
  preferences: UserPreferences;
}

export interface UserPreferences {
  theme: "light" | "dark";
  notifications: boolean;
}

// Type boundaries
// Each domain owns its types
// Cross-domain types go in shared
// API types are separate from domain types`,
            explanation: "Organize types in a monorepo with clear boundaries. Separate shared types, domain types, and API contract types. Establish ownership and versioning strategies for types at scale."
          }
        },
        {
          title: "Lesson 2: API Contract Management with Types",
          content: "Use TypeScript types to define and enforce API contracts across services.\n\nContract Strategies:\n• OpenAPI/Swagger type generation\n• GraphQL type generation\n• Shared contract types\n• Version management\n• Breaking change detection\n\nBenefits:\n• Type safety across services\n• Automatic validation\n• Documentation generation\n• Breaking change detection\n• Client/server type sync",
          codeExample: {
            code: `// API contract types
// contracts/api/users.ts
export interface GetUserRequest {
  userId: string;
}

export interface GetUserResponse {
  user: User;
}

export interface CreateUserRequest {
  email: string;
  name: string;
  role?: UserRole;
}

export interface CreateUserResponse {
  user: User;
  token: string;
}

// Contract validation
type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;

function validateRequest<T>(
  request: unknown,
  schema: ZodSchema<T>
): T {
  return schema.parse(request);
}

// Type-safe API client
type ApiEndpoints = {
  "GET /users/:id": {
    params: { id: string };
    response: GetUserResponse;
  };
  "POST /users": {
    body: CreateUserRequest;
    response: CreateUserResponse;
  };
};

class TypeSafeApiClient {
  async request<
    E extends keyof ApiEndpoints,
    R = ApiEndpoints[E]["response"]
  >(
    endpoint: E,
    options: E extends keyof ApiEndpoints
      ? ApiEndpoints[E] extends { params: infer P }
        ? { params: P }
        : ApiEndpoints[E] extends { body: infer B }
        ? { body: B }
        : {}
      : never
  ): Promise<R> {
    // Implementation
    return {} as R;
  }
}

// Usage - fully type-safe
const client = new TypeSafeApiClient();
const user = await client.request("GET /users/:id", {
  params: { id: "123" },
});
// user is GetUserResponse

// GraphQL type generation
// schema.graphql -> generated/types.ts (via codegen)
// Automatic type generation from GraphQL schema
// Ensures types stay in sync with schema`,
            explanation: "API contract types ensure type safety across services. Define contracts explicitly, generate types from schemas (OpenAPI, GraphQL), and use type-safe clients. This catches breaking changes at compile time and keeps services in sync."
          }
        },
        {
          title: "Lesson 3: Shared Type Libraries",
          content: "Create and maintain shared type libraries for organization-wide type safety.\n\nLibrary Design:\n• Clear public API\n• Semantic versioning\n• Breaking change policy\n• Migration guides\n• Documentation\n\nDistribution:\n• npm packages\n• Monorepo packages\n• Type-only packages\n• Version management\n\nConsumption:\n• Import strategies\n• Type re-exports\n• Module augmentation\n• Declaration merging",
          codeExample: {
            code: `// packages/@company/types/package.json
{
  "name": "@company/types",
  "version": "2.0.0",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": "./dist/index.js",
    "./api": "./dist/api/index.d.ts",
    "./domain": "./dist/domain/index.d.ts"
  },
  "dependencies": {},
  "peerDependencies": {}
}

// packages/@company/types/index.ts
// Public API - carefully curated exports
export * from "./shared";
export * from "./api";
export * from "./domain";

// Versioned API types
export * as v1 from "./api/v1";
export * as v2 from "./api/v2";

// Usage in apps
import { User, ApiResponse } from "@company/types";
import { GetUserResponse } from "@company/types/api/v2";

// Type-only imports (tree-shakeable)
import type { User } from "@company/types";

// Module augmentation for extending types
declare module "@company/types" {
  interface User {
    customField?: string;
  }
}

// Type guards in shared library
export function isUser(value: unknown): value is User {
  return (
    typeof value === "object" &&
    value !== null &&
    "id" in value &&
    "email" in value
  );
}`,
            explanation: "Shared type libraries provide organization-wide type safety. Design clear public APIs, version types carefully, support multiple versions during migrations, and enable module augmentation for extensibility. Type-only packages have no runtime cost."
          }
        },
        {
          title: "Lesson 4: Type Governance and Best Practices",
          content: "Establish type governance processes for large teams and organizations.\n\nGovernance Areas:\n• Type review process\n• Breaking change policy\n• Documentation standards\n• Naming conventions\n• Type complexity guidelines\n\nProcess:\n• Type RFCs for major changes\n• Automated type checking\n• Type coverage metrics\n• Breaking change detection\n• Migration automation\n\nTools:\n• TypeScript compiler checks\n• ESLint type rules\n• Custom type validators\n• Breaking change detectors",
          codeExample: {
            code: `// Type governance checklist

// 1. Type Review Process
// - All exported types reviewed
// - Breaking changes documented
// - Migration paths provided

// 2. Naming Conventions
// - Interfaces: PascalCase (User, ApiResponse)
// - Types: PascalCase (UserRole, ApiEndpoint)
// - Type parameters: Single uppercase letter (T, K, V)

// 3. Documentation Standards
/**
 * Represents a user in the system.
 * 
 * @example
 * const user: User = {
 *   id: "123",
 *   email: "user@example.com",
 *   name: "John Doe"
 * };
 */
export interface User {
  /** Unique identifier */
  id: string;
  /** User's email address */
  email: string;
  /** User's full name */
  name: string;
}

// 4. Complexity Guidelines
// - Prefer composition over complex types
// - Limit conditional type nesting
// - Use utility types instead of inline complex types
// - Extract complex types to named types

// 5. Breaking Change Detection
// tools/check-breaking-changes.ts
import { compareTypes } from "./type-comparator";

const oldTypes = loadTypes("v1.0.0");
const newTypes = loadTypes("v2.0.0");

const breakingChanges = compareTypes(oldTypes, newTypes);

if (breakingChanges.length > 0) {
  console.error("Breaking changes detected:", breakingChanges);
  process.exit(1);
}

// 6. Type Coverage
// Track type coverage across codebase
// Enforce "no any" policy
// Monitor type errors in CI`,
            explanation: "Type governance ensures quality and consistency at scale. Establish review processes, naming conventions, documentation standards, complexity guidelines, and automated checking. Monitor breaking changes and type coverage across the organization."
          }
        },
        {
          title: "Lesson 5: Enterprise Type Patterns",
          content: "Advanced patterns for maintaining type safety in enterprise applications.\n\nPatterns:\n• Multi-version type support\n• Backward compatibility\n• Type migrations\n• Cross-service type sharing\n• Distributed type systems\n\nChallenges:\n• Multiple service versions\n• Gradual migrations\n• Team coordination\n• Performance at scale\n• Tooling complexity",
          codeExample: {
            code: `// Multi-version support
// Support multiple API versions simultaneously
type ApiVersion = "v1" | "v2" | "v3";

type VersionedApi<T extends ApiVersion> = {
  v1: V1ApiTypes;
  v2: V2ApiTypes;
  v3: V3ApiTypes;
}[T];

function createApiClient<T extends ApiVersion>(version: T): ApiClient<VersionedApi<T>> {
  // Implementation
}

const v2Client = createApiClient("v2"); // Type-safe v2 client

// Backward compatibility types
type BackwardCompatible<T, U> = T & Partial<U>;

// Migration utilities
type Migrate<T, U> = {
  from: T;
  to: U;
  migrate: (value: T) => U;
};

// Cross-service type sharing
// services/
//   user-service/types.ts
//   order-service/types.ts
//   shared-types/        # Shared across services

// Type registry for discovery
export const TypeRegistry = {
  User: import("@company/types/domain/user"),
  Order: import("@company/types/domain/order"),
  // ... more types
} as const;

// Type-safe service communication
type ServiceContract = {
  "user-service": {
    "getUser": (id: string) => Promise<User>;
    "createUser": (data: CreateUserRequest) => Promise<User>;
  };
  "order-service": {
    "createOrder": (data: CreateOrderRequest) => Promise<Order>;
  };
};

function callService<
  S extends keyof ServiceContract,
  M extends keyof ServiceContract[S]
>(
  service: S,
  method: M,
  ...args: Parameters<ServiceContract[S][M]>
): ReturnType<ServiceContract[S][M]> {
  // Implementation
}`,
            explanation: "Enterprise patterns handle complex scenarios: multi-version support, backward compatibility, gradual migrations, and cross-service type sharing. Design type systems that evolve safely while maintaining compatibility and type safety."
          }
        }
      ],
      conclusion: "TypeScript at scale requires careful architecture, governance, and patterns. Design type systems with clear boundaries, establish shared type libraries, manage API contracts with types, and create processes for type governance. Build type-safe architectures that scale across teams, services, and time. Remember: types are infrastructure - invest in them wisely, maintain them carefully, and they'll pay dividends in reduced bugs and improved developer experience."
    }
  },
  {
    id: "intermediate-6",
    title: "Throttling and Debouncing in React",
    description: "Learn how to optimize event handlers and API calls using throttling and debouncing techniques to improve performance and user experience.",
    level: "intermediate",
    estimatedTime: "60 min",
    topics: ["Throttling", "Debouncing", "Performance Optimization", "Event Handlers", "Custom Hooks", "API Optimization"],
    prerequisites: ["Managing State with useState", "Understanding useEffect", "Event Handling in React"],
    videoUrl: "https://www.youtube.com/watch?v=cjIswDCKgu0", // Debounce and Throttle in JavaScript
    content: {
      overview: "Throttling and debouncing are essential techniques for optimizing performance in React applications. They help control how often functions execute, which is crucial for handling frequent events like scrolling, resizing, typing, or API calls. This tutorial covers the differences between throttling and debouncing, when to use each, and how to implement them effectively in React components using custom hooks.",
      sections: [
        {
          title: "Understanding Throttling vs Debouncing",
          content: "Throttling and debouncing are often confused, but they serve different purposes.\n\nThrottling:\n• Limits function execution to at most once per time period\n• Executes the function at regular intervals\n• Useful for events that fire continuously (scroll, resize, mousemove)\n• Example: Update scroll position indicator every 100ms\n\nDebouncing:\n• Delays function execution until after a period of inactivity\n• Executes only after user stops the action\n• Useful for events that should trigger after completion (search input, form validation)\n• Example: Search API call only after user stops typing for 300ms\n\nKey Difference:\n• Throttling: \"Execute at most once per X milliseconds\"\n• Debouncing: \"Execute only if X milliseconds have passed since last call\"\n\nVisual Analogy:\n• Throttling: Like a metronome - regular beats\n• Debouncing: Like an elevator - waits for everyone to get on before moving",
          videoUrl: "https://www.youtube.com/watch?v=cjIswDCKgu0", // Debounce vs Throttle Explained
          codeExample: {
            code: `// Throttling: Execute at most once per 100ms
// If called 10 times in 50ms, executes 2 times (at 0ms and 100ms)

// Debouncing: Execute only after 300ms of inactivity
// If called 10 times in 500ms, executes once (300ms after last call)

// Example scenario: User typing "hello"
// Throttling (100ms): Executes at h, l, o (3 times)
// Debouncing (300ms): Executes once after "o" + 300ms (1 time)`,
            explanation: "Throttling ensures regular execution, while debouncing waits for a pause in activity. Choose throttling for continuous events and debouncing for events that should trigger after completion."
          }
        },
        {
          title: "Implementing Debouncing",
          content: "Debouncing is perfect for search inputs, form validation, and API calls triggered by user input.\n\nWhen to Use Debouncing:\n• Search input fields\n• Form validation on typing\n• API calls triggered by input\n• Window resize handlers (sometimes)\n• Auto-save functionality\n\nBenefits:\n• Reduces unnecessary API calls\n• Improves performance\n• Better user experience (less flickering)\n• Saves server resources\n\nImplementation Steps:\n1. Create a debounce function\n2. Use useMemo or useCallback to create debounced version\n3. Clean up on unmount\n4. Handle edge cases (immediate execution, cancellation)",
          videoUrl: "https://www.youtube.com/watch?v=cjIswDCKgu0", // JavaScript Debounce Explained
          codeExample: {
            code: `// Basic debounce implementation
function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout | null = null;
  
  return function executedFunction(...args: Parameters<T>) {
    // Clear previous timeout
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    
    // Set new timeout
    timeoutId = setTimeout(() => {
      func(...args);
    }, wait);
  };
}

// Using debounce in React component
function SearchInput() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<string[]>([]);
  
  // Debounced search function
  const debouncedSearch = useMemo(
    () => debounce(async (searchQuery: string) => {
      if (!searchQuery.trim()) {
        setResults([]);
        return;
      }
      
      // Simulate API call
      const response = await fetch(\`/api/search?q=\${searchQuery}\`);
      const data = await response.json();
      setResults(data.results);
    }, 300),
    [] // Only create once
  );
  
  // Cleanup on unmount
  useEffect(() => {
    return () => {
      // Cancel pending debounced calls
      debouncedSearch.cancel?.();
    };
  }, [debouncedSearch]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(value);
  };
  
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
      />
      <ul>
        {results.map((result, idx) => (
          <li key={idx}>{result}</li>
        ))}
      </ul>
    </div>
  );
}

// Enhanced debounce with immediate execution option
function debounceImmediate<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number,
  immediate = false
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout | null = null;
  
  return function executedFunction(...args: Parameters<T>) {
    const callNow = immediate && !timeoutId;
    
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    
    timeoutId = setTimeout(() => {
      timeoutId = null;
      if (!immediate) {
        func(...args);
      }
    }, wait);
    
    if (callNow) {
      func(...args);
    }
  };
}`,
            explanation: "Debouncing delays execution until after a period of inactivity. Use it for search inputs and API calls to reduce unnecessary requests and improve performance."
          }
        },
        {
          title: "Implementing Throttling",
          content: "Throttling ensures functions execute at most once per time period, perfect for continuous events.\n\nWhen to Use Throttling:\n• Scroll event handlers\n• Window resize handlers\n• Mouse move tracking\n• Touch move events\n• Infinite scroll loading\n• Analytics tracking\n\nBenefits:\n• Prevents excessive function calls\n• Maintains responsiveness\n• Reduces performance impact\n• Smooth user experience\n\nImplementation Approaches:\n1. Leading edge: Execute immediately, then throttle\n2. Trailing edge: Execute at end of time period\n3. Both: Execute immediately and at end",
          videoUrl: "https://www.youtube.com/watch?v=cjIswDCKgu0", // JavaScript Throttle Explained
          codeExample: {
            code: `// Basic throttle implementation (leading edge)
function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  
  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

// Throttle with trailing edge option
function throttleTrailing<T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let lastFunc: NodeJS.Timeout | null = null;
  let lastRan: number = 0;
  
  return function executedFunction(...args: Parameters<T>) {
    if (!lastRan) {
      func(...args);
      lastRan = Date.now();
    } else {
      if (lastFunc) {
        clearTimeout(lastFunc);
      }
      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func(...args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

// Using throttle in React component
function ScrollTracker() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollCount, setScrollCount] = useState(0);
  
  useEffect(() => {
    const handleScroll = throttle(() => {
      setScrollY(window.scrollY);
      setScrollCount(prev => prev + 1);
    }, 100); // Execute at most once per 100ms
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div>
      <p>Scroll Position: {scrollY}px</p>
      <p>Scroll Events Processed: {scrollCount}</p>
      <p className="text-sm text-muted-foreground">
        (Throttled to max 10 times per second)
      </p>
    </div>
  );
}

// Throttled resize handler
function ResponsiveComponent() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = throttle(() => {
      setWindowWidth(window.innerWidth);
    }, 250);
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div>
      <p>Window Width: {windowWidth}px</p>
      {windowWidth < 768 && <p>Mobile View</p>}
      {windowWidth >= 768 && <p>Desktop View</p>}
    </div>
  );
}`,
            explanation: "Throttling limits function execution frequency. Use it for continuous events like scrolling and resizing to maintain performance while still responding to user actions."
          }
        },
        {
          title: "Custom React Hooks for Throttling and Debouncing",
          content: "Creating custom hooks makes throttling and debouncing reusable across components.\n\nBenefits of Custom Hooks:\n• Reusable logic\n• Clean component code\n• Proper cleanup handling\n• Type safety\n• Easy testing\n\nHook Design Considerations:\n• Handle cleanup on unmount\n• Support dependency arrays\n• Allow configuration (delay, immediate)\n• Return cancel function\n• TypeScript support",
          videoUrl: "https://www.youtube.com/watch?v=6ThXsUwLWvc", // React Custom Hooks for Debounce/Throttle
          codeExample: {
            code: `// Custom useDebounce hook
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  
  useEffect(() => {
    // Set timeout to update debounced value
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    
    // Cleanup timeout on value change or unmount
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  
  return debouncedValue;
}

// Usage: Debounce search query
function SearchComponent() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 300);
  const [results, setResults] = useState<string[]>([]);
  
  useEffect(() => {
    if (debouncedQuery) {
      // API call only happens after user stops typing
      fetch(\`/api/search?q=\${debouncedQuery}\`)
        .then(res => res.json())
        .then(data => setResults(data.results));
    }
  }, [debouncedQuery]);
  
  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <ul>
        {results.map((result, idx) => (
          <li key={idx}>{result}</li>
        ))}
      </ul>
    </div>
  );
}

// Custom useDebounceCallback hook
function useDebounceCallback<T extends (...args: unknown[]) => unknown>(
  callback: T,
  delay: number
): T {
  const timeoutRef = useRef<NodeJS.Timeout>();
  const callbackRef = useRef(callback);
  
  // Update callback ref when callback changes
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);
  
  const debouncedCallback = useCallback(
    ((...args: Parameters<T>) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      timeoutRef.current = setTimeout(() => {
        callbackRef.current(...args);
      }, delay);
    }) as T,
    [delay]
  );
  
  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  
  return debouncedCallback;
}

// Custom useThrottle hook
function useThrottle<T>(value: T, limit: number): T {
  const [throttledValue, setThrottledValue] = useState<T>(value);
  const lastRan = useRef<number>(Date.now());
  
  useEffect(() => {
    const handler = setTimeout(() => {
      if (Date.now() - lastRan.current >= limit) {
        setThrottledValue(value);
        lastRan.current = Date.now();
      }
    }, limit - (Date.now() - lastRan.current));
    
    return () => {
      clearTimeout(handler);
    };
  }, [value, limit]);
  
  return throttledValue;
}

// Custom useThrottleCallback hook
function useThrottleCallback<T extends (...args: unknown[]) => unknown>(
  callback: T,
  limit: number
): T {
  const lastRan = useRef<number>(0);
  const callbackRef = useRef(callback);
  
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);
  
  const throttledCallback = useCallback(
    ((...args: Parameters<T>) => {
      const now = Date.now();
      if (now - lastRan.current >= limit) {
        callbackRef.current(...args);
        lastRan.current = now;
      }
    }) as T,
    [limit]
  );
  
  return throttledCallback;
}

// Usage: Throttled scroll handler
function ScrollComponent() {
  const [scrollY, setScrollY] = useState(0);
  
  const handleScroll = useThrottleCallback(() => {
    setScrollY(window.scrollY);
  }, 100);
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);
  
  return <div>Scroll Position: {scrollY}px</div>;
}`,
            explanation: "Custom hooks encapsulate throttling and debouncing logic, making it reusable and easier to use in components. They handle cleanup automatically and provide a clean API."
          }
        },
        {
          title: "Real-World Use Cases",
          content: "Understanding when and how to apply throttling and debouncing in real applications.\n\nCommon Scenarios:\n\n1. Search Input (Debounce):\n• User types search query\n• Wait 300ms after typing stops\n• Then make API call\n• Reduces API calls from 10+ to 1\n\n2. Infinite Scroll (Throttle):\n• User scrolls down page\n• Check scroll position every 200ms\n• Load more content when near bottom\n• Prevents excessive checks\n\n3. Form Validation (Debounce):\n• User types in email field\n• Wait 500ms after typing stops\n• Then validate email format\n• Better UX than validating on every keystroke\n\n4. Window Resize (Throttle):\n• User resizes browser window\n• Update layout calculations every 250ms\n• Prevents layout thrashing\n\n5. Button Click (Debounce):\n• Prevent double-clicks\n• Disable button for 1000ms after click\n• Prevents duplicate submissions\n\n6. Analytics Tracking (Throttle):\n• Track scroll depth\n• Send analytics every 2 seconds\n• Reduces network requests\n\nBest Practices:\n• Use debounce for user input (search, validation)\n• Use throttle for continuous events (scroll, resize)\n• Choose appropriate delays (100-500ms common)\n• Always cleanup in useEffect\n• Test with fast user interactions",
          codeExample: {
            code: `// 1. Search with debounce
function SearchPage() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 300);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    if (!debouncedQuery) {
      setResults([]);
      return;
    }
    
    setLoading(true);
    searchAPI(debouncedQuery)
      .then(data => {
        setResults(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [debouncedQuery]);
  
  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products..."
      />
      {loading && <p>Searching...</p>}
      <ResultsList results={results} />
    </div>
  );
}

// 2. Infinite scroll with throttle
function InfiniteScrollList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  
  const checkScroll = useThrottleCallback(() => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    // Load more when 200px from bottom
    if (documentHeight - (scrollTop + windowHeight) < 200 && hasMore && !loading) {
      loadMore();
    }
  }, 200);
  
  const loadMore = async () => {
    setLoading(true);
    const newItems = await fetchMoreItems();
    setItems(prev => [...prev, ...newItems]);
    setHasMore(newItems.length > 0);
    setLoading(false);
  };
  
  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, [checkScroll, hasMore, loading]);
  
  return <ItemList items={items} />;
}

// 3. Form validation with debounce
function EmailInput() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const debouncedEmail = useDebounce(email, 500);
  
  useEffect(() => {
    if (!debouncedEmail) {
      setError('');
      return;
    }
    
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailRegex.test(debouncedEmail)) {
      setError('Please enter a valid email address');
    } else {
      setError('');
    }
  }, [debouncedEmail]);
  
  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}

// 4. Button click debounce (prevent double-click)
function SubmitButton() {
  const [disabled, setDisabled] = useState(false);
  
  const handleSubmit = useDebounceCallback(async () => {
    setDisabled(true);
    await submitForm();
    setDisabled(false);
  }, 1000);
  
  return (
    <button onClick={handleSubmit} disabled={disabled}>
      {disabled ? 'Submitting...' : 'Submit'}
    </button>
  );
}

// 5. Analytics tracking with throttle
function ScrollAnalytics() {
  const trackScroll = useThrottleCallback(() => {
    const scrollPercent = 
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    
    // Send to analytics (throttled to every 2 seconds)
    analytics.track('scroll_depth', { percent: Math.round(scrollPercent) });
  }, 2000);
  
  useEffect(() => {
    window.addEventListener('scroll', trackScroll);
    return () => window.removeEventListener('scroll', trackScroll);
  }, [trackScroll]);
  
  return null; // This is just for tracking
}`,
            explanation: "Real-world applications use throttling and debouncing for search, infinite scroll, form validation, button clicks, and analytics. Choose the right technique based on the use case."
          }
        },
        {
          title: "Performance Considerations and Best Practices",
          content: "Understanding performance implications and following best practices ensures optimal results.\n\nPerformance Tips:\n• Choose appropriate delays (100-500ms common)\n• Use debounce for expensive operations (API calls)\n• Use throttle for frequent events (scroll, resize)\n• Always cleanup timeouts/intervals\n• Consider using requestAnimationFrame for animations\n• Test with fast user interactions\n\nCommon Pitfalls:\n• Forgetting to cleanup (memory leaks)\n• Creating new debounced/throttled functions on every render\n• Using wrong technique for the use case\n• Too short delays (poor UX)\n• Too long delays (feels unresponsive)\n\nBest Practices:\n• Use useMemo/useCallback for stable references\n• Cleanup in useEffect return\n• Test edge cases (rapid clicking, fast typing)\n• Consider user experience\n• Monitor performance impact\n• Use TypeScript for type safety",
          codeExample: {
            code: `// ❌ BAD: Creating new debounced function on every render
function BadSearch() {
  const [query, setQuery] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    
    // ❌ New debounced function created every render!
    const debounced = debounce(() => {
      searchAPI(value);
    }, 300);
    debounced();
  };
  
  return <input value={query} onChange={handleChange} />;
}

// ✅ GOOD: Stable debounced function reference
function GoodSearch() {
  const [query, setQuery] = useState('');
  
  const debouncedSearch = useMemo(
    () => debounce((searchQuery: string) => {
      searchAPI(searchQuery);
    }, 300),
    [] // Only create once
  );
  
  // Cleanup
  useEffect(() => {
    return () => {
      debouncedSearch.cancel?.();
    };
  }, [debouncedSearch]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(value);
  };
  
  return <input value={query} onChange={handleChange} />;
}

// ❌ BAD: No cleanup (memory leak)
function BadThrottle() {
  useEffect(() => {
    const handler = throttle(() => {
      console.log('scroll');
    }, 100);
    
    window.addEventListener('scroll', handler);
    // ❌ Missing cleanup!
  }, []);
  
  return <div>Content</div>;
}

// ✅ GOOD: Proper cleanup
function GoodThrottle() {
  useEffect(() => {
    const handler = throttle(() => {
      console.log('scroll');
    }, 100);
    
    window.addEventListener('scroll', handler);
    
    // ✅ Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', handler);
    };
  }, []);
  
  return <div>Content</div>;
}

// Performance comparison
function PerformanceDemo() {
  const [count, setCount] = useState(0);
  const [throttledCount, setThrottledCount] = useState(0);
  
  // Without throttle: fires on every scroll
  useEffect(() => {
    const handler = () => setCount(prev => prev + 1);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);
  
  // With throttle: fires max once per 100ms
  useEffect(() => {
    const handler = throttle(() => {
      setThrottledCount(prev => prev + 1);
    }, 100);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);
  
  return (
    <div>
      <p>Scroll Events (no throttle): {count}</p>
      <p>Scroll Events (throttled): {throttledCount}</p>
      <p className="text-sm text-muted-foreground">
        Scroll quickly to see the difference!
      </p>
    </div>
  );
}

// Choosing the right delay
const DELAY_GUIDE = {
  // Debounce delays
  search: 300,        // Search input: 300ms
  validation: 500,    // Form validation: 500ms
  autosave: 1000,    // Auto-save: 1000ms
  
  // Throttle delays
  scroll: 100,       // Scroll tracking: 100ms
  resize: 250,       // Window resize: 250ms
  mousemove: 16,     // Mouse move (60fps): 16ms
  analytics: 2000,   // Analytics: 2000ms
};`,
            explanation: "Follow best practices: use stable function references, always cleanup, choose appropriate delays, and test performance. Avoid common pitfalls like memory leaks and recreating functions on every render."
          }
        }
      ],
      conclusion: "Throttling and debouncing are essential techniques for optimizing React applications. Use debouncing for user input and API calls that should wait for completion. Use throttling for continuous events like scrolling and resizing. Create custom hooks for reusability, always handle cleanup properly, and choose appropriate delays based on your use case. These techniques significantly improve performance and user experience by reducing unnecessary function executions and API calls. Remember: debounce waits for a pause, throttle limits frequency - choose the right tool for the job."
    }
  },
  {
    id: "beginner-6",
    title: "Conditional Rendering and Lists in React",
    description: "Learn how to conditionally render components and display lists of data efficiently in React applications.",
    level: "beginner",
    estimatedTime: "50 min",
    topics: ["Conditional Rendering", "Lists", "Keys", "Array Methods", "Filtering", "Mapping"],
    prerequisites: ["Understanding Props", "Managing State with useState"],
    videoUrl: "https://www.youtube.com/watch?v=7VO1LOzlgTE", // React Lists and Keys - The Net Ninja
    content: {
      overview: "Conditional rendering and lists are fundamental patterns in React. You'll frequently need to show or hide components based on conditions, and display collections of data. This tutorial covers all the ways to conditionally render content and how to properly render lists with keys for optimal performance.",
      sections: [
        {
          title: "Understanding Conditional Rendering",
          content: "Conditional rendering allows you to show or hide components based on conditions. React supports several patterns for conditional rendering.\n\nCommon Use Cases:\n• Show/hide components based on state\n• Display different content for logged in/out users\n• Show loading states\n• Display error messages conditionally\n• Render different components based on props\n\nWhy It's Important:\n• Creates dynamic, interactive UIs\n• Improves user experience\n• Reduces unnecessary DOM elements\n• Makes components more flexible",
          videoUrl: "https://www.youtube.com/watch?v=7VO1LOzlgTE", // React Conditional Rendering
          codeExample: {
            code: `// Basic conditional rendering with if/else
function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please sign in.</h1>;
  }
}

// Conditional rendering with ternary operator
function UserStatus({ isOnline }) {
  return (
    <div>
      <p>Status: {isOnline ? 'Online' : 'Offline'}</p>
      {isOnline ? (
        <span className="text-green-500">●</span>
      ) : (
        <span className="text-gray-500">○</span>
      )}
    </div>
  );
}

// Conditional rendering with && operator
function Notification({ count }) {
  return (
    <div>
      <h2>Notifications</h2>
      {count > 0 && (
        <p>You have {count} new notifications</p>
      )}
      {count === 0 && (
        <p>No new notifications</p>
      )}
    </div>
  );
}

// Preventing component from rendering
function Warning({ show }) {
  if (!show) {
    return null; // Don't render anything
  }
  
  return <div className="warning">Warning message</div>;
}`,
            explanation: "Use if/else for simple conditions, ternary for inline conditions, && for conditional rendering, and return null to prevent rendering. Choose the pattern that makes your code most readable."
          }
        },
        {
          title: "Rendering Lists of Data",
          content: "React makes it easy to render lists of items. You use JavaScript's array methods, especially map(), to transform arrays of data into arrays of React elements.\n\nKey Concepts:\n• Use map() to transform arrays to JSX\n• Each list item needs a unique key\n• Keys help React identify which items changed\n• Keys should be stable, predictable, and unique\n\nCommon Patterns:\n• Rendering arrays of objects\n• Filtering before rendering\n• Sorting lists\n• Nested lists",
          codeExample: {
            code: `// Basic list rendering
function NumberList({ numbers }) {
  return (
    <ul>
      {numbers.map((number) => (
        <li key={number}>{number}</li>
      ))}
    </ul>
  );
}

// Rendering list of objects
const users = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 35 }
];

function UserList() {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} - {user.age} years old
        </li>
      ))}
    </ul>
  );
}

// List with component
function TodoList({ todos }) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

function TodoItem({ todo }) {
  return (
    <div>
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
    </div>
  );
}`,
            explanation: "Use map() to transform arrays into JSX elements. Always provide a key prop for list items. Use unique IDs when available, or index as last resort."
          }
        },
        {
          title: "Understanding Keys in Lists",
          content: "Keys are special string attributes you need to include when creating lists of elements. They help React identify which items have changed, been added, or removed.\n\nWhy Keys Matter:\n• Help React efficiently update the DOM\n• Preserve component state across re-renders\n• Prevent bugs when list order changes\n• Improve performance\n\nKey Rules:\n• Keys must be unique among siblings\n• Keys should be stable (don't use index if items can reorder)\n• Keys should be predictable (not random)\n• Keys only need to be unique within the same list\n\nWhat NOT to Use:\n• Don't use array index if items can be reordered\n• Don't use random values\n• Don't use keys that change on every render",
          videoUrl: "https://www.youtube.com/watch?v=7VO1LOzlgTE", // React Lists and Keys Explained
          codeExample: {
            code: `// ✅ GOOD: Using unique IDs
function UserList({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

// ✅ OK: Using index when list is static
function StaticList({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

// ❌ BAD: Using index when items can be reordered
function TodoList({ todos }) {
  const [sortedTodos, setSortedTodos] = useState(todos);
  
  return (
    <ul>
      {sortedTodos.map((todo, index) => (
        <li key={index}>{todo.text}</li>
        // ❌ If todos are reordered, React will get confused
      ))}
    </ul>
  );
}

// ✅ GOOD: Using stable unique IDs
function TodoList({ todos }) {
  const [sortedTodos, setSortedTodos] = useState(todos);
  
  return (
    <ul>
      {sortedTodos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
        // ✅ React can track items even when reordered
      ))}
    </ul>
  );
}

// Creating keys from multiple properties
function ProductList({ products }) {
  return (
    <div>
      {products.map((product) => (
        <Product
          key={\`\${product.category}-\${product.id}\`}
          product={product}
        />
      ))}
    </div>
  );
}`,
            explanation: "Keys help React efficiently update lists. Use unique, stable IDs when possible. Only use index for static lists that never reorder. Never use random values or values that change on every render."
          }
        },
        {
          title: "Filtering and Transforming Lists",
          content: "Often you need to filter, sort, or transform data before rendering it. JavaScript array methods work perfectly with React.\n\nCommon Operations:\n• filter() - Show only items matching criteria\n• sort() - Order items\n• slice() - Show limited items\n• find() - Find specific item\n• reduce() - Aggregate data\n\nBest Practices:\n• Filter before mapping when possible\n• Use useMemo for expensive operations\n• Keep transformations readable\n• Consider extracting complex logic",
          codeExample: {
            code: `// Filtering before rendering
function ActiveUsers({ users }) {
  const activeUsers = users.filter(user => user.isActive);
  
  return (
    <ul>
      {activeUsers.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

// Filtering and mapping together
function TodoList({ todos, filter }) {
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true; // 'all'
  });
  
  return (
    <ul>
      {filteredTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

// Sorting before rendering
function SortedProductList({ products }) {
  const sortedProducts = [...products].sort((a, b) => 
    a.price - b.price
  );
  
  return (
    <div>
      {sortedProducts.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

// Complex filtering and transformation
function UserDashboard({ users }) {
  const stats = useMemo(() => {
    const active = users.filter(u => u.isActive).length;
    const admins = users.filter(u => u.role === 'admin').length;
    const total = users.length;
    
    return { active, admins, total };
  }, [users]);
  
  return (
    <div>
      <p>Total: {stats.total}</p>
      <p>Active: {stats.active}</p>
      <p>Admins: {stats.admins}</p>
    </div>
  );
}

// Conditional list rendering
function SearchResults({ query, items }) {
  const filtered = items.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );
  
  if (filtered.length === 0) {
    return <p>No results found</p>;
  }
  
  return (
    <ul>
      {filtered.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}`,
            explanation: "Use JavaScript array methods to filter, sort, and transform data before rendering. Use useMemo for expensive operations. Always filter before mapping when possible for better performance."
          }
        },
        {
          title: "Nested Lists and Complex Structures",
          content: "Sometimes you need to render nested lists or complex data structures. The same principles apply, but you need to handle keys carefully.\n\nNested List Patterns:\n• Lists within lists\n• Tables with rows and cells\n• Nested components with lists\n• Hierarchical data structures\n\nKey Considerations:\n• Each level needs its own keys\n• Keys must be unique at their level\n• Consider component structure\n• Keep nesting shallow when possible",
          codeExample: {
            code: `// Nested lists
function CategoryList({ categories }) {
  return (
    <ul>
      {categories.map(category => (
        <li key={category.id}>
          <h3>{category.name}</h3>
          <ul>
            {category.items.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

// Table with rows
function DataTable({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        {data.map(row => (
          <tr key={row.id}>
            <td>{row.name}</td>
            <td>{row.email}</td>
            <td>{row.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// Complex nested structure
function CommentThread({ comments }) {
  return (
    <div>
      {comments.map(comment => (
        <div key={comment.id}>
          <Comment comment={comment} />
          {comment.replies && comment.replies.length > 0 && (
            <div className="ml-8">
              {comment.replies.map(reply => (
                <Comment key={reply.id} comment={reply} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// Grid layout
function ProductGrid({ products }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}`,
            explanation: "Nested lists work the same way - each level needs keys. Keep structure clear and consider extracting complex nested components for better readability."
          }
        },
        {
          title: "Common Patterns and Best Practices",
          content: "Following best practices makes your list rendering code more maintainable and performant.\n\nBest Practices:\n• Always use keys for list items\n• Use unique, stable IDs when possible\n• Filter before mapping\n• Extract list items into components\n• Use useMemo for expensive transformations\n• Handle empty states\n• Consider pagination for large lists\n• Use virtual scrolling for very long lists\n\nCommon Patterns:\n• Empty state handling\n• Loading states\n• Error states\n• Pagination\n• Infinite scroll\n• Search/filter UI",
          codeExample: {
            code: `// ✅ GOOD: Complete list component with all states
function UserList({ users, loading, error }) {
  if (loading) {
    return <div>Loading users...</div>;
  }
  
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  
  if (users.length === 0) {
    return <div>No users found</div>;
  }
  
  return (
    <ul>
      {users.map(user => (
        <UserItem key={user.id} user={user} />
      ))}
    </ul>
  );
}

// ✅ GOOD: Extracted list item component
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

function TodoItem({ todo }) {
  return (
    <li className={todo.completed ? 'completed' : ''}>
      <input type="checkbox" checked={todo.completed} />
      <span>{todo.text}</span>
    </li>
  );
}

// ✅ GOOD: Using useMemo for expensive operations
function ExpensiveList({ items, filter }) {
  const filteredItems = useMemo(() => {
    return items
      .filter(item => item.category === filter)
      .sort((a, b) => a.price - b.price);
  }, [items, filter]);
  
  return (
    <div>
      {filteredItems.map(item => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}

// ✅ GOOD: Pagination
function PaginatedList({ items, pageSize = 10 }) {
  const [page, setPage] = useState(1);
  const startIndex = (page - 1) * pageSize;
  const paginatedItems = items.slice(startIndex, startIndex + pageSize);
  
  return (
    <div>
      <ul>
        {paginatedItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <div>
        <button onClick={() => setPage(p => p - 1)} disabled={page === 1}>
          Previous
        </button>
        <span>Page {page}</span>
        <button 
          onClick={() => setPage(p => p + 1)} 
          disabled={startIndex + pageSize >= items.length}
        >
          Next
        </button>
      </div>
    </div>
  );
}`,
            explanation: "Follow best practices: handle all states (loading, error, empty), extract list items into components, use useMemo for expensive operations, and consider pagination for large lists."
          }
        }
      ],
      conclusion: "Conditional rendering and lists are fundamental to React development. Use conditional rendering to create dynamic UIs, and always provide keys when rendering lists. Filter and transform data before rendering, handle empty states, and extract list items into components for better maintainability. Remember: keys help React efficiently update lists, so use unique, stable IDs whenever possible."
    }
  },
  {
    id: "beginner-7",
    title: "Event Handling in React",
    description: "Learn how to handle user interactions like clicks, form submissions, and keyboard events in React components.",
    level: "beginner",
    estimatedTime: "45 min",
    topics: ["Event Handlers", "Synthetic Events", "Form Events", "Keyboard Events", "Event Binding", "Preventing Default"],
    prerequisites: ["Understanding Props", "Managing State with useState"],
    videoUrl: "https://www.youtube.com/watch?v=4oV5GVEEow8", // React Events Tutorial - The Net Ninja
    content: {
      overview: "Event handling is how you make React components interactive. React uses SyntheticEvents - a wrapper around native browser events that provides consistent behavior across browsers. This tutorial covers all aspects of handling events in React, from simple clicks to complex form interactions.",
      sections: [
        {
          title: "Understanding React Events",
          content: "React events are similar to native DOM events, but with some important differences.\n\nKey Concepts:\n• React uses SyntheticEvents (cross-browser compatible)\n• Event handlers are passed as props (onClick, onChange, etc.)\n• Events are camelCase (onClick, not onclick)\n• Event handlers receive a SyntheticEvent object\n• React pools events for performance\n\nDifferences from Native Events:\n• Consistent across browsers\n• Events are pooled (for performance)\n• Can't access event asynchronously without special handling\n• Some events work differently (e.g., onChange fires on every keystroke)",
          videoUrl: "https://www.youtube.com/watch?v=4oV5GVEEow8", // React Events Explained
          codeExample: {
            code: `// Basic event handler
function Button() {
  const handleClick = () => {
    console.log('Button clicked!');
  };
  
  return <button onClick={handleClick}>Click me</button>;
}

// Inline event handler
function Button() {
  return (
    <button onClick={() => console.log('Clicked!')}>
      Click me
    </button>
  );
}

// Event handler with parameters
function ButtonList() {
  const handleClick = (id) => {
    console.log('Button', id, 'clicked');
  };
  
  return (
    <div>
      <button onClick={() => handleClick(1)}>Button 1</button>
      <button onClick={() => handleClick(2)}>Button 2</button>
    </div>
  );
}

// Accessing event object
function Input() {
  const handleChange = (event) => {
    console.log('Input value:', event.target.value);
  };
  
  return <input onChange={handleChange} />;
}`,
            explanation: "React events work similarly to native events but use camelCase props. Event handlers receive a SyntheticEvent object with the same interface as native events."
          }
        },
        {
          title: "Common Event Types",
          content: "React supports all standard DOM events. Here are the most commonly used ones.\n\nMouse Events:\n• onClick - Click\n• onDoubleClick - Double click\n• onMouseEnter - Mouse enters element\n• onMouseLeave - Mouse leaves element\n• onMouseOver - Mouse over element\n• onMouseDown - Mouse button pressed\n• onMouseUp - Mouse button released\n\nForm Events:\n• onChange - Value changed (fires on every keystroke for inputs)\n• onSubmit - Form submitted\n• onFocus - Element receives focus\n• onBlur - Element loses focus\n• onInput - Input value changed\n\nKeyboard Events:\n• onKeyDown - Key pressed down\n• onKeyUp - Key released\n• onKeyPress - Key pressed (deprecated)\n\nOther Events:\n• onScroll - Element scrolled\n• onLoad - Resource loaded\n• onError - Error occurred",
          codeExample: {
            code: `// Click events
function ClickExample() {
  const handleClick = (e) => {
    console.log('Clicked!', e);
  };
  
  return <button onClick={handleClick}>Click me</button>;
}

// Form events
function FormExample() {
  const [value, setValue] = useState('');
  
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log('Form submitted:', value);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={value}
        onChange={handleChange}
        onFocus={() => console.log('Focused')}
        onBlur={() => console.log('Blurred')}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

// Keyboard events
function KeyboardExample() {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      console.log('Enter pressed');
    }
    if (e.key === 'Escape') {
      console.log('Escape pressed');
    }
  };
  
  return (
    <input
      onKeyDown={handleKeyDown}
      placeholder="Press Enter or Escape"
    />
  );
}

// Mouse events
function MouseExample() {
  const [hovered, setHovered] = useState(false);
  
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ backgroundColor: hovered ? 'yellow' : 'white' }}
    >
      Hover over me
    </div>
  );
}`,
            explanation: "React supports all standard DOM events. Use camelCase props (onClick, not onclick). onChange fires on every keystroke for inputs, which is different from native HTML."
          }
        },
        {
          title: "Preventing Default Behavior",
          content: "Sometimes you need to prevent the default browser behavior for events. This is especially common with form submissions and link clicks.\n\nCommon Use Cases:\n• Prevent form submission from reloading page\n• Prevent link navigation\n• Prevent context menu\n• Prevent text selection\n\nHow to Prevent Default:\n• Call event.preventDefault()\n• Must be called synchronously\n• Works with SyntheticEvents\n• Can be combined with stopPropagation()",
          codeExample: {
            code: `// Prevent form submission
function LoginForm() {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    // Handle form submission
    console.log('Form submitted');
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" />
      <input type="password" name="password" />
      <button type="submit">Login</button>
    </form>
  );
}

// Prevent link navigation
function CustomLink({ href, children }) {
  const handleClick = (e) => {
    e.preventDefault();
    // Custom navigation logic
    console.log('Navigating to:', href);
  };
  
  return (
    <a href={href} onClick={handleClick}>
      {children}
    </a>
  );
}

// Prevent default and stop propagation
function NestedButtons() {
  const handleOuterClick = (e) => {
    console.log('Outer clicked');
  };
  
  const handleInnerClick = (e) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent event bubbling
    console.log('Inner clicked');
  };
  
  return (
    <div onClick={handleOuterClick}>
      <button onClick={handleInnerClick}>
        Inner Button
      </button>
    </div>
  );
}`,
            explanation: "Use preventDefault() to stop default browser behavior. Use stopPropagation() to prevent event bubbling. Both must be called synchronously in the event handler."
          }
        },
        {
          title: "Passing Arguments to Event Handlers",
          content: "Often you need to pass additional arguments to event handlers beyond just the event object.\n\nCommon Patterns:\n• Pass item ID when clicking list item\n• Pass index when iterating\n• Pass custom data\n• Pass both event and custom data\n\nMethods:\n• Arrow functions in JSX\n• bind() method\n• Higher-order functions\n• Data attributes (less common)",
          codeExample: {
            code: `// Passing arguments with arrow functions
function TodoList({ todos }) {
  const handleDelete = (id) => {
    console.log('Delete todo:', id);
  };
  
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => handleDelete(todo.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

// Passing event and custom data
function ProductList({ products }) {
  const handleAddToCart = (productId, event) => {
    event.preventDefault();
    console.log('Add product', productId, 'to cart');
  };
  
  return (
    <div>
      {products.map(product => (
        <button
          key={product.id}
          onClick={(e) => handleAddToCart(product.id, e)}
        >
          Add {product.name} to Cart
        </button>
      ))}
    </div>
  );
}

// Using bind (less common)
function ButtonList() {
  const handleClick = (id, event) => {
    console.log('Button', id, 'clicked');
  };
  
  return (
    <div>
      <button onClick={handleClick.bind(null, 1)}>Button 1</button>
      <button onClick={handleClick.bind(null, 2)}>Button 2</button>
    </div>
  );
}

// Higher-order function pattern
function createHandler(id) {
  return (event) => {
    console.log('Item', id, 'clicked', event);
  };
}

function ItemList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <button onClick={createHandler(item.id)}>
            {item.name}
          </button>
        </li>
      ))}
    </ul>
  );
}`,
            explanation: "Use arrow functions to pass arguments to event handlers. You can pass both the event and custom data. Arrow functions are the most common and readable approach."
          }
        },
        {
          title: "Controlled vs Uncontrolled Components",
          content: "React offers two approaches for handling form inputs: controlled and uncontrolled components.\n\nControlled Components:\n• Input value controlled by React state\n• onChange handler updates state\n• State is single source of truth\n• More React-like, recommended\n• Easier to validate and transform\n\nUncontrolled Components:\n• Input value stored in DOM\n• Use refs to access values\n• Less code, simpler for simple forms\n• Good for one-time reads\n• Less React-like\n\nWhen to Use Each:\n• Controlled: Most cases, especially with validation\n• Uncontrolled: Simple forms, file inputs, third-party libraries",
          codeExample: {
            code: `// Controlled component
function ControlledInput() {
  const [value, setValue] = useState('');
  
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', value);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

// Uncontrolled component
function UncontrolledInput() {
  const inputRef = useRef(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', inputRef.current?.value);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        ref={inputRef}
        defaultValue="initial"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

// Controlled with validation
function ValidatedInput() {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  
  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    
    if (newValue.length < 3) {
      setError('Must be at least 3 characters');
    } else {
      setError('');
    }
  };
  
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
      />
      {error && <p className="error">{error}</p>}
    </div>
  );
}`,
            explanation: "Use controlled components for most cases - they're more React-like and easier to work with. Use uncontrolled components for simple cases or when integrating with third-party libraries."
          }
        },
        {
          title: "Best Practices and Common Patterns",
          content: "Following best practices makes your event handling code more maintainable and performant.\n\nBest Practices:\n• Name handlers with 'handle' prefix (handleClick, handleSubmit)\n• Extract complex handlers into separate functions\n• Use controlled components for forms\n• Prevent default behavior when needed\n• Don't create new functions in render (use useCallback if needed)\n• Handle async operations properly\n• Clean up event listeners in useEffect\n\nCommon Patterns:\n• Form submission\n• Search input with debounce\n• Keyboard shortcuts\n• Click outside to close\n• Drag and drop\n• File upload",
          codeExample: {
            code: `// ✅ GOOD: Named handler function
function Button() {
  const handleClick = () => {
    console.log('Clicked');
  };
  
  return <button onClick={handleClick}>Click</button>;
}

// ✅ GOOD: Using useCallback for stable reference
function ExpensiveList({ items }) {
  const handleItemClick = useCallback((id) => {
    console.log('Item clicked:', id);
  }, []);
  
  return (
    <ul>
      {items.map(item => (
        <ListItem
          key={item.id}
          item={item}
          onClick={handleItemClick}
        />
      ))}
    </ul>
  );
}

// ✅ GOOD: Async event handler
function AsyncButton() {
  const [loading, setLoading] = useState(false);
  
  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetchData();
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <button onClick={handleClick} disabled={loading}>
      {loading ? 'Loading...' : 'Submit'}
    </button>
  );
}

// ✅ GOOD: Keyboard shortcuts
function KeyboardShortcuts() {
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        console.log('Save shortcut');
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);
  
  return <div>Press Ctrl+S to save</div>;
}

// ✅ GOOD: Click outside handler
function Dropdown({ isOpen, onClose, children }) {
  const ref = useRef(null);
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isOpen, onClose]);
  
  return isOpen ? <div ref={ref}>{children}</div> : null;
}`,
            explanation: "Follow best practices: name handlers clearly, use useCallback when needed, handle async operations properly, and clean up event listeners. Extract complex logic into separate functions."
          }
        }
      ],
      conclusion: "Event handling is essential for interactive React applications. Use SyntheticEvents for cross-browser compatibility, prevent default behavior when needed, and prefer controlled components for forms. Name handlers clearly, extract complex logic, and always clean up event listeners. Remember: React events are camelCase, onChange fires on every keystroke, and you can pass arguments using arrow functions."
    }
  },
  {
    id: "intermediate-7",
    title: "Component Composition and Patterns",
    description: "Learn advanced component composition techniques, children props, render props, and compound components to build flexible, reusable React components.",
    level: "intermediate",
    estimatedTime: "75 min",
    topics: ["Component Composition", "Children Prop", "Render Props", "Compound Components", "Higher-Order Components", "Composition Patterns"],
    prerequisites: ["Understanding Props", "Managing State with useState", "Conditional Rendering and Lists"],
    videoUrl: "https://www.youtube.com/watch?v=3aGSqasVPsI", // React Component Composition - Web Dev Simplified
    content: {
      overview: "Component composition is one of React's most powerful features. Instead of building monolithic components, you compose smaller, focused components together. This tutorial covers various composition patterns including children, render props, compound components, and higher-order components to create flexible, reusable component APIs.",
      sections: [
        {
          title: "Understanding Component Composition",
          content: "Component composition means building complex UIs by combining simpler components. It's the foundation of React's component model.\n\nBenefits:\n• Reusability - Use components in different contexts\n• Flexibility - Combine components in various ways\n• Maintainability - Smaller, focused components\n• Testability - Test components in isolation\n• Readability - Clear component structure\n\nComposition vs Inheritance:\n• React favors composition over inheritance\n• Use composition to share behavior\n• Components can contain other components\n• Props allow flexible composition",
          videoUrl: "https://www.youtube.com/watch?v=3aGSqasVPsI", // React Component Composition
          codeExample: {
            code: `// Simple composition
function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}

function App() {
  return (
    <div>
      <Button onClick={() => console.log('Save')}>
        Save
      </Button>
      <Button onClick={() => console.log('Cancel')}>
        Cancel
      </Button>
    </div>
  );
}

// Composing multiple components
function Card({ title, children }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="card-content">{children}</div>
    </div>
  );
}

function UserProfile({ user }) {
  return (
    <Card title="User Profile">
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </Card>
  );
}

// Nested composition
function Layout({ header, sidebar, main, footer }) {
  return (
    <div className="layout">
      <header>{header}</header>
      <div className="body">
        <aside>{sidebar}</aside>
        <main>{main}</main>
      </div>
      <footer>{footer}</footer>
    </div>
  );
}

function App() {
  return (
    <Layout
      header={<Header />}
      sidebar={<Sidebar />}
      main={<MainContent />}
      footer={<Footer />}
    />
  );
}`,
            explanation: "Composition means building complex components from simpler ones. Use props to pass components and data. This creates flexible, reusable component structures."
          }
        },
        {
          title: "Using the Children Prop",
          content: "The children prop is a special prop that allows you to pass components as data to other components. It's one of the most powerful composition patterns.\n\nWhat is Children:\n• Special prop that contains content between component tags\n• Can be any valid React node\n• Can be a single element, array, or even a function\n• Makes components more flexible and reusable\n\nUse Cases:\n• Wrapper components (Card, Modal, Layout)\n• Container components\n• Higher-order components\n• Flexible component APIs",
          videoUrl: "https://www.youtube.com/watch?v=3aGSqasVPsI", // React Children Prop Tutorial
          codeExample: {
            code: `// Basic children usage
function Container({ children }) {
  return <div className="container">{children}</div>;
}

function App() {
  return (
    <Container>
      <h1>Title</h1>
      <p>Content</p>
    </Container>
  );
}

// Children can be anything
function Alert({ type, children }) {
  return (
    <div className={\`alert alert-\${type}\`}>
      {children}
    </div>
  );
}

function App() {
  return (
    <Alert type="warning">
      <strong>Warning!</strong> This is important.
    </Alert>
  );
}

// Multiple children
function ButtonGroup({ children }) {
  return <div className="button-group">{children}</div>;
}

function App() {
  return (
    <ButtonGroup>
      <button>Save</button>
      <button>Cancel</button>
      <button>Delete</button>
    </ButtonGroup>
  );
}

// Children as function (render prop pattern)
function DataFetcher({ url, children }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, [url]);
  
  return children({ data, loading });
}

function App() {
  return (
    <DataFetcher url="/api/users">
      {({ data, loading }) => {
        if (loading) return <div>Loading...</div>;
        return <UserList users={data} />;
      }}
    </DataFetcher>
  );
}

// Using React.Children utilities
function ButtonList({ children }) {
  return (
    <div>
      {React.Children.map(children, (child, index) => (
        <div key={index} className="button-wrapper">
          {child}
        </div>
      ))}
    </div>
  );
}`,
            explanation: "The children prop allows flexible composition. You can pass any React node, use it in wrapper components, or even use it as a function for render props. React.Children utilities help manipulate children."
          }
        },
        {
          title: "Render Props Pattern",
          content: "Render props is a pattern where a component receives a function as a prop that returns React elements. The component calls this function instead of implementing its own render logic.\n\nWhat are Render Props:\n• Component receives function as prop\n• Function receives data/state as arguments\n• Component calls function to render\n• Allows sharing logic between components\n\nBenefits:\n• Share stateful logic\n• Flexible rendering\n• Separation of concerns\n• Reusable logic\n\nCommon Use Cases:\n• Data fetching\n• Mouse tracking\n• Form state management\n• Theme providers",
          videoUrl: "https://www.youtube.com/watch?v=BcVAq3YFiuc", // React Render Props Pattern
          codeExample: {
            code: `// Basic render prop
function MouseTracker({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return render(position);
}

function App() {
  return (
    <MouseTracker
      render={({ x, y }) => (
        <div>
          Mouse position: {x}, {y}
        </div>
      )}
    />
  );
}

// Render prop for data fetching
function DataFetcher({ url, render }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [url]);
  
  return render({ data, loading, error });
}

function App() {
  return (
    <DataFetcher
      url="/api/users"
      render={({ data, loading, error }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error: {error.message}</div>;
        return <UserList users={data} />;
      }}
    />
  );
}

// Multiple render props
function Toggle({ on, toggle, children }) {
  return children({ on, toggle });
}

function App() {
  return (
    <Toggle>
      {({ on, toggle }) => (
        <div>
          <button onClick={toggle}>
            {on ? 'ON' : 'OFF'}
          </button>
          {on && <div>Content is visible</div>}
        </div>
      )}
    </Toggle>
  );
}

// Render prop vs children as function
// These are equivalent:
function Component1({ render }) {
  return render({ data: 'test' });
}

function Component2({ children }) {
  return children({ data: 'test' });
}`,
            explanation: "Render props allow sharing logic between components. The component receives a function that it calls with state/data. This pattern is powerful for reusable logic, though hooks often replace it in modern React."
          }
        },
        {
          title: "Compound Components Pattern",
          content: "Compound components are a pattern where multiple components work together to form a complete UI. They share implicit state and provide a flexible API.\n\nWhat are Compound Components:\n• Multiple components that work together\n• Share implicit state via Context\n• Flexible composition\n• Better API than monolithic component\n\nBenefits:\n• Flexible component structure\n• Better separation of concerns\n• Intuitive API\n• Composable and reusable\n\nUse Cases:\n• Select/Dropdown components\n• Tabs\n• Accordion\n• Form fields with labels and errors",
          codeExample: {
            code: `// Compound Select component
const SelectContext = createContext();

function Select({ children, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <SelectContext.Provider value={{ value, onChange, isOpen, setIsOpen }}>
      <div className="select">{children}</div>
    </SelectContext.Provider>
  );
}

function SelectTrigger({ children }) {
  const { isOpen, setIsOpen } = useContext(SelectContext);
  return (
    <button onClick={() => setIsOpen(!isOpen)}>
      {children}
    </button>
  );
}

function SelectOptions({ children }) {
  const { isOpen } = useContext(SelectContext);
  if (!isOpen) return null;
  return <div className="options">{children}</div>;
}

function SelectOption({ value, children }) {
  const { value: selectedValue, onChange, setIsOpen } = useContext(SelectContext);
  
  return (
    <div
      className={\`option \${value === selectedValue ? 'selected' : ''}\`}
      onClick={() => {
        onChange(value);
        setIsOpen(false);
      }}
    >
      {children}
    </div>
  );
}

// Usage
function App() {
  const [value, setValue] = useState('option1');
  
  return (
    <Select value={value} onChange={setValue}>
      <SelectTrigger>
        {value || 'Select an option'}
      </SelectTrigger>
      <SelectOptions>
        <SelectOption value="option1">Option 1</SelectOption>
        <SelectOption value="option2">Option 2</SelectOption>
        <SelectOption value="option3">Option 3</SelectOption>
      </SelectOptions>
    </Select>
  );
}

// Compound Tabs component
const TabsContext = createContext();

function Tabs({ children, defaultTab }) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="tabs">{children}</div>
    </TabsContext.Provider>
  );
}

function TabsList({ children }) {
  return <div className="tabs-list">{children}</div>;
}

function TabsTrigger({ value, children }) {
  const { activeTab, setActiveTab } = useContext(TabsContext);
  
  return (
    <button
      className={\`tab \${activeTab === value ? 'active' : ''}\`}
      onClick={() => setActiveTab(value)}
    >
      {children}
    </button>
  );
}

function TabsContent({ value, children }) {
  const { activeTab } = useContext(TabsContext);
  if (activeTab !== value) return null;
  return <div className="tab-content">{children}</div>;
}

// Usage
function App() {
  return (
    <Tabs defaultTab="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Content 1</TabsContent>
      <TabsContent value="tab2">Content 2</TabsContent>
    </Tabs>
  );
}`,
            explanation: "Compound components share state via Context and provide flexible composition. They create intuitive APIs where components work together naturally. This pattern is great for complex UI components."
          }
        },
        {
          title: "Higher-Order Components (HOCs)",
          content: "Higher-Order Components are functions that take a component and return a new component with additional functionality. They're a pattern for reusing component logic.\n\nWhat are HOCs:\n• Function that takes a component, returns a component\n• Adds functionality without modifying original\n• Shares logic between components\n• Common pattern before hooks\n\nBenefits:\n• Reusable logic\n• Separation of concerns\n• Can compose multiple HOCs\n• Works with any component\n\nNote: Hooks often replace HOCs in modern React, but HOCs are still useful in some cases.",
          codeExample: {
            code: `// Basic HOC
function withLoading(Component) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return <Component {...props} />;
  };
}

// Usage
const UserProfile = ({ user }) => <div>{user.name}</div>;
const UserProfileWithLoading = withLoading(UserProfile);

function App() {
  return <UserProfileWithLoading isLoading={true} user={null} />;
}

// HOC with data fetching
function withData(url) {
  return function(Component) {
    return function WithDataComponent(props) {
      const [data, setData] = useState(null);
      const [loading, setLoading] = useState(true);
      
      useEffect(() => {
        fetch(url)
          .then(res => res.json())
          .then(data => {
            setData(data);
            setLoading(false);
          });
      }, []);
      
      if (loading) return <div>Loading...</div>;
      return <Component {...props} data={data} />;
    };
  };
}

// Usage
const UserList = ({ data }) => (
  <ul>
    {data.map(user => <li key={user.id}>{user.name}</li>)}
  </ul>
);
const UserListWithData = withData('/api/users')(UserList);

// HOC for authentication
function withAuth(Component) {
  return function WithAuthComponent(props) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    
    useEffect(() => {
      // Check authentication
      checkAuth().then(setIsAuthenticated);
    }, []);
    
    if (!isAuthenticated) {
      return <div>Please log in</div>;
    }
    
    return <Component {...props} />;
  };
}

// Composing HOCs
const EnhancedComponent = withAuth(withLoading(MyComponent));

// HOC vs Hook (modern approach)
// HOC:
const ComponentWithData = withData('/api/users')(MyComponent);

// Hook (preferred):
function MyComponent() {
  const { data, loading } = useData('/api/users');
  // ...
}`,
            explanation: "HOCs add functionality to components. They're useful for cross-cutting concerns but hooks often provide a cleaner solution. Use HOCs when you need to enhance components in a reusable way."
          }
        },
        {
          title: "Composition Best Practices",
          content: "Following best practices makes your composed components more maintainable and easier to use.\n\nBest Practices:\n• Prefer composition over inheritance\n• Keep components small and focused\n• Use children for flexibility\n• Extract shared logic into hooks\n• Use compound components for complex UIs\n• Document component APIs\n• Provide sensible defaults\n• Make components composable\n\nCommon Patterns:\n• Container/Presentational pattern\n• Provider pattern\n• Slot pattern (multiple children props)\n• Configuration objects",
          codeExample: {
            code: `// ✅ GOOD: Small, focused components
function Button({ children, variant, size, onClick }) {
  return (
    <button
      className={\`btn btn-\${variant} btn-\${size}\`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function IconButton({ icon, children, ...props }) {
  return (
    <Button {...props}>
      <Icon name={icon} />
      {children}
    </Button>
  );
}

// ✅ GOOD: Container/Presentational pattern
function UserListContainer() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchUsers().then(users => {
      setUsers(users);
      setLoading(false);
    });
  }, []);
  
  return <UserList users={users} loading={loading} />;
}

function UserList({ users, loading }) {
  if (loading) return <div>Loading...</div>;
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

// ✅ GOOD: Slot pattern
function Card({ header, footer, children }) {
  return (
    <div className="card">
      {header && <div className="card-header">{header}</div>}
      <div className="card-body">{children}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
}

function App() {
  return (
    <Card
      header={<h2>Title</h2>}
      footer={<button>Action</button>}
    >
      Content here
    </Card>
  );
}

// ✅ GOOD: Configuration object for flexibility
function FormField({ label, error, children, config }) {
  return (
    <div className="form-field">
      <label>{label}</label>
      {children}
      {error && <span className="error">{error}</span>}
      {config?.helpText && <span className="help">{config.helpText}</span>}
    </div>
  );
}`,
            explanation: "Follow best practices: keep components small, use composition patterns appropriately, extract logic into hooks, and make components flexible and reusable. Document your component APIs clearly."
          }
        }
      ],
      conclusion: "Component composition is fundamental to building maintainable React applications. Use children for flexibility, render props for sharing logic, compound components for complex UIs, and HOCs when appropriate. Prefer composition over inheritance, keep components small and focused, and extract shared logic into hooks. Remember: good composition creates flexible, reusable components that are easy to understand and maintain."
    }
  },
  {
    id: "intermediate-8",
    title: "Building Custom Hooks",
    description: "Learn how to extract component logic into reusable custom hooks to share stateful logic between components.",
    level: "intermediate",
    estimatedTime: "60 min",
    topics: ["Custom Hooks", "Hook Rules", "Reusable Logic", "Hook Composition", "Testing Hooks", "Hook Patterns"],
    prerequisites: ["Managing State with useState", "Understanding useEffect", "Event Handling in React"],
    videoUrl: "https://www.youtube.com/watch?v=6ThXsUwLWvc", // React Custom Hooks - Web Dev Simplified
    content: {
      overview: "Custom hooks are JavaScript functions that start with 'use' and can call other hooks. They allow you to extract component logic into reusable functions. Custom hooks are one of React's most powerful features for code reuse and organization. This tutorial covers how to create custom hooks, follow the rules of hooks, and build reusable logic that can be shared across components.",
      sections: [
        {
          title: "What are Custom Hooks",
          content: "Custom hooks are functions that encapsulate reusable logic using React hooks. They follow a simple naming convention and can use any React hooks inside them.\n\nKey Characteristics:\n• Functions that start with 'use'\n• Can call other hooks\n• Share stateful logic between components\n• Don't render anything themselves\n• Follow the same rules as regular hooks\n\nWhy Use Custom Hooks:\n• Reuse logic across components\n• Separate concerns\n• Make components cleaner\n• Test logic independently\n• Share logic with the community\n\nBenefits:\n• DRY (Don't Repeat Yourself)\n• Better organization\n• Easier testing\n• Reusable across projects",
          videoUrl: "https://www.youtube.com/watch?v=6ThXsUwLWvc", // React Custom Hooks Tutorial
          codeExample: {
            code: `// Simple custom hook
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  
  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  const reset = () => setCount(initialValue);
  
  return { count, increment, decrement, reset };
}

// Using the custom hook
function Counter() {
  const { count, increment, decrement, reset } = useCounter(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

// Multiple components can use the same hook
function AnotherCounter() {
  const { count, increment } = useCounter(10);
  return <button onClick={increment}>{count}</button>;
}

// Custom hook with parameters
function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  
  const toggle = () => setValue(v => !v);
  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);
  
  return { value, toggle, setTrue, setFalse };
}

// Usage
function ToggleButton() {
  const { value, toggle } = useToggle();
  
  return (
    <button onClick={toggle}>
      {value ? 'ON' : 'OFF'}
    </button>
  );
}`,
            explanation: "Custom hooks are functions starting with 'use' that can use React hooks. They return values and functions that components can use. This allows sharing logic between components."
          }
        },
        {
          title: "Rules of Hooks",
          content: "Custom hooks must follow the same rules as regular hooks. Understanding these rules is crucial for writing correct custom hooks.\n\nRules of Hooks:\n1. Only call hooks at the top level\n   • Don't call inside loops, conditions, or nested functions\n   • Always call in the same order\n\n2. Only call hooks from React functions\n   • React function components\n   • Custom hooks (functions starting with 'use')\n   • Not from regular JavaScript functions\n\nWhy These Rules Exist:\n• React relies on call order to track hooks\n• Violating rules causes bugs\n• ESLint plugin helps catch violations\n\nCommon Mistakes:\n• Calling hooks conditionally\n• Calling hooks in loops\n• Calling hooks in regular functions\n• Calling hooks in event handlers",
          videoUrl: "https://www.youtube.com/watch?v=TNhaISOUy6Q", // React Hooks Rules Explained
          codeExample: {
            code: `// ❌ BAD: Conditional hook call
function BadComponent({ condition }) {
  if (condition) {
    const [value, setValue] = useState(0); // ❌ Wrong!
  }
  return <div>Content</div>;
}

// ✅ GOOD: Always call hooks
function GoodComponent({ condition }) {
  const [value, setValue] = useState(0); // ✅ Always called
  return <div>Content</div>;
}

// ❌ BAD: Hook in loop
function BadList({ items }) {
  const states = [];
  items.forEach(item => {
    states.push(useState(item)); // ❌ Wrong!
  });
  return <div>List</div>;
}

// ✅ GOOD: Extract to component
function GoodList({ items }) {
  return (
    <div>
      {items.map(item => (
        <ListItem key={item.id} item={item} />
      ))}
    </div>
  );
}

function ListItem({ item }) {
  const [value, setValue] = useState(item); // ✅ OK in component
  return <div>{value}</div>;
}

// ❌ BAD: Hook in regular function
function regularFunction() {
  const [value, setValue] = useState(0); // ❌ Wrong!
}

// ✅ GOOD: Custom hook
function useCustomHook() {
  const [value, setValue] = useState(0); // ✅ OK in custom hook
  return value;
}

// ✅ GOOD: Conditional logic inside hook
function useConditional(condition) {
  const [value, setValue] = useState(0);
  
  useEffect(() => {
    if (condition) {
      // ✅ OK: conditional logic inside hook
      setValue(1);
    }
  }, [condition]);
  
  return value;
}`,
            explanation: "Hooks must be called at the top level, in the same order every render. Don't call hooks conditionally, in loops, or in regular functions. Use conditional logic inside hooks, not around hook calls."
          }
        },
        {
          title: "Common Custom Hook Patterns",
          content: "There are many common patterns for custom hooks. Learning these patterns helps you build reusable hooks effectively.\n\nCommon Patterns:\n• State management hooks (useToggle, useCounter)\n• Data fetching hooks (useFetch, useAPI)\n• DOM hooks (useWindowSize, useScrollPosition)\n• Form hooks (useForm, useInput)\n• Timer hooks (useInterval, useTimeout)\n• Storage hooks (useLocalStorage, useSessionStorage)\n• Media hooks (useMediaQuery, useAudio)\n\nPattern Structure:\n• Encapsulate related logic\n• Return values and functions\n• Handle cleanup\n• Provide sensible defaults",
          videoUrl: "https://www.youtube.com/watch?v=6ThXsUwLWvc", // React Custom Hook Patterns
          codeExample: {
            code: `// Data fetching hook
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    setLoading(true);
    setError(null);
    
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [url]);
  
  return { data, loading, error };
}

// Usage
function UserProfile({ userId }) {
  const { data: user, loading, error } = useFetch(\`/api/users/\${userId}\`);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return <div>{user.name}</div>;
}

// Local storage hook
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });
  
  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };
  
  return [storedValue, setValue];
}

// Usage
function Settings() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  
  return (
    <select value={theme} onChange={(e) => setTheme(e.target.value)}>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  );
}

// Window size hook
function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return size;
}

// Usage
function ResponsiveComponent() {
  const { width } = useWindowSize();
  return <div>{width < 768 ? 'Mobile' : 'Desktop'}</div>;
}

// Interval hook
function useInterval(callback, delay) {
  const savedCallback = useRef();
  
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  
  useEffect(() => {
    if (delay === null) return;
    
    const id = setInterval(() => {
      savedCallback.current();
    }, delay);
    
    return () => clearInterval(id);
  }, [delay]);
}

// Usage
function Timer() {
  const [count, setCount] = useState(0);
  
  useInterval(() => {
    setCount(c => c + 1);
  }, 1000);
  
  return <div>Count: {count}</div>;
}`,
            explanation: "Common custom hook patterns include data fetching, local storage, window size, intervals, and more. These patterns encapsulate reusable logic that multiple components can use."
          }
        },
        {
          title: "Composing Custom Hooks",
          content: "Custom hooks can call other custom hooks, allowing you to build complex functionality by composing simpler hooks.\n\nComposition Benefits:\n• Build complex hooks from simple ones\n• Reuse existing hooks\n• Create powerful abstractions\n• Keep hooks focused and testable\n\nComposition Patterns:\n• Chain hooks together\n• Combine multiple hooks\n• Create hook hierarchies\n• Share state between hooks",
          codeExample: {
            code: `// Simple hooks
function useCounter(initial = 0) {
  const [count, setCount] = useState(initial);
  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  return { count, increment, decrement };
}

function useToggle(initial = false) {
  const [value, setValue] = useState(initial);
  const toggle = () => setValue(v => !v);
  return { value, toggle };
}

// Composed hook
function useCounterWithToggle(initialCount = 0) {
  const counter = useCounter(initialCount);
  const toggle = useToggle();
  
  const reset = () => {
    counter.setCount(initialCount);
    toggle.setFalse();
  };
  
  return {
    ...counter,
    isActive: toggle.value,
    toggleActive: toggle.toggle,
    reset
  };
}

// Complex composition
function useUserProfile(userId) {
  const { data: user, loading, error } = useFetch(\`/api/users/\${userId}\`);
  const [preferences, setPreferences] = useLocalStorage(\`user-\${userId}-prefs\`, {});
  const { width } = useWindowSize();
  
  const updatePreferences = (newPrefs) => {
    setPreferences({ ...preferences, ...newPrefs });
  };
  
  const isMobile = width < 768;
  
  return {
    user,
    loading,
    error,
    preferences,
    updatePreferences,
    isMobile
  };
}

// Usage
function ProfilePage({ userId }) {
  const {
    user,
    loading,
    preferences,
    updatePreferences,
    isMobile
  } = useUserProfile(userId);
  
  if (loading) return <div>Loading...</div>;
  
  return (
    <div className={isMobile ? 'mobile' : 'desktop'}>
      <h1>{user.name}</h1>
      {/* ... */}
    </div>
  );
}

// Hook that uses other hooks
function usePaginatedData(url, pageSize = 10) {
  const [page, setPage] = useState(1);
  const { data, loading, error } = useFetch(\`\${url}?page=\${page}&limit=\${pageSize}\`);
  
  const nextPage = () => setPage(p => p + 1);
  const prevPage = () => setPage(p => Math.max(1, p - 1));
  
  return {
    data,
    loading,
    error,
    page,
    nextPage,
    prevPage,
    hasNext: data?.hasMore || false
  };
}`,
            explanation: "Compose custom hooks by calling other hooks inside them. This allows building complex functionality from simpler pieces. Keep hooks focused and compose them for more complex use cases."
          }
        },
        {
          title: "Testing Custom Hooks",
          content: "Testing custom hooks requires special tools since hooks can only be called from React components. React Testing Library provides utilities for testing hooks.\n\nTesting Approaches:\n• Use @testing-library/react-hooks\n• Render hook in test component\n• Test return values\n• Test side effects\n• Test cleanup\n\nWhat to Test:\n• Return values\n• State updates\n• Side effects\n• Cleanup functions\n• Edge cases\n• Error handling",
          codeExample: {
            code: `// Custom hook to test
function useCounter(initial = 0) {
  const [count, setCount] = useState(initial);
  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  return { count, increment, decrement };
}

// Test using renderHook
import { renderHook, act } from '@testing-library/react-hooks';

describe('useCounter', () => {
  it('should initialize with value', () => {
    const { result } = renderHook(() => useCounter(5));
    expect(result.current.count).toBe(5);
  });
  
  it('should increment count', () => {
    const { result } = renderHook(() => useCounter(0));
    
    act(() => {
      result.current.increment();
    });
    
    expect(result.current.count).toBe(1);
  });
  
  it('should decrement count', () => {
    const { result } = renderHook(() => useCounter(5));
    
    act(() => {
      result.current.decrement();
    });
    
    expect(result.current.count).toBe(4);
  });
});

// Testing hook with dependencies
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch(url).then(res => res.json()).then(setData).finally(() => setLoading(false));
  }, [url]);
  
  return { data, loading };
}

// Mock fetch for testing
global.fetch = jest.fn();

describe('useFetch', () => {
  it('should fetch data', async () => {
    const mockData = { id: 1, name: 'Test' };
    fetch.mockResolvedValueOnce({
      json: async () => mockData
    });
    
    const { result, waitForNextUpdate } = renderHook(() => 
      useFetch('/api/test')
    );
    
    expect(result.current.loading).toBe(true);
    
    await waitForNextUpdate();
    
    expect(result.current.loading).toBe(false);
    expect(result.current.data).toEqual(mockData);
  });
});`,
            explanation: "Test custom hooks using renderHook from React Testing Library. Use act() for state updates, mock external dependencies, and test all return values and side effects."
          }
        },
        {
          title: "Best Practices for Custom Hooks",
          content: "Following best practices makes your custom hooks more maintainable, reusable, and easier to understand.\n\nBest Practices:\n• Start hook names with 'use'\n• Keep hooks focused on single responsibility\n• Return objects for multiple values, arrays for pairs\n• Handle cleanup properly\n• Provide sensible defaults\n• Document hook behavior\n• Handle edge cases\n• Make hooks composable\n\nCommon Patterns:\n• Return object for flexibility\n• Return array for destructuring (like useState)\n• Use useCallback/useMemo when needed\n• Handle loading and error states\n• Provide reset/clear functions",
          codeExample: {
            code: `// ✅ GOOD: Focused, single responsibility
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    
    return () => clearTimeout(handler);
  }, [value, delay]);
  
  return debouncedValue;
}

// ✅ GOOD: Return object for flexibility
function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  
  const setValue = (name, value) => {
    setValues(prev => ({ ...prev, [name]: value }));
  };
  
  const setError = (name, error) => {
    setErrors(prev => ({ ...prev, [name]: error }));
  };
  
  const reset = () => {
    setValues(initialValues);
    setErrors({});
  };
  
  return {
    values,
    errors,
    setValue,
    setError,
    reset
  };
}

// ✅ GOOD: Handle edge cases
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === 'undefined') {
      return initialValue; // SSR safety
    }
    
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(\`Error reading localStorage key "\${key}":\`, error);
      return initialValue;
    }
  });
  
  const setValue = (value) => {
    try {
      setStoredValue(value);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      console.error(\`Error setting localStorage key "\${key}":\`, error);
    }
  };
  
  return [storedValue, setValue];
}

// ✅ GOOD: Document with JSDoc
/**
 * Custom hook for managing a counter
 * @param {number} initialValue - Initial counter value
 * @returns {Object} Object with count, increment, decrement, and reset
 */
function useCounter(initialValue = 0) {
  // Implementation
}

// ✅ GOOD: Use useCallback for stable references
function useApiCall(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    } finally {
      setLoading(false);
    }
  }, [url]);
  
  return { data, loading, fetchData };
}`,
            explanation: "Follow best practices: keep hooks focused, return appropriate structures, handle edge cases, provide cleanup, and document your hooks. Use useCallback/useMemo when needed for performance."
          }
        }
      ],
      conclusion: "Custom hooks are a powerful way to share logic between components. Start hook names with 'use', keep them focused, handle cleanup properly, and compose them for complex functionality. Follow the rules of hooks, test your hooks thoroughly, and document their behavior. Remember: custom hooks let you extract and reuse stateful logic, making your components cleaner and more maintainable."
    }
  },
  {
    id: "intermediate-9",
    title: "Error Boundaries in React",
    description: "Learn how to catch and handle errors in React component trees using Error Boundaries to prevent entire applications from crashing.",
    level: "intermediate",
    estimatedTime: "50 min",
    topics: ["Error Boundaries", "Error Handling", "Component Lifecycle", "Error Recovery", "Error Logging", "Fallback UI"],
    prerequisites: ["Understanding Props", "Managing State with useState", "Understanding useEffect"],
    videoUrl: "https://www.youtube.com/watch?v=2U9jJ9Riykk", // React Error Boundaries - Web Dev Simplified
    content: {
      overview: "Error Boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of crashing the entire application. They're essential for building robust production applications. This tutorial covers how to create Error Boundaries, handle different types of errors, and implement error recovery strategies.",
      sections: [
        {
          title: "Understanding Error Boundaries",
          content: "Error Boundaries are React components that catch errors in their child component tree. They're like try-catch blocks, but for React components.\n\nWhat Error Boundaries Do:\n• Catch errors during rendering\n• Catch errors in lifecycle methods\n• Catch errors in constructors\n• Display fallback UI\n• Log errors for debugging\n\nWhat They DON'T Catch:\n• Errors in event handlers\n• Errors in async code (setTimeout, promises)\n• Errors during server-side rendering\n• Errors in the Error Boundary itself\n\nWhy We Need Them:\n• Prevent entire app from crashing\n• Provide better user experience\n• Isolate errors to specific parts\n• Enable error recovery",
          videoUrl: "https://www.youtube.com/watch?v=2U9jJ9Riykk", // React Error Boundaries Explained
          codeExample: {
            code: `// Basic Error Boundary (class component)
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  
  static getDerivedStateFromError(error) {
    // Update state to show fallback UI
    return { hasError: true, error };
  }
  
  componentDidCatch(error, errorInfo) {
    // Log error to error reporting service
    console.error('Error caught by boundary:', error, errorInfo);
    // You can log to service like Sentry, LogRocket, etc.
  }
  
  render() {
    if (this.state.hasError) {
      // Fallback UI
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details>
            {this.state.error && this.state.error.toString()}
          </details>
        </div>
      );
    }
    
    return this.props.children;
  }
}

// Usage
function App() {
  return (
    <ErrorBoundary>
      <MyComponent />
    </ErrorBoundary>
  );
}

// Error Boundary with recovery
class ErrorBoundaryWithRecovery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorCount: 0 };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  
  componentDidCatch(error, errorInfo) {
    this.setState(prev => ({
      errorCount: prev.errorCount + 1
    }));
    console.error('Error:', error, errorInfo);
  }
  
  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };
  
  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Something went wrong</h2>
          <p>Error count: {this.state.errorCount}</p>
          <button onClick={this.handleReset}>Try again</button>
        </div>
      );
    }
    
    return this.props.children;
  }
}`,
            explanation: "Error Boundaries are class components that implement getDerivedStateFromError and componentDidCatch. They catch errors in their child tree and display fallback UI instead of crashing the app."
          }
        },
        {
          title: "Creating Error Boundaries",
          content: "Error Boundaries must be class components (as of React 16+). However, you can create reusable Error Boundary components and use them throughout your app.\n\nError Boundary Requirements:\n• Must be a class component\n• Must implement getDerivedStateFromError\n• Should implement componentDidCatch\n• Can have custom fallback UI\n• Can support error recovery\n\nBest Practices:\n• Create reusable Error Boundary components\n• Place them strategically in component tree\n• Provide helpful error messages\n• Log errors to monitoring service\n• Allow error recovery when possible",
          videoUrl: "https://www.youtube.com/watch?v=2U9jJ9Riykk", // Creating React Error Boundaries
          codeExample: {
            code: `// Reusable Error Boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }
  
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error
    };
  }
  
  componentDidCatch(error, errorInfo) {
    this.setState({
      errorInfo
    });
    
    // Log to error reporting service
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }
  
  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null
    });
  };
  
  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback(this.state.error, this.handleReset);
      }
      
      return (
        <div className="error-boundary">
          <h2>{this.props.title || 'Something went wrong'}</h2>
          {this.props.showDetails && (
            <details>
              <summary>Error details</summary>
              <pre>{this.state.error?.toString()}</pre>
              <pre>{this.state.errorInfo?.componentStack}</pre>
            </details>
          )}
          {this.props.onReset && (
            <button onClick={this.handleReset}>
              {this.props.resetButtonText || 'Try again'}
            </button>
          )}
        </div>
      );
    }
    
    return this.props.children;
  }
}

// Usage with custom fallback
function App() {
  return (
    <ErrorBoundary
      fallback={(error, reset) => (
        <div>
          <h2>Custom Error UI</h2>
          <button onClick={reset}>Reset</button>
        </div>
      )}
      onError={(error, errorInfo) => {
        // Send to error tracking service
        console.error('Error:', error, errorInfo);
      }}
    >
      <MyComponent />
    </ErrorBoundary>
  );
}

// Multiple Error Boundaries for different sections
function App() {
  return (
    <div>
      <ErrorBoundary title="Header Error">
        <Header />
      </ErrorBoundary>
      
      <ErrorBoundary title="Sidebar Error">
        <Sidebar />
      </ErrorBoundary>
      
      <ErrorBoundary title="Main Content Error">
        <MainContent />
      </ErrorBoundary>
    </div>
  );
}`,
            explanation: "Create reusable Error Boundary components with customizable fallback UI and error handling. Place them strategically throughout your app to isolate errors to specific sections."
          }
        },
        {
          title: "Error Boundary Patterns",
          content: "There are several patterns for using Error Boundaries effectively in your application.\n\nCommon Patterns:\n• Top-level Error Boundary (catches all errors)\n• Section-level Error Boundaries (isolate errors)\n• Feature-level Error Boundaries (per feature)\n• Component-level Error Boundaries (wrap risky components)\n\nWhen to Use Each:\n• Top-level: Catch-all safety net\n• Section-level: Isolate major app sections\n• Feature-level: Isolate features\n• Component-level: Wrap components that might fail\n\nBest Practices:\n• Use multiple boundaries at different levels\n• Provide context-specific error messages\n• Allow partial app functionality\n• Log errors appropriately",
          codeExample: {
            code: `// Pattern 1: Top-level boundary
function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

// Pattern 2: Section-level boundaries
function Dashboard() {
  return (
    <div>
      <ErrorBoundary title="Navigation Error">
        <Navigation />
      </ErrorBoundary>
      
      <ErrorBoundary title="Content Error">
        <DashboardContent />
      </ErrorBoundary>
      
      <ErrorBoundary title="Sidebar Error">
        <Sidebar />
      </ErrorBoundary>
    </div>
  );
}

// Pattern 3: Feature-level boundaries
function UserProfile({ userId }) {
  return (
    <ErrorBoundary>
      <UserHeader userId={userId} />
      <ErrorBoundary title="Posts Error">
        <UserPosts userId={userId} />
      </ErrorBoundary>
      <ErrorBoundary title="Friends Error">
        <UserFriends userId={userId} />
      </ErrorBoundary>
    </ErrorBoundary>
  );
}

// Pattern 4: Component-level (risky components)
function DataVisualization({ data }) {
  return (
    <ErrorBoundary title="Chart Error">
      <ComplexChart data={data} />
    </ErrorBoundary>
  );
}

// Pattern 5: Nested boundaries
function App() {
  return (
    <ErrorBoundary title="App Error">
      <Header />
      <ErrorBoundary title="Content Error">
        <MainContent>
          <ErrorBoundary title="Widget Error">
            <RiskyWidget />
          </ErrorBoundary>
        </MainContent>
      </ErrorBoundary>
      <Footer />
    </ErrorBoundary>
  );
}`,
            explanation: "Use Error Boundaries at different levels: top-level for safety net, section-level to isolate major parts, feature-level for features, and component-level for risky components. This provides graceful degradation."
          }
        },
        {
          title: "Handling Different Error Types",
          content: "Different types of errors require different handling strategies. Understanding what Error Boundaries catch and what they don't is crucial.\n\nWhat Error Boundaries Catch:\n• Errors during render\n• Errors in lifecycle methods\n• Errors in constructors\n• Errors in child components\n\nWhat They DON'T Catch:\n• Errors in event handlers (use try-catch)\n• Errors in async code (use try-catch)\n• Errors in setTimeout/setInterval\n• Errors during server-side rendering\n• Errors in the Error Boundary itself\n\nHandling Strategies:\n• Use Error Boundaries for render errors\n• Use try-catch for event handlers\n• Use try-catch for async operations\n• Combine both approaches",
          codeExample: {
            code: `// Error Boundary catches render errors
function ComponentWithRenderError() {
  const data = null;
  return <div>{data.items.map(...)}</div>; // Error caught by boundary
}

// ❌ Error Boundary does NOT catch event handler errors
function ComponentWithEventHandlerError() {
  const handleClick = () => {
    throw new Error('Event handler error'); // NOT caught by boundary
  };
  
  return <button onClick={handleClick}>Click</button>;
}

// ✅ Use try-catch for event handlers
function SafeEventHandler() {
  const handleClick = () => {
    try {
      // Risky operation
      riskyOperation();
    } catch (error) {
      console.error('Error in handler:', error);
      // Show error to user
    }
  };
  
  return <button onClick={handleClick}>Click</button>;
}

// ❌ Error Boundary does NOT catch async errors
function ComponentWithAsyncError() {
  useEffect(() => {
    fetch('/api/data')
      .then(() => {
        throw new Error('Async error'); // NOT caught by boundary
      });
  }, []);
  
  return <div>Content</div>;
}

// ✅ Handle async errors properly
function SafeAsyncComponent() {
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(data => {
        // Process data
      })
      .catch(err => {
        setError(err); // Handle error in state
      });
  }, []);
  
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  
  return <div>Content</div>;
}

// Combined approach: Error Boundary + try-catch
function RobustComponent() {
  const [error, setError] = useState(null);
  
  const handleAsyncAction = async () => {
    try {
      await riskyAsyncOperation();
    } catch (err) {
      setError(err);
    }
  };
  
  // Render errors caught by Error Boundary
  if (someCondition) {
    throw new Error('Render error'); // Caught by boundary
  }
  
  return (
    <div>
      {error && <div>Action error: {error.message}</div>}
      <button onClick={handleAsyncAction}>Action</button>
    </div>
  );
}`,
            explanation: "Error Boundaries only catch render/lifecycle errors. Use try-catch for event handlers and async code. Combine both approaches for comprehensive error handling."
          }
        },
        {
          title: "Error Logging and Monitoring",
          content: "Logging errors to monitoring services is crucial for production applications. Error Boundaries provide the perfect place to integrate error logging.\n\nError Logging Services:\n• Sentry - Popular error tracking\n• LogRocket - Session replay + errors\n• Bugsnag - Error monitoring\n• Rollbar - Error tracking\n• Custom logging service\n\nWhat to Log:\n• Error message and stack trace\n• Component stack\n• User context\n• Browser information\n• User actions leading to error\n\nBest Practices:\n• Log to external service\n• Don't log sensitive data\n• Include helpful context\n• Set up alerts for critical errors\n• Track error frequency",
          codeExample: {
            code: `// Error Boundary with Sentry integration
import * as Sentry from '@sentry/react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    // Log to Sentry
    Sentry.captureException(error, {
      contexts: {
        react: {
          componentStack: errorInfo.componentStack
        }
      },
      tags: {
        errorBoundary: true
      },
      extra: {
        errorInfo
      }
    });
    
    // Also log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }
  }
  
  render() {
    if (this.state.hasError) {
      return <FallbackUI />;
    }
    return this.props.children;
  }
}

// Error Boundary with custom logging
class ErrorBoundaryWithLogging extends React.Component {
  componentDidCatch(error, errorInfo) {
    // Log to custom service
    this.logError({
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      userId: this.getUserId(), // If available
    });
  }
  
  logError = async (errorData) => {
    try {
      await fetch('/api/errors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(errorData)
      });
    } catch (err) {
      console.error('Failed to log error:', err);
    }
  };
  
  getUserId = () => {
    // Get user ID from context, state, etc.
    return null;
  };
  
  // ... rest of Error Boundary
}

// Error Boundary with error reporting hook
function useErrorReporting() {
  const reportError = useCallback((error, errorInfo) => {
    // Send to multiple services
    Sentry.captureException(error, { contexts: { react: errorInfo } });
    
    // Custom logging
    console.error('Error:', error);
    
    // Analytics
    analytics.track('error_occurred', {
      error_message: error.message,
      error_type: error.name
    });
  }, []);
  
  return { reportError };
}

class ErrorBoundary extends React.Component {
  // ... use useErrorReporting hook
}`,
            explanation: "Integrate error logging into Error Boundaries. Use services like Sentry for production error tracking. Log helpful context but avoid sensitive data. Set up alerts for critical errors."
          }
        },
        {
          title: "Error Recovery Strategies",
          content: "Allowing users to recover from errors improves user experience. Error Boundaries can support various recovery strategies.\n\nRecovery Strategies:\n• Reset button - Clear error state\n• Retry mechanism - Try operation again\n• Fallback to cached data\n• Redirect to safe page\n• Show partial content\n• Allow user to continue\n\nImplementation:\n• Store recovery function in state\n• Provide UI for recovery\n• Reset error state\n• Re-render component tree\n\nBest Practices:\n• Always provide recovery option when possible\n• Make recovery action clear\n• Preserve user data when possible\n• Log recovery attempts",
          codeExample: {
            code: `// Error Boundary with reset
class ErrorBoundaryWithReset extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  
  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };
  
  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Something went wrong</h2>
          <button onClick={this.handleReset}>Try again</button>
        </div>
      );
    }
    return this.props.children;
  }
}

// Error Boundary with retry
class ErrorBoundaryWithRetry extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false, 
      error: null,
      retryCount: 0 
    };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true, error: error };
  }
  
  handleRetry = () => {
    this.setState(prev => ({
      hasError: false,
      error: null,
      retryCount: prev.retryCount + 1
    }));
  };
  
  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Error occurred</h2>
          <p>Retry count: {this.state.retryCount}</p>
          <button onClick={this.handleRetry}>
            Retry
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

// Error Boundary with fallback content
class ErrorBoundaryWithFallback extends React.Component {
  state = { hasError: false };
  
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  
  render() {
    if (this.state.hasError) {
      return this.props.fallback || <DefaultFallback />;
    }
    return this.props.children;
  }
}

// Usage with fallback
function App() {
  return (
    <ErrorBoundaryWithFallback
      fallback={
        <div>
          <h2>Content unavailable</h2>
          <p>Please try again later</p>
          <Link to="/">Go to home</Link>
        </div>
      }
    >
      <RiskyComponent />
    </ErrorBoundaryWithFallback>
  );
}

// Error Boundary with key-based reset
function App() {
  const [key, setKey] = useState(0);
  
  const handleReset = () => {
    setKey(prev => prev + 1); // Force remount
  };
  
  return (
    <ErrorBoundary
      key={key}
      onReset={handleReset}
    >
      <RiskyComponent />
    </ErrorBoundary>
  );
}`,
            explanation: "Implement error recovery by allowing users to reset error state, retry operations, or navigate away. Use key prop to force component remount for complete reset. Always provide clear recovery options."
          }
        }
      ],
      conclusion: "Error Boundaries are essential for building robust React applications. They catch render and lifecycle errors, display fallback UI, and prevent entire apps from crashing. Use them at multiple levels, integrate error logging, and provide recovery options. Remember: Error Boundaries only catch render/lifecycle errors - use try-catch for event handlers and async code. Combine both approaches for comprehensive error handling."
    }
  },
  {
    id: "intermediate-10",
    title: "React.memo and Performance Optimization",
    description: "Learn how to optimize React component performance using React.memo, useMemo, useCallback, and other performance optimization techniques.",
    level: "intermediate",
    estimatedTime: "70 min",
    topics: ["React.memo", "useMemo", "useCallback", "Performance Optimization", "Re-render Prevention", "Profiling"],
    prerequisites: ["Managing State with useState", "Understanding useEffect", "Understanding Props"],
    videoUrl: "https://www.youtube.com/watch?v=0lJZg3g-ydE", // React Performance Optimization - Dev Ed
    content: {
      overview: "Performance optimization is crucial for building fast React applications. React.memo, useMemo, and useCallback are powerful tools for preventing unnecessary re-renders and expensive recalculations. This tutorial covers when and how to use these optimization techniques, how to measure performance, and best practices for optimizing React applications.",
      sections: [
        {
          title: "Understanding React Re-renders",
          content: "Understanding when and why components re-render is the first step to optimization.\n\nWhen Components Re-render:\n• State changes (useState, useReducer)\n• Props change\n• Parent component re-renders\n• Context value changes\n• Force update (rarely used)\n\nWhy Re-renders Matter:\n• Can cause performance issues\n• Unnecessary re-renders waste resources\n• Can cause UI flickering\n• Impact user experience\n\nWhen Re-renders are Expensive:\n• Large component trees\n• Complex calculations\n• Heavy DOM manipulations\n• Many child components\n\nOptimization Goal:\n• Prevent unnecessary re-renders\n• Memoize expensive calculations\n• Optimize only when needed\n• Measure before optimizing",
          codeExample: {
            code: `// Component re-renders on every parent render
function ExpensiveComponent({ data }) {
  console.log('Rendering ExpensiveComponent');
  
  // Expensive calculation runs on every render
  const result = expensiveCalculation(data);
  
  return <div>{result}</div>;
}

function Parent() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);
  
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
      <button onClick={() => setOtherState(s => s + 1)}>Other: {otherState}</button>
      {/* ExpensiveComponent re-renders even when data doesn't change */}
      <ExpensiveComponent data={{ value: 42 }} />
    </div>
  );
}

// Tracking re-renders
function ComponentWithRenderTracking() {
  const renderCount = useRef(0);
  renderCount.current += 1;
  
  console.log(\`Rendered \${renderCount.current} times\`);
  
  return <div>Render count: {renderCount.current}</div>;
}

// When props change
function Child({ value }) {
  console.log('Child rendered with value:', value);
  return <div>{value}</div>;
}

function Parent() {
  const [value, setValue] = useState(0);
  const [other, setOther] = useState(0);
  
  return (
    <div>
      <button onClick={() => setValue(v => v + 1)}>Value: {value}</button>
      <button onClick={() => setOther(o => o + 1)}>Other: {other}</button>
      {/* Child re-renders when value changes, but also when other changes */}
      <Child value={value} />
    </div>
  );
}`,
            explanation: "Components re-render when state or props change, or when parent re-renders. Understanding re-render triggers is essential for optimization. Track renders to identify unnecessary re-renders."
          }
        },
        {
          title: "Using React.memo",
          content: "React.memo is a higher-order component that memoizes the result of a component. It only re-renders if props have changed.\n\nWhat React.memo Does:\n• Memoizes component render result\n• Compares props (shallow comparison by default)\n• Skips re-render if props unchanged\n• Only works for functional components\n\nWhen to Use:\n• Component receives same props frequently\n• Component is expensive to render\n• Parent re-renders often\n• Props are primitive or stable references\n\nWhen NOT to Use:\n• Component always receives new props\n• Props change frequently\n• Optimization overhead > benefit\n• Premature optimization",
          videoUrl: "https://www.youtube.com/watch?v=0lJZg3g-ydE", // React.memo Explained
          codeExample: {
            code: `// Component without memo (re-renders on every parent render)
function ExpensiveChild({ name, age }) {
  console.log('Rendering ExpensiveChild');
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

// Component with memo (only re-renders when props change)
const MemoizedChild = React.memo(function ExpensiveChild({ name, age }) {
  console.log('Rendering MemoizedChild');
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
});

function Parent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Alice');
  
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
      {/* MemoizedChild only re-renders when name changes, not when count changes */}
      <MemoizedChild name={name} age={25} />
    </div>
  );
}

// Custom comparison function
const CustomMemoized = React.memo(
  function Component({ user, settings }) {
    return (
      <div>
        <p>{user.name}</p>
        <p>{settings.theme}</p>
      </div>
    );
  },
  (prevProps, nextProps) => {
    // Return true if props are equal (skip re-render)
    // Return false if props are different (re-render)
    return (
      prevProps.user.id === nextProps.user.id &&
      prevProps.settings.theme === nextProps.settings.theme
    );
  }
);

// Memo with object props (be careful!)
function Parent() {
  const [count, setCount] = useState(0);
  
  // ❌ BAD: New object created every render
  return <MemoizedChild data={{ value: 42 }} />;
  
  // ✅ GOOD: Stable reference
  const data = useMemo(() => ({ value: 42 }), []);
  return <MemoizedChild data={data} />;
}`,
            explanation: "React.memo prevents re-renders when props haven't changed. Use it for expensive components that receive stable props. Be careful with object/array props - they need stable references."
          }
        },
        {
          title: "Using useMemo for Expensive Calculations",
          content: "useMemo memoizes the result of expensive calculations, only recalculating when dependencies change.\n\nWhat useMemo Does:\n• Memoizes calculation result\n• Only recalculates when dependencies change\n• Returns cached value otherwise\n• Helps prevent expensive recalculations\n\nWhen to Use:\n• Expensive calculations\n• Derived state from props/state\n• Creating objects/arrays for props\n• Filtering/sorting large arrays\n\nWhen NOT to Use:\n• Simple calculations\n• Values that change frequently\n• Premature optimization\n• When overhead > benefit",
          videoUrl: "https://www.youtube.com/watch?v=THL1OPn72vo", // React useMemo Hook Tutorial
          codeExample: {
            code: `// Expensive calculation without memo
function ProductList({ products, filter }) {
  // ❌ BAD: Recalculates on every render
  const filteredProducts = products.filter(p => 
    p.category === filter
  ).sort((a, b) => a.price - b.price);
  
  return (
    <ul>
      {filteredProducts.map(product => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
}

// With useMemo
function ProductList({ products, filter }) {
  // ✅ GOOD: Only recalculates when products or filter change
  const filteredProducts = useMemo(() => {
    return products
      .filter(p => p.category === filter)
      .sort((a, b) => a.price - b.price);
  }, [products, filter]);
  
  return (
    <ul>
      {filteredProducts.map(product => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
}

// Creating stable object references
function Component({ userId }) {
  const [count, setCount] = useState(0);
  
  // ❌ BAD: New object every render
  const config = { userId, theme: 'dark' };
  
  // ✅ GOOD: Stable reference
  const config = useMemo(
    () => ({ userId, theme: 'dark' }),
    [userId] // Only recreate when userId changes
  );
  
  return <Child config={config} />;
}

// Expensive computation
function ExpensiveCalculation({ n }) {
  const [otherState, setOtherState] = useState(0);
  
  // Expensive calculation only runs when n changes
  const result = useMemo(() => {
    console.log('Calculating...');
    let sum = 0;
    for (let i = 0; i < n * 1000000; i++) {
      sum += i;
    }
    return sum;
  }, [n]); // Only recalculate when n changes
  
  return (
    <div>
      <p>Result: {result}</p>
      <button onClick={() => setOtherState(s => s + 1)}>
        Other: {otherState}
      </button>
    </div>
  );
}`,
            explanation: "useMemo memoizes expensive calculations. Only recalculates when dependencies change. Use it for expensive operations and creating stable object/array references for props."
          }
        },
        {
          title: "Using useCallback for Stable Function References",
          content: "useCallback memoizes functions, returning the same function reference when dependencies haven't changed. This is crucial when passing functions as props to memoized components.\n\nWhat useCallback Does:\n• Memoizes function\n• Returns same reference if dependencies unchanged\n• Prevents unnecessary re-renders of child components\n• Works with React.memo\n\nWhen to Use:\n• Function passed to memoized component\n• Function in dependency array\n• Function passed to child via props\n• Expensive function creation\n\nWhen NOT to Use:\n• Function not passed as prop\n• Dependencies change frequently\n• Simple function creation\n• Premature optimization",
          videoUrl: "https://www.youtube.com/watch?v=3Y3Y9v4f3VM", // React useCallback Hook Tutorial
          codeExample: {
            code: `// Function without useCallback
function Parent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Alice');
  
  // ❌ BAD: New function every render
  const handleClick = () => {
    console.log('Clicked');
  };
  
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
      {/* MemoizedChild re-renders because handleClick is new every time */}
      <MemoizedChild name={name} onClick={handleClick} />
    </div>
  );
}

// With useCallback
function Parent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Alice');
  
  // ✅ GOOD: Stable function reference
  const handleClick = useCallback(() => {
    console.log('Clicked');
  }, []); // Empty deps = function never changes
  
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
      {/* MemoizedChild doesn't re-render when count changes */}
      <MemoizedChild name={name} onClick={handleClick} />
    </div>
  );
}

// useCallback with dependencies
function Parent({ userId }) {
  const [count, setCount] = useState(0);
  
  // Function depends on userId
  const handleUserAction = useCallback((action) => {
    console.log(\`User \${userId} performed \${action}\`);
    // Do something with userId
  }, [userId]); // Recreate when userId changes
  
  return <MemoizedChild onAction={handleUserAction} />;
}

// useCallback in custom hooks
function useApiCall(url) {
  const [data, setData] = useState(null);
  
  const fetchData = useCallback(async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  }, [url]); // Recreate when url changes
  
  return { data, fetchData };
}

// useCallback with event handlers
function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    // Submit form
    console.log({ email, password });
  }, [email, password]); // Recreate when email/password change
  
  return (
    <form onSubmit={handleSubmit}>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <input value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}`,
            explanation: "useCallback memoizes functions to provide stable references. Essential when passing functions to memoized components. Include all dependencies in the dependency array."
          }
        },
        {
          title: "Combining Optimization Techniques",
          content: "Often you need to combine React.memo, useMemo, and useCallback for optimal performance. Understanding how they work together is crucial.\n\nCombination Patterns:\n• React.memo + useCallback for props\n• React.memo + useMemo for object props\n• useMemo + useCallback together\n• Multiple optimizations in one component\n\nBest Practices:\n• Optimize only when needed\n• Measure performance first\n• Don't over-optimize\n• Use React DevTools Profiler\n• Test with realistic data",
          videoUrl: "https://www.youtube.com/watch?v=0lJZg3g-ydE", // React Performance Optimization Complete Guide
          codeExample: {
            code: `// Optimized component with all techniques
const OptimizedChild = React.memo(function Child({ 
  user, 
  settings, 
  onAction 
}) {
  // Expensive calculation memoized
  const processedData = useMemo(() => {
    return expensiveProcessing(user.data);
  }, [user.data]);
  
  return (
    <div>
      <p>{user.name}</p>
      <p>{settings.theme}</p>
      <p>{processedData}</p>
      <button onClick={onAction}>Action</button>
    </div>
  );
});

function Parent() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ id: 1, name: 'Alice', data: [1, 2, 3] });
  const [theme, setTheme] = useState('dark');
  
  // Stable object references
  const settings = useMemo(
    () => ({ theme, language: 'en' }),
    [theme]
  );
  
  // Stable function reference
  const handleAction = useCallback(() => {
    console.log('Action performed');
  }, []);
  
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
      {/* OptimizedChild only re-renders when user or settings actually change */}
      <OptimizedChild 
        user={user} 
        settings={settings} 
        onAction={handleAction} 
      />
    </div>
  );
}

// Complex optimization example
const ExpensiveListItem = React.memo(function ListItem({ 
  item, 
  onSelect, 
  isSelected 
}) {
  const formattedData = useMemo(() => {
    return formatItemData(item);
  }, [item]);
  
  const handleClick = useCallback(() => {
    onSelect(item.id);
  }, [item.id, onSelect]);
  
  return (
    <div 
      className={\`item \${isSelected ? 'selected' : ''}\`}
      onClick={handleClick}
    >
      {formattedData}
    </div>
  );
});

function List({ items, selectedId, onSelect }) {
  const handleSelect = useCallback((id) => {
    onSelect(id);
  }, [onSelect]);
  
  return (
    <div>
      {items.map(item => (
        <ExpensiveListItem
          key={item.id}
          item={item}
          isSelected={item.id === selectedId}
          onSelect={handleSelect}
        />
      ))}
    </div>
  );
}`,
            explanation: "Combine React.memo, useMemo, and useCallback for optimal performance. Memoize components, calculations, and functions. Use stable references for object/function props passed to memoized components."
          }
        },
        {
          title: "Performance Profiling and Best Practices",
          content: "Measuring performance is essential before optimizing. React DevTools Profiler helps identify performance bottlenecks.\n\nProfiling Tools:\n• React DevTools Profiler\n• Chrome DevTools Performance tab\n• Lighthouse\n• Web Vitals\n\nWhat to Measure:\n• Component render times\n• Re-render frequency\n• Time to interactive\n• Bundle size\n• Memory usage\n\nBest Practices:\n• Measure before optimizing\n• Optimize only when needed\n• Use React.memo sparingly\n• Don't over-optimize\n• Test with realistic data\n• Monitor in production\n\nCommon Mistakes:\n• Optimizing too early\n• Memoizing everything\n• Forgetting dependencies\n• Creating new objects in render\n• Not measuring impact",
          codeExample: {
            code: `// Using React DevTools Profiler
// 1. Install React DevTools browser extension
// 2. Open DevTools > Profiler tab
// 3. Click record, interact with app, stop recording
// 4. Analyze which components re-render and why

// Performance measurement hook
function useRenderTime(componentName) {
  const renderStart = useRef(performance.now());
  
  useEffect(() => {
    const renderTime = performance.now() - renderStart.current;
    console.log(\`\${componentName} rendered in \${renderTime.toFixed(2)}ms\`);
  });
  
  useEffect(() => {
    renderStart.current = performance.now();
  });
}

// Usage
function ExpensiveComponent() {
  useRenderTime('ExpensiveComponent');
  // Component logic
}

// Performance monitoring
function usePerformanceMonitor() {
  useEffect(() => {
    // Monitor Web Vitals
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.log('Performance entry:', entry);
        }
      });
      
      observer.observe({ entryTypes: ['measure', 'navigation'] });
      
      return () => observer.disconnect();
    }
  }, []);
}

// ✅ GOOD: Measure first, then optimize
function Component() {
  // 1. Measure performance
  // 2. Identify bottlenecks
  // 3. Apply optimizations
  // 4. Measure again to verify improvement
}

// ❌ BAD: Optimize without measuring
function OverOptimizedComponent() {
  // Memoizing everything without knowing if it helps
  const value = useMemo(() => simpleCalculation(), []);
  const handler = useCallback(() => {}, []);
  // ...
}

// ✅ GOOD: Optimize only expensive operations
function SmartComponent({ data }) {
  // Only memoize if calculation is actually expensive
  const result = data.length > 1000 
    ? useMemo(() => expensiveCalculation(data), [data])
    : simpleCalculation(data);
  
  return <div>{result}</div>;
}

// Performance best practices checklist
const OPTIMIZATION_CHECKLIST = {
  // Before optimizing:
  measure: 'Use React DevTools Profiler',
  identify: 'Find actual bottlenecks',
  test: 'Test with realistic data',
  
  // When optimizing:
  memoize: 'Use React.memo for expensive components',
  calculations: 'Use useMemo for expensive calculations',
  functions: 'Use useCallback for function props',
  stable: 'Provide stable object/array references',
  
  // After optimizing:
  verify: 'Measure again to confirm improvement',
  monitor: 'Monitor in production',
  document: 'Document why optimization was needed'
};`,
            explanation: "Measure performance before optimizing. Use React DevTools Profiler to identify bottlenecks. Optimize only when needed and measure again to verify improvements. Don't over-optimize."
          }
        }
      ],
      conclusion: "Performance optimization is important but should be done carefully. Use React.memo for expensive components with stable props, useMemo for expensive calculations, and useCallback for stable function references. Always measure performance before optimizing, use React DevTools Profiler, and verify that optimizations actually help. Remember: premature optimization is the root of all evil - optimize only when you have evidence of a performance problem."
    }
  },
  {
    id: "intermediate-11",
    title: "TypeScript Interfaces: Comprehensive Guide",
    description: "Master TypeScript interfaces - learn how to declare, extend, and use interfaces effectively in React applications for type safety and better code organization.",
    level: "intermediate",
    estimatedTime: "75 min",
    topics: ["Interfaces", "Interface Declaration", "Extending Interfaces", "Optional Properties", "Readonly Properties", "Index Signatures", "Interface Merging"],
    prerequisites: ["TypeScript Basics for React Developers", "Understanding Props"],
    videoUrl: "https://www.youtube.com/watch?v=0fUyMo5H2GE", // TypeScript Interfaces Tutorial
    content: {
      overview: "Interfaces are one of TypeScript's most powerful features for defining object shapes and contracts. They provide a way to describe the structure of objects, function parameters, and return types. This comprehensive tutorial covers everything you need to know about interfaces: declaring them, extending them, using optional and readonly properties, index signatures, and best practices for using interfaces in React applications.",
      sections: [
        {
          title: "Understanding Interfaces",
          content: "Interfaces define the shape of objects in TypeScript. They describe what properties an object should have and their types.\n\nWhat are Interfaces:\n• Contracts that objects must follow\n• Define object structure\n• Provide type checking\n• Enable autocomplete in IDEs\n• Serve as documentation\n\nWhy Use Interfaces:\n• Type safety at compile time\n• Better IDE support\n• Self-documenting code\n• Catch errors early\n• Refactoring safety\n\nInterface vs Type:\n• Interfaces: Can be extended and merged\n• Types: More flexible, can represent unions, intersections, etc.\n• Both can describe object shapes\n• Choose based on use case",
          videoUrl: "https://www.youtube.com/watch?v=0fUyMo5H2GE", // TypeScript Interfaces Tutorial
          codeExample: {
            code: `// Basic interface declaration
interface User {
  name: string;
  age: number;
  email: string;
}

// Using the interface
const user: User = {
  name: "Alice",
  age: 30,
  email: "alice@example.com"
};

// TypeScript enforces the interface
const invalidUser: User = {
  name: "Bob",
  // age: 25, // Error: Property 'age' is missing
  email: "bob@example.com"
};

// Interface for function parameters
function greetUser(user: User) {
  console.log(\`Hello, \${user.name}!\`);
}

greetUser(user); // ✅ Valid
greetUser({ name: "Charlie" }); // ❌ Error: Missing age and email

// Interface for return types
function createUser(name: string, age: number, email: string): User {
  return {
    name,
    age,
    email
  };
}

// Interface for React component props
interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

function Button({ label, onClick, disabled = false }: ButtonProps) {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}`,
            explanation: "Interfaces define object shapes. Use them for props, function parameters, return types, and any object structure. TypeScript enforces interface contracts at compile time."
          }
        },
        {
          title: "Optional and Readonly Properties",
          content: "Interfaces support optional properties (using ?) and readonly properties (using readonly). These modifiers provide flexibility and immutability.\n\nOptional Properties:\n• Marked with ? after property name\n• Can be omitted when creating object\n• Useful for props that aren't always needed\n• Can have default values\n\nReadonly Properties:\n• Marked with readonly keyword\n• Cannot be reassigned after initialization\n• Useful for immutable data\n• Prevents accidental mutations\n\nCombining Modifiers:\n• Properties can be both optional and readonly\n• readonly applies to the property itself\n• Optional applies to whether property must be present",
          codeExample: {
            code: `// Optional properties
interface UserProfile {
  name: string;
  age: number;
  email?: string; // Optional - may or may not be present
  phone?: string; // Optional
  bio?: string; // Optional
}

const user1: UserProfile = {
  name: "Alice",
  age: 30,
  email: "alice@example.com"
  // phone and bio are optional, so we can omit them
};

const user2: UserProfile = {
  name: "Bob",
  age: 25
  // All optional properties omitted
};

// Readonly properties
interface Config {
  readonly apiUrl: string;
  readonly timeout: number;
  environment: string; // Not readonly, can be changed
}

const config: Config = {
  apiUrl: "https://api.example.com",
  timeout: 5000,
  environment: "production"
};

config.apiUrl = "https://other.com"; // ❌ Error: Cannot assign to 'apiUrl' because it is a read-only property
config.environment = "development"; // ✅ OK - not readonly

// Combining optional and readonly
interface Settings {
  readonly theme: string;
  readonly language?: string; // Optional AND readonly
  notifications: boolean;
}

const settings: Settings = {
  theme: "dark",
  notifications: true
  // language is optional, so we can omit it
};

settings.theme = "light"; // ❌ Error: readonly
settings.language = "en"; // ❌ Error: readonly (if it exists)
settings.notifications = false; // ✅ OK

// React component with optional props
interface CardProps {
  title: string;
  description?: string; // Optional
  readonly id: string; // Readonly - cannot be changed
  onClick?: () => void; // Optional function
}

function Card({ title, description, id, onClick }: CardProps) {
  // id is readonly, so we can read it but not modify it
  return (
    <div onClick={onClick} data-id={id}>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}`,
            explanation: "Use ? for optional properties that may be omitted. Use readonly for properties that shouldn't change after initialization. Combine both when needed for immutable optional properties."
          }
        },
        {
          title: "Extending and Implementing Interfaces",
          content: "Interfaces can extend other interfaces, allowing you to build complex type hierarchies and reuse interface definitions.\n\nExtending Interfaces:\n• Use extends keyword\n• Inherit all properties from parent\n• Can add new properties\n• Can override property types (with constraints)\n• Supports multiple inheritance\n\nInterface Inheritance:\n• Child interface includes all parent properties\n• Can add additional properties\n• Type-safe and checked at compile time\n• Useful for component prop hierarchies\n\nMultiple Inheritance:\n• Interfaces can extend multiple interfaces\n• Combine properties from multiple sources\n• Order matters for property conflicts\n\nBest Practices:\n• Keep interfaces focused\n• Use composition over deep inheritance\n• Name interfaces clearly\n• Document complex interfaces",
          videoUrl: "https://www.youtube.com/watch?v=0fUyMo5H2GE", // TypeScript Interface Extension
          codeExample: {
            code: `// Basic interface extension
interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  breed: string;
  bark: () => void;
}

const myDog: Dog = {
  name: "Buddy",
  age: 3,
  breed: "Golden Retriever",
  bark: () => console.log("Woof!")
};

// Multiple interface extension
interface Flyable {
  fly: () => void;
}

interface Swimmable {
  swim: () => void;
}

interface Duck extends Animal, Flyable, Swimmable {
  quack: () => void;
}

const myDuck: Duck = {
  name: "Donald",
  age: 2,
  fly: () => console.log("Flying"),
  swim: () => console.log("Swimming"),
  quack: () => console.log("Quack!")
};

// React component prop hierarchies
interface BaseButtonProps {
  disabled?: boolean;
  className?: string;
}

interface PrimaryButtonProps extends BaseButtonProps {
  variant: "primary";
  onClick: () => void;
}

interface SecondaryButtonProps extends BaseButtonProps {
  variant: "secondary";
  onClick?: () => void;
}

// Using extended interfaces
function Button(props: PrimaryButtonProps | SecondaryButtonProps) {
  return (
    <button
      className={props.className}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.variant}
    </button>
  );
}

// Extending with additional properties
interface User {
  id: string;
  name: string;
  email: string;
}

interface AdminUser extends User {
  permissions: string[];
  role: "admin";
}

interface RegularUser extends User {
  role: "user";
  subscription?: string;
}

// Conditional types with extended interfaces
function getUserDisplay(user: AdminUser | RegularUser) {
  if (user.role === "admin") {
    // TypeScript knows this is AdminUser
    console.log(\`Admin: \${user.name} with \${user.permissions.length} permissions\`);
  } else {
    // TypeScript knows this is RegularUser
    console.log(\`User: \${user.name}\`);
  }
}`,
            explanation: "Extend interfaces using the extends keyword. Interfaces can extend multiple interfaces. Use extension to build type hierarchies and reuse common properties. This is especially useful for React component prop types."
          }
        },
        {
          title: "Index Signatures and Dynamic Properties",
          content: "Index signatures allow interfaces to have properties with dynamic names. This is useful for objects with unknown property names at compile time.\n\nIndex Signatures:\n• Allow properties with dynamic names\n• Syntax: [key: type]: valueType\n• Can have string or number keys\n• Useful for dictionaries and maps\n\nString Index Signatures:\n• Most common type\n• Keys must be strings\n• Allows any string key\n• Can combine with known properties\n\nNumber Index Signatures:\n• Keys must be numbers\n• Less common\n• Useful for arrays-like objects\n\nCombining with Known Properties:\n• Can have both known and index properties\n• Known properties must match index signature\n• Index signature is fallback for unknown keys",
          codeExample: {
            code: `// String index signature
interface StringDictionary {
  [key: string]: string;
}

const colors: StringDictionary = {
  red: "#ff0000",
  blue: "#0000ff",
  green: "#00ff00"
  // Can add any string key
};

colors.yellow = "#ffff00"; // ✅ OK
colors["purple"] = "#800080"; // ✅ OK

// Number index signature
interface NumberDictionary {
  [index: number]: string;
}

const items: NumberDictionary = {
  0: "first",
  1: "second",
  2: "third"
};

// Combining known properties with index signature
interface UserPreferences {
  theme: string; // Known property
  language: string; // Known property
  [key: string]: string | number; // Index signature - allows any other string key
}

const prefs: UserPreferences = {
  theme: "dark",
  language: "en",
  fontSize: 14, // ✅ OK - matches index signature
  customSetting: "value" // ✅ OK
};

// React component with dynamic props
interface FlexibleComponentProps {
  title: string; // Required known property
  [propName: string]: string | number | boolean | undefined; // Dynamic props
}

function FlexibleComponent({ title, ...rest }: FlexibleComponentProps) {
  return (
    <div>
      <h2>{title}</h2>
      {Object.entries(rest).map(([key, value]) => (
        <div key={key}>
          {key}: {String(value)}
        </div>
      ))}
    </div>
  );
}

// API response with dynamic properties
interface ApiResponse {
  status: number;
  message: string;
  [key: string]: unknown; // Can have any additional properties
}

function handleResponse(response: ApiResponse) {
  console.log(response.status);
  console.log(response.message);
  // Can access any other properties
  if ('data' in response) {
    console.log(response.data);
  }
}

// Dictionary with typed values
interface Cache<T> {
  [key: string]: T;
}

const stringCache: Cache<string> = {
  user1: "Alice,
  user2: "Bob"
};

const numberCache: Cache<number> = {
  count1: 10,
  count2: 20
};`,
            explanation: "Index signatures allow dynamic property names. Use string index signatures for dictionaries and objects with unknown keys. Combine with known properties for flexible but type-safe interfaces."
          }
        },
        {
          title: "Interface Merging and Declaration Merging",
          content: "TypeScript supports interface merging, where multiple declarations of the same interface are automatically merged. This is a powerful feature for extending interfaces.\n\nInterface Merging:\n• Multiple declarations with same name merge\n• Properties are combined\n• Later declarations can add properties\n• Useful for extending library types\n• Declaration merging is TypeScript-specific\n\nWhen Merging Happens:\n• Multiple interface declarations with same name\n• In same file or across files\n• Properties are merged together\n• Conflicts cause errors\n\nUse Cases:\n• Extending third-party library types\n• Adding properties to global types\n• Module augmentation\n• Building up interfaces incrementally",
          codeExample: {
            code: `// Interface merging - same name, different declarations
interface User {
  name: string;
  age: number;
}

interface User {
  email: string; // Merged with previous declaration
}

// Result: User has name, age, and email
const user: User = {
  name: "Alice",
  age: 30,
  email: "alice@example.com"
};

// Merging across files
// file1.ts
interface Config {
  apiUrl: string;
}

// file2.ts
interface Config {
  timeout: number; // Merged with file1's Config
}

// Result: Config has both apiUrl and timeout

// Extending library types (module augmentation)
// Extending Window interface
interface Window {
  myCustomProperty: string;
  myCustomMethod: () => void;
}

// Now you can use
window.myCustomProperty = "value";
window.myCustomMethod();

// Extending React types
declare module 'react' {
  interface HTMLAttributes<T> {
    customAttr?: string;
  }
}

// Now all HTML elements can have customAttr
<div customAttr="value">Content</div>

// Merging with method overloads
interface Calculator {
  add(a: number, b: number): number;
}

interface Calculator {
  add(a: string, b: string): string; // Method overload
}

// Result: Calculator.add can accept numbers or strings

// Merging with different property types (causes error)
interface Conflicting {
  value: string;
}

interface Conflicting {
  value: number; // ❌ Error: Property 'value' of type 'number' is not assignable to type 'string'
}

// Merging with compatible types
interface Compatible {
  value: string | number; // Union type allows both
}

interface Compatible {
  value: string | number | boolean; // ✅ OK - extends the union
}`,
            explanation: "Interface merging combines multiple declarations of the same interface. Use it to extend third-party types, add global properties, and build interfaces incrementally. Be careful with type conflicts."
          }
        },
        {
          title: "Function Types and Call Signatures in Interfaces",
          content: "Interfaces can describe function shapes using call signatures. This is useful for typing functions, callbacks, and event handlers.\n\nFunction Types in Interfaces:\n• Describe function shapes\n• Can have multiple call signatures (overloads)\n• Useful for callbacks and event handlers\n• Can combine with properties\n\nCall Signatures:\n• Syntax: (param: type) => returnType\n• Can have multiple overloads\n• Parameters can be optional\n• Return types are enforced\n\nMethod Signatures:\n• Shorthand for methods in interfaces\n• Syntax: methodName(param: type): returnType\n• Can be optional\n• Useful for object methods",
          codeExample: {
            code: `// Function type in interface
interface SearchFunction {
  (query: string): string[];
}

const search: SearchFunction = (query) => {
  return [\`Result for \${query}\`];
};

// Interface with both properties and function
interface Calculator {
  value: number;
  add: (a: number, b: number) => number;
  subtract(a: number, b: number): number; // Method signature syntax
}

const calc: Calculator = {
  value: 0,
  add: (a, b) => a + b,
  subtract: (a, b) => a - b
};

// Function with multiple call signatures (overloads)
interface StringOrNumberProcessor {
  (value: string): string;
  (value: number): number;
}

// Implementing the overloaded function
const process: StringOrNumberProcessor = (value: string | number) => {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return value * 2;
};

// React event handler types
interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onHover?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}

function Button({ onClick, onHover, children }: ButtonProps) {
  return (
    <button onClick={onClick} onMouseEnter={onHover}>
      {children}
    </button>
  );
}

// Callback interface
interface DataFetcher {
  fetch: (url: string) => Promise<unknown>;
  onSuccess: (data: unknown) => void;
  onError: (error: Error) => void;
}

// Generic function interface
interface Transformer<T, U> {
  (input: T): U;
}

const stringToNumber: Transformer<string, number> = (str) => 
  parseInt(str, 10);

const numberToString: Transformer<number, string> = (num) => 
  String(num);

// Interface with constructor signature
interface UserConstructor {
  new (name: string, age: number): User;
}

class User {
  constructor(public name: string, public age: number) {}
}

function createUser(ctor: UserConstructor, name: string, age: number) {
  return new ctor(name, age);
}

const user = createUser(User, "Alice", 30);`,
            explanation: "Interfaces can describe function shapes using call signatures. Use them for typing functions, callbacks, event handlers, and methods. Support multiple overloads for flexible function types."
          }
        },
        {
          title: "Best Practices for Interfaces",
          content: "Following best practices makes your interfaces more maintainable, reusable, and easier to understand.\n\nBest Practices:\n• Use descriptive names (PascalCase)\n• Keep interfaces focused (single responsibility)\n• Prefer interfaces over types for object shapes\n• Use readonly for immutable properties\n• Document complex interfaces\n• Group related interfaces together\n• Use generic interfaces for reusability\n• Avoid deep nesting\n\nNaming Conventions:\n• PascalCase for interface names\n• Descriptive names that indicate purpose\n• Props interfaces: ComponentNameProps\n• Data interfaces: clear domain names\n\nOrganization:\n• Group related interfaces\n• Export from appropriate modules\n• Use index files for public API\n• Keep interfaces close to usage",
          codeExample: {
            code: `// ✅ GOOD: Descriptive, focused interface
interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
}

// ✅ GOOD: Props interface with clear naming
interface UserCardProps {
  user: UserProfile;
  onEdit?: (user: UserProfile) => void;
  showActions?: boolean;
}

// ✅ GOOD: Grouped related interfaces
// types/user.ts
export interface User {
  id: string;
  name: string;
  email: string;
}

export interface UserPreferences {
  userId: string;
  theme: "light" | "dark";
  language: string;
}

export interface UserWithPreferences extends User {
  preferences: UserPreferences;
}

// ✅ GOOD: Generic interface for reusability
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

interface UserResponse extends ApiResponse<User> {}
interface ProductResponse extends ApiResponse<Product> {}

// ✅ GOOD: Documented interface
/**
 * Represents a user in the system
 * @property id - Unique identifier
 * @property name - User's full name
 * @property email - User's email address
 * @property role - User's role in the system
 */
interface User {
  /** Unique identifier */
  id: string;
  /** User's full name */
  name: string;
  /** User's email address */
  email: string;
  /** User's role */
  role: "admin" | "user" | "guest";
}

// ✅ GOOD: Readonly for immutability
interface Config {
  readonly apiUrl: string;
  readonly version: string;
  environment: string; // Can be changed
}

// ❌ BAD: Too broad, unclear purpose
interface Data {
  // What kind of data? Too vague
}

// ❌ BAD: Deep nesting
interface BadStructure {
  user: {
    profile: {
      settings: {
        theme: string; // Too nested
      };
    };
  };
}

// ✅ GOOD: Flattened structure
interface UserSettings {
  theme: string;
}

interface UserProfile {
  settings: UserSettings;
}

interface User {
  profile: UserProfile;
}`,
            explanation: "Follow best practices: use descriptive names, keep interfaces focused, prefer interfaces for object shapes, use readonly for immutability, document complex interfaces, and organize related interfaces together."
          }
        }
      ],
      conclusion: "Interfaces are fundamental to TypeScript and essential for building type-safe React applications. Use them to define object shapes, component props, function signatures, and data structures. Leverage optional and readonly properties, extend interfaces for hierarchies, use index signatures for dynamic properties, and take advantage of interface merging. Remember: interfaces provide contracts that TypeScript enforces, making your code safer and more maintainable. Follow best practices for naming, organization, and documentation to keep your interfaces clear and useful."
    }
  },
  {
    id: "intermediate-12",
    title: "Type Aliases and Advanced Type Declarations",
    description: "Master TypeScript type aliases, union types, intersection types, and advanced type declaration patterns for flexible and powerful type definitions.",
    level: "intermediate",
    estimatedTime: "80 min",
    topics: ["Type Aliases", "Union Types", "Intersection Types", "Literal Types", "Template Literal Types", "Mapped Types", "Conditional Types"],
    prerequisites: ["TypeScript Basics for React Developers", "TypeScript Interfaces: Comprehensive Guide"],
    videoUrl: "https://www.youtube.com/watch?v=30LWjhZzg50", // Learn TypeScript Full Tutorial - freeCodeCamp
    content: {
      overview: "Type aliases provide a way to create new names for types, making complex types reusable and readable. Combined with union types, intersection types, and advanced TypeScript features, type aliases enable powerful type declarations. This tutorial covers everything from basic type aliases to advanced patterns like conditional types and template literal types, giving you the tools to create flexible and expressive type systems.",
      sections: [
        {
          title: "Understanding Type Aliases",
          content: "Type aliases create new names for types. They're similar to interfaces but more flexible, supporting unions, intersections, and other complex types.\n\nWhat are Type Aliases:\n• New names for existing types\n• Created with type keyword\n• Can represent any type\n• More flexible than interfaces\n• Cannot be merged (unlike interfaces)\n\nWhen to Use Type Aliases:\n• Union types\n• Intersection types\n• Complex type combinations\n• Primitive type aliases\n• Function types\n• Tuple types\n\nType Alias vs Interface:\n• Interfaces: Object shapes, can be merged, extended\n• Type aliases: Any type, cannot be merged, more flexible\n• Use interfaces for object shapes\n• Use type aliases for unions, intersections, primitives",
          codeExample: {
            code: `// Basic type alias
type UserID = string;
type Age = number;
type IsActive = boolean;

// Using type aliases
const userId: UserID = "user-123";
const age: Age = 30;
const isActive: IsActive = true;

// Type alias for object (similar to interface)
type User = {
  id: UserID;
  name: string;
  age: Age;
  isActive: IsActive;
};

// Type alias for function
type GreetFunction = (name: string) => string;

const greet: GreetFunction = (name) => \`Hello, \${name}!\`;

// Type alias for array
type StringArray = string[];
type NumberList = number[];

const names: StringArray = ["Alice", "Bob"];
const numbers: NumberList = [1, 2, 3];

// Type alias for tuple
type Coordinate = [number, number];
type RGB = [number, number, number];

const point: Coordinate = [10, 20];
const color: RGB = [255, 0, 0];

// Type alias for React component props
type ButtonProps = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
};

function Button({ label, onClick, disabled }: ButtonProps) {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}

// Type alias vs Interface
// Interface (can be extended and merged)
interface IUser {
  name: string;
}

// Type alias (cannot be merged)
type TUser = {
  name: string;
};

// Both work similarly, but interfaces have merging capability`,
            explanation: "Type aliases create reusable names for types. Use them for any type, especially unions, intersections, and complex combinations. They're more flexible than interfaces but cannot be merged."
          }
        },
        {
          title: "Union Types",
          content: "Union types allow a value to be one of several types. They're created using the | operator and are one of TypeScript's most powerful features.\n\nWhat are Union Types:\n• Value can be one of multiple types\n• Created with | operator\n• TypeScript narrows type based on usage\n• Essential for flexible APIs\n• Enable type-safe alternatives\n\nUse Cases:\n• Function parameters that accept multiple types\n• API responses with different shapes\n• Component props with variants\n• State that can be different types\n• Error handling\n\nType Narrowing:\n• TypeScript narrows union types\n• Use typeof, instanceof, or type guards\n• Enables type-safe code\n• Prevents runtime errors",
          videoUrl: "https://www.youtube.com/watch?v=30LWjhZzg50", // TypeScript Union Types
          codeExample: {
            code: `// Basic union type
type StringOrNumber = string | number;

function processValue(value: StringOrNumber) {
  // TypeScript knows value is string OR number
  if (typeof value === "string") {
    // TypeScript narrows to string here
    return value.toUpperCase();
  } else {
    // TypeScript narrows to number here
    return value * 2;
  }
}

// Union of literal types
type Status = "pending" | "success" | "error";
type Theme = "light" | "dark";

function setStatus(status: Status) {
  console.log(\`Status: \${status}\`);
}

setStatus("pending"); // ✅ OK
setStatus("success"); // ✅ OK
setStatus("invalid"); // ❌ Error

// Union with null/undefined
type MaybeString = string | null | undefined;

function getValue(): MaybeString {
  return Math.random() > 0.5 ? "value" : null;
}

// React component with union props
type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  variant: ButtonVariant;
  size: ButtonSize;
  onClick: () => void;
};

function Button({ variant, size, onClick }: ButtonProps) {
  return (
    <button
      className={\`btn btn-\${variant} btn-\${size}\`}
      onClick={onClick}
    >
      Click me
    </button>
  );
}

// Union for API responses
type ApiResponse = 
  | { status: "success"; data: User }
  | { status: "error"; message: string };

function handleResponse(response: ApiResponse) {
  if (response.status === "success") {
    // TypeScript knows response.data exists
    console.log(response.data);
  } else {
    // TypeScript knows response.message exists
    console.error(response.message);
  }
}

// Multiple unions
type ID = string | number;
type Value = string | number | boolean | null;

// Union in arrays
type MixedArray = (string | number)[];

const arr: MixedArray = ["hello", 42, "world", 100];`,
            explanation: "Union types allow values to be one of several types. Use | to combine types. TypeScript narrows unions based on type guards. Essential for flexible, type-safe code."
          }
        },
        {
          title: "Intersection Types",
          content: "Intersection types combine multiple types into one. A value must satisfy all types in the intersection. Created using the & operator.\n\nWhat are Intersection Types:\n• Combines multiple types\n• Value must satisfy ALL types\n• Created with & operator\n• Useful for mixing types\n• Similar to extending interfaces\n\nUse Cases:\n• Combining object types\n• Mixing interfaces\n• Adding properties to existing types\n• Creating complex types from simple ones\n• Extending types without modification\n\nIntersection vs Union:\n• Intersection (&): Must satisfy ALL types\n• Union (|): Must satisfy ONE type\n• Use intersection to combine\n• Use union for alternatives",
          videoUrl: "https://www.youtube.com/watch?v=30LWjhZzg50", // TypeScript Intersection Types
          codeExample: {
            code: `// Basic intersection type
type Person = {
  name: string;
  age: number;
};

type Employee = {
  employeeId: string;
  department: string;
};

type EmployeePerson = Person & Employee;

const employee: EmployeePerson = {
  name: "Alice",
  age: 30,
  employeeId: "EMP-001",
  department: "Engineering"
  // Must have properties from both Person and Employee
};

// Intersection with multiple types
type Flyable = {
  fly: () => void;
};

type Swimmable = {
  swim: () => void;
};

type Duck = Person & Flyable & Swimmable;

const duck: Duck = {
  name: "Donald",
  age: 2,
  fly: () => console.log("Flying"),
  swim: () => console.log("Swimming")
};

// Intersection for React component props
type BaseProps = {
  className?: string;
  id?: string;
};

type ButtonProps = {
  onClick: () => void;
  disabled?: boolean;
};

type LinkProps = {
  href: string;
  target?: string;
};

// Component that can be button or link
type FlexibleComponentProps = BaseProps & (ButtonProps | LinkProps);

function FlexibleComponent(props: FlexibleComponentProps) {
  if ("href" in props) {
    // TypeScript knows this is LinkProps
    return <a href={props.href} target={props.target}>Link</a>;
  } else {
    // TypeScript knows this is ButtonProps
    return <button onClick={props.onClick} disabled={props.disabled}>Button</button>;
  }
}

// Intersection with primitives (results in never)
type Impossible = string & number; // never - nothing can be both string and number

// Intersection for extending types
type ReadonlyUser = {
  readonly id: string;
  readonly name: string;
};

type MutableUser = {
  id: string;
  name: string;
  email: string;
};

// Combine readonly base with mutable extension
type ExtendedUser = ReadonlyUser & {
  email: string;
  age: number;
};

// Intersection with function types
type Loggable = {
  log: (message: string) => void;
};

type Cacheable = {
  cache: Map<string, unknown>;
};

type LoggerWithCache = Loggable & Cacheable;

const logger: LoggerWithCache = {
  log: (message) => console.log(message),
  cache: new Map()
};`,
            explanation: "Intersection types combine multiple types using &. A value must satisfy all types in the intersection. Use intersections to combine object types, mix interfaces, and create complex types from simpler ones."
          }
        },
        {
          title: "Literal Types and Template Literal Types",
          content: "Literal types are types that represent exact values. Template literal types combine string literals, enabling powerful string manipulation at the type level.\n\nLiteral Types:\n• Exact value as type\n• String, number, or boolean literals\n• Very specific types\n• Used in unions for enums-like behavior\n\nTemplate Literal Types:\n• Combine string literal types\n• Use template literal syntax\n• Enable string pattern matching\n• Powerful for API routes, CSS classes, etc.\n\nUse Cases:\n• Status values\n• Theme values\n• API endpoint types\n• CSS class combinations\n• Event name patterns",
          codeExample: {
            code: `// Literal types
type Status = "pending" | "success" | "error";
type Answer = "yes" | "no";
type Number = 42; // Literal number type

const status: Status = "pending"; // ✅ OK
const status2: Status = "invalid"; // ❌ Error

// Literal types in functions
function setTheme(theme: "light" | "dark") {
  console.log(\`Theme set to \${theme}\`);
}

setTheme("light"); // ✅ OK
setTheme("blue"); // ❌ Error

// Template literal types
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
type ApiRoute = "/users" | "/posts" | "/comments";

type ApiEndpoint = \`\${HttpMethod} \${ApiRoute}\`;

// Results in: "GET /users" | "GET /posts" | "GET /comments" | "POST /users" | ...

const endpoint: ApiEndpoint = "GET /users"; // ✅ OK
const endpoint2: ApiEndpoint = "PATCH /users"; // ❌ Error

// Template literals with variables
type EventName = "click" | "hover" | "focus";
type ElementType = "button" | "input" | "div";

type EventHandlerName = \`on\${Capitalize<EventName>}\`;

// Results in: "onClick" | "onHover" | "onFocus"

// CSS class combinations
type Color = "red" | "blue" | "green";
type Size = "sm" | "md" | "lg";

type ButtonClass = \`btn-\${Color}-\${Size}\`;

// Results in: "btn-red-sm" | "btn-red-md" | "btn-red-lg" | "btn-blue-sm" | ...

// API route patterns
type Resource = "user" | "post" | "comment";
type Action = "create" | "read" | "update" | "delete";

type ApiRoute = \`/api/\${Resource}/\${Action}\`;

// Results in: "/api/user/create" | "/api/user/read" | "/api/post/create" | ...

// Template literal with unions
type Lang = "en" | "fr" | "es";
type Page = "home" | "about" | "contact";

type LocalizedRoute = \`/\${Lang}/\${Page}\`;

// Results in: "/en/home" | "/en/about" | "/fr/home" | ...

// Advanced template literal patterns
type EmailDomain = "gmail.com" | "yahoo.com" | "example.com";
type Email = \`\${string}@\${EmailDomain}\`;

const email: Email = "user@gmail.com"; // ✅ OK
const email2: Email = "user@invalid.com"; // ❌ Error

// React component with literal types
type ButtonVariant = "primary" | "secondary" | "danger";
type ButtonSize = "small" | "medium" | "large";

type ButtonProps = {
  variant: ButtonVariant;
  size: ButtonSize;
  className?: string;
};

function Button({ variant, size, className }: ButtonProps) {
  return (
    <button
      className={\`btn btn-\${variant} btn-\${size} \${className || ""}\`}
    >
      Click me
    </button>
  );
}`,
            explanation: "Literal types represent exact values. Template literal types combine string literals using template syntax. Use them for status values, API routes, CSS classes, and any string pattern matching needs."
          }
        },
        {
          title: "Mapped Types",
          content: "Mapped types create new types by transforming properties of existing types. They're powerful for creating variations of types.\n\nWhat are Mapped Types:\n• Transform properties of existing types\n• Create new types from old ones\n• Use keyof to iterate over properties\n• Enable type transformations\n• Built-in utility types use mapped types\n\nCommon Patterns:\n• Making all properties optional\n• Making all properties readonly\n• Making all properties required\n• Transforming property types\n• Filtering properties\n\nBuilt-in Mapped Types:\n• Partial<T> - All properties optional\n• Required<T> - All properties required\n• Readonly<T> - All properties readonly\n• Pick<T, K> - Select properties\n• Omit<T, K> - Exclude properties",
          codeExample: {
            code: `// Basic mapped type
type Optional<T> = {
  [K in keyof T]?: T[K];
};

type User = {
  id: string;
  name: string;
  email: string;
};

type OptionalUser = Optional<User>;
// Result: { id?: string; name?: string; email?: string; }

// Readonly mapped type
type Readonly<T> = {
  readonly [K in keyof T]: T[K];
};

type ReadonlyUser = Readonly<User>;
// Result: { readonly id: string; readonly name: string; readonly email: string; }

// Transforming property types
type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

type NullableUser = Nullable<User>;
// Result: { id: string | null; name: string | null; email: string | null; }

// Conditional transformation
type Stringify<T> = {
  [K in keyof T]: string;
};

type StringifiedUser = Stringify<User>;
// Result: { id: string; name: string; email: string; } (all become string)

// Filtering properties
type StringKeys<T> = {
  [K in keyof T as K extends string ? K : never]: T[K];
};

// Pick specific properties
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

type UserName = Pick<User, "name" | "email">;
// Result: { name: string; email: string; }

// Omit properties
type Omit<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: T[P];
};

type UserWithoutEmail = Omit<User, "email">;
// Result: { id: string; name: string; }

// React component props transformation
type ComponentProps<T> = {
  [K in keyof T]: T[K] | React.ReactNode;
};

type UserComponentProps = ComponentProps<User>;
// All properties can now be React nodes

// Making nested properties optional
type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

type NestedUser = {
  id: string;
  profile: {
    name: string;
    age: number;
  };
};

type PartialNestedUser = DeepPartial<NestedUser>;
// Result: { id?: string; profile?: { name?: string; age?: number; } }`,
            explanation: "Mapped types transform properties of existing types. Use them to make properties optional, readonly, or transform their types. Built-in utility types like Partial, Required, and Readonly are implemented using mapped types."
          }
        },
        {
          title: "Conditional Types",
          content: "Conditional types select types based on conditions. They're TypeScript's way of doing type-level if/else statements.\n\nWhat are Conditional Types:\n• Types that depend on other types\n• Syntax: T extends U ? X : Y\n• Type-level conditionals\n• Enable powerful type inference\n• Used in utility types\n\nBasic Syntax:\n• T extends U ? X : Y\n• If T extends U, result is X\n• Otherwise, result is Y\n• Can be nested\n• Can use infer keyword\n\nUse Cases:\n• Type extraction\n• Type filtering\n• Function overloads\n• Utility type creation\n• API response typing",
          codeExample: {
            code: `// Basic conditional type
type IsString<T> = T extends string ? true : false;

type Test1 = IsString<string>; // true
type Test2 = IsString<number>; // false

// Extract array element type
type ArrayElement<T> = T extends (infer U)[] ? U : never;

type StringArrayElement = ArrayElement<string[]>; // string
type NumberArrayElement = ArrayElement<number[]>; // number

// Extract function return type
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type FuncReturn = ReturnType<() => string>; // string
type AsyncReturn = ReturnType<() => Promise<number>>; // Promise<number>

// Extract function parameters
type Parameters<T> = T extends (...args: infer P) => any ? P : never;

type FuncParams = Parameters<(a: string, b: number) => void>; // [string, number]

// Non-nullable type
type NonNullable<T> = T extends null | undefined ? never : T;

type CleanString = NonNullable<string | null>; // string
type CleanNumber = NonNullable<number | undefined>; // number

// Flatten array type
type Flatten<T> = T extends (infer U)[] ? U : T;

type Flat = Flatten<string[]>; // string
type NotFlat = Flatten<string>; // string

// Extract promise type
type Awaited<T> = T extends Promise<infer U> ? U : T;

type Resolved = Awaited<Promise<string>>; // string
type NotPromise = Awaited<string>; // string

// React component props extraction
type ComponentProps<T> = T extends React.ComponentType<infer P> ? P : never;

function MyComponent({ name }: { name: string }) {
  return <div>{name}</div>;
}

type Props = ComponentProps<typeof MyComponent>; // { name: string }

// Conditional type with union distribution
type ToArray<T> = T extends any ? T[] : never;

type StringOrNumberArray = ToArray<string | number>; // string[] | number[]

// Exclude type
type Exclude<T, U> = T extends U ? never : T;

type WithoutString = Exclude<string | number | boolean, string>; // number | boolean

// Extract type
type Extract<T, U> = T extends U ? T : never;

type OnlyStrings = Extract<string | number | boolean, string>; // string`,
            explanation: "Conditional types select types based on conditions using T extends U ? X : Y syntax. Use them with infer to extract types, create utility types, and build powerful type systems."
          }
        },
        {
          title: "Advanced Type Patterns and Best Practices",
          content: "Combining type aliases, unions, intersections, and conditional types enables powerful type patterns. Understanding when and how to use these patterns is key to effective TypeScript.\n\nAdvanced Patterns:\n• Discriminated unions\n• Branded types\n• Recursive types\n• Type guards\n• Type assertions\n• Const assertions\n\nBest Practices:\n• Use type aliases for unions/intersections\n• Use interfaces for object shapes\n• Prefer type inference when possible\n• Use const assertions for literals\n• Create utility types for reuse\n• Document complex types\n• Keep types focused and composable",
          codeExample: {
            code: `// Discriminated union (tagged union)
type LoadingState = {
  status: "loading";
};

type SuccessState<T> = {
  status: "success";
  data: T;
};

type ErrorState = {
  status: "error";
  error: string;
};

type AsyncState<T> = LoadingState | SuccessState<T> | ErrorState;

function handleState<T>(state: AsyncState<T>) {
  switch (state.status) {
    case "loading":
      return "Loading...";
    case "success":
      return state.data; // TypeScript knows data exists
    case "error":
      return state.error; // TypeScript knows error exists
  }
}

// Branded types (nominal typing)
type UserID = string & { readonly brand: unique symbol };
type ProductID = string & { readonly brand: unique symbol };

function createUserID(id: string): UserID {
  return id as UserID;
}

function createProductID(id: string): ProductID {
  return id as ProductID;
}

// Prevents mixing up IDs
const userId = createUserID("user-123");
const productId = createProductID("prod-456");

// userId = productId; // ❌ Error: types are incompatible

// Recursive types
type TreeNode<T> = {
  value: T;
  children?: TreeNode<T>[];
};

const tree: TreeNode<string> = {
  value: "root",
  children: [
    { value: "child1" },
    {
      value: "child2",
      children: [{ value: "grandchild" }]
    }
  ]
};

// Type guards
function isString(value: unknown): value is string {
  return typeof value === "string";
}

function process(value: unknown) {
  if (isString(value)) {
    // TypeScript knows value is string here
    return value.toUpperCase();
  }
  return String(value);
}

// Const assertions
const config = {
  apiUrl: "https://api.example.com",
  timeout: 5000
} as const;

// config.apiUrl = "other"; // ❌ Error: cannot assign

// Type for exact values
type Config = typeof config;
// Result: { readonly apiUrl: "https://api.example.com"; readonly timeout: 5000; }

// Utility type composition
type PartialExcept<T, K extends keyof T> = Partial<T> & Pick<T, K>;

type User = {
  id: string;
  name: string;
  email: string;
};

type UpdateUser = PartialExcept<User, "id">;
// Result: { id: string; name?: string; email?: string; }

// React component with advanced types
type ComponentVariant = "primary" | "secondary";
type ComponentSize = "sm" | "md" | "lg";

type ComponentProps = {
  variant: ComponentVariant;
  size: ComponentSize;
  children: React.ReactNode;
} & (
  | { as: "button"; onClick: () => void }
  | { as: "div"; onClick?: never }
);

function FlexibleComponent(props: ComponentProps) {
  if (props.as === "button") {
    return (
      <button onClick={props.onClick} className={\`\${props.variant} \${props.size}\`}>
        {props.children}
      </button>
    );
  }
  return <div className={\`\${props.variant} \${props.size}\`}>{props.children}</div>;
}`,
            explanation: "Combine type features for powerful patterns: discriminated unions for type-safe state, branded types for nominal typing, recursive types for nested structures, and type guards for runtime type checking. Follow best practices for maintainable type systems."
          }
        }
      ],
      conclusion: "Type aliases and advanced type declarations provide powerful tools for creating flexible, expressive type systems. Use type aliases for unions, intersections, and complex types. Leverage union types for alternatives, intersection types for combinations, literal types for exact values, and template literal types for string patterns. Mapped types transform existing types, and conditional types enable type-level logic. Combine these features to build sophisticated type systems that catch errors at compile time and provide excellent developer experience. Remember: use type aliases for flexibility, interfaces for object shapes, and always prefer composition and clarity over complexity."
    }
  },
  {
    id: "intermediate-13",
    title: "TypeScript Generics: Creating Functions with Dynamic Typing",
    description: "Learn how to create functions with dynamic typing using TypeScript generics, similar to createContext. Master generic functions, type inference, and how to build flexible, reusable functions.",
    level: "intermediate",
    estimatedTime: "70 min",
    topics: ["Generics", "Generic Functions", "Type Inference", "Generic Constraints", "createContext Pattern", "Type Parameters"],
    prerequisites: ["TypeScript Basics for React Developers", "TypeScript Interfaces: Comprehensive Guide"],
    videoUrl: "https://www.youtube.com/watch?v=nViEqpgwxHE", // TypeScript Generics Tutorial - Programming with Mosh
    content: {
      overview: "Generics allow you to create functions, components, and types that work with multiple types while maintaining type safety. They enable dynamic typing where the type is determined by how the function is called. This tutorial covers how to create generic functions like React's createContext, understand type inference, use generic constraints, and build flexible, reusable functions that adapt to different types.",
      sections: [
        {
          title: "Understanding Generics",
          content: "Generics are TypeScript's way of creating reusable code that works with multiple types. They allow you to write functions and types that are flexible yet type-safe.\n\nWhat are Generics:\n• Type parameters that make code flexible\n• Written with angle brackets: <T>\n• Type is determined when function is called\n• Maintains type safety\n• Enables code reuse\n\nWhy Use Generics:\n• Write code once, use with many types\n• Maintain type safety\n• Better than using 'any'\n• Enables type inference\n• Common in libraries and frameworks\n\nBasic Syntax:\n• function name<T>(param: T): T\n• T is a type variable\n• Can use any name (T, U, V, Item, Value, etc.)\n• Type is inferred from usage",
          videoUrl: "https://www.youtube.com/watch?v=nViEqpgwxHE", // TypeScript Generics Explained
          codeExample: {
            code: `// Function without generics (not flexible)
function getFirst(arr: number[]): number {
  return arr[0];
}

const num = getFirst([1, 2, 3]); // ✅ Works
const str = getFirst(["a", "b", "c"]); // ❌ Error: expects number[]

// Function with generics (flexible and type-safe)
function getFirst<T>(arr: T[]): T {
  return arr[0];
}

const num = getFirst([1, 2, 3]); // TypeScript infers T as number
const str = getFirst(["a", "b", "c"]); // TypeScript infers T as string
const user = getFirst([{ id: 1, name: "Alice" }]); // TypeScript infers T as { id: number; name: string }

// Explicit type parameter (optional, usually inferred)
const num = getFirst<number>([1, 2, 3]);
const str = getFirst<string>(["a", "b", "c"]);

// Multiple type parameters
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

const p1 = pair("hello", 42); // [string, number]
const p2 = pair(1, true); // [number, boolean]

// Generic function for React state
function useState<T>(initial: T): [T, (value: T) => void] {
  // Implementation
  return [initial, () => {}];
}

const [count, setCount] = useState(0); // T inferred as number
const [name, setName] = useState(""); // T inferred as string
const [user, setUser] = useState<User | null>(null); // T is User | null`,
            explanation: "Generics use type parameters (like <T>) to make functions work with multiple types. TypeScript infers the type from usage, maintaining type safety while providing flexibility."
          }
        },
        {
          title: "How createContext Works with Generics",
          content: "React's createContext is a perfect example of a generic function. It creates a context that can hold any type, and TypeScript infers the type from the initial value you provide.\n\ncreateContext Pattern:\n• Generic function: createContext<T>\n• Takes initial value of type T\n• Returns Context with type T\n• Type is inferred from initial value\n• Can be explicitly typed\n\nUnderstanding the Pattern:\n• Function accepts type parameter\n• Type can be inferred or explicit\n• Return type uses the type parameter\n• Maintains type safety throughout\n\nWhy This Pattern is Powerful:\n• One function works with any type\n• Type safety is maintained\n• TypeScript knows the exact type\n• Autocomplete works perfectly",
          videoUrl: "https://www.youtube.com/watch?v=nViEqpgwxHE", // TypeScript Generics with React Context
          codeExample: {
            code: `// How createContext is defined (simplified)
function createContext<T>(defaultValue: T): Context<T> {
  // Implementation
  return context;
}

// Usage with type inference
const ThemeContext = createContext('light');
// TypeScript infers: Context<string>

const CountContext = createContext(0);
// TypeScript infers: Context<number>

const UserContext = createContext(null);
// TypeScript infers: Context<null> (not very useful)

// Usage with explicit type
const ThemeContext = createContext<'light' | 'dark' | undefined>(undefined);
// Type is explicitly: Context<'light' | 'dark' | undefined>

const UserContext = createContext<User | null>(null);
// Type is: Context<User | null>

// Complete example
type Theme = 'light' | 'dark';

const ThemeContext = createContext<Theme | undefined>(undefined);

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context; // Type is Theme
}

// Creating your own createContext-like function
function createTypedContext<T>() {
  const Context = createContext<T | undefined>(undefined);
  
  const useTypedContext = () => {
    const context = useContext(Context);
    if (context === undefined) {
      throw new Error('Context must be used within Provider');
    }
    return context; // Type is T
  };
  
  return [Context, useTypedContext] as const;
}

// Usage
const [UserContext, useUser] = createTypedContext<User>();

function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  
  return (
    <UserContext.Provider value={user || undefined}>
      {children}
    </UserContext.Provider>
  );
}

function UserDisplay() {
  const user = useUser(); // Type is User
  return <div>{user.name}</div>;
}`,
            explanation: "createContext uses generics to create a context for any type. The type is inferred from the initial value or can be explicitly provided. This pattern enables type-safe context usage throughout your app."
          }
        },
        {
          title: "Creating Your Own Generic Functions",
          content: "You can create your own generic functions following the same patterns. This enables you to build flexible, reusable utilities.\n\nCreating Generic Functions:\n• Add type parameter in angle brackets\n• Use type parameter in function signature\n• Type is inferred from arguments\n• Can have constraints\n• Can have default types\n\nCommon Patterns:\n• Identity function (returns same type)\n• Array utilities\n• Object utilities\n• API functions\n• React hooks\n• Utility functions\n\nBest Practices:\n• Use descriptive type parameter names\n• Let TypeScript infer when possible\n• Use constraints when needed\n• Document complex generics",
          codeExample: {
            code: `// Simple generic function
function identity<T>(value: T): T {
  return value;
}

const num = identity(42); // number
const str = identity("hello"); // string
const user = identity({ id: 1, name: "Alice" }); // { id: number; name: string }

// Generic array function
function getLast<T>(arr: T[]): T | undefined {
  return arr[arr.length - 1];
}

const lastNum = getLast([1, 2, 3]); // number | undefined
const lastStr = getLast(["a", "b"]); // string | undefined

// Generic object function
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { id: 1, name: "Alice", age: 30 };
const name = getProperty(user, "name"); // string
const id = getProperty(user, "id"); // number

// Generic API function
async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return response.json();
}

interface User {
  id: number;
  name: string;
}

const user = await fetchData<User>("/api/user"); // Type is User
const users = await fetchData<User[]>("/api/users"); // Type is User[]

// Generic React hook
function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });
  
  const setValue = (value: T) => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  
  return [storedValue, setValue];
}

// Usage
const [theme, setTheme] = useLocalStorage<'light' | 'dark'>('theme', 'light');
const [count, setCount] = useLocalStorage<number>('count', 0);
const [user, setUser] = useLocalStorage<User | null>('user', null);

// Generic utility function
function createCache<T>() {
  const cache = new Map<string, T>();
  
  return {
    get(key: string): T | undefined {
      return cache.get(key);
    },
    set(key: string, value: T): void {
      cache.set(key, value);
    },
    has(key: string): boolean {
      return cache.has(key);
    }
  };
}

const stringCache = createCache<string>();
stringCache.set('user1', 'Alice');
const user = stringCache.get('user1'); // string | undefined

const numberCache = createCache<number>();
numberCache.set('count', 42);
const count = numberCache.get('count'); // number | undefined`,
            explanation: "Create generic functions by adding type parameters. Use them for arrays, objects, API calls, React hooks, and utilities. TypeScript infers types from usage, maintaining type safety."
          }
        },
        {
          title: "Type Inference in Generic Functions",
          content: "TypeScript's type inference is powerful with generics. Understanding how inference works helps you write better generic functions.\n\nHow Type Inference Works:\n• TypeScript infers type from arguments\n• Inference flows from arguments to return type\n• Can infer from multiple arguments\n• Sometimes needs explicit type\n• Inference works left to right\n\nWhen Inference Works:\n• Simple generic functions\n• Functions with clear argument types\n• When type can be determined from usage\n• Most common cases\n\nWhen You Need Explicit Types:\n• Complex generic functions\n• When inference is ambiguous\n• When you want specific type\n• Union types that need narrowing",
          codeExample: {
            code: `// Type inference from single argument
function getValue<T>(value: T): T {
  return value;
}

const str = getValue("hello"); // T inferred as string
const num = getValue(42); // T inferred as number

// Type inference from multiple arguments
function combine<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

const pair = combine("hello", 42); // [string, number]
const pair2 = combine(1, true); // [number, boolean]

// Inference from array
function getFirst<T>(arr: T[]): T | undefined {
  return arr[0];
}

const first = getFirst([1, 2, 3]); // number | undefined
const firstStr = getFirst(["a", "b"]); // string | undefined

// Inference from object
function getKeys<T extends object>(obj: T): (keyof T)[] {
  return Object.keys(obj) as (keyof T)[];
}

const user = { id: 1, name: "Alice" };
const keys = getKeys(user); // ("id" | "name")[]

// When explicit type is needed
function createContext<T>(defaultValue: T): Context<T> {
  return context;
}

// Inference might not work as expected
const ThemeContext = createContext(null); // Context<null> - not useful

// Explicit type is better
const ThemeContext = createContext<'light' | 'dark' | undefined>(undefined);
// Context<'light' | 'dark' | undefined>

// Inference in React hooks
function useState<T>(initial: T): [T, (value: T) => void] {
  // Implementation
}

const [count, setCount] = useState(0); // T is number
const [name, setName] = useState(""); // T is string

// Explicit type when needed
const [user, setUser] = useState<User | null>(null); // T is User | null

// Inference with constraints
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

const strLen = getLength("hello"); // T inferred as string
const arrLen = getLength([1, 2, 3]); // T inferred as number[]
const objLen = getLength({ length: 5 }); // T inferred as { length: number }`,
            explanation: "TypeScript infers generic types from function arguments. Inference works automatically in most cases, but sometimes you need to provide explicit types for clarity or when inference is ambiguous."
          }
        },
        {
          title: "Generic Constraints",
          content: "Generic constraints limit what types can be used with a generic function. They ensure type parameters have certain properties or extend certain types.\n\nWhat are Constraints:\n• Limit possible types for generic parameter\n• Use extends keyword\n• Ensure type has certain properties\n• Enable access to properties\n• Maintain type safety\n\nCommon Constraint Patterns:\n• extends object - must be object\n• extends keyof T - must be key of T\n• extends { property: type } - must have property\n• extends SomeInterface - must implement interface\n• Multiple constraints with intersection\n\nUse Cases:\n• Access properties safely\n• Ensure type compatibility\n• Create type-safe utilities\n• Build on existing types",
          codeExample: {
            code: `// Constraint: T must have length property
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

getLength("hello"); // ✅ string has length
getLength([1, 2, 3]); // ✅ array has length
getLength({ length: 5 }); // ✅ object has length
getLength(42); // ❌ number doesn't have length

// Constraint: K must be key of T
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { id: 1, name: "Alice", age: 30 };
getProperty(user, "name"); // ✅ "name" is key of user
getProperty(user, "email"); // ❌ "email" is not a key

// Constraint: T must extend User interface
interface User {
  id: number;
  name: string;
}

function getUserName<T extends User>(user: T): string {
  return user.name; // Safe because T extends User
}

const admin = { id: 1, name: "Alice", role: "admin" };
getUserName(admin); // ✅ admin has id and name

// Multiple constraints
function process<T extends User & { active: boolean }>(user: T): string {
  if (user.active) {
    return \`\${user.name} is active\`;
  }
  return \`\${user.name} is inactive\`;
}

// Constraint with default type
function createArray<T = string>(length: number, value: T): T[] {
  return Array(length).fill(value);
}

const strings = createArray(5, "hello"); // string[]
const numbers = createArray(5, 0); // number[]
const explicit = createArray<number>(5, 0); // number[]

// Constraint for React component props
interface BaseProps {
  className?: string;
}

function createComponent<T extends BaseProps>(
  Component: React.ComponentType<T>
) {
  return (props: T) => {
    return <Component {...props} className={\`base \${props.className || ""}\`} />;
  };
}

// Constraint ensuring type has certain methods
interface Serializable {
  toJSON(): string;
}

function serialize<T extends Serializable>(item: T): string {
  return item.toJSON();
}

class User implements Serializable {
  constructor(public name: string) {}
  toJSON() {
    return JSON.stringify({ name: this.name });
  }
}

serialize(new User("Alice")); // ✅ User implements Serializable`,
            explanation: "Generic constraints use extends to limit possible types. They ensure type parameters have required properties, enabling safe property access and maintaining type safety."
          }
        },
        {
          title: "Advanced Generic Patterns",
          content: "Advanced generic patterns enable powerful type-safe abstractions. These patterns are used in libraries and complex applications.\n\nAdvanced Patterns:\n• Generic classes\n• Generic interfaces\n• Conditional generics\n• Mapped types with generics\n• Recursive generics\n• Generic utility types\n\nCommon Advanced Patterns:\n• Factory functions\n• Builder patterns\n• Repository patterns\n• API client patterns\n• State management patterns\n\nBest Practices:\n• Keep generics simple when possible\n• Use constraints appropriately\n• Document complex generics\n• Test with multiple types\n• Consider readability",
          codeExample: {
            code: `// Generic class
class Box<T> {
  private value: T;
  
  constructor(value: T) {
    this.value = value;
  }
  
  getValue(): T {
    return this.value;
  }
  
  setValue(value: T): void {
    this.value = value;
  }
}

const stringBox = new Box("hello");
const numberBox = new Box(42);

// Generic interface
interface Repository<T> {
  findById(id: string): Promise<T | null>;
  findAll(): Promise<T[]>;
  save(entity: T): Promise<T>;
  delete(id: string): Promise<void>;
}

class UserRepository implements Repository<User> {
  async findById(id: string): Promise<User | null> {
    // Implementation
    return null;
  }
  
  async findAll(): Promise<User[]> {
    return [];
  }
  
  async save(user: User): Promise<User> {
    return user;
  }
  
  async delete(id: string): Promise<void> {
    // Implementation
  }
}

// Factory function pattern
function createApiClient<T>(baseUrl: string) {
  return {
    async get(endpoint: string): Promise<T> {
      const response = await fetch(\`\${baseUrl}\${endpoint}\`);
      return response.json();
    },
    
    async post(endpoint: string, data: unknown): Promise<T> {
      const response = await fetch(\`\${baseUrl}\${endpoint}\`, {
        method: 'POST',
        body: JSON.stringify(data)
      });
      return response.json();
    }
  };
}

const userApi = createApiClient<User>('/api');
const user = await userApi.get('/user/1'); // Type is User

// Generic React hook factory
function createUseState<T>(initialValue: T) {
  return function useTypedState() {
    return useState<T>(initialValue);
  };
}

const useCount = createUseState(0);
const [count, setCount] = useCount(); // count is number

// Generic with conditional types
type NonNullable<T> = T extends null | undefined ? never : T;

function requireValue<T>(value: T): NonNullable<T> {
  if (value === null || value === undefined) {
    throw new Error('Value cannot be null or undefined');
  }
  return value as NonNullable<T>;
}

// Generic utility type
type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

interface User {
  id: string;
  name: string;
  email: string;
}

type UserUpdate = Optional<User, 'id'>;
// Result: { name?: string; email?: string; } (id is omitted)

// Recursive generic
type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

type Nested = {
  user: {
    profile: {
      name: string;
    };
  };
};

type ReadonlyNested = DeepReadonly<Nested>;
// All nested properties are readonly

// Generic React context pattern (like createContext)
function createTypedContext<T>() {
  const Context = createContext<T | undefined>(undefined);
  
  const Provider = ({ value, children }: { 
    value: T; 
    children: React.ReactNode 
  }) => {
    return <Context.Provider value={value}>{children}</Context.Provider>;
  };
  
  const useTypedContext = () => {
    const context = useContext(Context);
    if (context === undefined) {
      throw new Error('Context must be used within Provider');
    }
    return context;
  };
  
  return { Context, Provider, useTypedContext };
}

// Usage
const { Provider: ThemeProvider, useTypedContext: useTheme } = 
  createTypedContext<'light' | 'dark'>();

function App() {
  return (
    <ThemeProvider value="light">
      <Component />
    </ThemeProvider>
  );
}

function Component() {
  const theme = useTheme(); // Type is 'light' | 'dark'
  return <div className={theme}>Content</div>;
}`,
            explanation: "Advanced generic patterns include generic classes, interfaces, factory functions, and utility types. These patterns enable powerful, type-safe abstractions used in libraries and complex applications."
          }
        },
        {
          title: "Real-World Examples: Building Generic Utilities",
          content: "Let's build real-world generic utilities that you can use in your React applications. These examples demonstrate practical uses of generics.\n\nPractical Examples:\n• Generic API hooks\n• Generic form handlers\n• Generic state management\n• Generic data transformers\n• Generic validation functions\n\nBuilding Blocks:\n• Start with simple generics\n• Add constraints as needed\n• Use type inference when possible\n• Provide explicit types for clarity\n• Test with multiple types",
          codeExample: {
            code: `// Generic API hook
function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then((data: T) => {
        setData(data);
        setLoading(false);
      })
      .catch((err: Error) => {
        setError(err);
        setLoading(false);
      });
  }, [url]);
  
  return { data, loading, error };
}

// Usage
interface User {
  id: number;
  name: string;
}

const { data: user } = useFetch<User>('/api/user'); // data is User | null

// Generic form handler
function useForm<T extends Record<string, unknown>>(initialValues: T) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  
  const setValue = <K extends keyof T>(key: K, value: T[K]) => {
    setValues(prev => ({ ...prev, [key]: value }));
  };
  
  const setError = <K extends keyof T>(key: K, error: string) => {
    setErrors(prev => ({ ...prev, [key]: error }));
  };
  
  const reset = () => {
    setValues(initialValues);
    setErrors({});
  };
  
  return { values, errors, setValue, setError, reset };
}

// Usage
const { values, setValue } = useForm({
  name: '',
  email: '',
  age: 0
});

setValue('name', 'Alice'); // ✅ Type-safe
setValue('invalid', 'value'); // ❌ Error

// Generic data transformer
function transformArray<T, U>(
  arr: T[],
  transformer: (item: T) => U
): U[] {
  return arr.map(transformer);
}

const numbers = [1, 2, 3];
const strings = transformArray(numbers, n => String(n)); // string[]

// Generic validation
function createValidator<T>(
  rules: Record<keyof T, (value: T[keyof T]) => boolean>
) {
  return (data: T): Partial<Record<keyof T, string>> => {
    const errors: Partial<Record<keyof T, string>> = {};
    
    for (const key in rules) {
      if (!rules[key](data[key])) {
        errors[key] = \`\${String(key)} is invalid\`;
      }
    }
    
    return errors;
  };
}

// Usage
const validateUser = createValidator<User>({
  id: (value) => typeof value === 'number' && value > 0,
  name: (value) => typeof value === 'string' && value.length > 0
});

const errors = validateUser({ id: 1, name: 'Alice' }); // {}

// Generic context creator (like createContext)
function createContext<T>(defaultValue: T) {
  const Context = React.createContext<T>(defaultValue);
  
  const Provider = ({ 
    value, 
    children 
  }: { 
    value: T; 
    children: React.ReactNode 
  }) => {
    return <Context.Provider value={value}>{children}</Context.Provider>;
  };
  
  const useContext = () => {
    return React.useContext(Context);
  };
  
  return { Context, Provider, useContext };
}

// Usage
const { Provider: ThemeProvider, useContext: useTheme } = 
  createContext<'light' | 'dark'>('light');

function App() {
  return (
    <ThemeProvider value="dark">
      <Component />
    </ThemeProvider>
  );
}

function Component() {
  const theme = useTheme(); // Type is 'light' | 'dark'
  return <div className={theme}>Content</div>;
}

// Generic cache
function createCache<T>() {
  const cache = new Map<string, T>();
  
  return {
    get(key: string): T | undefined {
      return cache.get(key);
    },
    set(key: string, value: T): void {
      cache.set(key, value);
    },
    clear(): void {
      cache.clear();
    }
  };
}

const userCache = createCache<User>();
userCache.set('user1', { id: 1, name: 'Alice' });
const user = userCache.get('user1'); // User | undefined`,
            explanation: "Real-world generic utilities include API hooks, form handlers, data transformers, validators, and context creators. These demonstrate practical uses of generics in React applications, providing type safety and code reuse."
          }
        }
      ],
      conclusion: "Generics enable you to create functions with dynamic typing that maintain type safety. Functions like createContext use generics to work with any type while TypeScript infers and enforces the correct types. Use generics for reusable functions, add constraints when needed, and leverage type inference. Remember: generics make your code flexible and type-safe - write once, use with many types. Start simple, add constraints as needed, and let TypeScript's inference do the work when possible."
    }
  }
];

