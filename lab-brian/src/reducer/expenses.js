'use strict';

let initialState = {};

export default (state=initialState, action) => {
  let { type, payload } = action;
  // destructuring same as let type = action.type;
  switch(type) {
    case 'CATEGORY_CREATE':
      return {...state, [payload.id] : [] };
    case 'CATEGORY_DELETE':
      return {...state, [payload.id] : undefined };
    case 'EXPENSE_CREATE':
      // let { categoryID } = payload;
      // let categoryExpenses = state[categoryID];
      // return {...state, [categoryID]: [...categoryExpenses, payload]};
      return {...state, [payload]: [...state[payload], payload]};
    default:
      return state; 
  }
};