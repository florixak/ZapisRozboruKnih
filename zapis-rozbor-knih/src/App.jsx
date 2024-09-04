import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="h-full w-full overflow-x-hidden">
      <Outlet />
    </div>
  );
};

export default App;
