'use strict';

import './_expense-item.scss';
import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from '../expense-form';
import { expenseUpdate, expenseDelete } from '../../action/expense-action.js';
import { renderIf } from './../../lib/util';

class ExpenseItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {hiding: false };

    this.toggleClass = this.toggleClass.bind(this);
  }

  toggleClass() {
    !this.state.hiding ? this.setState({hiding: true}) : this.setState({hiding: false});
  }
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
                  {renderIf(!this.state.hiding,
                    <div>
                      <p className='expenseName'>{expense.expenseName} <i className="fa fa-pencil" onClick={() => this.toggleClass()}></i></p>
                      <p className='expensePrice'>${expense.expensePrice}</p>
                    </div>
                  )}
                  {renderIf(this.state.hiding,
                    <ExpenseForm 
                      expense={expense}
                      buttonText='UPDATE'
                      onComplete={expenseUpdate}
                      toggleClass={this.toggleClass}
                    />
                  )}
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