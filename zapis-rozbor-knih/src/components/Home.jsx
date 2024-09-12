import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <h1 className="text-3xl font-bold">Vyber si co chceš procvičit:</h1>
      <div className="flex flex-row gap-10 px-32 py-16 text-lg">
        <Link className="border-2 p-2 hover:bg-slate-900" to={"/smery"}>
          Umělecké směry a období
        </Link>
        <Link className="border-2 p-2 hover:bg-slate-900" to={"/authors"}>
          Autoři
        </Link>
        <Link className="border-2 p-2 hover:bg-slate-900" to={"/books"}>
          Knížky
        </Link>
      </div>
    </div>
  );
};

export default Home;
