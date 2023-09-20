// src/components/Card.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import ClickableStarRating from './ClickableStartRating';








const CustomCard = ({ title, content, buttonText, image }) => {
  const [userRating, setUserRating] = React.useState(0); // Initialize userRating to 0
  

  const handleRatingChange = (newRating) => {
    setUserRating(newRating);
  };
  return (
    <Card>
      <Card.Img variant="top" src={image} style={{ width: '200px', height: '200px', border: '2px solid black', }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
        <ClickableStarRating initialRating={userRating} onRatingChange={handleRatingChange} />
        <Button variant="primary">{buttonText}</Button>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
