import React from "react";
import Products from "../components/Products";
import { connect } from "react-redux";
import { fetchProducts } from "../store/actions/productsAction";

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
    console.log(this.props);
    return (
      <div
        className="container"
        style={{
          display: "flex",
          frexDirection: "row",
          justifyContent: "space-around",
          flexWrap: "wrap"
        }}
      >
        <Products productsState={productsState} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  productsState: state.productsReducer.products
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
