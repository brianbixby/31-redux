'use strict';

import uuid from 'uuid/v1';

export const budgetCreate = (budget) => ({
  type: 'BUDGET_CREATE',
  payload: {...budget, id: uuid(), timestamp: new Date() },
});

export const budgetUpdate = (budget) => ({
  type: 'BUDGET_UPDATE',
  payload: {...budget},
});

export const budgetDelete = (budget) => ({
  type: 'BUDGET_DELETE',
  payload: {...budget},
});

export const budgetReset = () => ({ type: 'BUDGET_RESET' });