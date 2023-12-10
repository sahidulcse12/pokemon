import { useSets } from "@/Hooks/useSets";
import Card from "@/components/card/Card";

const LoadCard = () => {
  const setsObject = useSets();
  const sets = setsObject.data;
  sets?.sort((a, b) => Date.parse(b.releaseDate) - Date.parse(a.releaseDate));

  return (
    <>
      <div className="py-20 gap-y-10 place-items-center grid grid-cols-3">
        {sets
          ? sets.map((item) => <Card item={item} key={item.id} />)
          : "Loading..."}
      </div>
    </>
  );
};

export default LoadCard;
