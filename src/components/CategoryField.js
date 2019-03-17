import React, { Component } from 'react'
import {connect} from 'react-redux';

class CategoryField extends Component {

  handleOnClick = () => {
    let filterTransactions = this.props.transactions.filter(transaction => transaction.category === this.props.category)
    this.props.setCategory(this.props.category)
    this.props.setFilterTransactions(filterTransactions)
  }

  render() {
    return (
      <div className=" four wide field">
        <div className="ui radio checkbox">

          <input
            type="radio"
            name="category"
            onClick={this.handleOnClick}
          />
          <label>{ this.props.category }</label>

        </div>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    transactions: state.transactionReducer.transactions
  }
}

const mapDispatchToProps = dispatch => ({
  setCategory: category => dispatch({type: "CHANGE_CATEGORY", category}),
  setFilterTransactions: transactions => dispatch({type: "FILTER_TRANSACTION", transactions})
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryField)
