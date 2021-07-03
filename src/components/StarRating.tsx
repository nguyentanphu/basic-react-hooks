import React, { useState } from 'react';
import Star from './Star';

export default function StarRating({ totalStar = 5, selectedStars = 0 }) {
  return (
    <>
      {[...Array(totalStar)].map((item, index) => (
        <Star key={index} selected={selectedStars > index} />
      ))}
      <p>
        {selectedStars} of {totalStar}
      </p>
    </>
  );
}
