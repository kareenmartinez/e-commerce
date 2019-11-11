import React from "react";
import Products from "../components/Products";
import { connect } from "react-redux";
import { fetchProducts } from "../store/actions/productsAction";
import { fetchProduct } from "../store/actions/searchAction";

import CircularProgress from "@material-ui/core/CircularProgress";

class ProductsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // input: 0

    };
    this.handleAdd = this.handleAdd.bind(this);
    // this.handleRemove = this.handleRemove.bind(this);
  }

  componentDidMount() {
    this.props.mostrarProductos();
  }
  // handleAdd() {
  //   this.setState({ input: this.state.input + 1 })

  // }
  // handleRemove() {
  //   if (this.state.input > 0) { this.setState({ input: this.state.input - 1 }) }


  // }
  handleAdd(e) {
    e.preventDefault()

  }


  render() {
    const { productsState } = this.props;

    if (this.props.cargandoBusqueda.isFetching) {
      return (
        <div style={{ textAlign: "center" }}>
          <CircularProgress
            disableShrink
            style={{ width: "3cm", padding: "5%" }}
          />
        </div>
      );
    }

    return (
      <div
        className="container"
        style={{
          display: "flex",
          frexDirection: "row",
          justifyContent: "space-around",
          flexWrap: "wrap",
          borderRadius: "7px",

          backgroundColor: "black"
        }}
      >
        <Products
          productsState={productsState}
          mostrarBusqueda={this.props.mostrarBusqueda}
          handleAdd={this.handleAdd}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  productsState: state.productsReducer.products,
  cargandoBusqueda: state.productsReducer
});

const mapDispatchToProps = dispatch => {
  return {
    mostrarProductos: () => {
      dispatch(fetchProducts());
    },
    mostrarBusqueda: item => {
      dispatch(fetchProduct(item));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsContainer);
