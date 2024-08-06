### React Props

Props (short for properties) in React are used to pass data from a parent component to a child component. They allow components to be dynamic and reusable by enabling the parent component to control the values that the child component receives and uses. Props are immutable, meaning the child component cannot change the props it receives; it can only use them to render the UI.

### Array Destructuring

Array destructuring is a syntax feature in JavaScript that allows you to extract values from arrays and assign them to variables in a concise manner. For example, given an array of values, you can unpack them into individual variables. This is especially useful when working with functions that return arrays, such as React hooks like `useState`, where you can directly assign the returned state and updater function to variables.

![text](https://github.com/dimuthx353/react/blob/master/004/src/assets/Screenshot%20(1).png)

### Components in React

Components are the fundamental building blocks of a React application. They can be categorized into two main types:

- **Functional Components**: These are simple JavaScript functions that accept props as an argument and return React elements (JSX). They are easy to write and understand. With the introduction of hooks in React, functional components can now also manage state and side effects.
- **Class Components**: These are ES6 classes that extend from `React.Component` and must include a `render` method that returns React elements. Class components can have state and lifecycle methods, providing more functionality but requiring more boilerplate code compared to functional components.

### Key Concepts in Components:

- **State**: State is a way to store and manage dynamic data in a component. When the state of a component changes, React automatically re-renders the component to reflect the new state.
- **Lifecycle Methods**: In class components, lifecycle methods allow you to execute code at specific points in a component's life cycle, such as when the component mounts, updates, or unmounts. Functional components achieve similar behavior using hooks like `useEffect`.

### Summary

- **React Props**: Pass immutable data from parent to child components.
- **Array Destructuring**: Simplify extraction of values from arrays, useful for handling returned arrays from hooks.
- **Components**: Building blocks of React apps, can be functional (simpler, preferred with hooks) or class-based (more complex, with lifecycle methods).
