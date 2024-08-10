# JSON Server

## Overview

JSON Server is a simple tool that allows you to create a REST API using a JSON file as the database. It’s perfect for prototyping and mocking data for development.

## Features

- **Zero configuration**: Just use a JSON file.
- **CRUD operations**: Supports Create, Read, Update, and Delete operations.
- **Static file server**: Can serve static files as well.
- **No need for a database**: Ideal for quick setups.

## Installation

```bash
npm install -g json-server
```

## Usage

Create a `db.json` file with some data:

```json
{
  "posts": [{ "id": 1, "title": "Hello World" }]
}
```

Start JSON Server:

```bash
json-server --watch db.json
```

By default, it will be available at `http://localhost:3000`.

## Routes

- `GET /posts`: Fetch all posts.
- `GET /posts/1`: Fetch post with id 1.
- `POST /posts`: Add a new post.
- `PUT /posts/1`: Update post with id 1.
- `DELETE /posts/1`: Delete post with id 1.

---

# `useEffect` Hook

## Overview

`useEffect` is a hook in React that lets you perform side effects in function components. It serves the same purpose as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in class components.

## Basic Usage

```javascript
import { useEffect } from 'react';

useEffect(() => {
  // Your code here
});
```

## Example

```javascript
import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]); // Only re-run the effect if count changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

## Dependencies

The second argument to `useEffect` is an array of dependencies. The effect will only run if one of the dependencies changes.

## Cleanup

You can return a function from the effect to clean up after it:

```javascript
useEffect(() => {
  const timer = setTimeout(() => {
    console.log('This will run after 1 second!');
  }, 1000);

  return () => clearTimeout(timer); // Cleanup
}, []);
```

---

# React Strict Mode

## Overview

React Strict Mode is a tool for highlighting potential problems in an application. It activates additional checks and warnings for its descendants.

## Enabling Strict Mode

Wrap your application with `<React.StrictMode>`:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

## Benefits

- Identifies components with unsafe lifecycle methods.
- Warns about legacy string ref API usage.
- Detects unexpected side effects.
- Detects legacy context API.

## Example

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

---

# `useCallback` Hook

## Overview

`useCallback` is a hook that returns a memoized version of the callback function that only changes if one of the dependencies has changed. It is useful for optimizing performance.

## Basic Usage

```javascript
import { useCallback } from 'react';

const memoizedCallback = useCallback(
  () => {
    // Your code here
  },
  [
    /* dependencies */
  ]
);
```

## Example

```javascript
import React, { useState, useCallback } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []); // The callback doesn't depend on any values from props or state

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
```

## When to Use

Use `useCallback` when passing functions as props to child components to prevent unnecessary re-renders.

---

Sure! Here is a detailed discussion about Custom Hooks in React, written in Markdown.

---

# Custom Hooks in React

## Overview

Custom Hooks are a mechanism to reuse stateful logic across multiple components in React. They allow you to extract component logic into reusable functions, enhancing code modularity and readability.

## Why Use Custom Hooks?

- **Code Reusability**: Share logic between multiple components without duplicating code.
- **Abstraction**: Simplify components by abstracting complex logic.
- **Separation of Concerns**: Keep related logic together, making it easier to manage and maintain.

## Creating a Custom Hook

### Basic Structure

A custom hook is a JavaScript function whose name starts with "use" and that may call other hooks. Here is the basic structure:

```javascript
import { useState, useEffect } from 'react';

function useCustomHook() {
  // Hook logic here
  const [state, setState] = useState(initialState);

  useEffect(() => {
    // Side effects here
  }, []);

  return [state, setState];
}
```

### Example: Fetching Data

Let’s create a custom hook that fetches data from an API.

#### Step 1: Create the Hook

```javascript
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      setLoading(false);
    };

    fetchData();
  }, [url]);

  return { data, loading };
}

export default useFetch;
```

#### Step 2: Use the Hook in a Component

```javascript
import React from 'react';
import useFetch from './useFetch';

function App() {
  const { data, loading } = useFetch('https://api.example.com/data');

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Fetched Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
```

### Example: Form Handling

Let’s create a custom hook for handling form state and submission.

#### Step 1: Create the Hook

```javascript
import { useState } from 'react';

function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = (callback) => (event) => {
    event.preventDefault();
    callback(values);
  };

  return {
    values,
    handleChange,
    handleSubmit
  };
}

export default useForm;
```

#### Step 2: Use the Hook in a Component

```javascript
import React from 'react';
import useForm from './useForm';

function App() {
  const { values, handleChange, handleSubmit } = useForm({
    username: '',
    email: ''
  });

  const submitForm = (formValues) => {
    console.log('Form submitted with values:', formValues);
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={values.username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
```

## Best Practices

1. **Prefix with `use`**: Always prefix custom hooks with `use` to follow conventions and leverage linting rules.
2. **Extract Logic**: Only extract logic that is reusable and enhances code readability.
3. **Return Values Consistently**: Ensure the custom hook’s return values are consistent and well-documented.
4. **Use Hooks Inside Custom Hooks**: Leverage existing React hooks within custom hooks to build powerful abstractions.

---
