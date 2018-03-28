'use strict';

import React from 'react';
import { connect } from 'react-redux';

import { budgetCreate as budgetActionCreate } from '../../action/budget-action.js';
import { categoryCreate as categoryActionCreate } from '../../action/category-action.js';

import BudgetForm from '../budget-form';
import BudgetItem from '../budget-item';

import Navbar from '../navbar';
import Footer from '../footer';

class Dashboard extends React.Component {
  // componentDidMount() {
  //   this.props.categoryCreate({ name: 'test name', budget: 0 });
  // }
  render() {
    return (
      <main className='dashboard'>
        <Navbar />

        <p>create a new budget.</p>

        <BudgetForm
          buttonText='create budget'
          onComplete={this.props.budgetCreate}
        />

        {this.props.budgets.map(item => 
          <BudgetItem 
            key={item.id} 
            budget={item} 
            categories={this.props.categories}
            onComplete={this.props.categoryActionCreate}
          />
        )}

        <Footer />
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // budgets: [...state.budgets],
    // expenses: [...state.expenses],
    // categories: [...state.categories],
    budgets: state.budgets,
    expenses: state.expenses,
    categories: state.categories,
  };
};

// allows us to get state of application and provide it to our actions
// dispatch{ type: 'SOME_THING_TO_DO', payload: 'some data' }
const mapDispatchToProps = (dispatch, getState) => {
  // console.log('getstate: ', getState);
  return {
    budgetCreate: (budget) => dispatch(budgetActionCreate(budget)),
    categoryCreate: (category) => dispatch(categoryActionCreate(category)),
    // expenseCreate: (expense) => dispatch(expenseActionCreate(expense)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
// currying technique, 