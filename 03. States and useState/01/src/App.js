import { useState } from 'react';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount(count + 1);
  }

  function handleSub() {
    setCount(count - 1);
  }

  function handleReset() {
    setCount(0);
  }

  function handleSubThreeTimes() {
    // ! this is not working
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    // ! if we want to get current value then we need to use function
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  }

  return (
    <>
      <div className="app">
        <p>{count}</p>
        <div className="operations">
          <button className="sub" onClick={handleSub}>
            SUB
          </button>
          <button className="add" onClick={handleAdd}>
            ADD
          </button>
          <button className="reset" onClick={handleReset}>
            Reset
          </button>
        </div>
        <div className="operations">
          <button className="sub sub-2" onClick={handleSubThreeTimes}>
            Add 3 by 3
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
