

import StarRatings from "react-star-ratings/build/star-ratings";

const RankedVote = () =>{
  return (
    <StarRatings 
      rating={this.state.rating}
      starRatedColor="blue"
      changeRating={this.changeRating}
      numberOfStars={6}
      name='rating'
    />

  )
}