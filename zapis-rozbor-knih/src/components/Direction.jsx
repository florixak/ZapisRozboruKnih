import { art_directions } from "../data";
import { useParams } from "react-router-dom";
import { deformatName } from "../utils";

const Direction = () => {
  const { name } = useParams();
  const direction = art_directions.find(
    (dir) => deformatName(dir.name) === name,
  );
  return (
    <div
      key={direction.id}
      className="m-auto flex h-full w-full max-w-[1000px] flex-col items-start justify-center gap-10 border p-4 text-xl"
    >
      <h2 className="text-5xl">{direction.name}</h2>
      <div className="flex flex-col gap-10">
        <p>
          <span className="font-bold">Období:</span> {direction.time_period}
        </p>
        {direction.what_is_it && (
          <p>
            <span className="font-bold">Co to je: </span>
            {direction.what_is_it}
          </p>
        )}
        <div>
          <span className="font-bold">Charakteristické rysy:</span>{" "}
          <div className="ml-5">
            {direction.characteristic_features &&
              direction.characteristic_features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
          </div>
        </div>
        <div>
          <span className="font-bold">Žánry:</span>{" "}
          <div className="ml-5">
            {direction.genres &&
              direction.genres.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
          </div>
        </div>
        {direction.architecture && (
          <div>
            <span className="font-bold">Architektura:</span>{" "}
            <div className="ml-5">
              {direction.architecture &&
                direction.architecture.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
            </div>
          </div>
        )}

        {direction.music && (
          <div>
            <span className="font-bold">Hudba:</span>{" "}
            <div className="ml-5">
              {direction.music &&
                direction.music.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
            </div>
          </div>
        )}

        {direction.phases && (
          <div className="flex flex-col gap-3">
            <div>
              <span className="font-bold">{direction.phases.first.name}</span>
              <div className="ml-5">
                {direction.phases.first.description.map((phase) => (
                  <li key={phase}>{phase}</li>
                ))}
              </div>
            </div>

            <div>
              <span className="font-bold">{direction.phases.second.name}</span>
              <div className="ml-5">
                {direction.phases.second.description.map((phase) => (
                  <li key={phase}>{phase}</li>
                ))}
              </div>
            </div>

            <div>
              <span className="font-bold">{direction.phases.third.name}</span>
              <div className="ml-5">
                {direction.phases.third.description.map((phase) => (
                  <li key={phase}>{phase}</li>
                ))}
              </div>
            </div>
          </div>
        )}
        {direction.main_representatives_object && (
          <div className="flex flex-col">
            <span className="font-bold">Představitelé:</span>{" "}
            <div className="ml-5">
              <div className="flex flex-col gap-2">
                <div>
                  {direction.main_representatives_object.en && (
                    <p className="font-bold">Anglie:</p>
                  )}
                  {direction.main_representatives_object.en &&
                    direction.main_representatives_object.en.map((rep) => (
                      <li key={rep} className="ml-5">
                        {rep}
                      </li>
                    ))}
                </div>
                <div>
                  {direction.main_representatives_object.fr && (
                    <p className="font-bold">Francie:</p>
                  )}
                  {direction.main_representatives_object.fr &&
                    direction.main_representatives_object.fr.map((rep) => (
                      <li key={rep} className="ml-5">
                        {rep}
                      </li>
                    ))}
                </div>

                <div>
                  {direction.main_representatives_object.usa && (
                    <p className="font-bold">USA:</p>
                  )}
                  {direction.main_representatives_object.usa &&
                    direction.main_representatives_object.usa.map((rep) => (
                      <li key={rep} className="ml-5">
                        {rep}
                      </li>
                    ))}
                </div>

                <div>
                  {direction.main_representatives_object.cz && (
                    <p className="font-bold">Česko:</p>
                  )}
                  {direction.main_representatives_object.cz &&
                    direction.main_representatives_object.cz.map((rep) => (
                      <li key={rep} className="ml-5">
                        {rep}
                      </li>
                    ))}
                </div>
              </div>
            </div>
          </div>
        )}
        {direction.main_representatives_array && (
          <div className="flex flex-col">
            <span className="font-bold">Představitelé:</span>{" "}
            {direction.main_representatives_array.map((rep) => {
              return (
                <li key={rep} className="ml-5">
                  {rep}
                </li>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Direction;
