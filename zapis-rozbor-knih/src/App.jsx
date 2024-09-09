import { Link, Outlet } from "react-router-dom";

const hoverStyle = "hover:text-blue-500 hover:underline";

const App = () => {
  return (
    <div className="flex h-auto w-full flex-col items-center justify-center gap-10 overflow-x-hidden font-sans text-black dark:bg-gray-800 dark:text-white">
      <div className="my-8 flex flex-col items-center gap-5 text-xl">
        <Link to="/" className={hoverStyle}>
          Home
        </Link>
        <div className="flex flex-row gap-5">
          <Link to="/books" className={hoverStyle}>
            Knížky
          </Link>
          <Link to="/authors" className={hoverStyle}>
            Autoři
          </Link>
          <Link to="/smery" className={hoverStyle}>
            Umělecké směry
          </Link>
        </div>
      </div>
      <div className="border-2 border-black bg-white dark:bg-gray-600">
        <Outlet />
      </div>

      <div className="mx-auto max-w-4xl rounded-lg p-6 text-black shadow-lg dark:bg-gray-900 dark:text-white">
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
                    jazykové prostředky, příp. tropy a figury, a jejich funkce
                    ve výňatku
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
    </div>
  );
};

export default App;
