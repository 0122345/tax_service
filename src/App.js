 
import './App.css';
import SideBar from './Components/SideBar';
import HomePage from './Components/HomePage';
import Car from './Components/Car';


function App() {
  return (
    <div className="bg-main w-dvh h-dvh flex">
       <SideBar />
      <div className="flex flex-col overflow-x-hidden">
         <HomePage />
         {/* <Car /> */}
      </div>
    </div>
  );
}

export default App;
