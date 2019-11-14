import React, { Component } from "react";
import Order from "../components/Order";
import {
  fetchOrder,
  clickNewAddress,
  fetchAddress
} from "../store/actions/orderAction";
import { connect } from "react-redux";

class OrderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirm: false,
      address: ""
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClickNewAddress = this.handleClickNewAddress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
  }

  componentDidMount() {
    console.log(this.props.user.id, "user pasado a orderc");
    this.props.fetchOrder(this.props.match.params.userId);
    this.props.fetchAddress(this.state.address);
    this.props.order;
  }

  handleClick() {
    this.setState({
      confirm: true
    });
  }

  handleClickNewAddress() {
    this.props.clickNewAddress();
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.fetchAddress(this.state.address);
  }

  handleChangeAddress(e) {
    console.log("entroooooooo");
    this.setState({ address: e.target.value });
    console.log(this.state.address);
  }

  render() {
    return (
      <div>
        <Order
          order={this.props.order}
          handleClick={this.handleClick}
          confirmState={this.state.confirm}
          user={this.props.user}
          clickNewAddressStore={this.props.clickNewAddressStore}
          handleClickNewAddress={this.handleClickNewAddress}
          handleSubmit={this.handleSubmit}
          handleChangeAddress={this.handleChangeAddress}
          address={this.state.address}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    order: state.orderReducer.order,
    user: state.userReducer.user,
    clickNewAddressStore: state.orderReducer.clickNewAddress
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchOrder: userId => {
      dispatch(fetchOrder(userId));
    },
    clickNewAddress: () => {
      dispatch(clickNewAddress());
    },
    fetchAddress: item => {
      dispatch(fetchAddress(item));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderContainer);
