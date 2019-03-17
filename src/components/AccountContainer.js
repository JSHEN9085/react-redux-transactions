import React, { Component } from 'react'
import {connect} from 'react-redux';

import TransactionsList from './TransactionsList'
import CategorySelector from './CategorySelector'
// import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  render () {
    console.log(this.props);

    return (
      <div className="ui grid container">

        <CategorySelector />

        <TransactionsList transactions={this.props.activeCategory === 'All' ? this.props.transactions : this.props.filterTransactions}/>

      </div>
    )
  }
}

//TODO: find out why below expression doesn't work!!! hits: thunk
//const mapStateToProps = ({ transactionReducer: transactions}) => ({ transactions })
const mapStateToProps = (state) => {
  return {
    transactions: state.transactionReducer.transactions,
    filterTransactions: state.transactionReducer.filterTransactions,
    activeCategory: state.categoryReducer.activeCategory
  }
}

export default connect(mapStateToProps)(AccountContainer)
