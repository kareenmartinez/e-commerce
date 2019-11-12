import React from "react";
import { connect } from "react-redux";
import Product from "../components/Product";

import { fetchProduct } from "../store/actions/searchAction";

class ProductsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.name);
  }

  render() {
    console.log(this.props.busqueda);

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
  busqueda: state.searchReducer.search
});

const mapDispatchToProps = dispatch => {
  return {
    fetchProduct: item => {
      dispatch(fetchProduct(item));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsContainer);
