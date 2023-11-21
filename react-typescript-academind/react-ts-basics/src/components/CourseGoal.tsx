// type CourseGoalProps = {
//   title: string;
//   description: string;
// };

import { type FC, type PropsWithChildren, type ReactNode } from "react";

interface CourseGoalProps {
  id: number;
  title: string;
  onDelete: (id: number) => void;
  children: ReactNode;
}

// type CourseGoalProps = PropsWithChildren<{ title: string }>;

/* const CourseGoal = ({ title, children }: CourseGoalProps) => { */
const CourseGoal: FC<CourseGoalProps> = ({ id, title, children, onDelete }) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
};

export default CourseGoal;
