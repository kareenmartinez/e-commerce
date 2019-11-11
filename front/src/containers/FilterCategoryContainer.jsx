import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../store/actions/CategoriesAction";
import FilterCategory from "../components/FilterCategory";

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
