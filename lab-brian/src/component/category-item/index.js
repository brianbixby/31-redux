'use strict';

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
    let {categories, categoryUpdate, categoryDelete, expenses} = this.props;

    return (
      <section className='category-item'>
        <div>
          <div className='content'>
            <ul className='category-list'>
              { categories.map(category => console.log(category))}
              { categories.map(category => 
                <li className='category-item' key={category}>
                  <p>{category.name}</p> 
                  <p>{category.budget}</p>
                  <button onClick={() => categoryDelete(category)}>X</button>
                  <CategoryForm 
                    category={category}
                    buttonText='UPDATE CATEGORY'
                    onComplete={categoryUpdate}
                  />
                  <div className='expenses-container'>
                    <p>create a new expense.</p>
                    <ExpenseForm
                      categoryID={category.id}
                      buttonText='create expense'
                      onComplete={this.props.expenseCreate}
                    />
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

let mapDispatchToProps = dispatch => ({
  categoryUpdate: (category) => dispatch(categoryUpdate(category)),
  categoryDelete: (category) => dispatch(categoryDelete(category)),
  expenseCreate: (expense) => dispatch(expenseActionCreate(expense)),
});

export default connect(null, mapDispatchToProps)(CategoryItem);