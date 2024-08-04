# States and useState | 01

### What is recommended to write at the top of a React component file?

- At the top of a React component file, it is recommended to write import statements and functions. Other code should be written inside the component.

### Where should all the other code be written in a React component file?

- All other code should be written inside the component.

### What are React Hooks?

- React Hooks are functions that allow you to use state and other React features in functional components. Common hooks include `useState`, `useEffect`, and `useContext`.

### What is `useState` in React?

- `useState` is a hook that allows you to add state to a functional component. It returns an array with two elements: the current state value and a function to update that value.

### How does the `useState` hook work in React?

- The `useState` hook initializes a state variable with a given value and provides a function to update that variable. The state variable will stay constant unless updated using the provided function.

### What does it mean when we say the state value is "stable"?

- A state value is considered "stable" because it remains constant and does not change unless explicitly updated using the state update function provided by `useState`.

### Why is it beneficial to use hooks like `useState` in React?

- Hooks like `useState` make it easy to manage state in functional components, which promotes a simpler and more concise way of writing React components compared to class components.

### What does the `useEffect` hook do in React?

- The `useEffect` hook allows you to perform side effects in functional components, such as fetching data, directly interacting with the DOM, and running subscriptions or timers. It runs after the component renders and can be set to run on every render or only when certain dependencies change.

### What should you avoid doing outside of React components?

- You should avoid writing any code other than import statements and functions outside of React components. All component logic and JSX should be inside the component function.

### Why Do We Need States?

- **Dynamic UI Updates**: State allows React components to create dynamic and interactive user interfaces. When the state of a component changes, React automatically re-renders the component to reflect these changes in the UI.
- **Managing Component Data**: State helps manage data that can change over time, such as user inputs, form submissions, or API responses.
- **Encapsulation**: State encapsulates the local data of a component, ensuring that the data is managed within the component and doesn't affect other parts of the application.

### What is `useState`?

- **`useState` Hook**: `useState` is a React hook that allows you to add state to functional components. It returns an array with two elements: the current state value and a function to update that value.

### How to Use `useState`?

1. **Import `useState` from React**:
   ```javascript
   import React, { useState } from 'react';
   ```
