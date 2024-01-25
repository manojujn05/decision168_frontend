
import './App.css'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import NoPage from './components/NoPage';
function App() {


  return (
  <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/#/dashboard" element={<Dashboard />} />
        <Route path="/#/register" element={<Register />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}


export default App
