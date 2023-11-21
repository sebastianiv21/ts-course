import CourseGoalList from "./components/CourseGoalList";
import goalsImg from "./assets/goals.jpg";
import Header from "./components/Header";
import { useState } from "react";
import NewGoal from "./components/NewGoal";

export type TCourseGoal = {
  id: number;
  title: string;
  description: string;
};

export default function App() {
  const [goals, setGoals] = useState<TCourseGoal[]>([]);

  function handleAddGoal(goal: string, summary:string) {
    setGoals((prevGoals) => {
      const newGoal: TCourseGoal = {
        id: Math.random(),
        title: goal,
        description:summary,
      };

      return [...prevGoals, newGoal];
    });
  }

  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal}/>
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}
