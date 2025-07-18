// App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Signup';
import Login from './Login'; // ✅ Import Login component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} /> {/* ✅ Add login route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
