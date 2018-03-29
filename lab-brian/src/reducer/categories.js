'use strict';

let initialState = [];

export default(state=initialState, action) => {
  let { type, payload } = action;
  // same as type = action.type, payload = action.payload
  switch(type) {
    case 'BUDGET_CREATE':
      // console.log('__CATEGORIESREDUCER STATE__', state);
      return {...state, [payload.id] : [] };
    case 'BUDGET_DELETE':
      // console.log('__CATEGORIESREDUCER STATE__', state);
      var newState = Object.keys(state).reduce((acc, key) => {
        console.log('state: ', state, 'key: ', key, 'payload.id: ', payload.id);
        if (key !== payload.id) {
          acc[key] = state[key];
        }
        return acc;
      }, {});
      return newState;
      // return {...state, [payload.id] : undefined };
    case 'CATEGORY_CREATE':
      // console.log('__CATEGORIESREDUCER STATE__', state);
      var {budgetID} = payload;
      var budgetCategories = state[budgetID];
      return {...state, [budgetID]: [...budgetCategories, payload]};
    case 'CATEGORY_UPDATE':
      // console.log('__CATEGORIESREDUCER STATE__', state);
      budgetID = payload.budgetID;
      budgetCategories = state[budgetID];
      return {
        ...state,
        [budgetID]: budgetCategories.map(category => category.id === payload.id ? payload : category),
      };
    case 'CATEGORY_DELETE':
      // console.log('__CATEGORIESREDUCER STATE__', state);
      budgetID = payload.budgetID;
      budgetCategories = state[budgetID];
      return {...state, [budgetID]: budgetCategories.filter(category => category.id !== payload.id)};
    default:
      return state;
  }
};