'use strict';

import React from 'react';
import { connect } from 'react-redux';
import BudgetForm from '../budget-form';
import CategoryForm from '../category-form';
import CategoryItem from '../category-item';

import { budgetUpdate, budgetDelete } from '../../action/budget-action.js';
import { categoryCreate as categoryActionCreate } from '../../action/category-action.js';
import { renderIf } from './../../lib/util';

class BudgetItem extends React.Component{
  render() {
    let {budget, budgetUpdate, budgetDelete, categories} = this.props;
    return (
      <section className='budget-item'>
        <div>
          <div className='content'>
            <p>{budget.budgetName}</p> 
            <p>{budget.totalBudget}</p>
            <button onClick={() => budgetDelete(budget)}>X</button>
          </div>
          <div className='edit'>
            <BudgetForm
              buttonText='update'
              budget={budget}
              onComplete={budgetUpdate}
            />
          </div>
        </div>
        <div className='categories-container'>
          <p>create a new category.</p>
          <CategoryForm
            budgetID={budget.id}
            buttonText='create category'
            onComplete={this.props.categoryCreate}
          />
          { renderIf(categories[budget.id].length, <CategoryItem categories={categories[budget.id]} />)}
        </div>
      </section>
    );
  }
}

let mapDispatchToProps = dispatch => ({
  budgetUpdate: (budget) => dispatch(budgetUpdate(budget)),
  budgetDelete: (budget) => dispatch(budgetDelete(budget)),
  categoryCreate: (category) => dispatch(categoryActionCreate(category)),
});

export default connect(null, mapDispatchToProps)(BudgetItem);