import { Link, Outlet } from "react-router-dom";

const hoverStyle = "hover:text-blue-500 hover:underline";

const App = () => {
  return (
    <div className="flex h-auto w-full flex-col items-center justify-center overflow-x-hidden">
      <div className="my-8 flex flex-col items-center gap-5 text-xl text-black">
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
      <div className="border-2 border-black bg-white">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
