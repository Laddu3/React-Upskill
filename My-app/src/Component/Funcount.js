import React, { useState, useEffect } from 'react';

function Funcount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component mounted');

    return () => {
      console.log('Component will unmount');
    };
  }, []);

  useEffect(() => {
    console.log('Component updated');
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) {
    setCount(count - 1);
    }
  };

  return (
    <div>
      <h1>Fun Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Funcount;
