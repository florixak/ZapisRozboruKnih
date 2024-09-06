import { useNavigate } from "react-router-dom";
import { books } from "../data";
import { deformatName } from "../utils";
import List from "./List";

const Books = () => {
  const navigate = useNavigate();

  const handleClick = (name) => {
    const newPath = `/books/${deformatName(name)}`;
    navigate(newPath);
  };

  const pickRandom = () => {
    const randomBook = books[Math.floor(Math.random() * books.length)];
    const newPath = `/books/${deformatName(randomBook.name)}`;
    navigate(newPath);
  };

  return (
    <List list={books} handleClick={handleClick} pickRandom={pickRandom} />
  );
};

export default Books;
