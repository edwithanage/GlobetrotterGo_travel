// App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Signup';
import Login from './Login';
import TravelPlaces from './TravelPlaces';
import TravelCard from './TravelCard';
import ReadMore from './ReadMore';
import AddTravelPlaceForm from './AddTravelPlaceForm';
import EditTravelPlaceForm from './EditTravelPlaceForm';
import Navbar from './Navbar'; // ✅ Import Navbar

function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* ✅ Add Navbar at the top */}
      <Routes>
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/travel" element={<TravelPlaces />} />
        <Route path="/place/:id" element={<ReadMore />} />
        <Route path="/add-place" element={<AddTravelPlaceForm />} />
        <Route path="/edit/:id" element={<EditTravelPlaceForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
