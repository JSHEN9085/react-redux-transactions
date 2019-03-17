import React, { Component } from 'react'
import {connect} from 'react-redux';

import TransactionsList from './TransactionsList'
import CategorySelector from './CategorySelector'
// import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  render () {
    console.log(this.props)
    return (
      <div className="ui grid container">


      </div>
    )
  }
}

const mapStateToProps = ({ transactionReducer: transactions}) => ({ transactions })


export default connect(mapStateToProps) (AccountContainer)

        //
        // <CategorySelector />
        //
        // <TransactionsList />
