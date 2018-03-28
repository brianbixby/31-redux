'use strict';

import React from 'react';
import { connect } from 'react-redux';
import BudgetForm from '../budget-form';
import { budgetUpdate, budgetDelete } from '../../action/budget-action.js';
import CategoryForm from '../category-form';
import CategoryItem from '../category-item';
import { categoryCreate as categoryActionCreate } from '../../action/category-action.js';


class BudgetItem extends React.Component{
  constructor(props) {
    super(props);

  }

  render() {
    let {budget, budgetUpdate, budgetDelete} = this.props;
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
          <p>create a new category.</p>
          <CategoryForm
            buttonText='create category'
            onComplete={this.props.categoryCreate}
          />

          {this.props.categories.map(item => 
            <CategoryItem key={item.id} category={item} />
          )}
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: [...state.categories],
  };
};

let mapDispatchToProps = dispatch => ({
  categoryCreate: (category) => dispatch(categoryActionCreate(category)),
  budgetUpdate: (budget) => dispatch(budgetUpdate(budget)),
  budgetDelete: (budget) => dispatch(budgetDelete(budget)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BudgetItem);