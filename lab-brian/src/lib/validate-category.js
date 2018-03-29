'use strict';

const validateCategory = store => next => action => {
  const isCategory = action.type && action.type.startsWith('CATEGORY');
  // console.log('__VALIDATECATEGORY ACTION__', action);

  if(isCategory) {
    try {
      const category = action.payload;
      const invalid = !category.id || !category.name || (!category.budget && category.budget !== 0) || !category.timestamp;
      if(invalid) {
        throw new Error('VALIDATION ERROR: category must include id, name, budget and timestamp');
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

export default validateCategory;