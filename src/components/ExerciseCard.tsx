import { Exercise } from "../hooks/useData";
import { Link } from "react-router-dom";

interface Props {
  exercise: Exercise;
}

const ExerciseCard = ({ exercise }: Props) => {
  return (
    <Link
      to={`/exercise/${exercise.id}`}
      className="block rounded-xl overflow-hidden border-white border-2 hover:-translate-y-1 transition-all"
    >
      <div className="relative pb-[75%] overflow-hidden bg-gray-100">
        <img
          src={exercise.gifUrl}
          alt={exercise.name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-center"
        />
      </div>

      <div className="p-4 text-end">
        <h3 className="text-2xl title-color font-bold capitalize truncate border-b-2 border-white pb-4">
          {exercise.name}
        </h3>
        <div className="flex w-full justify-end pt-4 border-b-2 border-white">
          <div>
            <div className="flex items-center pb-4">
              <span className=" bg-gradient-to-t whitespace-nowrap from-[#ec8f8f] to-[#ff0000] text-white text-md font-medium px-2 py-1 rounded-md capitalize">
                {exercise.equipment}
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-end gap-3 pt-4">
          <div className="flex items-center">
            <span className="bg-gradient-to-t whitespace-nowrap from-[#ec8f8f] to-[#ff0000] text-white text-md font-medium px-2 py-1 rounded-md capitalize">
              {exercise.bodyPart}
            </span>
          </div>
          <div className="flex items-center">
            <span className="bg-gradient-to-t whitespace-nowrap from-[#ec8f8f] to-[#ff0000] text-white text-md font-medium px-2 py-1 rounded-md capitalize">
              {exercise.target}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ExerciseCard;
