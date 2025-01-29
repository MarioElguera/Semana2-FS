import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [resultado, setResultado] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
    setResultado("");
  };

  const handleCalculate = () => {
    try {
      setResultado(eval(input));
    } catch (error) {
      setResultado("Error");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-80 text-center">
        <div className="mb-4 p-3 bg-gray-700 text-2xl rounded">{input || "0"}</div>
        <div className="mb-4 p-3 bg-gray-600 text-xl rounded">Resultado: {resultado}</div>
        <div className="grid grid-cols-4 gap-2">
          {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((item) => (
            <button
              key={item}
              onClick={() => (item === "=" ? handleCalculate() : handleClick(item))}
              className="bg-gray-700 p-4 rounded hover:bg-gray-600"
            >
              {item}
            </button>
          ))}
          <button onClick={handleClear} className="col-span-4 bg-red-500 p-4 rounded hover:bg-red-400">
            C
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;