import React from 'react';

const CourseCard = ({ data }) => {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      width: '250px',
      textAlign: 'center',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    }}>
      <img src={data.img} alt={data.name} style={{ width: '180px', height: '120px', objectFit: 'cover' }} />
      <h3 style={{ marginTop: '10px' }}>{data.name}</h3>
      <p>Duration: {data.duration}</p>
      <p>Price: {data.price}</p>
    </div>
  );
};

export default CourseCard;
