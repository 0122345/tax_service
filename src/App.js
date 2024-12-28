 
import './App.css';
import SideBar from './Components/SideBar';
import HomePage from './Components/HomePage';


function App() {
  return (
    <div className="bg-main w-dvh h-dvh">
      <div className="flex overflow-x-hidden">
         <SideBar />
         <HomePage />
      </div>
    </div>
  );
}

export default App;
