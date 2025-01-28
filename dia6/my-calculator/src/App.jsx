import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const validateInput = (expression) => {
    if (expression.includes('/0')) {
      return 'No se puede dividir entre cero';
    }
    return null;
  };

  const handleCalculate = () => {
    const validationError = validateInput(input);
    if (validationError) {
      setInput(validationError);
      return;
    }

    try {
      const result = eval(input);
      if (isNaN(result)) {
        throw new Error();
      }
      setInput(result.toString());
    } catch {
      setInput('Error');
    }
  };

  const handleClear = () => {
    setInput('');
  };

  const getInputColor = () => {
    if (input === 'Error' || input === 'No se puede dividir entre cero') {
      return 'text-gray-500';
    } else if (parseFloat(input) < 0) {
      return 'text-red-500';
    } else if (parseFloat(input) > 0) {
      return 'text-green-500';
    } else {
      return 'text-black';
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-200">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <div className="text-right text-2xl mb-4">
          <input
            type="text"
            value={input}
            readOnly
            className={`w-full p-2 text-right text-2xl bg-gray-100 border border-gray-300 rounded-md ${getInputColor()}`}
          />
        </div>
        <div className="grid grid-cols-4 gap-4">
          {/* Números y botones */}
          <button onClick={() => handleClick('7')} className="btn">7</button>
          <button onClick={() => handleClick('8')} className="btn">8</button>
          <button onClick={() => handleClick('9')} className="btn">9</button>
          <button onClick={() => handleClick('/')} className="btn text-orange-500">/</button>

          <button onClick={() => handleClick('4')} className="btn">4</button>
          <button onClick={() => handleClick('5')} className="btn">5</button>
          <button onClick={() => handleClick('6')} className="btn">6</button>
          <button onClick={() => handleClick('*')} className="btn text-orange-500">*</button>

          <button onClick={() => handleClick('1')} className="btn">1</button>
          <button onClick={() => handleClick('2')} className="btn">2</button>
          <button onClick={() => handleClick('3')} className="btn">3</button>
          <button onClick={() => handleClick('-')} className="btn text-orange-500">-</button>

          <button onClick={() => handleClick('0')} className="btn col-span-2">0</button>
          <button onClick={() => handleClick('.')} className="btn">.</button>
          <button onClick={() => handleClick('+')} className="btn text-orange-500">+</button>

          <button onClick={handleClear} className="btn bg-red-500 text-white col-span-2">C</button>
          <button onClick={handleCalculate} className="btn bg-blue-500 text-white col-span-2">=</button>
        </div>
      </div>
    </div>
  );
}

const btnStyles = 'bg-gray-300 p-4 rounded-lg text-xl hover:bg-gray-400 transition-all duration-200';

export default App;
