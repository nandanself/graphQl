import * as actionTypes from "../home-action-types";

const homeReducer = (state = {}, action) => {

  switch (action.type) {
    case actionTypes.FECTH_JOBS_SUCCESS:
      return Object.assign({}, action.data, {isLoading:action.isLoading});

    case actionTypes.FETCH_JOBS_LOADING:
      return Object.assign({}, {jobs:action.data}, {isLoading:action.isLoading});

    case actionTypes.FETCH_JOBS_FAILURE:
      return {isLoading:false};

    default:
      return state;
  }
};

export default homeReducer;
