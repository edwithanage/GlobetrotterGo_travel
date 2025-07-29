// App.js
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Signup from './Signup';
import Login from './Login';
import TravelPlaces from './TravelPlaces';
import ReadMore from './ReadMore';
import AddTravelPlaceForm from './AddTravelPlaceForm';
import EditTravelPlaceForm from './EditTravelPlaceForm';
import Navbar from './Navbar';
import AdminDashboard from './AdminDashboard';
import Home from './HomePage'; // 👈 NEW Home page

function AppWrapper() {
  const location = useLocation();

  // Hide navbar on login/register page only
  const hideNavbarPaths = ['/login', '/register'];
  const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} /> {/* 👈 Default route (Home page) */}
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/travel" element={<TravelPlaces />} />
        <Route path="/readmore/:id" element={<ReadMore />} />
        <Route path="/add-place" element={<AddTravelPlaceForm />} />
        <Route path="/edit/:id" element={<EditTravelPlaceForm />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}

export default App;
