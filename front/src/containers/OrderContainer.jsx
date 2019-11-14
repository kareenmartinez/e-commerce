import React, { Component } from "react";
import Order from "../components/Order";
import { connect } from "react-redux";
import { buyProduct, dropOrder } from "../store/actions/orderAction";

class OrderContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("ESTAS SON LAS PROPS.USER", this.props.user);

    return (
      <div>
        <Order
          user={this.props.user}
          buyProduct={this.props.buyProduct}
          dropOrder={this.props.dropOrder}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyProduct: item => {
      dispatch(buyProduct(item));
    },
    dropOrder: () => {
      dispatch(dropOrder());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderContainer);
