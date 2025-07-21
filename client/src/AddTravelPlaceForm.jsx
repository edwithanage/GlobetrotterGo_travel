import React, { useState } from "react";
import axios from "axios";
import "./AddTravelPlaceForm.css";

function AddTravelPlaceForm() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    views: "",
    distance: "",
    date: "",
    image: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/travel", formData);
      alert("✅ Travel place added!");
      setFormData({
        name: "",
        description: "",
        views: "",
        distance: "",
        date: "",
        image: ""
      });
    } catch (err) {
      console.error("Error adding travel place:", err);
      alert("❌ Failed to add travel place");
    }
  };

  return (
    <div className="add-form-container">
      <h2>Add New Travel Place</h2>
      <form onSubmit={handleSubmit} className="travel-form">
        <input
          type="text"
          name="name"
          placeholder="Place Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="views"
          placeholder="Views"
          value={formData.views}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="distance"
          placeholder="Distance (e.g. 5km)"
          value={formData.distance}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Place</button>
      </form>
    </div>
  );
}

export default AddTravelPlaceForm;
