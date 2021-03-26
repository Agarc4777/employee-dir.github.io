import Header from "./components/pages/Header"
import Results from './components/pages/Results';
import randomuser from "./Utils/API"
import './App.css';
import { useState, useEffect } from "react";


function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(
    () => {
      randomuser.Employee().then(res => {
        setUsers(res.data.results)
      })
    }, [])
    const handleInputChange = (e) => {
      const {name,value} = e.target
      console.log(name, value)
      setSearch(value);
    }
  return (
    <div className="App">
      <div class="ui input">
        <input type="text" placeholder="Search..." onChange={handleInputChange} name="search"/>
        sear
      </div>
      <Results
      users={users}
      />

    </div>
  );
}

export default App;
