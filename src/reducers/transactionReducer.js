export default function transactionReducer(state = {
  transactions: []
}, action) {
 switch(action.type) {

   case 'FETCH_TRANSACTIONS':
   console.log("redux works");
   console.log("action.transactions", action.transactions);
     return {...state,
       transactions: action.transactions
     }

   default:
     return state;
 }
};
