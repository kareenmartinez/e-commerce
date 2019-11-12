import React from "react";
import StarRatingComponent from 'react-star-rating-component';

function Valoration({ comments }) {
  let count = 0;
  comments.map(function(x) {
    return (count += parseInt(x.rating));
  });
  const prom = count / comments.length;

  return (
      <div>
        <StarRatingComponent 
          name="rate1"
          starCount={5}
          value={prom}
          editing={false}
        />
      </div>
    
  );
}

export default Valoration;