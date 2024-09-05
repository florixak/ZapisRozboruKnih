import { useNavigate } from "react-router-dom";
import { art_directions } from "../data";
import { deformatName } from "../utils";

const Directions = () => {
  const navigate = useNavigate();

  const handleClick = (name) => {
    const newPath = `/smery/${deformatName(name)}`;
    navigate(newPath);
  };

  const pickRandom = () => {
    const randomDir =
      art_directions[Math.floor(Math.random() * art_directions.length)];
    const newPath = `/smery/${deformatName(randomDir.title)}`;
    navigate(newPath);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <h1 className="text-3xl font-bold">Umělecké směry</h1>
      <button className="my-4 border-2 px-3 py-2" onClick={pickRandom}>
        Pick random
      </button>
      <div className="grid max-w-[1000px] grid-flow-row grid-cols-4 gap-28">
        {art_directions.map((dir) => {
          return (
            <div
              key={dir.id + dir.title}
              className="flex w-[250px] flex-col gap-3 border-2 p-2"
            >
              <h2
                onClick={() => handleClick(dir.title)}
                className="cursor-pointer text-xl font-bold"
              >
                {dir.title}
              </h2>
              <p>
                <span className="font-bold">Období:</span> {dir.time_period}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Directions;
