import React from "react";
import { connect } from "react-redux";
import Product from "../components/Product";

class ProductsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "black",
          color: "white",
          borderRadius: "7px"
        }}
      >
        <Product busqueda={this.props.busqueda} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  singleProduct: state.productsReducer.products,
  busqueda: state.searchReducer.search,
  cargandoBusqueda: state.productsReducer,
  cargandoProduct: state.productsReducer
});

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsContainer);
