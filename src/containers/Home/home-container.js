import { connect } from "react-redux";
import Home from "./home";
import { bindActionCreators } from "redux";
import { fetchJobsJson } from "./home-action";
import * as selectors from "./selectors";


const mapStateToProps = state => {
  return {
    jobs:selectors.getjobs(state),
    isLoading:selectors.getisLoading(state),
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchJobsJson,
    },
    dispatch
  )
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
