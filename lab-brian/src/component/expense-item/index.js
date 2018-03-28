'use strict';

import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from '../expense-form';
import { expenseUpdate, expenseDelete } from '../../action/expense-action.js';

class ExpenseItem extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    let {expense, expenseUpdate, expenseDelete} = this.props;
    // same as let expense = this.props.expense;
    return (
      <section className='expense-item'>
        <div>
          <div className='content'>
            <p>{expense.expenseName}</p>
            <p>{expense.expensePrice}</p>
            <button onClick={() => expenseDelete(expense)}>X</button>
          </div>
          <div className='edit'>
            <ExpenseForm
              buttonText='update'
              expense={expense}
              onComplete={expenseUpdate}
            />
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