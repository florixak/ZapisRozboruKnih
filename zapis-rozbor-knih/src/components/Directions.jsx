import { useNavigate } from "react-router-dom";
import { art_directions } from "../data";
import { deformatName } from "../utils";
import List from "./List";

const Directions = () => {
  const navigate = useNavigate();

  const handleClick = (name) => {
    const newPath = `/smery/${deformatName(name)}`;
    navigate(newPath);
  };

  const pickRandom = () => {
    const randomDir =
      art_directions[Math.floor(Math.random() * art_directions.length)];
    const newPath = `/smery/${deformatName(randomDir.name)}`;
    navigate(newPath);
  };

  return (
    <List
      list={art_directions}
      handleClick={handleClick}
      pickRandom={pickRandom}
    />
  );
};

export default Directions;
