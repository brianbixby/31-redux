'use strict';

let initialState = [];

export default (state=initialState, action) => {
  let {type, payload} = action;

  switch(type) {
    case 'BUDGET_CREATE':
      return [...state, payload];
    case 'BUDGET_UPDATE':
      return state.map(budget =>
        budget.id === payload.id ? payload : budget);
    case 'BUDGET_DELETE':
      return state.filter( budget => budget.id !== payload.id);
    case 'BUDGET_RESET':
      return initialState;
    default:
      return state;
  }
};