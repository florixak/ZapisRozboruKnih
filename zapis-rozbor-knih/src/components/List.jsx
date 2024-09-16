/* eslint-disable react/prop-types */
const List = ({ list, handleClick, handleTestClick, pickRandom }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <h1 className="text-3xl font-bold">Knížky</h1>
      <div className="flex w-full flex-row items-center justify-center gap-16">
        <button
          className="my-4 border-2 px-3 py-2 hover:bg-slate-400"
          onClick={pickRandom}
        >
          Pick random
        </button>
        <button
          className="my-4 border-2 px-3 py-2 hover:bg-slate-400"
          onClick={handleTestClick}
        >
          Test
        </button>
      </div>

      <div className="grid w-[1200px] grid-flow-row grid-cols-1 gap-x-12 gap-y-12 p-10 md:grid-cols-4">
        {list.map((item) => {
          return (
            <div
              key={item.name}
              onClick={() => handleClick(item.name)}
              className="flex h-[80px] cursor-pointer items-center justify-center border-2 bg-gray-300 p-2 hover:bg-slate-400 dark:bg-gray-700"
            >
              <h2 className="text-xl font-bold">{item.name}</h2>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
