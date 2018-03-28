'use strict';

import uuid from 'uuid/v1';

export const categoryCreate = (budget) => ({
  type: 'CATEGORY_CREATE',
  payload: {...budget, id: uuid(), timestamp: new Date() },
});

export const categoryUpdate = (category) => {
  return {
    type: 'CATEGORY_UPDATE',
    payload: category,
  };
};

export const categoryDelete = (category) => {
  return {
    type: 'CATEGORY_DELETE',
    payload: category,
  };
};

export const categoryReset = () => {
  return {
    type: 'CATEGORY_RESET',
  };
};