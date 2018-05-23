import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ProductDetail from "./components/ProductDetail";
import Carousel from "./components/Carousel";
import PropTypes from "prop-types";

function App(props) {

  const products = props.state.products.map(function (prod, index) {
    return <ProductDetail product={prod} key={index} />;
  });
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <p className="lead">Shop Name</p>
            <div className="list-group">
              <a href="#" className="list-group-item">Category 1</a>
              <a href="#" className="list-group-item">Category 2</a>
              <a href="#" className="list-group-item">Category 3</a>
            </div>
          </div>
          <div className="col-md-9">
            <Carousel />
            <div className="row">
              {products}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

App.propTypes = {
  state: PropTypes.object
};

export default App;
