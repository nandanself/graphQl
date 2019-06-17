import * as actionTypes from "./home-action-types";
import { actionCreator } from "../../utils";
import ApiService from "../../ApiService";

export const fetchingJobsSuccess = actionCreator(actionTypes.FECTH_JOBS_SUCCESS,'data','isLoading');
export const fetchingJobsLoading = actionCreator(actionTypes.FETCH_JOBS_LOADING,'data','isLoading');
export const fetchingJobsFailure = actionCreator(actionCreator.FETCH_JOBS_FAILURE,'error');

export const fetchJobsJson = (resource, fields) => (dispatch) =>  {
    dispatch(fetchingJobsLoading([],true));
    return ApiService.apiCallGraphQl(resource,fields).then(response => {
      dispatch(fetchingJobsSuccess(response.data,false))
    }).catch(error => {
      dispatch(fetchingJobsFailure(error));
    });
};
