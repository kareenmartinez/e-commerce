import React, { Component } from "react";
import Order from "../components/Order";
import { fetchOrder } from "../store/actions/orderAction";
import { connect } from "react-redux";

import { addOne, minusOne } from "../store/actions/orderAction";


class OrderContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.handleSum = this.handleSum.bind(this);
        this.handleSubst = this.handleSubst.bind(this)

    }
    componentDidMount() {
        console.log(this.props.user.id, "user pasado a orderc");
        this.props.fetchOrder(this.props.user.id);
    }
    handleSum(e) {
        e.preventDefault();
        console.log(this.props.order, "la ordeeer")
        this.props.addOne(e.currentTarget.id, this.props.user.id)

        console.log(this.props.order, "la ordeeer despues de añadir")

    }
    handleSubst(e) {
        e.preventDefault();
        console.log(this.props.order, "la ordeeer")
        this.props.minusOne(e.currentTarget.id, this.props.user.id)



        console.log(this.props.order, "la ordeeer despues de restar")

    }




    render() {
        return (
            <div>
                <Order order={this.props.order} handleSum={this.handleSum} handleSubst={this.handleSubst} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        order: state.orderReducer.order,
        user: state.userReducer.user,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchOrder: userId => {
            dispatch(fetchOrder(userId));
        },
        addOne: (itemId, userId) => {
            dispatch(addOne(itemId, userId))
        },
        minusOne: (itemId, userId) => {
            dispatch(minusOne(itemId, userId))
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderContainer);
