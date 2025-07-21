import React, { useState } from 'react';

function AddTravelPlaceForm() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    views: '',
    distance: '',
    date: '',
    image: ''
  });

  const handleChange = e => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/travel', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Travel place added successfully!');
        setFormData({
          name: '',
          description: '',
          views: '',
          distance: '',
          date: '',
          image: ''
        });
      } else {
        alert('Failed to add travel place.');
      }
    } catch (error) {
      console.error('Error adding place:', error);
      alert('Error occurred.');
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      <h2>Add New Travel Place</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Place Name"
          value={formData.name}
          onChange={handleChange}
          required
        /><br /><br />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        /><br /><br />
        <input
          type="number"
          name="views"
          placeholder="Views"
          value={formData.views}
          onChange={handleChange}
        /><br /><br />
        <input
          type="number"
          name="distance"
          placeholder="Distance (km)"
          value={formData.distance}
          onChange={handleChange}
        /><br /><br />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        /><br /><br />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
        /><br /><br />
        <button type="submit">Add Place</button>
      </form>
    </div>
  );
}

export default AddTravelPlaceForm;
