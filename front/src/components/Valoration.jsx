import React from "react";
import StarRatingComponent from 'react-star-rating-component';

function Valoration({ comments }) {
  let count = 0;
  let prom;
  if (comments) {
    comments.map(function (x) {
      return (count += parseInt(x.rating));
    })
    prom = count / comments.length;
  };



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