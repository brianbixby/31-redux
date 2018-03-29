' use strict';

import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducer';
import reporter from './redux-reporter';
import validateBudget from './validate-budget.js';
import validateCategory from './validate-category.js';
import validateExpense from './validate-expense.js';

// console.log('__STORE CREATESTORE__', createStore);
// console.log('__STORE APPLYMIDDLEWARE__', applyMiddleware);

export default () => createStore(reducer, applyMiddleware(reporter, validateBudget, validateCategory, validateExpense));