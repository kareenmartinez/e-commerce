import React, { Component } from 'react'
import Header from "../components/Header.jsx"

export default class HeaderContainer extends Component {
   constructor(props){
       super(props)
   }
    render() {
        
        return (
            <div>
                <Header/>
            </div>
        )
    }
}
