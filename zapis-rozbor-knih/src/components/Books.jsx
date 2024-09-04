import { useNavigate } from "react-router-dom";
import { books } from "../data";

const Books = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    const newPath = `/book/${id}`;
    navigate(newPath, { replace: true });
  };
  return (
    <div className="grid max-w-[1000px] grid-flow-row grid-cols-4 gap-20">
      {books.map((book) => {
        return (
          <div key={book.id + book.title} className="">
            <h2
              onClick={() => handleClick(book.id)}
              className="text-xl font-bold"
            >
              {book.title}
            </h2>
            <p>
              <span className="text-lg">Autor:</span> {book.author}
            </p>
            <p>
              <span className="text-lg">Rok vydání:</span>{" "}
              {book.year_of_publication}
            </p>
            <p>
              <span className="text-lg">Počet stran:</span> {book.pages}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Books;
