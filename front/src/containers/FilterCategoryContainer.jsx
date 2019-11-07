/**Natalia 2- Como usuario no logueado quiero poder 
 * filtrar productos por categoría para acortar la búsqueda
 * 
 * Descripcion:
Si presionamos una categoría debe mostrar los productos de la 
categoría seleccionada, si, presiono otra categoría, debería dejar 
de mostrar los productos de la categoría anterior y mostrar los 
productos de la categoría nueva.

Si al presionar un filtro no consigue coincidencias debe mostrar 
un "not found"


el dato vienen de hacer click en el boton, y con ello busco los
items que coincidan en la lista

crear dummie y enviarle la data para que renderice
 
 *  */

import React from 'react'
import {connect} from 'react-redux'
 import {fetchProducts} from "../store/actions/CategoriesAction"
import FilterCategory from '../components/FilterCategory'

class FilterCategoryContainer extends React.Component {

  constructor(){
    super()
    this.state={
      products:[]
    }
  }
componentDidMount(){
  const fetch= this.props.fetchProducts()
  this.setState({products: fetch})
}
    render() {
        return (
            <div>
              <h1>hola</h1>
                <FilterCategory products={this.state.products}/>
            </div>
        )
    }
};
 const mapDispatchToProps = dispatch => {
   return {
     fetchProducts: () => {
       dispatch(fetchProducts());
     }
   }
}


 const mapStateToProps = state => ({
  products: state.filterReducer.products
 });

 export default connect(     mapStateToProps,
     mapDispatchToProps
  )(FilterCategoryContainer);
  