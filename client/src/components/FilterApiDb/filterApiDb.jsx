import { useDispatch } from "react-redux";
import { api, database, fetchDogs } from "../../store/actions/actions";

export default function FilterDbApi() {
  let dispatch = useDispatch();

  const handleClick = (fn) => {
    dispatch(fn());
  };

  return (
    <div className="apidb">
      <button onClick={(e) => handleClick(fetchDogs, e)} className="button">
        All
      </button>
      <button
        onClick={(e) => handleClick(api, e)}
        className={"button"}
        id="Api"
      >
        Api
      </button>
      <button
        onClick={(e) => handleClick(database, e)}
        className={"button"}
        id="Database"
      >
        Database
      </button>
    </div>
  );
}
