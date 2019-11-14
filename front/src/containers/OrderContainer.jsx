import React, { Component } from 'react'
import Order from "../components/Order"

import { addOne } from "../store/actions/orderAction";

import { connect } from "react-redux";

class OrderContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
        this.handleAdd = this.handleAdd.bind(this)
    }
    handleAdd() {



    }


    render() {
        return (
            <div>
                <Order />

            </div>
        )
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderContainer)
