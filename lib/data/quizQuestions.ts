import { QuizQuestion } from "@/lib/types/quiz";

export const quizQuestions: QuizQuestion[] = [
    {
        id: 1,
        question: "What does useState return?",
        options: [
            "Just the state value",
            "An array with [state, setState]",
            "Just the setter function",
            "An object with state and setState properties"
        ],
        correctAnswer: 1,
        explanation: "useState returns an array with two elements: the current state value and a function to update it. We typically destructure it: const [state, setState] = useState(initialValue);",
        category: "Core Hooks",
        difficulty: 1
    },
    {
        id: 2,
        question: "When does useEffect run by default?",
        options: [
            "Before the component renders",
            "After every render",
            "Only on component mount",
            "Only when dependencies change"
        ],
        correctAnswer: 1,
        explanation: "useEffect runs after every render by default. You can control when it runs using the dependency array.",
        category: "Core Hooks",
        difficulty: 1
    },
    {
        id: 3,
        question: "What is the main difference between useLayoutEffect and useEffect?",
        options: [
            "useLayoutEffect is asynchronous, useEffect is synchronous",
            "useLayoutEffect runs before browser paint, useEffect runs after",
            "useLayoutEffect can only be used in class components",
            "There is no difference"
        ],
        correctAnswer: 1,
        explanation: "useLayoutEffect runs synchronously before the browser paints, while useEffect runs asynchronously after the browser paints. This makes useLayoutEffect useful for preventing visual flickering.",
        category: "Performance Hooks",
        difficulty: 3
    },
    {
        id: 4,
        question: "What is the purpose of useCallback?",
        options: [
            "To memoize values",
            "To memoize functions to prevent unnecessary re-renders",
            "To create asynchronous functions",
            "To handle form submissions"
        ],
        correctAnswer: 1,
        explanation: "useCallback memoizes a function and returns the same function reference unless its dependencies change, helping prevent unnecessary re-renders of child components.",
        category: "Performance Hooks",
        difficulty: 2
    },
    {
        id: 5,
        question: "What does useMemo return?",
        options: [
            "A memoized function",
            "A memoized value",
            "An array of values",
            "A promise"
        ],
        correctAnswer: 1,
        explanation: "useMemo returns a memoized value. It only recomputes the value when one of its dependencies changes, helping optimize expensive calculations.",
        category: "Performance Hooks",
        difficulty: 2
    },
    {
        id: 6,
        question: "What is the primary use case for useRef?",
        options: [
            "To trigger re-renders",
            "To access DOM elements and store mutable values that don't cause re-renders",
            "To manage component state",
            "To create side effects"
        ],
        correctAnswer: 1,
        explanation: "useRef is primarily used to access DOM elements directly or store mutable values that persist across renders without causing re-renders when they change.",
        category: "Utility Hooks",
        difficulty: 1
    },
    {
        id: 7,
        question: "What does useContext do?",
        options: [
            "Creates a new context",
            "Subscribes to a context and reads its current value",
            "Updates context values",
            "Provides context to child components"
        ],
        correctAnswer: 1,
        explanation: "useContext subscribes to a React context and returns the current context value for that context. It's used to access context values in functional components.",
        category: "Core Hooks",
        difficulty: 2
    },
    {
        id: 8,
        question: "When would you use useReducer instead of useState?",
        options: [
            "Never, useState is always better",
            "When you need complex state logic with multiple sub-values",
            "Only in class components",
            "When you need to fetch data"
        ],
        correctAnswer: 1,
        explanation: "useReducer is better than useState when you have complex state logic involving multiple sub-values or when the next state depends on the previous one. It's also useful for managing state that has complex update logic.",
        category: "Core Hooks",
        difficulty: 3
    },
    {
        id: 9,
        question: "What is the purpose of useId in React 19?",
        options: [
            "To generate random IDs",
            "To generate unique IDs stable across server/client renders",
            "To create database IDs",
            "To track component mounts"
        ],
        correctAnswer: 1,
        explanation: "useId generates unique IDs that are stable across server and client renders. It's particularly useful for accessibility attributes like htmlFor/id pairs in forms.",
        category: "Utility Hooks",
        difficulty: 2
    },
    {
        id: 10,
        question: "What does the dependency array in useEffect control?",
        options: [
            "Nothing, it's optional",
            "When the effect runs - it runs when any dependency changes",
            "Which values the effect can access",
            "How many times the effect runs"
        ],
        correctAnswer: 1,
        explanation: "The dependency array controls when the effect runs. If you provide an empty array [], it runs only once after mount. If you include dependencies, it runs whenever those dependencies change.",
        category: "Core Hooks",
        difficulty: 2
    },
    {
        id: 11,
        question: "What is useOptimistic used for in React 19?",
        options: [
            "Optimizing bundle size",
            "Implementing optimistic UI updates for instant feedback",
            "Improving performance",
            "Caching data"
        ],
        correctAnswer: 1,
        explanation: "useOptimistic allows you to optimistically update the UI before a server action completes, giving users instant feedback while the actual update is processed.",
        category: "React 19 Hooks",
        difficulty: 4
    },
    {
        id: 12,
        question: "What does useActionState (formerly useFormState) do?",
        options: [
            "Manages component state",
            "Manages form state with server actions",
            "Handles form validation",
            "Creates form components"
        ],
        correctAnswer: 1,
        explanation: "useActionState manages form state and actions, particularly useful with server actions in Next.js. It returns the current state, a form action, and a pending state.",
        category: "React 19 Hooks",
        difficulty: 4
    },
    {
        id: 13,
        question: "Can you call hooks conditionally?",
        options: [
            "Yes, always",
            "No, hooks must be called at the top level",
            "Only in certain components",
            "Only with useCallback"
        ],
        correctAnswer: 1,
        explanation: "Hooks must be called at the top level of your component. You cannot call them conditionally, inside loops, or nested functions. This ensures hooks are called in the same order every render.",
        category: "Rules of Hooks",
        difficulty: 1
    },
    {
        id: 14,
        question: "What happens if you don't provide a dependency array to useEffect?",
        options: [
            "The effect runs only once",
            "The effect runs after every render",
            "The effect never runs",
            "You get an error"
        ],
        correctAnswer: 1,
        explanation: "If you don't provide a dependency array, useEffect runs after every render. This is usually not what you want and can cause infinite loops if you update state inside the effect.",
        category: "Core Hooks",
        difficulty: 2
    },
    {
        id: 15,
        question: "What is the use hook in React 19 used for?",
        options: [
            "To use any hook dynamically",
            "To read promises and context values, unwrapping promises directly in render",
            "To combine multiple hooks",
            "To create custom hooks"
        ],
        correctAnswer: 1,
        explanation: "The use hook can read promises and context values. When reading a promise, it unwraps it and suspends until the promise resolves, working seamlessly with Suspense boundaries.",
        category: "React 19 Hooks",
        difficulty: 4
    },
    {
        id: 16,
        question: "What is useTransition used for?",
        options: [
            "Page transitions",
            "Marking state updates as non-urgent transitions",
            "CSS transitions",
            "Animations"
        ],
        correctAnswer: 1,
        explanation: "useTransition lets you mark state updates as non-urgent transitions. This helps keep the UI responsive during expensive operations by allowing React to prioritize more urgent updates.",
        category: "React 19 Hooks",
        difficulty: 4
    },
    {
        id: 17,
        question: "Can you use multiple useState hooks in a single component?",
        options: [
            "No, only one useState per component",
            "Yes, you can use as many as needed",
            "Only two useState hooks allowed",
            "Only if they have different types"
        ],
        correctAnswer: 1,
        explanation: "Yes, you can use multiple useState hooks in a single component. Each useState call creates independent state. This is a common pattern when managing different pieces of state.",
        category: "Core Hooks",
        difficulty: 1
    },
    {
        id: 18,
        question: "What is the cleanup function in useEffect used for?",
        options: [
            "Cleaning up state",
            "Removing event listeners, canceling subscriptions, or undoing side effects",
            "Resetting the component",
            "Clearing the console"
        ],
        correctAnswer: 1,
        explanation: "The cleanup function (returned from useEffect) is used to remove event listeners, cancel subscriptions, clear timers, or undo any side effects to prevent memory leaks.",
        category: "Core Hooks",
        difficulty: 2
    },
    {
        id: 19,
        question: "What does useFormStatus provide access to?",
        options: [
            "Form values",
            "Form submission status (pending, data, etc.) from within form children",
            "Form validation errors",
            "Form fields"
        ],
        correctAnswer: 1,
        explanation: "useFormStatus provides access to the status of the nearest parent form's submission. This is useful for showing loading states in buttons or other form elements.",
        category: "React 19 Hooks",
        difficulty: 4
    },
    {
        id: 20,
        question: "What happens when you update state in useEffect without a dependency array?",
        options: [
            "Nothing",
            "It causes an infinite loop",
            "The state updates only once",
            "You get a warning but it works fine"
        ],
        correctAnswer: 1,
        explanation: "Updating state in useEffect without proper dependencies can cause an infinite loop. The state update triggers a re-render, which runs the effect again, which updates state, creating an endless cycle.",
        category: "Core Hooks",
        difficulty: 2
    },
    {
        id: 21,
        question: "What happens if you pass a function to useState as the initial value?",
        options: [
            "It executes immediately on every render",
            "It's treated as a lazy initializer and only runs once",
            "It causes an error",
            "It creates a function state"
        ],
        correctAnswer: 1,
        explanation: "Passing a function to useState treats it as a lazy initializer. React only calls this function during the initial render, not on every render. This is useful for expensive initial state calculations.",
        category: "Core Hooks",
        difficulty: 2
    },
    {
        id: 22,
        question: "How do you access the previous value in useState?",
        options: [
            "useState automatically provides it",
            "Using a ref with useEffect",
            "Using a function updater form: setState(prev => ...)",
            "You can't access the previous value"
        ],
        correctAnswer: 2,
        explanation: "You can access the previous state value using the function updater form: setState(prevState => newState). This is the recommended way when the new state depends on the previous state.",
        category: "Core Hooks",
        difficulty: 2
    },
    {
        id: 23,
        question: "What is the correct way to update multiple state values in useState?",
        options: [
            "Use multiple useState calls and update them separately",
            "Use a single useState with an object",
            "Both approaches are valid depending on the use case",
            "You can only update one state at a time"
        ],
        correctAnswer: 2,
        explanation: "Both approaches are valid. Multiple useState calls work well when states are independent. A single useState with an object is better when states are related and often updated together.",
        category: "Core Hooks",
        difficulty: 2
    },
    {
        id: 24,
        question: "When does the cleanup function in useEffect run?",
        options: [
            "Before the effect runs",
            "After the component unmounts or before the effect runs again",
            "Only when the component unmounts",
            "Never"
        ],
        correctAnswer: 1,
        explanation: "The cleanup function runs before the component unmounts AND before the effect runs again (if dependencies changed). This ensures proper cleanup of previous side effects.",
        category: "Core Hooks",
        difficulty: 2
    },
    {
        id: 25,
        question: "What is the purpose of the second argument (dependency array) in useMemo?",
        options: [
            "To control when the memoized value is recalculated",
            "To pass parameters to the memoized function",
            "To specify the return type",
            "It's not needed"
        ],
        correctAnswer: 0,
        explanation: "The dependency array in useMemo controls when the memoized value is recalculated. The memoized value only updates when one of the dependencies changes.",
        category: "Performance Hooks",
        difficulty: 3
    },
    {
        id: 26,
        question: "What's the difference between useCallback and useMemo?",
        options: [
            "useCallback memoizes functions, useMemo memoizes values",
            "useMemo memoizes functions, useCallback memoizes values",
            "There's no difference",
            "useCallback is deprecated"
        ],
        correctAnswer: 0,
        explanation: "useCallback memoizes functions and returns the same function reference, while useMemo memoizes the result of a function call and returns the memoized value.",
        category: "Performance Hooks",
        difficulty: 3
    },
    {
        id: 27,
        question: "Can you use hooks inside regular JavaScript functions?",
        options: [
            "Yes, anywhere",
            "No, only inside React components or custom hooks",
            "Only in class components",
            "Only in functional components, not custom hooks"
        ],
        correctAnswer: 1,
        explanation: "Hooks can only be called from React function components or custom hooks. They cannot be called from regular JavaScript functions, loops, conditions, or nested functions.",
        category: "Rules of Hooks",
        difficulty: 1
    },
    {
        id: 28,
        question: "What does useReducer's dispatch function return?",
        options: [
            "The new state",
            "Nothing (undefined)",
            "A promise",
            "The action object"
        ],
        correctAnswer: 1,
        explanation: "The dispatch function from useReducer doesn't return anything. It's used to dispatch actions that trigger state updates through the reducer function.",
        category: "Core Hooks",
        difficulty: 2
    },
    {
        id: 29,
        question: "How do you share state between components using hooks?",
        options: [
            "Using useState in both components",
            "Using useContext, lifting state up, or custom hooks",
            "Using useRef",
            "You can't share state with hooks"
        ],
        correctAnswer: 1,
        explanation: "You can share state by lifting state up to a common parent, using useContext for global state, or creating custom hooks that manage shared logic.",
        category: "Core Hooks",
        difficulty: 2
    },
    {
        id: 30,
        question: "What is a custom hook?",
        options: [
            "A special React hook that's built-in",
            "A JavaScript function that starts with 'use' and can call other hooks",
            "A hook that's customized for your app",
            "A hook from a third-party library"
        ],
        correctAnswer: 1,
        explanation: "A custom hook is a JavaScript function whose name starts with 'use' and can call other hooks. It allows you to extract component logic into reusable functions.",
        category: "Custom Hooks",
        difficulty: 3
    },
    {
        id: 31,
        question: "What happens if you update a ref's current value?",
        options: [
            "It triggers a re-render",
            "It doesn't trigger a re-render",
            "It causes an error",
            "It only works in useEffect"
        ],
        correctAnswer: 1,
        explanation: "Updating ref.current doesn't trigger a re-render. Refs are mutable objects that persist across renders but don't cause re-renders when changed.",
        category: "Utility Hooks",
        difficulty: 2
    },
    {
        id: 32,
        question: "Can you pass refs as props?",
        options: [
            "No, refs can't be props",
            "Yes, using forwardRef",
            "Yes, directly",
            "Only in class components"
        ],
        correctAnswer: 1,
        explanation: "To pass refs as props, you need to use forwardRef to forward the ref from a parent component to a child component's DOM element.",
        category: "Utility Hooks",
        difficulty: 2
    },
    {
        id: 33,
        question: "What does useImperativeHandle do?",
        options: [
            "Creates imperative handles",
            "Customizes the instance value that is exposed when using refs",
            "Handles imperative commands",
            "Manages imperative state"
        ],
        correctAnswer: 1,
        explanation: "useImperativeHandle customizes the instance value that is exposed when using refs. It's used with forwardRef to expose specific methods or properties.",
        category: "Utility Hooks",
        difficulty: 2
    },
    {
        id: 34,
        question: "When should you use useLayoutEffect instead of useEffect?",
        options: [
            "Always use useLayoutEffect",
            "When you need to measure DOM or prevent visual flickering",
            "Never use useLayoutEffect",
            "Only for animations"
        ],
        correctAnswer: 1,
        explanation: "Use useLayoutEffect when you need to read layout from the DOM and synchronously re-render, or when you need to prevent visual flickering. Prefer useEffect for most cases.",
        category: "Performance Hooks",
        difficulty: 3
    },
    {
        id: 35,
        question: "What does useMemo optimize?",
        options: [
            "Component rendering",
            "Expensive calculations",
            "Network requests",
            "State updates"
        ],
        correctAnswer: 1,
        explanation: "useMemo optimizes expensive calculations by memoizing their results. It only recalculates when dependencies change, avoiding unnecessary computations on every render.",
        category: "Performance Hooks",
        difficulty: 3
    },
    {
        id: 36,
        question: "Can you use hooks in event handlers?",
        options: [
            "Yes, directly in the handler",
            "No, hooks can't be used in event handlers",
            "Only useState",
            "Only useCallback"
        ],
        correctAnswer: 1,
        explanation: "Hooks cannot be called inside event handlers, loops, conditions, or nested functions. They must be called at the top level of React components or custom hooks.",
        category: "Rules of Hooks",
        difficulty: 1
    },
    {
        id: 37,
        question: "What is the purpose of useDebugValue?",
        options: [
            "To debug component values",
            "To display a label for custom hooks in React DevTools",
            "To log values to console",
            "To enable debug mode"
        ],
        correctAnswer: 1,
        explanation: "useDebugValue can be used to display a label for custom hooks in React DevTools. It only works inside custom hooks and helps with debugging.",
        category: "Utility Hooks",
        difficulty: 2
    },
    {
        id: 38,
        question: "How does React batch state updates?",
        options: [
            "All updates are batched automatically",
            "Only synchronous updates are batched",
            "React 18+ batches all updates, including async ones",
            "Updates are never batched"
        ],
        correctAnswer: 2,
        explanation: "In React 18+, all state updates are automatically batched, including those inside promises, setTimeout, and native event handlers. This improves performance.",
        category: "Core Hooks",
        difficulty: 2
    },
    {
        id: 39,
        question: "What is the difference between useMemo and useCallback?",
        options: [
            "useMemo returns a memoized value, useCallback returns a memoized function",
            "useCallback returns a memoized value, useMemo returns a memoized function",
            "They're identical",
            "useMemo is deprecated"
        ],
        correctAnswer: 0,
        explanation: "useMemo(() => fn, deps) is equivalent to useCallback(fn, deps). useMemo memoizes the result of calling a function, while useCallback memoizes the function itself.",
        category: "Performance Hooks",
        difficulty: 3
    },
    {
        id: 40,
        question: "Can you conditionally call useState?",
        options: [
            "Yes, if you want",
            "No, hooks must be called unconditionally",
            "Only with if statements",
            "Only on the first render"
        ],
        correctAnswer: 1,
        explanation: "Hooks must be called in the same order on every render. You cannot conditionally call hooks - this violates the Rules of Hooks and can cause bugs.",
        category: "Rules of Hooks",
        difficulty: 1
    },
    {
        id: 41,
        question: "What happens if you call useState multiple times with the same initial value?",
        options: [
            "They share the same state",
            "Each call creates independent state",
            "It causes an error",
            "Only the first one works"
        ],
        correctAnswer: 1,
        explanation: "Each useState call creates independent state. Even if you pass the same initial value, each hook maintains its own separate state.",
        category: "Core Hooks",
        difficulty: 2
    },
    {
        id: 42,
        question: "What is the purpose of useSyncExternalStore?",
        options: [
            "To sync external state with React",
            "To create external stores",
            "To sync with databases",
            "It's not a real hook"
        ],
        correctAnswer: 0,
        explanation: "useSyncExternalStore lets you subscribe to external data sources. It's used to integrate React with external state management libraries that need to work with concurrent features.",
        category: "Advanced Hooks",
        difficulty: 5
    },
    {
        id: 43,
        question: "How do you prevent unnecessary re-renders with useContext?",
        options: [
            "Split contexts into multiple smaller contexts",
            "Use React.memo with the consuming components",
            "Both splitting contexts and memoization",
            "You can't prevent re-renders with useContext"
        ],
        correctAnswer: 2,
        explanation: "To prevent unnecessary re-renders, split contexts into multiple smaller contexts by concern, and use React.memo to memoize components that consume the context.",
        category: "Core Hooks",
        difficulty: 2
    },
    {
        id: 44,
        question: "What does useDeferredValue do?",
        options: [
            "Defers component rendering",
            "Defers a value update, allowing urgent updates to interrupt",
            "Delays state updates",
            "Postpones effects"
        ],
        correctAnswer: 1,
        explanation: "useDeferredValue defers updating a value, allowing urgent updates to interrupt. It's useful for keeping the UI responsive during expensive re-renders.",
        category: "React 19 Hooks",
        difficulty: 4
    },
    {
        id: 45,
        question: "Can you use hooks inside useCallback or useMemo?",
        options: [
            "Yes, hooks can be used anywhere",
            "No, hooks can only be called at the top level",
            "Only certain hooks",
            "Only in the callback function"
        ],
        correctAnswer: 1,
        explanation: "Hooks must be called at the top level of components or custom hooks, not inside callbacks, loops, or conditions. This includes useCallback and useMemo callbacks.",
        category: "Rules of Hooks",
        difficulty: 1
    },
    {
        id: 46,
        question: "What is the main advantage of useReducer over useState?",
        options: [
            "Better performance",
            "Better for complex state logic with multiple sub-values",
            "Simpler syntax",
            "No advantages"
        ],
        correctAnswer: 1,
        explanation: "useReducer is better for complex state logic involving multiple sub-values or when the next state depends on the previous one. It centralizes state update logic in a reducer function.",
        category: "Core Hooks",
        difficulty: 2
    },
    {
        id: 47,
        question: "How do you handle async operations in useEffect?",
        options: [
            "You can't use async operations in useEffect",
            "Define an async function inside useEffect and call it",
            "Make useEffect itself async",
            "Use async/await directly in useEffect"
        ],
        correctAnswer: 1,
        explanation: "You can't make useEffect itself async. Instead, define an async function inside the effect and call it. You can also use .then() for promise handling.",
        category: "Core Hooks",
        difficulty: 2
    },
    {
        id: 48,
        question: "What is the correct pattern for fetching data with useEffect?",
        options: [
            "Fetch directly in useEffect without cleanup",
            "Fetch in useEffect with cleanup to cancel requests",
            "Fetch in useState",
            "Fetch in useMemo"
        ],
        correctAnswer: 1,
        explanation: "When fetching data in useEffect, include cleanup logic to cancel in-flight requests when the component unmounts or dependencies change, preventing race conditions.",
        category: "Core Hooks",
        difficulty: 2
    },
    {
        id: 49,
        question: "What does useTransition's isPending indicate?",
        options: [
            "Whether a transition is complete",
            "Whether a transition is pending (still updating)",
            "If transitions are enabled",
            "The transition duration"
        ],
        correctAnswer: 1,
        explanation: "isPending from useTransition indicates whether there's a pending transition. It's true while the transition is updating, useful for showing loading states.",
        category: "React 19 Hooks",
        difficulty: 4
    },
    {
        id: 50,
        question: "Can you use multiple useReducer hooks in one component?",
        options: [
            "No, only one reducer per component",
            "Yes, you can use multiple reducers",
            "Only two reducers allowed",
            "Only if they manage different types"
        ],
        correctAnswer: 1,
        explanation: "Yes, you can use multiple useReducer hooks in a single component, each managing different pieces of state. This is useful when you have distinct state concerns.",
        category: "Core Hooks",
        difficulty: 2
    },
    {
        id: 51,
        question: "What happens if you omit the dependency array in useCallback?",
        options: [
            "The function is never memoized",
            "The function is memoized but changes on every render",
            "It causes an error",
            "The function is memoized forever"
        ],
        correctAnswer: 1,
        explanation: "Omitting the dependency array in useCallback means the function will be recreated on every render, effectively negating the purpose of useCallback.",
        category: "Performance Hooks",
        difficulty: 3
    },
    {
        id: 52,
        question: "How do you access context in class components?",
        options: [
            "Using useContext hook",
            "Using Context.Consumer or static contextType",
            "Context can't be used in class components",
            "Using useClassContext"
        ],
        correctAnswer: 1,
        explanation: "In class components, you can access context using Context.Consumer with render props, or by using static contextType property. Hooks like useContext only work in function components.",
        category: "Core Hooks",
        difficulty: 2
    },
    {
        id: 53,
        question: "What is the purpose of useInsertionEffect?",
        options: [
            "To insert DOM elements",
            "To insert styles before layout effects read computed values",
            "To insert data",
            "To insert components"
        ],
        correctAnswer: 1,
        explanation: "useInsertionEffect is for library authors inserting styles into the DOM before layout effects read computed values. It's rarely needed in application code.",
        category: "Advanced Hooks",
        difficulty: 5
    },
    {
        id: 54,
        question: "How does useOptimistic help with user experience?",
        options: [
            "It optimizes rendering",
            "It provides instant UI feedback before server confirmation",
            "It speeds up server requests",
            "It reduces bundle size"
        ],
        correctAnswer: 1,
        explanation: "useOptimistic allows you to optimistically update the UI before a server action completes, giving users instant feedback and making the app feel more responsive.",
        category: "React 19 Hooks",
        difficulty: 4
    },
    {
        id: 55,
        question: "What is stale closure in the context of hooks?",
        options: [
            "A closure that's always fresh",
            "A closure that captures old values of state/props",
            "A closure that doesn't work",
            "A React bug"
        ],
        correctAnswer: 1,
        explanation: "A stale closure occurs when a function captures old values of state or props. This commonly happens with useEffect if dependencies are missing from the dependency array.",
        category: "Core Hooks",
        difficulty: 2
    },
    {
        id: 56,
        question: "How do you fix stale closures in useEffect?",
        options: [
            "Ignore them",
            "Include all dependencies in the dependency array",
            "Use useRef",
            "Use useCallback"
        ],
        correctAnswer: 1,
        explanation: "To fix stale closures, include all values from component scope that are used inside useEffect in the dependency array. This ensures the effect always has fresh values.",
        category: "Core Hooks",
        difficulty: 2
    },
    {
        id: 57,
        question: "What is the difference between useRef and useState?",
        options: [
            "useRef doesn't trigger re-renders, useState does",
            "They're the same",
            "useState doesn't trigger re-renders, useRef does",
            "useRef only works with DOM elements"
        ],
        correctAnswer: 0,
        explanation: "The main difference is that updating useRef.current doesn't trigger a re-render, while updating state with useState does trigger a re-render.",
        category: "Utility Hooks",
        difficulty: 2
    },
    {
        id: 58,
        question: "When would you use useMemo over useCallback?",
        options: [
            "When memoizing values instead of functions",
            "They're interchangeable",
            "useMemo is deprecated",
            "Always use useCallback"
        ],
        correctAnswer: 0,
        explanation: "Use useMemo when you want to memoize the result of a computation (a value), and useCallback when you want to memoize a function itself.",
        category: "Performance Hooks",
        difficulty: 3
    },
    {
        id: 59,
        question: "Can custom hooks call other custom hooks?",
        options: [
            "No, only built-in hooks",
            "Yes, custom hooks can call other custom hooks",
            "Only one level deep",
            "Only in certain situations"
        ],
        correctAnswer: 1,
        explanation: "Yes, custom hooks can call other custom hooks. This allows you to compose complex logic by combining simpler hooks together.",
        category: "Custom Hooks",
        difficulty: 3
    },
    {
        id: 60,
        question: "What does useActionState return?",
        options: [
            "Just the state",
            "An array: [state, formAction, pending]",
            "Just the action",
            "A promise"
        ],
        correctAnswer: 1,
        explanation: "useActionState returns an array with three elements: the current state, a form action function, and a pending boolean indicating if the action is in progress.",
        category: "React 19 Hooks",
        difficulty: 4
    },
    {
        id: 61,
        question: "How do you test components that use hooks?",
        options: [
            "Hooks can't be tested",
            "Using React Testing Library and renderHook",
            "Only with class components",
            "Using special hook testing libraries"
        ],
        correctAnswer: 1,
        explanation: "You can test components with hooks using React Testing Library. For testing custom hooks in isolation, use renderHook from @testing-library/react-hooks.",
        category: "Testing",
        difficulty: 3
    },
    {
        id: 62,
        question: "What is the order of hook execution?",
        options: [
            "Random",
            "In the order they're called in the component",
            "Alphabetical",
            "By priority"
        ],
        correctAnswer: 1,
        explanation: "Hooks are executed in the order they're called in the component. This is why hooks must always be called in the same order - React relies on call order.",
        category: "Rules of Hooks",
        difficulty: 1
    },
    {
        id: 63,
        question: "Can you return early from a component before calling all hooks?",
        options: [
            "Yes, if the condition is static",
            "No, all hooks must be called before any return",
            "Only with certain hooks",
            "Only in development"
        ],
        correctAnswer: 1,
        explanation: "No, you cannot return early before calling all hooks. All hooks must be called in the same order on every render, including conditional early returns.",
        category: "Rules of Hooks",
        difficulty: 1
    },
    {
        id: 64,
        question: "What happens if you use a hook inside a loop?",
        options: [
            "It works fine",
            "It violates the Rules of Hooks",
            "It only works with for loops",
            "It's deprecated"
        ],
        correctAnswer: 1,
        explanation: "Calling hooks inside loops violates the Rules of Hooks. Hooks must be called at the top level, not inside loops, conditions, or nested functions.",
        category: "Rules of Hooks",
        difficulty: 1
    },
    {
        id: 65,
        question: "How do you share logic between components using hooks?",
        options: [
            "Copy and paste the code",
            "Create custom hooks",
            "Use global variables",
            "You can't share logic"
        ],
        correctAnswer: 1,
        explanation: "Custom hooks are the recommended way to share stateful logic between components. Extract the logic into a custom hook and use it in multiple components.",
        category: "Custom Hooks",
        difficulty: 3
    },
    {
        id: 66,
        question: "What does useFormStatus require to work?",
        options: [
            "Nothing special",
            "To be used inside a <form> element",
            "A form library",
            "Server actions only"
        ],
        correctAnswer: 1,
        explanation: "useFormStatus must be called from a component that's a descendant of a <form> element. It provides the status of that form's submission.",
        category: "React 19 Hooks",
        difficulty: 4
    },
    {
        id: 67,
        question: "Can you use hooks with Server Components in Next.js?",
        options: [
            "Yes, all hooks work",
            "No, Server Components can't use hooks",
            "Only certain hooks",
            "Only in Client Components"
        ],
        correctAnswer: 3,
        explanation: "Hooks can only be used in Client Components (components with 'use client' directive). Server Components are rendered on the server and can't use hooks.",
        category: "Next.js Integration",
        difficulty: 4
    },
    {
        id: 68,
        question: "What is the purpose of useSyncExternalStore?",
        options: [
            "To sync React with external stores",
            "To create stores",
            "To replace useState",
            "To sync with databases"
        ],
        correctAnswer: 0,
        explanation: "useSyncExternalStore is used to subscribe to external data sources (like Redux stores) and ensure they work correctly with React's concurrent rendering features.",
        category: "Advanced Hooks",
        difficulty: 5
    },
    {
        id: 69,
        question: "How do you handle errors in useEffect?",
        options: [
            "Use try-catch directly in useEffect",
            "Use Error Boundaries",
            "Both try-catch and Error Boundaries",
            "Errors can't be handled"
        ],
        correctAnswer: 2,
        explanation: "You can use try-catch for async operations inside useEffect. For synchronous errors that propagate, use Error Boundaries to catch and handle them.",
        category: "Core Hooks",
        difficulty: 2
    },
    {
        id: 70,
        question: "What happens if you call setState after component unmounts?",
        options: [
            "Nothing, it's safe",
            "React warns in development",
            "It causes an error",
            "The state still updates"
        ],
        correctAnswer: 1,
        explanation: "React will warn in development mode if you try to set state after a component has unmounted. You should check if the component is mounted or cancel operations in cleanup.",
        category: "Core Hooks",
        difficulty: 2
    },
    {
        id: 71,
        question: "Can you use hooks in a regular function?",
        options: [
            "Yes, anywhere",
            "No, only in React components or custom hooks",
            "Only in arrow functions",
            "Only in async functions"
        ],
        correctAnswer: 1,
        explanation: "Hooks can only be called from React function components or custom hooks (functions that start with 'use'). They cannot be called from regular JavaScript functions.",
        category: "Rules of Hooks",
        difficulty: 1
    },
    {
        id: 72,
        question: "What is the best practice for useEffect dependencies?",
        options: [
            "Always include all dependencies",
            "Never include dependencies",
            "Only include what you think is needed",
            "Use empty array always"
        ],
        correctAnswer: 0,
        explanation: "Best practice is to include all values from component scope used inside useEffect in the dependency array. ESLint's exhaustive-deps rule helps enforce this.",
        category: "Core Hooks",
        difficulty: 2
    },
    {
        id: 73,
        question: "How do you create a ref that persists across re-renders?",
        options: [
            "Using useState",
            "Using useRef",
            "Using useMemo",
            "Using a global variable"
        ],
        correctAnswer: 1,
        explanation: "useRef creates a ref object that persists across re-renders. The .current property can hold a mutable value that doesn't trigger re-renders when changed.",
        category: "Utility Hooks",
        difficulty: 2
    },
    {
        id: 74,
        question: "What does useDeferredValue optimize?",
        options: [
            "Initial render",
            "Updates that can be deferred to keep UI responsive",
            "Network requests",
            "State updates"
        ],
        correctAnswer: 1,
        explanation: "useDeferredValue defers updates that can be delayed, allowing urgent updates to interrupt. This helps keep the UI responsive during expensive re-renders.",
        category: "React 19 Hooks",
        difficulty: 4
    },
    {
        id: 75,
        question: "Can you use useReducer for all state management?",
        options: [
            "Yes, always use useReducer",
            "No, only for complex state",
            "Only in class components",
            "It's deprecated"
        ],
        correctAnswer: 1,
        explanation: "useReducer is best for complex state logic. For simple state, useState is more appropriate. Choose based on your state complexity and update patterns.",
        category: "Core Hooks",
        difficulty: 2
    },
    {
        id: 76,
        question: "What is the pattern for using useCallback with useEffect?",
        options: [
            "Wrap the effect in useCallback",
            "Memoize functions used in dependencies",
            "They can't be used together",
            "Use useMemo instead"
        ],
        correctAnswer: 1,
        explanation: "When a function is used in useEffect dependencies, you can memoize it with useCallback to prevent the effect from running unnecessarily.",
        category: "Performance Hooks",
        difficulty: 3
    },
    {
        id: 77,
        question: "How do you handle loading states with the use hook?",
        options: [
            "Using try-catch",
            "Using Suspense boundaries",
            "Using useState",
            "All of the above"
        ],
        correctAnswer: 1,
        explanation: "The use hook works with Suspense boundaries. When reading a promise, it suspends until the promise resolves, and Suspense handles the loading state.",
        category: "React 19 Hooks",
        difficulty: 4
    },
    {
        id: 78,
        question: "What happens if you use useMemo with no dependencies?",
        options: [
            "It recalculates every render",
            "It calculates once and never recalculates",
            "It causes an error",
            "It's ignored"
        ],
        correctAnswer: 1,
        explanation: "If you provide an empty dependency array to useMemo, it calculates the value once on mount and never recalculates, similar to useRef but for computed values.",
        category: "Performance Hooks",
        difficulty: 3
    },
    {
        id: 79,
        question: "Can you use multiple contexts with useContext?",
        options: [
            "No, only one context",
            "Yes, by calling useContext multiple times",
            "Only with useMultipleContext",
            "Only in class components"
        ],
        correctAnswer: 1,
        explanation: "Yes, you can use multiple contexts by calling useContext multiple times, once for each context you want to access.",
        category: "Core Hooks",
        difficulty: 2
    },
    {
        id: 80,
        question: "What is the purpose of useInsertionEffect?",
        options: [
            "General insertion of elements",
            "Inserting CSS-in-JS styles before layout reads",
            "Inserting components",
            "Inserting data"
        ],
        correctAnswer: 1,
        explanation: "useInsertionEffect is specifically for library authors to insert CSS-in-JS styles into the DOM before layout effects read computed style values. Rarely needed in apps.",
        category: "Advanced Hooks",
        difficulty: 5
    },
    {
        id: 81,
        question: "How does React ensure hooks are called in the same order?",
        options: [
            "Through static analysis",
            "By storing hooks in a linked list internally",
            "Through TypeScript",
            "It doesn't ensure this"
        ],
        correctAnswer: 1,
        explanation: "React uses a linked list internally to track hooks. Each hook call is stored in order, which is why hooks must be called in the same order every render.",
        category: "Rules of Hooks",
        difficulty: 1
    },
    {
        id: 82,
        question: "What is the recommended way to handle form state with hooks?",
        options: [
            "Multiple useState calls",
            "useReducer",
            "useActionState (React 19) or controlled components",
            "All of the above are valid"
        ],
        correctAnswer: 3,
        explanation: "All approaches are valid. For simple forms, useState works. For complex forms, useReducer. In React 19 with server actions, useActionState is recommended.",
        category: "Core Hooks",
        difficulty: 2
    },
    {
        id: 83,
        question: "Can you use hooks inside useMemo's calculation function?",
        options: [
            "Yes, always",
            "No, hooks can't be called inside callbacks",
            "Only useState",
            "Only useCallback"
        ],
        correctAnswer: 1,
        explanation: "Hooks cannot be called inside callbacks, including useMemo's calculation function. Hooks must be called at the top level of components or custom hooks.",
        category: "Rules of Hooks",
        difficulty: 1
    },
    {
        id: 84,
        question: "What does useOptimistic's addOptimistic function do?",
        options: [
            "Adds optimistic state",
            "Immediately updates UI optimistically",
            "Queues server action",
            "All of the above"
        ],
        correctAnswer: 1,
        explanation: "addOptimistic immediately updates the UI optimistically before the server action completes, allowing users to see instant feedback.",
        category: "React 19 Hooks",
        difficulty: 4
    },
    {
        id: 85,
        question: "How do you prevent infinite loops in useEffect?",
        options: [
            "Don't update state in effects",
            "Properly manage dependency arrays",
            "Use useRef to track mounts",
            "All of the above techniques"
        ],
        correctAnswer: 3,
        explanation: "To prevent infinite loops: properly manage dependency arrays, avoid updating state that triggers the effect, and use refs or cleanup functions when needed.",
        category: "Core Hooks",
        difficulty: 2
    },
    {
        id: 86,
        question: "What is the difference between useEffect and useLayoutEffect timing?",
        options: [
            "useEffect runs before paint, useLayoutEffect after",
            "useLayoutEffect runs before paint, useEffect after",
            "They run at the same time",
            "Timing doesn't matter"
        ],
        correctAnswer: 1,
        explanation: "useLayoutEffect runs synchronously after all DOM mutations but before the browser paints. useEffect runs asynchronously after the browser paints.",
        category: "Performance Hooks",
        difficulty: 3
    },
    {
        id: 87,
        question: "Can you use useContext with default values?",
        options: [
            "No, context always requires a provider",
            "Yes, if no provider is found, the default value is used",
            "Only in development",
            "Only with useDefaultContext"
        ],
        correctAnswer: 1,
        explanation: "When creating a context with createContext(defaultValue), if useContext is called in a component tree without a matching Provider, it returns the default value.",
        category: "Core Hooks",
        difficulty: 2
    },
    {
        id: 88,
        question: "What is the benefit of using useTransition?",
        options: [
            "Faster page loads",
            "Keeps UI responsive during expensive updates",
            "Reduces bundle size",
            "Simplifies state management"
        ],
        correctAnswer: 1,
        explanation: "useTransition allows you to mark state updates as non-urgent transitions, keeping the UI responsive during expensive operations by allowing urgent updates to interrupt.",
        category: "React 19 Hooks",
        difficulty: 4
    },
    {
        id: 89,
        question: "How do you handle subscriptions with useEffect?",
        options: [
            "Subscribe in the effect",
            "Subscribe and return cleanup function to unsubscribe",
            "Subscribe outside the effect",
            "Subscriptions aren't supported"
        ],
        correctAnswer: 1,
        explanation: "In useEffect, set up subscriptions and return a cleanup function that unsubscribes. This ensures subscriptions are cleaned up when the component unmounts or dependencies change.",
        category: "Core Hooks",
        difficulty: 2
    },
    {
        id: 90,
        question: "What happens when you pass undefined to useState?",
        options: [
            "It causes an error",
            "The state is undefined",
            "It uses null as default",
            "It's ignored"
        ],
        correctAnswer: 1,
        explanation: "If you pass undefined to useState, the state value will be undefined. If you want to represent 'no value', consider using null instead.",
        category: "Core Hooks",
        difficulty: 2
    },
    {
        id: 91,
        question: "Can you use hooks with TypeScript?",
        options: [
            "No, hooks are JavaScript only",
            "Yes, with full type safety",
            "Only with special annotations",
            "Only in .tsx files"
        ],
        correctAnswer: 1,
        explanation: "Yes, hooks work great with TypeScript and provide full type safety. You can type state, refs, contexts, and all hook parameters and return values.",
        category: "TypeScript",
        difficulty: 3
    },
    {
        id: 92,
        question: "What is the recommended way to handle derived state?",
        options: [
            "Always use useState",
            "Calculate during render or use useMemo for expensive calculations",
            "Always use useMemo",
            "Use useDerivedState hook"
        ],
        correctAnswer: 1,
        explanation: "For derived state, calculate it during render. Use useMemo only if the calculation is expensive. Avoid storing derived state in useState.",
        category: "Performance Hooks",
        difficulty: 3
    },
    {
        id: 93,
        question: "How do you update state based on previous state in useReducer?",
        options: [
            "Use the state directly",
            "Return new state based on previous state in the reducer",
            "Use setState pattern",
            "Use usePrevious hook"
        ],
        correctAnswer: 1,
        explanation: "In useReducer, the reducer function receives the current state and action, and returns the new state. This is the standard pattern for state updates.",
        category: "Core Hooks",
        difficulty: 2
    },
    {
        id: 94,
        question: "What does useId generate?",
        options: [
            "Random unique IDs",
            "Stable unique IDs that work with SSR",
            "Sequential IDs",
            "GUIDs"
        ],
        correctAnswer: 1,
        explanation: "useId generates unique IDs that are stable across server and client renders, making them perfect for SSR scenarios like matching labels with form inputs.",
        category: "Utility Hooks",
        difficulty: 2
    },
    {
        id: 95,
        question: "Can you call hooks from nested functions inside components?",
        options: [
            "Yes, anywhere in the component",
            "No, only at the top level",
            "Only in arrow functions",
            "Only in named functions"
        ],
        correctAnswer: 1,
        explanation: "Hooks must be called at the top level of the component, not inside nested functions, loops, or conditions. This ensures hooks are called in the same order every render.",
        category: "Rules of Hooks",
        difficulty: 1
    },
    {
        id: 96,
        question: "What is the purpose of useRef's .current property?",
        options: [
            "To store the current render count",
            "To hold a mutable value that persists across renders",
            "To track component state",
            "To store previous props"
        ],
        correctAnswer: 1,
        explanation: "The .current property of a ref holds a mutable value that persists across renders. Unlike state, updating .current doesn't trigger a re-render.",
        category: "Utility Hooks",
        difficulty: 2
    },
    {
        id: 97,
        question: "How do you optimize context re-renders?",
        options: [
            "Split contexts by concern",
            "Memoize context values",
            "Use React.memo with consumers",
            "All of the above"
        ],
        correctAnswer: 3,
        explanation: "To optimize context re-renders: split contexts by concern to avoid unnecessary updates, memoize context values, and wrap consumers with React.memo.",
        category: "Core Hooks",
        difficulty: 2
    },
    {
        id: 98,
        question: "What is the relationship between useMemo and useCallback?",
        options: [
            "useCallback is implemented using useMemo",
            "They're completely different",
            "useMemo is implemented using useCallback",
            "They're aliases"
        ],
        correctAnswer: 0,
        explanation: "useCallback(fn, deps) is equivalent to useMemo(() => fn, deps). useCallback is essentially a specialization of useMemo for memoizing functions.",
        category: "Performance Hooks",
        difficulty: 3,
    },
    {
        id: 99,
        question: "Can you conditionally skip useEffect execution?",
        options: [
            "Yes, by conditionally calling useEffect",
            "No, but you can return early inside the effect",
            "Use useConditionalEffect",
            "Hooks can't be conditional"
        ],
        correctAnswer: 1,
        explanation: "You can't conditionally call useEffect, but you can return early inside the effect based on conditions. This is a common pattern for conditional effects.",
        category: "Core Hooks",
        difficulty: 2
    },
    {
        id: 100,
        question: "What is the best practice for custom hook naming?",
        options: [
            "Any name is fine",
            "Must start with 'use'",
            "Must end with 'Hook'",
            "Must include 'React'"
        ],
        correctAnswer: 1,
        explanation: "Custom hooks must start with 'use' (like useCustomHook). This convention tells React and tools like ESLint that it's a hook and should follow the Rules of Hooks.",
        category: "Custom Hooks",
        difficulty: 1
    }
];

