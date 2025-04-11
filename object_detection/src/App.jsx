import React, { useState } from "react";
import Home from './components/Home';
import Camera from "./components/Camera";

function App() {
  const [showCamera, setShowCamera] = useState(false);

  return (
    <div className="App">
      {showCamera ? (
        <Camera onBack={() => setShowCamera(false)} />
      ) : (
        <Home onStart={() => setShowCamera(true)} />
      )}
    </div>
  );
}

export default App;
