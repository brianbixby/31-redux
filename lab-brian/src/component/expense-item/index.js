'use strict';

import './_expense-item.scss';
import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from '../expense-form';
import { expenseUpdate, expenseDelete } from '../../action/expense-action.js';

class ExpenseItem extends React.Component {
  render() {
    let {expenses, expenseUpdate, expenseDelete} = this.props;
    // same as let expense = this.props.expense;
    return (
      <section className='expense-item-section'>
        <div>
          <div className='content'>
            <ul className='expense-list'>
              { expenses.map(expense => console.log(expense))}
              { expenses.map(expense => 
                <li className='expense-item' key={expense}>
                  <p className='expenseDeleteButton'onClick={() => expenseDelete(expense)}>X</p>
                  <p>{expense.expenseName}</p>
                  <p>{expense.expensePrice}</p>
                  <ExpenseForm 
                    expense={expense}
                    buttonText='UPDATE'
                    onComplete={expenseUpdate}
                  />
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
  expenseUpdate: (expense) => dispatch(expenseUpdate(expense)),
  expenseDelete: (expense) => dispatch(expenseDelete(expense)),
});



export default connect(null, mapDispatchToProps)(ExpenseItem);
// connect takes 2 parameters mapstate2props and mapdispatch2props, if neither is there then its null