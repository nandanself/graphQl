import React, {Fragment} from "react";
import PropTypes from "prop-types";
import DataRow from "../data-row";
import LoadingSpinner from "../loading-spinner";

const DataGrid = props => {
  const { columns, data, isLoading } = props || {};

  const thead = columns => {
    return columns.map((column, index) => {
      return <th key={index}>{column}</th>;
    });
  };

  const row = data => {
    if (data.length > 0) {
      return data.map(item => {
        return <DataRow key={item.id} item={item} />;
      });
    }
  };

  return (
    <Fragment>
      <table className="pure-table">
        <thead>
          <tr>{thead(columns)}</tr>
        </thead>
        <tbody>{row(data)}</tbody>
      </table>
      {isLoading ? <LoadingSpinner/>: null}
    </Fragment>
  );
};

DataGrid.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
  isLoading: PropTypes.bool
};

export default DataGrid;
