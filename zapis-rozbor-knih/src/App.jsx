import { Link, Outlet } from "react-router-dom";

const hoverStyle = "hover:text-blue-500 hover:underline";

const App = () => {
  return (
    <div className="flex h-auto w-full flex-col items-center justify-center overflow-x-hidden dark:bg-gray-800 dark:text-white">
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
      <Outlet />
    </div>
  );
};

export default App;
