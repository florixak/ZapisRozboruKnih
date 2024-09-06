/* eslint-disable react/prop-types */
const List = ({ list, handleClick, pickRandom }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <h1 className="text-3xl font-bold">Knížky</h1>
      <button className="my-4 border-2 px-3 py-2" onClick={pickRandom}>
        Pick random
      </button>
      <div className="grid w-[1200px] grid-flow-row grid-cols-4 gap-x-12 gap-y-12 p-10">
        {list.map((item) => {
          return (
            <div
              key={item.name}
              className="flex h-[80px] items-center justify-center border-2 p-2"
            >
              <h2
                onClick={() => handleClick(item.name)}
                className="cursor-pointer text-xl font-bold"
              >
                {item.name}
              </h2>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
