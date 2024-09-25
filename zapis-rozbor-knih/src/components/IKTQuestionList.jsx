import { useNavigate } from "react-router-dom";
import { ikt_questions } from "../data";

const IKTQuestionList = () => {
  const navigate = useNavigate();
  const pickRandom = () => {
    const random =
      ikt_questions[Math.floor(Math.random() * ikt_questions.length)];
    navigate("/ikt-questions/" + random.id);
  };

  return (
    <div>
      <h1>Seznam IKT otázek</h1>
      <button
        className="my-4 border-2 px-3 py-2 hover:bg-slate-400"
        onClick={pickRandom}
      >
        Pick random
      </button>
      <ul>
        {ikt_questions.map((question) => (
          <li key={question.id} className="ml-10 list-disc">
            {question.id + ". " + question.question}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IKTQuestionList;
