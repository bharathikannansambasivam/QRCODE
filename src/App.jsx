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
  function handle() {
    setqr(input);
    setinput("");
  }

  return (
    <div className="flex flex-col h-screen   items-center  bg-purple-100 ">
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
          onClick={handle}
          className="px-5 py-2.5 ml-3 rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 hover:bg-purple-400 hover:text-white border border-violet-200"
        >
          Generate
        </button>
      </div>
      <div className="mt-10">
        <QRCode size={300} bgColor="white" value={qr} />
      </div>
      <div>
        <h3 className="mt-5 text-2xl p-3 rounded-xl text-center  bg-purple-200 border border-violet-900 flex gap-2">
          Your input value: <span className="underline">{qr}</span>
        </h3>
      </div>
    </div>
  );
}

export default App;
