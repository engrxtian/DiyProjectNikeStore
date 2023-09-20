import React, { useState } from 'react';






const ClickableStarRating = ({ initialRating, onRatingChange }) => {
  const [rating, setRating] = useState(initialRating);

  const handleStarClick = (clickedRating) => {
    setRating(clickedRating);
    onRatingChange(clickedRating); // Pass the new rating to the parent component if needed
  };


  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`star ${i <= rating ? 'filled' : ''}`}
          onClick={() => handleStarClick(i)}
        >
          &#9733;
        </span>
      );
    }

    return stars;
  };

  return <div className="rating">{renderStars()}</div>;
};

export default ClickableStarRating;
