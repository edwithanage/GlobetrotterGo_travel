import React from 'react';
import { useParams, Link } from 'react-router-dom';

const dummyPlaces = [
   {
    id: 1,
    name: 'Ella Rock',
    description: 'Beautiful hike in Sri Lanka',
    views: 100,
    distance: 5,
    date: '2023-07-10',
    image: 'https://images.squarespace-cdn.com/content/v1/5a3bb03b4c326d76de73ddaa/9732566d-6b33-4a1a-ba0c-1b73ed8848a4/The+Common+Wanderer-9888.jpg'
  },
{
  id: 2,
  name: 'Sigiriya',
  description: 'Ancient rock fortress',
  views: 200,
  distance: 20,
  date: '2023-07-15',
  image: 'https://images.squarespace-cdn.com/content/v1/5a3bb03b4c326d76de73ddaa/9732566d-6b33-4a1a-ba0c-1b73ed8848a4/The+Common+Wanderer-9888.jpg'
},

  {
    id: 3,
    name: 'Nuwara Eliya',
    description: 'Cool climate and tea plantations',
    views: 150,
    distance: 10,
    date: '2023-07-12',
    image: 'https://images.squarespace-cdn.com/content/v1/5a3bb03b4c326d76de73ddaa/9732566d-6b33-4a1a-ba0c-1b73ed8848a4/The+Common+Wanderer-9888.jpg'
  },
   {
    id: 4,
    name: 'Anuradhapura',
    description: 'Cool climate and tea plantations',
    views: 150,
    distance: 10,
    date: '2023-07-12',
    image: 'https://images.squarespace-cdn.com/content/v1/5a3bb03b4c326d76de73ddaa/9732566d-6b33-4a1a-ba0c-1b73ed8848a4/The+Common+Wanderer-9888.jpg'
  },
  {
    id: 5,
    name: 'Nuwara Eliya',
    description: 'Cool climate and tea plantations',
    views: 150,
    distance: 10,
    date: '2023-07-12',
    image: 'https://images.squarespace-cdn.com/content/v1/5a3bb03b4c326d76de73ddaa/9732566d-6b33-4a1a-ba0c-1b73ed8848a4/The+Common+Wanderer-9888.jpg'
  },
  {
    id: 6,
    name: 'Nuwara Eliya',
    description: 'Cool climate and tea plantations',
    views: 150,
    distance: 10,
    date: '2023-07-12',
    image: 'https://images.squarespace-cdn.com/content/v1/5a3bb03b4c326d76de73ddaa/9732566d-6b33-4a1a-ba0c-1b73ed8848a4/The+Common+Wanderer-9888.jpg'
  },
  {
    id: 7,
    name: 'Nuwara Eliya',
    description: 'Cool climate and tea plantations',
    views: 150,
    distance: 10,
    date: '2023-07-12',
    image: 'https://images.squarespace-cdn.com/content/v1/5a3bb03b4c326d76de73ddaa/9732566d-6b33-4a1a-ba0c-1b73ed8848a4/The+Common+Wanderer-9888.jpg'
  },
  {
    id: 8,
    name: 'Nuwara Eliya',
    description: 'Cool climate and tea plantations',
    views: 150,
    distance: 10,
    date: '2023-07-12',
    image: 'https://images.squarespace-cdn.com/content/v1/5a3bb03b4c326d76de73ddaa/9732566d-6b33-4a1a-ba0c-1b73ed8848a4/The+Common+Wanderer-9888.jpg'
  }
];

function ReadMore() {
  const { id } = useParams();
  const place = dummyPlaces.find(p => p.id === parseInt(id));

  if (!place) return <p>Place not found</p>;

  return (
    <div style={{ padding: '30px', maxWidth: '800px', margin: 'auto' }}>
      <h2>{place.name}</h2>
      <img src={place.image} alt={place.name} style={{ width: '100%', borderRadius: '10px' }} />
      <p style={{ marginTop: '20px' }}>{place.description}</p>
      <p><strong>Views:</strong> {place.views}</p>
      <p><strong>Distance:</strong> {place.distance} km</p>
      <p><strong>Date:</strong> {place.date}</p>
      <Link to="/travel" className="btn btn-primary mt-3">← Back to Places</Link>
    </div>
  );
}

export default ReadMore;
