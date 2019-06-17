import React, { Component } from "react";
import { homeRessource, homeField } from "./home-grahpql-schema";
import * as config from "./home-config";
import DataGrid from "../../components/data-grid"

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            jobs:[],
            isLoading:false,
        }
    }

    componentDidMount(){
        this.props.fetchJobsJson(homeRessource, homeField);
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            'jobs':nextProps.jobs,
            'isLoading':nextProps.isLoading,
        });    
    }
    
    render(){
        let { jobs, isLoading } = this.state;
        return (
            <div className="table-body">
                <DataGrid isLoading={isLoading} columns={config.column_list} data={jobs}/>
            </div> 
        );
    }
}