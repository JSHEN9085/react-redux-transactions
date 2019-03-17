export default function categoryReducer(state = {
  activeCategory: 'All'
}, action) {
   switch(action.type) {

     case 'CHANGE_CATEGORY':
       return {...state,
         activeCategory: action.category
       }

     default:
       return {...state};
   }
}
