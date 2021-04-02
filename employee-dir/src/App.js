import Header from "./components/pages/Header"
import Results from './components/pages/Results';
import randomuser from "./Utils/API"
import './App.css';
import { useState, useEffect } from "react";


function App() {
  const [users, setUsers] = useState([]);
  const [sortedUsers, setsortedUsers] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(
    () => {
      randomuser.Employee().then(res => {
        setsortedUsers(res.data.results)
        setUsers(res.data.results)
      })
    }, [])
    const handleInputChange = (e) => {
      const {name,value} = e.target
      console.log(name, value)
      setSearch(value);
    }
    console.log(sortedUsers);
  return (
    <div className="App">
      <div class="ui input">
        <input type="text" placeholder="Search..." onChange={handleInputChange} name="search"/>
      </div>
      <Header />
      <Results
      setsortedUsers= {setsortedUsers}
      sortedUsers= {sortedUsers.filter(user => user.name.first.toLowerCase().search(search.toLowerCase()) !== -1)}
      />

    </div>
  );
}

export default App;
