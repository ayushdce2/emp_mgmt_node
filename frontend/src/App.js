import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login  from "./components/Login";
import AdminDashboard from "./components/admin/AdminDashboard";
import AdminAddEmp from "./components/admin/AdminAddEmp";
import AdminComingSoon from "./components/admin/AdminComingSoon";


function App() {
  return (
    <>
      <BrowserRouter future={{
    v7_startTransition: true,v7_relativeSplatPath: true,
  }}>
        
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/addEmp" element={<AdminAddEmp />} />
            <Route path="/admin/comingsoon" element={<AdminComingSoon />} />
          </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
