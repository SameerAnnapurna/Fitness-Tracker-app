import React, { useState } from "react";
import { db } from "./firebase";

function WorkoutLogger() {
  const [workout, setWorkout] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await db.collection("workouts").add({
      workout,
      duration,
      date: new Date(),
    });
    setWorkout("");
    setDuration("");
  };

  return (
    <div>
      <h2>Log Your Workout</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Workout (e.g., Running)"
          value={workout}
          onChange={(e) => setWorkout(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Duration (minutes)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
        />
        <button type="submit">Log Workout</button>
      </form>
    </div>
  );
}

export default WorkoutLogger;
