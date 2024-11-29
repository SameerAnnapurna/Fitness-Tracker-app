import React, { useEffect, useState } from "react";
import { db } from "./firebase";

function Analytics() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection("workouts")
      .orderBy("date", "desc")
      .onSnapshot((snapshot) => {
        setWorkouts(snapshot.docs.map((doc) => doc.data()));
      });

    return () => unsubscribe();
  }, []);

  return (
    <div className="analytics">
      <h2>Workout Analytics</h2>
      {workouts.length === 0 ? (
        <p>No workouts logged yet.</p>
      ) : (
        <ul>
          {workouts.map((workout, index) => (
            <li key={index}>
              {workout.workout} - {workout.duration} minutes
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Analytics;
