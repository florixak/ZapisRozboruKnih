import { useNavigate } from "react-router-dom";
import { ikt_questions, vap_questions } from "../data";

// eslint-disable-next-line react/prop-types
const QuestionList = ({ type = "ikt" }) => {
  const navigate = useNavigate();
  const list = type === "ikt" ? ikt_questions : vap_questions;

  const pickRandom = () => {
    const random = list[Math.floor(Math.random() * list.length)];
    navigate(`/${type.toLowerCase()}-questions/${random.id}`);
  };

  const handleClick = (id) => {
    navigate(`/${type.toLowerCase()}-questions/${id}`);
  };

  return (
    <div className="p-5">
      <h1>{`Seznam ${type.toUpperCase()} otázek`}</h1>
      <button
        className="my-4 border-2 px-3 py-2 hover:bg-slate-400"
        onClick={pickRandom}
      >
        Pick random
      </button>
      <ul className="flex flex-col gap-3">
        {list.map((question) => (
          <li
            onClick={() => handleClick(question.id)}
            key={question.id}
            className="ml-10 cursor-pointer list-disc"
          >
            {question.id + ". " + question.question}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionList;
