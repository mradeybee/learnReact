import { Tutorial } from "@/lib/types/tutorial";

export const tutorials: Tutorial[] = [
  // BEGINNER LEVEL
  {
    id: "beginner-1",
    title: "Introduction to React: Your First Component",
    description: "Learn the fundamentals of React - what it is, why it exists, and how to create your very first component.",
    level: "beginner",
    estimatedTime: "45 min",
    topics: ["What is React", "JSX Basics", "Components", "Rendering"],
    prerequisites: ["Basic JavaScript knowledge", "HTML & CSS basics"],
    content: {
      overview: "React is a JavaScript library for building user interfaces. It lets you create reusable UI components and efficiently update them when your data changes. Created by Facebook (now Meta), React has become one of the most popular frontend frameworks, powering applications like Facebook, Instagram, Netflix, and many others. React's core philosophy is based on declarative programming - you describe what the UI should look like for any given state, and React takes care of efficiently updating the DOM when that state changes.",
      sections: [
        {
          title: "What is React and Why Use It?",
          content: "React is a declarative, efficient, and flexible JavaScript library for building user interfaces. Instead of manually manipulating the DOM (like with vanilla JavaScript or jQuery), you describe what the UI should look like, and React efficiently updates it when your data changes.\n\nKey Advantages:\n• Component-Based Architecture: Break your UI into reusable, independent pieces\n• Declarative Syntax: Write what you want, not how to do it\n• Virtual DOM: React creates a virtual representation of the DOM for efficient updates\n• One-Way Data Flow: Data flows down from parent to child, making debugging easier\n• Rich Ecosystem: Massive community and library ecosystem\n• Learn Once, Write Anywhere: Works on web, mobile (React Native), and desktop (Electron)"
        },
        {
          title: "Setting Up a React Project",
          content: "To start building with React, you need a development environment. The easiest way is using Create React App or a modern framework like Next.js (which this tutorial is built with).\n\nCommon Setup Options:\n• Create React App: `npx create-react-app my-app`\n• Vite: `npm create vite@latest my-app -- --template react`\n• Next.js: `npx create-next-app@latest`\n\nOnce set up, you'll have a project structure with components, a package.json file, and a development server that hot-reloads your changes."
        },
        {
          title: "Creating Your First Component",
          content: "Components are the building blocks of React applications. They let you split the UI into independent, reusable pieces. Think of components like JavaScript functions - they accept inputs (called props) and return React elements describing what should appear on screen.\n\nThere are two ways to write components:\n1. Function Components (modern, recommended)\n2. Class Components (older, still supported but rarely used)\n\nFunction components are simpler and more modern. They're just JavaScript functions that return JSX.",
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
    content: {
      overview: "Side effects are operations that affect something outside the component's render, like API calls, setting up subscriptions, or manually changing the DOM. React components are 'pure functions' - given the same props and state, they should always return the same JSX. But applications need to do things like fetch data, set up subscriptions, or update the DOM - these are 'side effects'. The useEffect hook is React's way of handling side effects in function components. Understanding useEffect is crucial for building real-world applications that interact with APIs, manage subscriptions, and handle cleanup.",
      sections: [
        {
          title: "Understanding Side Effects in React",
          content: "In React, side effects are operations that interact with the outside world - anything that doesn't directly relate to rendering JSX. React components should be 'pure functions' that return JSX based on props and state, but real applications need to do more.\n\nCommon Side Effects:\n• Fetching data from an API\n• Setting up subscriptions (websockets, event listeners)\n• Manually changing the DOM (updating document title, focusing inputs)\n• Starting/stopping timers\n• Logging analytics\n• Reading from/writing to localStorage\n\nWhy useEffect?\n• Separates side effects from rendering logic\n• Runs after render, not during (won't block rendering)\n• Provides cleanup mechanism\n• Can control when effects run using dependencies"
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
    estimatedTime: "160 min",
    topics: ["Design Systems", "Component APIs", "Documentation", "Accessibility"],
    prerequisites: ["Performance Optimization at Enterprise Scale"],
    content: {
      overview: "Design systems ensure consistency across products. Staff engineers lead the creation of design systems that serve entire organizations.",
      sections: [
        {
          title: "Design System Architecture",
          content: "A design system includes components, tokens, patterns, and documentation. It serves both designers and developers."
        }
      ],
      conclusion: "Design systems are long-term investments. Plan for extensibility and maintainability from the start."
    }
  }
];

