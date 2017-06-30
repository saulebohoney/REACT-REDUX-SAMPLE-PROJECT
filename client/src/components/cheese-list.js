import React from 'react';
import {connect} from 'react-redux';

export function CheeseList (props) {
  const cheeses = props.cheeses.map((cheese, index) => (
    <li key={index}>
      {cheese}
      </li>
  ));

  return (
    <ul>
      {cheeses}
    </ul>
  )
}

const mapStateToProps = (state) => ({
  cheeses: state.cheeses
});

export default connect(mapStateToProps)(CheeseList);
