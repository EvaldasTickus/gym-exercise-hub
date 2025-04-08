import { useEffect, useState } from "react";
import BodyParts from "../components/BodyParts";
import Exercises from "../components/Exercises";
import SearchExercises from "../components/SearchExercises";
import useData, { Exercise } from "../hooks/useData";
import Pagination from "../components/Pagination";
import Message from "../components/Message";
import { useInView } from "react-intersection-observer";

interface Props {
  setIsMiddleVisible: (isVisible: boolean) => void;
}

const MiddleSection = ({ setIsMiddleVisible }: Props) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    setIsMiddleVisible(inView);
  }, [inView, setIsMiddleVisible]);

  const { data: exercises, error, isLoading } = useData();

  const [filteredExercises, setFilteredExercises] = useState<Exercise[]>([]);
  const [selectedBodyPart, setSelectedBodyPart] = useState("all");

  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 12;

  const handleFilter = (results: Exercise[]) => {
    setFilteredExercises(results);
    setCurrentPage(1);
  };

  const handleSelectBodyPart = (bodyPart: string) => {
    setSelectedBodyPart(bodyPart);
    setCurrentPage(1);

    if (!exercises) return;

    if (bodyPart === "all") {
      setFilteredExercises(exercises);
    } else {
      const filtered = exercises.filter(
        (ex) => ex.bodyPart.toLowerCase() === bodyPart.toLowerCase()
      );
      setFilteredExercises(filtered);
    }
  };

  const getCurrentExercises = () => {
    const exercisesToPaginate = filteredExercises.length
      ? filteredExercises
      : exercises || [];
    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    return exercisesToPaginate.slice(indexOfFirstExercise, indexOfLastExercise);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  if (isLoading)
    return <p className="text-center mt-10">Loading exercises...</p>;
  if (error)
    return <p className="text-red-500 text-center mt-4">{error.message}</p>;
  if (!exercises) return null;

  const exercisesToCount = filteredExercises.length
    ? filteredExercises
    : exercises;
  const totalPages = Math.ceil(exercisesToCount.length / exercisesPerPage);

  return (
    <div ref={ref} className="bg-zinc-950 pb-8">
      <SearchExercises exercises={exercises} onFilter={handleFilter} />
      <Message />
      <BodyParts onSelect={handleSelectBodyPart} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <Exercises exercises={getCurrentExercises()} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default MiddleSection;
