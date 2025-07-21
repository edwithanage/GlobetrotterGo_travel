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
  description: 'Iconic ancient rock fortress in Sri Lanka',
  views: 300,
  distance: 18,
  date: '2023-07-18',
  image: 'https://images.squarespace-cdn.com/content/v1/5a3bb03b4c326d76de73ddaa/1721277162374-NZH5HA2ZCKXVMIQN8ZRU/The_Common_Wanderer_-33-2.jpg?format=1000w'
},


  {
  id: 3,
  name: 'Nuwara Eliya',
  description: 'Cool climate and tea plantations',
  views: 150,
  distance: 10,
  date: '2023-07-12',
  image: 'https://images.squarespace-cdn.com/content/v1/5a3bb03b4c326d76de73ddaa/1550227945246-Y6QA4SZZKM8VWC7ITX6N/The_Common_Wanderer_best_things_to_do_Sri_Lanka-29.jpg'
}
,
   {
  id: 4,
  name: 'Anuradhapura',
  description: 'Ancient city with sacred ruins',
  views: 150,
  distance: 10,
  date: '2023-07-12',
  image: 'https://passportnomads.com/wp-content/uploads/2020/03/20200310_120928-scaled.jpg'
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
