import CourseGoal from "./CourseGoal";
import { type TCourseGoal } from "../App";

type CourseGoalListProps = {
  goals: TCourseGoal[];
  onDeleteGoal: (id: number) => void;
};

const CourseGoalList = ({ goals, onDeleteGoal }: CourseGoalListProps) => {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
            {goal.description}
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
};

export default CourseGoalList;
