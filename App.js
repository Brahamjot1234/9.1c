import { Routes, Route } from 'react-router-dom';
import Signup from './signup';
import Login from './login';
import './App.css';
import TopBar from './navigation';
import Logout from './logout';

function App() {
  return (
    // <Bar/>
    <div className="App">
      <Routes>
        <Route path="/" element={<TopBar/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Logout" element={<Logout/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
