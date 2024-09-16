import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { authors } from "../data";
import { deformatName, pickRandom } from "../utils";

const AuthorTest = () => {
  const { name } = useParams();
  const author = authors.find((author) => deformatName(author.name) === name);
  const navigate = useNavigate();

  const handleNextClick = () => {
    const newPath = `/authors-test/${deformatName(pickRandom(authors).name)}`;
    navigate(newPath);
  };

  return (
    <div className="mx-auto max-w-4xl rounded-lg p-6 text-black shadow-lg dark:bg-gray-900 dark:text-white">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-3xl font-bold">{author.name}</h1>
        <button
          className="border-2 px-4 py-2 hover:bg-slate-400"
          onClick={() => handleNextClick(pickRandom(author))}
        >
          Next
        </button>
      </div>

      <table className="min-w-full">
        <thead>
          <tr>
            <th className="border-b-2 border-gray-300 px-4 py-2 text-left text-sm font-bold text-gray-600">
              Kritérium
            </th>
            <th className="border-b-2 border-gray-300 px-4 py-2 text-left text-sm font-bold text-gray-600">
              Ověřované vědomosti a dovednosti
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-b border-gray-300 px-4 py-2 font-bold">
              1. Charakteristika uměleckého textu
            </td>
            <td className="border-b border-gray-300 px-4 py-2">
              <ul className="list-inside list-disc">
                <li>literární druh a žánr</li>
                <li>téma</li>
                <li>časoprostor</li>
                <li>zasazení výňatku do kontextu díla</li>
                <li>kompoziční výstavba, veršová výstavba</li>
                <li>postavy a vypravěč / lyrický subjekt</li>
                <li>
                  jazykové prostředky, příp. tropy a figury, a jejich funkce ve
                  výňatku
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="border-b border-gray-300 px-4 py-2 font-bold">
              2. Literárněhistorický kontext
            </td>
            <td className="border-b border-gray-300 px-4 py-2">
              <ul className="list-inside list-disc">
                <li>kontext autorovy tvorby a života</li>
                <li>
                  charakteristika literárního směru nebo skupiny a doložení v
                  textu
                </li>
                <li>literární / obecně kulturní kontext</li>
                <li>soudobí autoři</li>
                <li>souvislost tematiky v jiných kontextech</li>
                <li>historické souvislosti</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="border-b border-gray-300 px-4 py-2 font-bold">
              3. Charakteristika neuměleckého textu
            </td>
            <td className="border-b border-gray-300 px-4 py-2">
              <ul className="list-inside list-disc">
                <li>
                  hlavní myšlenka textu a komunikační situace (např. účel,
                  adresát)
                </li>
                <li>funkční styl, slohový postup, slohový útvar</li>
                <li>kompoziční výstavba výňatku</li>
                <li>jazykové prostředky a jejich funkce ve výňatku</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AuthorTest;
