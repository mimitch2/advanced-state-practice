import React from "react";
import Reviews from "./Reviews";
import PropTypes from "prop-types";


function ProductDetail(props) {
  const {name,description,rating,imgUrl,reviews} = props.product;
  
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<span className="glyphicon glyphicon-star" />);
  }
  for (let i = 0; i < 5 - rating; i++) {
    stars.push(<span className="glyphicon glyphicon-star-empty" />);
  }

  return (
    <div className="col-sm-4 col-lg-4 col-md-4">
      <div className="thumbnail">
        <img style={{width: "320px",height: "150px"}} src={imgUrl} alt="" />
        <div className="caption">
          <h4><a href="#">{name}</a>
          </h4>
          <p>{description} 
          </p>
        </div>
        <div className="ratings">
          <p className="pull-right">{reviews.length} reviews</p>
          <p>
            {stars}
          </p>
        </div>
        <div className="reviews">
          <Reviews reviews={reviews} />
        </div>
      </div>
    </div>
  );
}

ProductDetail.propTypes = {
  product: PropTypes.object
};

export default ProductDetail;
