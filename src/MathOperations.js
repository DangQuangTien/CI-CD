import React, { useState } from 'react';
import { evaluate } from 'mathjs';

function MathOperations() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const calculate = () => {
    try {
      const evalResult = evaluate(expression);
      setResult(evalResult);
      setError('');
    } catch (err) {
      setResult(null);
      setError('Invalid Expression');
    }
  };

  return (
    <div className="app">
      <h1>Calculator</h1>

      {/* Input field and calculate button combined */}
      <div className="input-group">
        <input
          type="text"
          value={expression}
          onChange={(e) => setExpression(e.target.value)}
          placeholder="Type an expression..."
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              calculate();
            }
          }}
        />
        <button onClick={calculate}>=</button>
      </div>

      {/* Display result or error */}
      {result !== null && (
        <div className="result">
          <p>Result:</p>
          <h2>{result}</h2>
        </div>
      )}
      {error && (
        <div className="error">
          <p>Error:</p>
          <h2>{error}</h2>
        </div>
      )}
    </div>
  );
}

export default MathOperations;
