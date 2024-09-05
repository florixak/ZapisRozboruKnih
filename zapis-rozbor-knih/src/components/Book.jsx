import { books } from "../data";
import { useParams } from "react-router-dom";
import { deformatName } from "../utils";

const Book = () => {
  const { name } = useParams();
  const book = books.find((book) => deformatName(book.title) === name);
  return (
    <div
      key={book.id}
      className="m-auto flex h-full w-full max-w-[1000px] flex-col items-start justify-center gap-10 border p-4 text-xl"
    >
      <h2 className="text-5xl">{book.title}</h2>
      <div>
        <p className="ml-5">
          <span className="font-bold">Autor:</span> {book.author}
        </p>
        <p className="ml-5">
          <span className="font-bold">Rok vydání:</span>{" "}
          {book.year_of_publication}
        </p>
        <p className="ml-5">
          <span className="font-bold">Počet stran:</span> {book.pages}
        </p>
      </div>

      <div className="ml-5 flex flex-col gap-1">
        <p>
          <span className="font-bold">Literární žánr:</span>{" "}
          {book.literary_genre}
        </p>
        <p>
          <span className="font-bold">Literární forma:</span>{" "}
          {book.literary_form}
        </p>
        <p>
          <span className="font-bold">Literární druh:</span>{" "}
          {book.literary_species}
        </p>
      </div>

      <div className="ml-5 flex flex-col gap-1">
        <p>
          <span className="font-bold">Téma:</span>{" "}
          {book.themes && book.themes.join(", ")}
        </p>
        <p>
          <span className="font-bold">Časoprostor:</span>{" "}
          {book.space_time && book.space_time.join(", ")}
        </p>
        <p>
          <span className="font-bold">Kompozice:</span> {book.composition}
        </p>
        <p>
          <span className="font-bold">Vypravěč:</span> {book.narrator}
        </p>
      </div>

      <div className="ml-5 flex flex-col gap-1">
        <span className="font-bold">Hlavní postavy:</span>
        <ul className="ml-5 list-disc text-lg">
          {book.main_characters &&
            book.main_characters.map((character, index) => {
              return (
                <li key={index} className="my-2 ml-5">
                  <span className="font-bold">{character.name}</span>:{" "}
                  <p>{character.description}</p>
                </li>
              );
            })}
        </ul>
      </div>
      <div className="my-10 flex flex-col gap-5">
        <p className="ml-5">
          <span className="font-bold">Děj:</span> {book.plot_summary}
        </p>
        <p className="ml-5">
          <span className="font-bold">Literární kontext:</span>{" "}
          {book.literary_context}
        </p>
        <p className="ml-5">
          <span className="font-bold">Hlavní myšlenka:</span>{" "}
          {book.main_message}
        </p>
      </div>
    </div>
  );
};

export default Book;
