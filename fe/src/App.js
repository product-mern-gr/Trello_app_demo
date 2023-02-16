import {
  Route,
  Routes
} from "react-router-dom";
import './App.css';
import Login from "./Pages/Login/Login";
import Main from "./Pages/Main/Main";
import Menu from "./Pages/Menu/Menu";
import Registration from "./Pages/Registration/Registration";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="login/" element={<Login />} />
        <Route path="registration/" element={<Registration />} />
        <Route path="menu/" element={<Menu />} />
      </Routes>
    </div>
  );
}

export default App;
