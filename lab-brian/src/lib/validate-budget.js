'use strict';

const validateBudget = store => next => action => {
  const isBudget = action.type && action.type.startsWith('BUDGET');
  console.log('__VALIDATEBUDGET ACTION__', action);

  if(isBudget) {
    try {
      const budget = action.payload;
      const notValid = !budget.id || !budget.budgetName || (!budget.totalBudget && budget.totalBudget !== 0) || !budget.timestamp;
      if(notValid) {
        throw new Error('VALIDATION ERROR: budget must include id, budgetName, totalBudget and timestamp');
      }
      else {
        return next(action);
      }
    } catch (err) {
      console.error(err);
    }
  } else {
    return next(action);
  }
};

export default validateBudget;