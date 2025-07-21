// App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Signup';
import Login from './Login'; // ✅ Import Login component
import TravelPlaces from './TravelPlaces';
import TravelCard from './TravelCard';
import ReadMore from './ReadMore';
import AddTravelPlaceForm from './AddTravelPlaceForm';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} /> {/* ✅ Add login route */}
        <Route path="/travel" element={<TravelPlaces />} />
        <Route path="/place/:id" element={<ReadMore />} />
        <Route path="/add-place" element={<AddTravelPlaceForm />} />
        <Route path="/place/:id" element={<ReadMore />} />


        

      </Routes>
    </BrowserRouter>
  );
}

export default App;
