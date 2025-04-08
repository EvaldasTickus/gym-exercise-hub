import useBodyPartsList from "../hooks/useBodyPartsList";

interface Props {
  onSelect: (bodyPart: string) => void;
}

const BodyParts = ({ onSelect }: Props) => {
  const { bodyPartList, error } = useBodyPartsList();
  const fullBodyPartList = ["all", ...bodyPartList];

  if (error) return <p>{error}</p>;

  return (
    <div className="overflow-x-auto w-5/6 mx-auto">
      <div className="flex flex-nowrap space-x-6 p-4">
        {fullBodyPartList.map((bp, index) => (
          <div
            className="min-w-[110px] min-h-[50px] md:min-w-[150px] md:h-[80px] whitespace-nowrap flex items-center justify-center border-2 rounded-lg bg-gradient-to-t from-[#5927ef] to-[#48097b] text-white shadow-md cursor-pointer hover:scale-[1.05] transition"
            key={index}
            onClick={() => onSelect(bp)}
          >
            <button className="text-lg font-semibold capitalize cursor-pointer">
              {bp}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BodyParts;
