import "./app-filter.css";
let AppFilter = function () {
  return (
    <div className="btn-group">
      <button className="btn btn-light" type="button">
        All Employees
      </button>
      <button className="btn btn-outline-light" type="button">
        Employees the Broadcast
      </button>
      <button className="btn btn-outline-light" type="button">
        Employees wich salary more than 1000$
      </button>
    </div>
  );
};
export default AppFilter;
