import React, { useState } from "react";
import QRCode from "react-qr-code";
function App() {
  const [input, setinput] = useState("");
  const [qr, setqr] = useState("");
  function handleKeyPress(e) {
    if (e.key === "Enter") {
      handle();
    }
  }
  function handle(e) {
    setqr(input);
    setinput("");
  }

  return (
    <div className="flex flex-col h-screen w-screen  items-center  bg-purple-100 ">
      <h1 className="  font-mono text-6xl text-center underline my-5  ">
        QR CODE GENERATOR
      </h1>
      <div className="mt-5 flex items-center justify-center">
        <input
          onKeyDown={handleKeyPress}
          className=" p-3 rounded-xl text-center  bg-purple-200 border border-violet-900"
          type="text"
          value={input}
          placeholder="Enter Text"
          onChange={(e) => setinput(e.target.value)}
        />

        <button
          className="px-5 py-2.5 ml-3 rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 hover:bg-indigo-300 hover:text-white border border-violet-900"
          onClick={handle}
        >
          Generate
        </button>
      </div>
      <div className="mt-10">
        <QRCode size={300} bgColor="white" value={qr} />
      </div>
    </div>
  );
}

export default App;
