import React, { Component } from "react";
import Order from "../components/Order";
import { connect } from "react-redux";
import {
  buyProduct,
  dropOrder,
  fetchOrder
} from "../store/actions/orderAction";

class OrderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(this.props.user.id, "user pasado a orderc");
    this.props.fetchOrder(this.props.user.id);
  }

  render() {
    console.log("ESTAS SON LAS PROPS.USER", this.props.user);
    return (
      <div>
        <Order
          user={this.props.user}
          buyProduct={this.props.buyProduct}
          dropOrder={this.props.dropOrder}
          order={this.props.order}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    order: state.orderReducer.order,
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
    },
    fetchOrder: userId => {
      dispatch(fetchOrder(userId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderContainer);
