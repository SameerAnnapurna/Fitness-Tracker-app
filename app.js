import React from "react";
import WorkoutLogger from "./WorkoutLogger";
import Analytics from "./Analytics";

function App() {
  return (
    <div>
      <header>
        <h1>Fitness Tracker</h1>
      </header>
      <div className="container">
        <WorkoutLogger />
        <Analytics />
      </div>
    </div>
  );
}

export default App;
