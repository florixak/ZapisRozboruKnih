import { Link, Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center overflow-x-hidden">
      <div className="my-8 flex flex-row gap-16">
        <Link to="/">Home</Link>
        <Link to="/books">Knížky</Link>
        <Link to="/authors">Autoři</Link>
        <Link to="/smery">Umělecké směry</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default App;
