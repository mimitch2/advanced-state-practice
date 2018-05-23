import React, { Component } from "react";
// import PropTypes from "prop-types";



class Reviews extends Component {

  state = {
    visable: false
  }
  
  listReview() {
    if (this.state.visable) {
      return (
        this.props.reviews.map((rev, key) => {
          const text = rev.description;
          return (<li key={key}>{text}</li>);
        })
      );
    }
    return ( <div></div> );
  }

  handleClick() {
    if (this.state.visable) {
      this.setState({ visable: false });
    } else {
      this.setState({ visable: true });
    }
  }

  showHide() {
    if (this.state.visable) {
      return "Hide";
    }
    return "Show";
  }
 
  render() { 
    return ( 
      <div>
        <button style={{marginBottom: "5px"}} 
          onClick={() => this.handleClick()}>{this.showHide()}</button>
        {this.listReview()}
      </div>
    );
  }
}
 
export default Reviews;
