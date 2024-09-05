import { useNavigate } from "react-router-dom";
import { books } from "../data";
import { deformatName } from "../utils";

const Books = () => {
  const navigate = useNavigate();

  const handleClick = (name) => {
    const newPath = `/books/${deformatName(name)}`;
    navigate(newPath);
  };

  const pickRandom = () => {
    const randomBook = books[Math.floor(Math.random() * books.length)];
    const newPath = `/books/${deformatName(randomBook.title)}`;
    navigate(newPath);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <h1 className="text-3xl font-bold">Knížky</h1>
      <button className="my-4 border-2 px-3 py-2" onClick={pickRandom}>
        Pick random
      </button>
      <div className="grid max-w-[1000px] grid-flow-row grid-cols-4 gap-x-24 gap-y-6">
        {books.map((book) => {
          return (
            <div key={book.id + book.title} className="w-[250px] border-2 p-2">
              <h2
                onClick={() => handleClick(book.title)}
                className="cursor-pointer text-xl font-bold"
              >
                {book.title}
              </h2>
              <p>
                <span className="text-lg font-bold">Autor:</span> {book.author}
              </p>
              <p>
                <span className="text-lg font-bold">Rok vydání:</span>{" "}
                {book.year_of_publication}
              </p>
              <p>
                <span className="text-lg font-bold">Počet stran:</span>{" "}
                {book.pages}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Books;
