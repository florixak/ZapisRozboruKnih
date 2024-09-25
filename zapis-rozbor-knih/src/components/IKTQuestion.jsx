import { useParams } from "react-router-dom";
import { ikt_questions } from "../data";

const IKTQuestion = () => {
  const { id } = useParams();
  const question = ikt_questions.find(
    (question) => question.id === parseInt(id),
  );
  console.log(question);
  return (
    <div className="flex flex-col gap-5 bg-slate-900 text-white">
      <p className="font-bold">{question.id + ". " + question.question}</p>
      <ul>
        {question.answer.map((item) => (
          <li
            key={item}
            className={`${item.includes("&l") ? "font-bold" : null}`}
          >
            {item.replace("&l", "")}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IKTQuestion;
