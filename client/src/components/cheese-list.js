import React from 'react';
import {connect} from 'react-redux';
import {fetchCheese} from '../actions/cheese';

export class CheeseList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCheese());
  }

  render() {
    if(this.props.error) {
      return <div>{this.props.error}</div>;
    }
    if(this.props.loading) {
      return <div>Loading...</div>
    }
    const cheeses = this.props.cheeses.map((cheese, index) => {
      console.log(index);
      console.log(cheese);
      return (
         <li key={index}>
           {cheese}
        </li>
  )});

  return (
    <ul>
      {cheeses}
    </ul>
    )
  }
  
}

const mapStateToProps = (state) => ({
  cheeses: state.cheeses
});

export default connect(mapStateToProps)(CheeseList);
