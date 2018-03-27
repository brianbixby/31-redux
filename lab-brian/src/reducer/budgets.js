'use strict';

let initialState = [];

export default(state=initialState, action) => {
  let { type, payload } = action;
  // same as type = action.type, payload = action.payload
  switch(type) {
    case 'BUDGET_CREATE':
      return [...state, payload];
    case 'BUDGET_UPDATE':
      return state.map(budget => 
        budget.id === payload.id ? payload : budget);
    case 'BUDGET_DELETE':
      return state.filter(budget =>
        budget.id !== budget.id);
    case 'BUDGET_RESET':
      return initialState;
    default:
      return state;
  }
};