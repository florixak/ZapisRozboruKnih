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
            Směry / Období
          </Link>
          <Link to="/ikt-questions" className={hoverStyle}>
            IKT Otázky
          </Link>
          <Link to="/vap-questions" className={hoverStyle}>
            VAP Otázky
          </Link>
        </div>
      </div>
      <div className="border-2 border-black bg-white dark:bg-gray-600">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
