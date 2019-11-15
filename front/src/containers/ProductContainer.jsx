import React from "react";
import { connect } from "react-redux";
import Product from "../components/Product";
import { fetchProduct } from "../store/actions/searchAction";

import { addItem } from "../store/actions/orderAction";

class ProductContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleAdd = this.handleAdd.bind(this);
  }
  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.name);
  }
  handleAdd(e) {
    e.preventDefault();
    console.log(e.target);
    addItem(e.currentTarget.id, this.props.user.id);
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          color: "black",
          borderRadius: "7px"
        }}
      >
        <Product busqueda={this.props.busqueda}
          handleAdd={this.handleAdd} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  busqueda: state.searchReducer.search,

  user: state.userReducer.user
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
)(ProductContainer);
