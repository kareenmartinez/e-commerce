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
*/

import React from 'react'
import {connect} from 'react-redux'
import {fetchProducts} from "../store/actions/CategoriesAction"
import FilterCategory from '../components/FilterCategory'

class FilterCategoryContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchProducts(this.props.match.params.country);
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap"
        }}
      >
        <FilterCategory products={this.props.products} />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: item => {
      dispatch(fetchProducts(item));
    }
  };
};

const mapStateToProps = state => ({
  products: state.filterReducer.productsCategory
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterCategoryContainer);
  
