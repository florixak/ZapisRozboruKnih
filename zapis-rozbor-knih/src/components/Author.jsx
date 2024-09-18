import { authors } from "../data";
import { useParams } from "react-router-dom";
import { deformatName } from "../utils";
import { useNavigate } from "react-router-dom";

const Author = () => {
  const { name } = useParams();
  const author = authors.find((author) => deformatName(author.name) === name);
  const navigate = useNavigate();
  const handleClick = (url) => {
    if (url === "" || url === null || url === undefined) return;
    navigate(deformatName(url));
  };
  return (
    <div
      key={author.id}
      className="m-auto flex h-full max-w-[1000px] flex-col items-start justify-center gap-10 border p-4 py-12 text-xl"
    >
      <h2 className="my-auto flex flex-row items-center gap-5 text-5xl font-bold">
        {author.name} <span className="text-base">({author.birth_year})</span>
      </h2>
      <div className="flex flex-col gap-10">
        <div className="flex flex-row gap-1">
          <span className="font-bold underline">Období:</span>
          <p
            className="cursor-pointer hover:text-blue-500 hover:underline"
            onClick={() => handleClick("/smery/" + author.art_direction)}
          >
            {author.art_direction}
          </p>
        </div>

        <div>
          <span className="font-bold underline">Život:</span>
          <ul className="flex flex-col gap-1">
            {author.interest &&
              author.interest.map((interest) => (
                <li key={interest} className="ml-10 list-disc">
                  {interest}
                </li>
              ))}
          </ul>
        </div>

        <div>
          <span className="font-bold underline">Hlavní znaky:</span>
          <ul>
            {author.main_chars &&
              author.main_chars.map((char) => (
                <li key={char} className="ml-10 list-disc">
                  {char}
                </li>
              ))}
          </ul>
        </div>

        <div>
          <span className="font-bold underline">Co psal:</span>
          <ul>
            {author.what_he_wrote &&
              author.what_he_wrote.map((item) => (
                <li key={item} className="ml-10 list-disc">
                  {item}
                </li>
              ))}
          </ul>
        </div>

        <div>
          <span className="font-bold underline">Díla:</span>
          <ul>
            {author.works &&
              author.works.map((work) => (
                <li
                  key={work.name}
                  className={`ml-10 list-disc ${work.url && "cursor-pointer hover:text-blue-500 hover:underline"}`}
                  onClick={() => handleClick(work.url)}
                >
                  {work.name}
                </li>
              ))}
          </ul>
        </div>

        <div>
          <span className="font-bold underline">Soudobí autoři:</span>
          <ul>
            {author.authors &&
              author.authors.map((author) => (
                <li key={author} className="ml-10 list-disc">
                  {author}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Author;
