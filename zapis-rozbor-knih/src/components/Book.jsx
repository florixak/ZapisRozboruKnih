import { books } from "../data";
import { useParams, useNavigate } from "react-router-dom";
import { deformatName } from "../utils";

const Book = () => {
  const { name } = useParams();
  const book = books.find((book) => deformatName(book.name) === name);
  const navigate = useNavigate();

  const handleClick = (name) => {
    const newPath = `/authors/${deformatName(name)}`;
    navigate(newPath);
  };

  return (
    <div
      key={book.id}
      className="m-auto flex h-full max-w-[1000px] flex-col items-start justify-center gap-10 border p-4 pb-10 text-xl"
    >
      <h2 className="text-5xl">{book.name}</h2>
      <div>
        <div className="ml-5 flex gap-2">
          <span className="font-bold">Autor:</span>
          <p
            onClick={() => handleClick(book.author)}
            className="cursor-pointer hover:text-blue-500 hover:underline"
          >
            {book.author}
          </p>
        </div>
        <p className="ml-5">
          <span className="font-bold">Rok vydání:</span>{" "}
          {book.year_of_publication}
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
          {book.literary_druh}
        </p>
      </div>

      <div className="ml-5 flex flex-col gap-1">
        <ul className="flex flex-row gap-2">
          <span className="font-bold">Časoprostor:</span>{" "}
          {book.space_time &&
            book.space_time.map((spaceTime) => (
              <li key={spaceTime}>{spaceTime}</li>
            ))}
        </ul>
        <p>
          <span className="font-bold">Kompozice:</span> {book.composition}
        </p>
        <p>
          <span className="font-bold">Vypravěč:</span> {book.narrator}
        </p>
        <p>
          <span className="font-bold">Téma:</span>{" "}
          {book.summary && book.summary}
        </p>
        <div>
          <span className="font-bold">Motivy:</span>{" "}
          {book.themes && book.themes.join(", ")}
        </div>
      </div>

      <div className="ml-5 flex flex-col gap-2">
        <ul className="flex flex-row gap-1">
          <span className="font-bold">Jazykové prostředky:</span>
          {book.dictionary &&
            book.dictionary.language.map((item, index) => {
              return (
                <li key={index}>
                  <p>{item}</p>
                </li>
              );
            })}
        </ul>
        <div className="flex gap-1">
          <span className="font-bold">Tropy:</span>{" "}
          <ul className="flex flex-col">
            {book.dictionary &&
              book.dictionary.tropy.map((item, index) => {
                return (
                  <li key={index}>
                    <p>{item}</p>
                  </li>
                );
              })}
          </ul>
        </div>
        <ul className="flex flex-row gap-1">
          <span className="font-bold">Figury:</span>{" "}
          {book.dictionary &&
            book.dictionary.figury.map((item, index) => {
              return (
                <li key={index}>
                  <p>{item}</p>
                </li>
              );
            })}
        </ul>
      </div>

      <div className="ml-5 flex flex-col">
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
      <div className="ml-5 flex flex-col gap-5">
        <p className="flex flex-col">
          <span className="font-bold">Děj:</span> {book.plot_summary}
        </p>
      </div>
    </div>
  );
};

export default Book;
