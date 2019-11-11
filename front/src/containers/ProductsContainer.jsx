import React from "react";
import Products from "../components/Products";
import { connect } from "react-redux";
import { fetchProducts } from "../store/actions/productsAction";

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
        <Products productsState={productsState} handleAdd={this.handleAdd} />
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
