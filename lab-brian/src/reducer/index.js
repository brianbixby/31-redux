'use strict';

import { combineReducers } from 'redux';
import budgetsReducer from './budgets.js';
import categoriesReducer from './categories.js';
import expensesReducer from './expenses.js';

export default combineReducers({
  budgets: budgetsReducer,
  categories: categoriesReducer,
  expenses: expensesReducer,
});