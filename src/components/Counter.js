import React, { useState } from 'react';

const Counter = () => {
  // State to keep track of count and step value
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  // Handlers for increment, decrement, and reset
  const increment = () => setCount(count + step);
  const decrement = () => setCount(count - step);
  const reset = () => setCount(0);

  // Handler for setting the step value
  const handleStepChange = (e) => {
    setStep(Number(e.target.value)); // Convert the input value to a number
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Simple Counter</h1>
      <h2>{count}</h2>
      
      {/* Buttons to increment, decrement, and reset the counter */}
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>

      <br />
      <br />
      
      {/* Input field to set the step value */}
      <label>Step: </label>
      <input type="number" value={step} onChange={handleStepChange} />
    </div>
  );
};

export default Counter;
