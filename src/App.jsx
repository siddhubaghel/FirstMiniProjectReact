import React, { useEffect, useState } from "react";

const App = () => {
  const [inp, setinp] = useState("");
  const [val, setval] = useState("");

  const change = (e) => {
    setinp(e.target.value);
  };
  const serve = () => {
    setval(inp);
    // setinp("");
  };

  return (
    <>
      <div className="min-h-screen w-full text-white bg-black place-content-center">
        <div className="h-96 w-96 mx-auto">
          <input
            className="w-full h-1/2 rounded outline-2 text-2xl text-black
            outline-gray-500 bg-white text-center"
            name="changeValue"
            type="text"
            value={val}
            readOnly
          />

          <input
            type="text"
            className="w-11/12 ms-5 mt-8 rounded outline-2 p-1 text-xl text-black outline-gray-500"
            onChange={change}
          />
          <button
            className="p-2 bg-zinc-800 ms-40 mt-5 rounded"
            type="button"
            onClick={serve}
          >
            Transfer
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
