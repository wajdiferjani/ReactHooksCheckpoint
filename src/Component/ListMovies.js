import React from 'react';
import { Card } from "react-bootstrap";
import StarRatingComponent from 'react-star-rating-component';

const ListMovies = (props) => {
  return (
    <div className="listMovies">
      {props.movies.map((el) => (
        <div className="movie">
          <Card style={{ width: "18rem" }}>

            <Card.Img
              variante="top"
              src={el.image}
              height="250px"
            />

          <Card.Body>
                  <Card.Title>{el.name}</Card.Title>
                  <Card.Text>{el.year}</Card.Text> 
                  <StarRatingComponent value={el.rating}/>
                </Card.Body> 
          </Card>
        </div>
      ))}


    </div>
  );

};


export default ListMovies;