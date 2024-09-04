import { books } from "../data";

// eslint-disable-next-line react/prop-types
const Book = ({ id }) => {
  const book = books[id];
  console.log(book);
  return (
    <div
      key={book.id}
      className="m-auto flex h-full w-full max-w-[1000px] flex-col items-start justify-center border p-4 text-xl"
    >
      <h2 className="text-5xl">{book.title}</h2>
      <div className="my-10">
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

      <div className="my-10">
        <p className="ml-5">
          <span className="font-bold">Literární žánr:</span>{" "}
          {book.literary_genre}
        </p>
        <p className="ml-5">
          <span className="font-bold">Literární forma:</span>{" "}
          {book.literary_form}
        </p>
        <p className="ml-5">
          <span className="font-bold">Literární druh:</span>{" "}
          {book.literary_species}
        </p>
      </div>

      <div className="my-10">
        <p className="ml-5">
          <span className="font-bold">Téma:</span> {book.themes.join(", ")}
        </p>
        <p className="ml-5">
          <span className="font-bold">Časoprostor:</span>{" "}
          {book.space_time.join(", ")}
        </p>
        <p className="ml-5">
          <span className="font-bold">Kompozice:</span> {book.composition}
        </p>
        <p className="ml-5">
          <span className="font-bold">Vypravěč:</span> {book.narrator}
        </p>
      </div>

      <div className="my-10 ml-5">
        <span className="font-bold">Hlavní postavy:</span>
        <ul className="list-disc">
          {book.main_characters.map((character, index) => {
            return (
              <li key={index} className="my-2 ml-5">
                <span className="font-bold">{character.name}</span>:{" "}
                <p>{character.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="ml-5">
        <span className="font-bold">Děj:</span> {book.plot_summary}
      </p>
      <p className="ml-5">
        <span className="font-bold">Literární kontext:</span>{" "}
        {book.literary_context}
      </p>
      <p className="ml-5">
        <span className="font-bold">Hlavní myšlenka:</span> {book.main_message}
      </p>
    </div>
  );
};

export default Book;
