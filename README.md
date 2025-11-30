# LearnReact - React Learning Platform

A comprehensive React learning platform with interactive tutorials, quizzes, and examples. Built with Next.js 15, React 19, TypeScript, and Tailwind CSS. Learn React from beginner to staff engineer level with progressive, hands-on tutorials.

## 🌐 Live Demo

**👉 [View Live Application](https://learn-react-ten-steel.vercel.app/)**

Explore the live platform with 40+ tutorials, interactive examples, and quizzes:
- [Browse All Tutorials](https://learn-react-ten-steel.vercel.app/tutorials)
- [React Hooks Examples](https://learn-react-ten-steel.vercel.app/hooks)
- [Interactive Quiz](https://learn-react-ten-steel.vercel.app/quiz)

## 🚀 Features

- **40+ Comprehensive Tutorials** - Progressive tutorials from beginner to staff engineer level
- **Interactive Examples** - Live code examples for all React hooks and concepts
- **React 19** - Latest React features including Server Components, new hooks, and improved performance
- **Next.js 15** - Built on the latest Next.js with App Router and improved developer experience
- **React 19 Hooks** - Examples of `useOptimistic`, `useActionState`, `useFormStatus`, and `use` hooks
- **TypeScript Tutorials** - Comprehensive guides on types, interfaces, generics, and advanced patterns
- **TypeScript** - Full type safety for better developer experience and fewer bugs
- **Tailwind CSS** - Utility-first CSS framework with dark mode support
- **ESLint** - Code quality and consistency with Next.js recommended configuration
- **Modern Structure** - Organized folder structure with components, utilities, and best practices
- **Lucide Icons** - Beautiful icon library included
- **Dark Mode** - Built-in dark mode support

## 📁 Project Structure

```
reactbp/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── layout/           # Layout components (Header, Footer, Container)
│   ├── sections/         # Page sections (Hero, Features)
│   └── ui/               # Reusable UI components (Button, etc.)
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions and constants
├── types/                # TypeScript type definitions
└── utils/                # Helper functions
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

4. Explore tutorials at [http://localhost:3000/tutorials](http://localhost:3000/tutorials)

5. Check out React 19 hooks examples at [http://localhost:3000/hooks](http://localhost:3000/hooks)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Styling

This project uses Tailwind CSS for styling. The global styles are defined in `app/globals.css` with CSS variables for theming.

### Customization

You can customize the color scheme by modifying the CSS variables in `app/globals.css`:

```css
@theme {
  --color-primary: #3b82f6;
  --color-background: #ffffff;
  /* ... */
}
```

## 📦 Key Dependencies

- `next` - React framework
- `react` & `react-dom` - React 19
- `typescript` - Type safety
- `tailwindcss` - Utility-first CSS
- `lucide-react` - Icon library
- `clsx` & `tailwind-merge` - Class name utilities

## 🏗️ Architecture

### Components

- **Layout Components** - Header, Footer, Container
- **Section Components** - Hero, Features
- **UI Components** - Button and other reusable components

### Hooks

**Core Hooks:**
- `useState` - Manage component state
- `useEffect` - Handle side effects and lifecycle
- `useContext` - Access context values without prop drilling
- `useReducer` - Alternative to useState for complex state logic

**Performance Hooks:**
- `useCallback` - Memoize callbacks to prevent unnecessary re-renders
- `useMemo` - Memoize expensive calculations
- `useLayoutEffect` - Synchronous version of useEffect (runs before paint)

**Utility Hooks:**
- `useRef` - Access DOM elements and store mutable values
- `useId` - Generate unique IDs stable across server/client renders

**Custom Hooks:**
- `useMediaQuery` - Track media query matches

**React 19 Hooks:**
- `useOptimistic` - Optimistic UI updates for instant feedback
- `useActionState` - Form state management with server actions (replaces useFormState)
- `useFormStatus` - Access form submission status from child components
- `useTransition` - Mark state updates as non-urgent transitions
- `use` - Handle promises directly in render functions

### Utilities

- `cn()` - Merge Tailwind CSS classes (in `lib/utils.ts`)
- Constants - App-wide constants (in `lib/constants.ts`)

## 🔧 Configuration

### TypeScript

TypeScript is configured with strict mode enabled. Path aliases are set up using `@/*` for imports.

### ESLint

ESLint is configured with Next.js recommended rules.

## 🚢 Deployment

### Live Application

The application is currently deployed and live at:
**👉 [https://learn-react-ten-steel.vercel.app/](https://learn-react-ten-steel.vercel.app/)**

### Deploy Your Own

#### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Deploy!

#### Other Platforms

This Next.js app can be deployed on any platform that supports Node.js:

- [Netlify](https://netlify.com)
- [Railway](https://railway.app)
- [AWS](https://aws.amazon.com)
- [DigitalOcean](https://www.digitalocean.com)

## 🪝 React 19 Hooks

This boilerplate includes examples of all major React 19 hooks:

### useOptimistic

Enable optimistic UI updates for instant feedback. The UI updates immediately, then syncs with the server.

```tsx
import { useOptimistic } from 'react';

const [optimisticLikes, addOptimisticLike] = useOptimistic(
  likes,
  (current, amount) => current + amount
);
```

### useActionState

Simplify form state management with server actions. Replaces `useFormState` in React 19.

```tsx
import { useActionState } from 'react';

const [state, formAction, pending] = useActionState(action, initialState);
```

### useFormStatus

Access form submission status from child components without prop drilling.

```tsx
import { useFormStatus } from 'react-dom';

const { pending } = useFormStatus();
```

### use

Handle promises directly in render functions, automatically suspending until resolved.

```tsx
import { use } from 'react';

const data = use(promise);
```

See live examples at `/hooks` route.

## 📖 Comprehensive Tutorials

This platform includes **40+ comprehensive tutorials** covering React and TypeScript from beginner to staff engineer level.

### Tutorial Categories

#### Beginner Level
- Introduction to React: Your First Component
- Understanding Props: Passing Data to Components
- Managing State with useState
- Conditional Rendering and Lists
- Event Handling in React
- TypeScript Basics for React Developers

#### Intermediate Level
- Component Composition and Patterns
- Building Custom Hooks
- Error Boundaries in React
- React.memo and Performance Optimization
- Throttling and Debouncing in React
- Handling Forms and User Input
- TypeScript Interfaces: Comprehensive Guide
- Type Aliases and Advanced Type Declarations
- TypeScript Generics: Creating Functions with Dynamic Typing
- Advanced TypeScript Patterns in React

#### Advanced Level
- Advanced React patterns and optimizations
- Complex state management
- Advanced TypeScript techniques

#### Expert & Staff Engineer Level
- Enterprise-level patterns
- Architecture and scalability
- Advanced TypeScript at scale
- System design and best practices

### Tutorial Features

- **Progressive Learning Path** - Tutorials build on each other with clear prerequisites
- **Code Examples** - Every tutorial includes practical, runnable code examples
- **Real-World Patterns** - Learn patterns used in production applications
- **TypeScript Integration** - Comprehensive TypeScript coverage throughout
- **Best Practices** - Learn industry-standard practices and common pitfalls
- **Interactive Examples** - See concepts in action with live examples

### Accessing Tutorials

- Browse all tutorials: `/tutorials`
- Filter by level: Beginner, Intermediate, Advanced, Expert, Staff Engineer
- Each tutorial includes:
  - Overview and learning objectives
  - Step-by-step sections with explanations
  - Code examples with explanations
  - Best practices and common patterns
  - Conclusion and key takeaways

## 📚 Learn More

### Official Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [React 19 Documentation](https://react.dev/blog/2024/12/05/react-19)
- [React Hooks Reference](https://react.dev/reference/react)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

### Tutorial Topics Covered

**React Fundamentals:**
- Components, Props, State
- Event Handling
- Conditional Rendering
- Lists and Keys
- Component Composition

**React Hooks:**
- useState, useEffect, useContext, useReducer
- useCallback, useMemo, useRef
- Custom Hooks
- React 19 Hooks (useOptimistic, useActionState, useFormStatus, use)

**Advanced React:**
- Performance Optimization (React.memo, useMemo, useCallback)
- Error Boundaries
- Throttling and Debouncing
- Form Handling
- Context API

**TypeScript:**
- Type Basics and Annotations
- Interfaces and Type Aliases
- Generics and Dynamic Typing
- Union and Intersection Types
- Advanced Type Patterns
- TypeScript with React

**Best Practices:**
- Code organization
- Performance optimization
- Error handling
- Testing strategies
- Architecture patterns

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
