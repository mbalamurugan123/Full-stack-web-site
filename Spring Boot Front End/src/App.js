import './App.css';
import { Route, Routes } from "react-router-dom";
import Login from './Component/home';
import Register from './Component/register';
import Main from './Component/main';
import Delete from './Component/del';
import Index from './Component/front';
import UpdatePage from './Component/update';
function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/main" element={<Main />} />
      <Route path="/delete" element={<Delete />} />
      <Route path="/front" element={<Index />} />
      <Route path="/update" element={<UpdatePage />} />
      </Routes>
    </div>
  );
}

export default App;