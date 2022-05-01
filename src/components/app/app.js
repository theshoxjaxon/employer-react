import AppInfo from "../app-info/app-info";
import "./app.css";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employers-list/employers-list";
import EmployeesAddForm from "../employers-add-form/employers-add-form";
function App() {
  const data = [
    { name: "Shawn", salary: 16000, increase: false },
    { name: "Sator", salary: 18000, increase: true },
    { name: "Alish", salary: 16000, increase: true },
  ];

  return (
    <div className="app">
      <AppInfo></AppInfo>

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployeesList data={data} />
      <EmployeesAddForm />
    </div>
  );
}
export default App;
