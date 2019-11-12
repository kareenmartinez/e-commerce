import React from "react";
import { connect } from "react-redux";
import Product from "../components/Product";

import { fetchProduct } from "../store/actions/searchAction";

class ProductsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

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
  busqueda: state.searchReducer.search
});

const mapDispatchToProps = dispatch => {
  return {
    mostrarProducto: item => {
      dispatch(fetchProduct(item));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsContainer);
