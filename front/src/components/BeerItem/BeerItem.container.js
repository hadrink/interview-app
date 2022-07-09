import { connect } from "react-redux";
import { rateBeer } from "../../redux/state/beers";
import { BeerItem } from "./BeerItem.component";

const mapStateToProps = state => {
  return {
    loading: state.beers.loading
  };
};

const mapDispatchToProps = { rateBeer };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeerItem);
