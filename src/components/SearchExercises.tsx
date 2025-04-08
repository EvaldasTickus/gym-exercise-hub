import { useState } from "react";
import { Exercise } from "../hooks/useData";

interface Props {
  exercises: Exercise[];
  onFilter: (exercises: Exercise[]) => void;
}

const SearchExercises = ({ exercises, onFilter }: Props) => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    const query = search.trim().toLowerCase();
    if (!query) return;

    const filtered = exercises.filter(
      (exercise) =>
        exercise.name.toLowerCase().includes(query) ||
        exercise.bodyPart.toLowerCase().includes(query) ||
        exercise.equipment.toLowerCase().includes(query)
    );

    onFilter(filtered);
    setSearch("");
  };

  return (
    <div
      id="exercises"
      className="flex flex-col items-center justify-center p-5 text-white"
    >
      <div className="mb-4 w-full flex justify-center">
        <input
          className="h-[50px] px-4 rounded-xl w-[300px] md:w-5/6 border-2 border-white focus:outline-0"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Exercises"
          type="search"
        />
        <button
          className="px-2 md:px-4 bg-gradient-to-t from-[#ec8f8f] to-[#ff0000] hover:opacity-80 transition rounded-xl text-white text-md md:text-xl font-semibold ml-2 cursor-pointer"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchExercises;
