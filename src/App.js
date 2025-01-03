import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import './App.css';
import SideBar from './Components/SideBar';
import HomePage from './Components/HomePage';
import Car from './Components/Car';
import Favourite from './Components/Favourite';
import House from './Components/House';
import Settings from './Components/Settings';
import History from './Components/History';

function App() {
  return (
    <Router>
      <div className="bg-main w-dvh h-dvh flex">
        <SideBar />
        <div className="flex flex-col overflow-x-hidden">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/car" element={<Car />} />
            <Route path="/favourite" element={<Favourite />} />
            <Route path="/house" element={<House />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
