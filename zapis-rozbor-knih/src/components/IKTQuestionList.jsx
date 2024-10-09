import { useNavigate } from "react-router-dom";
import { ikt_questions } from "../data";

const IKTQuestionList = () => {
  const navigate = useNavigate();

  const pickRandom = () => {
    const random =
      ikt_questions[Math.floor(Math.random() * ikt_questions.length)];
    navigate("/ikt-questions/" + random.id);
  };

  const handleClick = (id) => {
    navigate("/ikt-questions/" + id);
  };

  return (
    <div className="p-5">
      <h1>Seznam IKT otázek</h1>
      <button
        className="my-4 border-2 px-3 py-2 hover:bg-slate-400"
        onClick={pickRandom}
      >
        Pick random
      </button>
      <ul className="flex flex-col gap-3">
        {ikt_questions.map((question) => (
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

export default IKTQuestionList;
