import { authors } from "../data";
import { useParams } from "react-router-dom";
import { deformatName } from "../utils";

const Author = () => {
  const { name } = useParams();
  const author = authors.find((author) => deformatName(author.name) === name);
  return (
    <div
      key={author.id}
      className="m-auto flex h-full w-full max-w-[1000px] flex-col items-start justify-center gap-10 border p-4 text-xl"
    >
      <h2 className="text-5xl">{author.name}</h2>
      <div>
        <p className="ml-5">
          <span className="font-bold">Rok narození:</span> {author.birth_year}
        </p>
      </div>
    </div>
  );
};

export default Author;
