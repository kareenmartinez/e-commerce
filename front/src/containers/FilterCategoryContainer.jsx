// import React from "react";
// import { connect } from "react-redux";
// import { fetchProducts } from "../store/actions/categoriesAction";
// import FilterCategory from "../components/FilterCategory";

// class FilterCategoryContainer extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       products: []
//     };
//   }
//   componentDidMount() {
//     const fetch = this.props.fetchProducts();
//     this.setState({ products: fetch });
//   }
//   render() {
//     return (
//       <div>
//         <h1>hola</h1>
//         <FilterCategory products={this.state.products} />
//       </div>
//     );
//   }
// }
// const mapDispatchToProps = dispatch => {
//   return {
//     fetchProducts: () => {
//       dispatch(fetchProducts());
//     }
//   };
// };

// const mapStateToProps = state => ({
//   products: state.filterReducer.products
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(FilterCategoryContainer);
