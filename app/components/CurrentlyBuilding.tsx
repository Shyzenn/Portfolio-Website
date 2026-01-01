import { FiActivity } from "react-icons/fi";

const CurrentlyBuilding = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold flex items-center gap-2 ">
        <FiActivity className="text-gray-500" />
        What I’m Currently Building
      </h3>

      <div className="mt-6">
        <p className="text-sm">
          I’m currently building and optimizing the Macoleen’s Pharmacy system,
          achieving ~30% faster page load times through improved query
          efficiency, caching, and state management.
        </p>
      </div>
    </div>
  );
};

export default CurrentlyBuilding;
