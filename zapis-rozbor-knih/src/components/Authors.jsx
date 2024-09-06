import { useNavigate } from "react-router-dom";
import { authors } from "../data";
import { deformatName } from "../utils";
import List from "./List";

const Authors = () => {
  const navigate = useNavigate();

  const handleClick = (name) => {
    const newPath = `/authors/${deformatName(name)}`;
    navigate(newPath);
  };

  const pickRandom = () => {
    const randomAuthor = authors[Math.floor(Math.random() * authors.length)];
    const newPath = `/authors/${deformatName(randomAuthor.name)}`;
    navigate(newPath);
  };

  return (
    <List list={authors} handleClick={handleClick} pickRandom={pickRandom} />
  );
};

export default Authors;
