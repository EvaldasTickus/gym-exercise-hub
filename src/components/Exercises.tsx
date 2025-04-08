import ExerciseCard from "./ExerciseCard";
import { Exercise } from "../hooks/useData";

interface Props {
  exercises: Exercise[];
}

const Exercises = ({ exercises }: Props) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-5/6 mx-auto pt-6 md:pt-12">
        {exercises.map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </div>
    </>
  );
};

export default Exercises;
