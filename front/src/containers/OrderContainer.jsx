import React, { Component } from "react";
import Order from "../components/Order";
import {
  buyProduct,
  dropOrder,
  fetchOrder,
  addOne,
  minusOne,
  clickNewAddress,
  fetchAddress,
  fetchHistory
} from "../store/actions/orderAction";
import History from "../components/History";

import { connect } from "react-redux";

class OrderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirm: false,
      address: "",
      historyClick: false
    };
    this.handleSum = this.handleSum.bind(this);
    this.handleSubst = this.handleSubst.bind(this);

    this.handleClick = this.handleClick.bind(this);
    this.handleClickNewAddress = this.handleClickNewAddress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleHistory = this.handleHistory.bind(this);
  }
  componentDidMount() {
    console.log(this.props.user.id, "user pasado a orderc");
    this.props.fetchOrder(this.props.match.params.userId);
    this.props.fetchAddress(this.state.address);
    this.props.order;
  }
  handleSum(e) {
    e.preventDefault();
    console.log(this.props.order, "la ordeeer");
    this.props.addOne(e.currentTarget.id, this.props.user.id);

    console.log(this.props.order, "la ordeeer despues de añadir");
  }
  handleSubst(e) {
    e.preventDefault();
    console.log(this.props.order, "la ordeeer");
    this.props.minusOne(e.currentTarget.id, this.props.user.id);

    console.log(this.props.order, "la ordeeer despues de restar");
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
  handleHistory(e) {
    e.preventDefault();
    this.props.fetchHistory(e.currentTarget.id);
    this.setState({ historyClick: true });
  }

  render() {
    return (
      <div>
        <Order
          order={this.props.order}
          handleSum={this.handleSum}
          handleSubst={this.handleSubst}
          user={this.props.user}
          buyProduct={this.props.buyProduct}
          dropOrder={this.props.dropOrder}
          handleClick={this.handleClick}
          clickNewAddressStore={this.props.clickNewAddressStore}
          confirmState={this.state.confirm}
          handleClickNewAddress={this.handleClickNewAddress}
          handleSubmit={this.handleSubmit}
          handleChangeAddress={this.handleChangeAddress}
          address={this.state.address}
        />
        <History
          handleHistory={this.handleHistory}
          user={this.props.user}
          history={this.props.history}
          historyClick={this.state.historyClick}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    history: state.orderReducer.history,
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
    addOne: (itemId, userId) => {
      dispatch(addOne(itemId, userId));
    },
    minusOne: (itemId, userId) => {
      dispatch(minusOne(itemId, userId));
    },
    dropOrder: () => {
      dispatch(dropOrder());
    },
    buyProduct: user => {
      dispatch(buyProduct(user));
    },
    clickNewAddress: () => {
      dispatch(clickNewAddress());
    },
    fetchAddress: item => {
      dispatch(fetchAddress(item));
    },
    fetchHistory: userId => {
      dispatch(fetchHistory(userId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderContainer);
