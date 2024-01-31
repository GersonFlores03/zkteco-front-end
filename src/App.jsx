import Register from './components/Register'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Restore from './components/Restore'
import Sesion from './components/Sesion'
import Login from './components/Login';

function App() {

  return (
     <div className="fatherRestore sm:flex justify-center items-center h-screen ">
        <HashRouter>
           <Routes>
              <Route path="/" element={<Sesion />} />
              <Route path="/login" element={<Login />} />
              <Route path="/restore" element={<Restore />} />
              <Route path="/register" element={<Register />} />
           </Routes>
        </HashRouter>
     </div>
  );
}

export default App
