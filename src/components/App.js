import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBoard } from '../actions';

class App extends Component {
  constructor(props) {
    super(props);

    this.props.dispatch(fetchBoard());
  }

  render() {
    return (
      <div className="App">
        from app component
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {...state};
}

export default connect(mapStateToProps)(App);
