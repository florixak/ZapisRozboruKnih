import { useParams } from "react-router-dom";
import { ikt_questions, vap_questions } from "../data";

// eslint-disable-next-line react/prop-types
const Question = ({ type = "ikt" }) => {
  const { id } = useParams();
  const list = type === "ikt" ? ikt_questions : vap_questions;
  const question = list.find((question) => question.id === parseInt(id));

  return (
    <div className="flex w-[800px] flex-col gap-5 bg-gray-600 p-5 text-white">
      <p className="font-bold">{question.id + ". " + question.question}</p>
      <ul className="text-md">
        {question.answer.map((item) => (
          <li
            key={item}
            className={`${item.includes("&l") ? "text-xl font-bold" : null}`}
          >
            {item.replace("&l", "")}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
