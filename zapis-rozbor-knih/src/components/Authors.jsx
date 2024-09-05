import { useNavigate } from "react-router-dom";
import { authors } from "../data";
import { deformatName } from "../utils";

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
    <div className="flex flex-col items-center justify-center gap-5">
      <h1 className="text-3xl font-bold">Autoři</h1>
      <button className="my-4 border-2 px-3 py-2" onClick={pickRandom}>
        Pick random
      </button>
      <div className="grid max-w-[1000px] grid-flow-row grid-cols-4 gap-28">
        {authors.map((author) => {
          return (
            <div
              key={author.id + author.name}
              className="w-[250px] border-2 p-2"
            >
              <h2
                onClick={() => handleClick(author.name)}
                className="cursor-pointer text-xl font-bold"
              >
                {author.name}
              </h2>
              <p>
                {author.works &&
                  author.works.map((item) => <p key={item}>{item.title}</p>)}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Authors;
