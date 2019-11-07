import React from "react";
import Products from "../components/Products";
import { connect } from "react-redux";
import { fetchProducts } from "../store/actions/products";

class ProductsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.mostrarProductos();
  }

  render() {
    const { productsState } = this.props;
    return (
      <div>
        <Products productsState={productsState} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  productsState: state.products
});

const mapDispatchToProps = dispatch => {
  return {
    mostrarProductos: () => {
      dispatch(fetchProducts());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsContainer);
