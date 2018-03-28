'use strict';

import React from 'react';
import { connect } from 'react-redux';
import BudgetForm from '../budget-form';
import { budgetUpdate, budgetDelete } from '../../action/budget-action.js';

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
        </div>
      </section>
    );
  }
}

let mapDispatchToProps = dispatch => ({
  budgetUpdate: (budget) => dispatch(budgetUpdate(budget)),
  budgetDelete: (budget) => dispatch(budgetDelete(budget)),
});

export default connect(null, mapDispatchToProps)(BudgetItem);