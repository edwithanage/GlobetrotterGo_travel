import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './AddTravelPlaceForm.css';
import './EditTravelPlaceForm.css';


function EditTravelPlaceForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: '',
    views: '',
    distance: '',
    date: '',
  });

  useEffect(() => {
    fetch(`http://localhost:3001/travel/${id}`)
      .then(res => res.json())
      .then(data => setFormData(data))
      .catch(err => console.error('Failed to load data:', err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3001/travel/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then(res => res.json())
      .then(() => navigate(`/place/${id}`))
      .catch(err => console.error('Update failed:', err));
  };

  return (
    <form className="travel-form" onSubmit={handleSubmit}>
      <h2>Edit Travel Place</h2>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
      <input name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" />
      <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
      <input name="views" value={formData.views} onChange={handleChange} placeholder="Views" type="number" />
      <input name="distance" value={formData.distance} onChange={handleChange} placeholder="Distance (km)" type="number" />
      <input name="date" value={formData.date?.slice(0, 10)} onChange={handleChange} type="date" />
      <button type="submit">Update Place</button>
    </form>
  );
}

export default EditTravelPlaceForm;
