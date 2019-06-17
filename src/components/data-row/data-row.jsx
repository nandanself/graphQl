import React from "react";
import PropTypes from "prop-types";

const DataRow = props => {
  const { item } = props || {};

  const row = item => {
    return Object.keys(item).map((key, index) => {
      if (key !== "id") {
        return <td key={index}>{item[key]}</td>;
      }
    });
  };

  return <tr>{row(item)}</tr>;
};

DataRow.propTypes = {
  item: PropTypes.object
};

export default DataRow;
