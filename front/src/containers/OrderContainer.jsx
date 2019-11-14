import React, { Component } from "react";
import Order from "../components/Order";
import { fetchOrder } from "../store/actions/orderAction";
import { connect } from "react-redux";

import { addOne } from "../store/actions/orderAction";

import { connect } from "react-redux";

class OrderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleAdd = this.handleAdd.bind(this)
  }
   handleAdd() {



}

  componentDidMount() {
    console.log(this.props.user.id, "user pasado a orderc");
    this.props.fetchOrder(this.props.user.id);
  }

  render() {
    return (
      <div>
        <Order order={this.props.order} />
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
    fetchOrder: userId => {
      dispatch(fetchOrder(userId));
    },
    handleAdd: us
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderContainer);
