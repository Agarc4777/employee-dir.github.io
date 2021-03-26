import Header from "./components/pages/Header"
import Results from './components/pages/Results';
import randomuser from "./Utils/API"
import './App.css';
import { useState, useEffect } from "react";


function App() {
  const [users, setUsers] = useState([]);
  useEffect(
    () => {
      randomuser.Employee().then(res => {
        setUsers(res.data.results)
      })
    }, [])
  return (
    <div className="App">
      <Results
      users={users}
      />

    </div>
  );
}

export default App;
