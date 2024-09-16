import { useNavigate } from "react-router-dom";
import { authors } from "../data";
import { deformatName, pickRandom } from "../utils";
import List from "./List";

const Authors = () => {
  const navigate = useNavigate();

  const handleClick = (name) => {
    const newPath = `/authors/${deformatName(name)}`;
    navigate(newPath);
  };

  const handleTestClick = () => {
    const newPath = `/authors-test/${deformatName(pickRandom(authors).name)}`;
    navigate(newPath);
  };

  const pickRandomMethod = () => {
    const randomAuthor = authors[Math.floor(Math.random() * authors.length)];
    const newPath = `/authors/${deformatName(randomAuthor.name)}`;
    navigate(newPath);
  };

  return (
    <List
      list={authors}
      handleClick={handleClick}
      handleTestClick={handleTestClick}
      pickRandom={pickRandomMethod}
    />
  );
};

export default Authors;
