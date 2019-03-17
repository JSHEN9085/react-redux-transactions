import React, { Component } from 'react'
import {connect} from 'react-redux';

import AccountContainer from './components/AccountContainer'


class App extends Component {

  componentDidMount(){
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
      .then(res => res.json())
      .then(transactions => {
        // console.log(transactions);
        this.props.fetchTransactions(transactions);
      })
  }

  render() {
    return (
      <div className="ui raised segment">
        <div className="ui center aligned segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>

        <AccountContainer />

      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchTransactions: transactions => dispatch({type: "FETCH_TRANSACTIONS", transactions})
})

export default connect(null, mapDispatchToProps)(App)
