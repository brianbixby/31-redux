'use strict';

import React from 'react';
import { connect } from 'react-redux';
import CategoryForm from '../category-form';
import { categoryUpdate, categoryDelete } from '../../action/category-action.js';
import { expenseCreate as expenseActionCreate } from '../../action/expense-action.js';
import ExpenseForm from '../expense-form';
import ExpenseItem from '../expense-item';

class CategoryItem extends React.Component{
  constructor(props) {
    super(props);

  }

  render() {
    let {category, categoryUpdate, categoryDelete} = this.props;
    return (
      <section className='category-item'>
        <div>
          <div className='content'>
            <p>{category.name}</p> 
            <p>{category.budget}</p>
            <button onClick={() => categoryDelete(category)}>X</button>
          </div>
          <div className='edit'>
            <CategoryForm
              buttonText='update'
              category={category}
              onComplete={categoryUpdate}
            />
          </div>
          <p>create a new expense.</p>
          <ExpenseForm
            buttonText='create expense'
            onComplete={this.props.expenseCreate}
          />

          {this.props.expenses.map(item => 
            <ExpenseItem key={item.id} expense={item} />
          )}
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // categories: [...state.categories],
    // budgets: [...state.budgets],
    expenses: [...state.expenses],
  };
};

let mapDispatchToProps = dispatch => ({
  categoryUpdate: (category) => dispatch(categoryUpdate(category)),
  categoryDelete: (category) => dispatch(categoryDelete(category)),
  expenseCreate: (expense) => dispatch(expenseActionCreate(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);