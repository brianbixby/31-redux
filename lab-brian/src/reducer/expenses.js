'use strict';

let initialState = [];

export default (state=initialState, action) => {
  let { type, payload } = action;
  // destructuring same as let type = action.type;
  switch(type) {
    case 'BUDGET_DELETE':
      // console.log('__CATEGORIESREDUCER STATE__', state);
      var newState = Object.keys(state).reduce((acc, key) => {
        console.log('state: ', state);
        console.log('key: ', key);
        console.log('payload.id: ', payload.id);
        console.log('payload', payload);
        if (key !== payload.id) {
          acc[key] = state[key];
        }
        return acc;
      }, {});
      return newState;
      // return {...state, [payload.id] : undefined};
    case 'CATEGORY_CREATE':
      // console.log('__EXPENSESREDUCER STATE__', state);
      return {...state, [payload.id] : []};
    case 'CATEGORY_DELETE':
      // console.log('__EXPENSESREDUCER STATE__', state);
      newState = Object.keys(state).reduce((acc, key) => {
        console.log('state: ', state);
        console.log('key: ', key);
        console.log('payload.id: ', payload.id);
        if (key !== payload.id) {
          acc[key] = state[key];
        }
        return acc;
      }, {});
      return newState;
      // return {...state, [payload.id] : undefined};
    case 'EXPENSE_CREATE':
      // console.log('__EXPENSESREDUCER STATE__', state);
      var {categoryID} = payload;
      var categoryExpenses = state[categoryID];
      return {...state, [categoryID]: [...categoryExpenses, payload]};
    case 'EXPENSE_UPDATE':
      // console.log('__EXPENSESREDUCER STATE__', state);
      categoryID = payload.categoryID;
      categoryExpenses = state[categoryID];
      return {
        ...state,
        [categoryID]: categoryExpenses.map(expense => expense.id === payload.id ? payload : expense),
      };
    case 'EXPENSE_DELETE':
      // console.log('__EXPENSESREDUCER STATE__', state);
      categoryID = payload.categoryID;
      categoryExpenses = state[categoryID];
      return {
        ...state,
        [categoryID]: categoryExpenses.filter(expense => expense.id !== payload.id),
      };
    default:
      return state; 
  }
};