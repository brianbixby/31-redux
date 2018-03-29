'use strict';

const validateExpense = store => next => action => {
  const isExpense = action.type && action.type.startsWith('EXPENSE');
  // console.log('VALIDATEEXPENSE ACTION__', action);

  if(isExpense) {
    try {
      const expense = action.payload;
      const inval = !expense.id || !expense.expenseName || (!expense.expensePrice && expense.expensePrice !== 0) || !expense.timestamp;
      if(inval) {
        throw new Error('VALIDATION ERROR: expense must contain id expenseName, expensePrice and timestamp.');
      } else {
        return next(action);
      }
    } catch (err) {
      console.error(err);
    }
  } else {
    return next(action);
  }
};

export default validateExpense;