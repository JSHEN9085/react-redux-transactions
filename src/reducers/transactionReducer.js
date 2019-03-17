export default function transactionReducer(state = {
  transactions: [],
  filterTransactions: []
}, action) {
   switch(action.type) {

     case 'FETCH_TRANSACTIONS':
     // console.log("redux works");
     // console.log("action.transactions", action.transactions);
       return {...state,
         transactions: action.transactions
       }

      case 'FILTER_TRANSACTION':
        return {...state,
          filterTransactions: action.transactions
        }

     default:
       return {...state};
   }
}
