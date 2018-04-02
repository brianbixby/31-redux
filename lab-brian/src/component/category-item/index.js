'use strict';

import './_category-item.scss';
import React from 'react';
import { connect } from 'react-redux';
import CategoryForm from '../category-form';
import ExpenseForm from '../expense-form';
import ExpenseItem from '../expense-item';

import { categoryUpdate, categoryDelete } from '../../action/category-action.js';
import { expenseCreate as expenseActionCreate } from '../../action/expense-action.js';
import { renderIf } from './../../lib/util';

class CategoryItem extends React.Component{
  render() {
    let {categories, categoryUpdate, categoryDelete, expenses, budget} = this.props;

    return (
      <section className='category-item'>
        <div>
          <div className='content'>
            <ul className='category-list'>
              { categories.map(category => console.log(category))}
              { categories.map(category => 
                <li className='category-item' key={category}>
                  <p className='category'><span className='categoryTitle'>{category.name}</span>total: <span className='categoryBudget'> {category.budget}</span> <i className="fa fa-trash" onClick={() => categoryDelete(category)}></i></p> 
                  {/* <button onClick={() => categoryDelete(category)}>X</button> */}
                  <CategoryForm 
                    category={category}
                    buttonText='UPDATE CATEGORY'
                    onComplete={categoryUpdate}
                  />
                  <div className='expenses-container'>
                    <p className='expense-title title'>create a new expense.</p>
                    <div className='expense-outer-div'>
                      <ExpenseForm
                        categoryID={category.id}
                        budgetID={budget.id}
                        buttonText='create expense'
                        onComplete={this.props.expenseCreate}
                      />
                    </div>
                    { renderIf(expenses[category.id].length, <ExpenseItem expenses={expenses[category.id]} />)}
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
  };
};

let mapDispatchToProps = dispatch => ({
  categoryUpdate: (category) => dispatch(categoryUpdate(category)),
  categoryDelete: (category) => dispatch(categoryDelete(category)),
  expenseCreate: (expense) => dispatch(expenseActionCreate(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);