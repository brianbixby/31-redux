'use strict';

import { combineReducers } from 'redux';
import budgetsReducer from './budgets.js';
import categoriesReducer from './categories.js';

export default combineReducers({
  budgets: budgetsReducer,
  categories: categoriesReducer,
});