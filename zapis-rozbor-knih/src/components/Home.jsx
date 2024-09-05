import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <h1 className="text-3xl font-bold">Vyber si co chceš procvičit:</h1>
      <div className="flex flex-row gap-10 text-lg">
        <Link className="border-2 p-2" to={"/smery"}>
          Umělecké směry
        </Link>
        <Link className="border-2 p-2" to={"/authors"}>
          Autoři
        </Link>
        <Link className="border-2 p-2" to={"/books"}>
          Knížky
        </Link>
      </div>
    </div>
  );
};

export default Home;
