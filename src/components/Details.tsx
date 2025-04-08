import { useParams } from "react-router-dom";
import useData, { Exercise } from "../hooks/useData";

const Details = () => {
  const { id } = useParams<{ id: string }>();
  const { data: exercises } = useData();

  const exercise = exercises?.find((ex: Exercise) => ex.id.toString() === id);

  if (!exercise) return <p className="text-center mt-10">Exercise not found</p>;

  return (
    <section>
      <div className="h-screen grid md:items-center md:grid-cols-2">
        <div className="flex flex-col text-center p-3">
          <h1 className="text-xl lg:text-4xl font-bold title-color border-b-2 border-white p-2 capitalize">
            {exercise.name}
          </h1>
          <img
            src={exercise.gifUrl}
            alt={exercise.name}
            className="max-h-[600px] mt-10 object-contain rounded-full"
          />
        </div>

        <div className="text-lg lg:text-3xl font-semibold flex flex-col lg:justify-between pb-10 lg:py-30 gap-5 px-3">
          <div className="text-white">
            <p className="mb-1 lg:mb-4">Description:</p>
            <p className="title-color">
              Strengthen your {exercise.bodyPart} using {exercise.equipment}{" "}
              with this effective {exercise.target} workout, perfect for
              building stability, power, and endurance fast.
            </p>
          </div>
          <div className="capitalize whitespace-nowrap flex flex-col gap-3">
            <div className="flex gap-3">
              <p className="text-white">Body Parts:</p>
              <p className="title-color">{exercise.bodyPart}</p>
            </div>

            <div className="flex gap-3">
              <p className="text-white ">Equipment:</p>
              <p className="title-color">{exercise.equipment}</p>
            </div>

            <div className="flex gap-3">
              <p className="text-white">Target:</p>
              <p className="title-color">{exercise.target}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
