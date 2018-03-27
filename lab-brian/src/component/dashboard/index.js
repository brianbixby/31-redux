'use strict';

import React from 'react';
import { connect } from 'react-redux';

import { categoryCreate, categoryUpdate, categoryDelete } from '../../action/category-action.js';
import { budgetCreate, budgetUpdate, budgetDelete } from '../../action/budget-action.js';
import CategoryForm from '../category-form';
import CategoryItem from '../category-item';
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
      <section className='dashboard'>
        <Navbar />
        <p>create a new budget.</p>
        <BudgetForm
          buttonText='create budget'
          onComplete={this.props.budgetCreate}
        />

        <BudgetItem
          budgetUpdate={this.props.budgetUpdate}
          budgetRemove={this.props.budgetDelete}
          budgets={this.props.budgets}
        />

        <p>create a new category.</p>
        <CategoryForm
          buttonText='create category'
          onComplete={this.props.categoryCreate}
        />

        <CategoryItem
          categoryUpdate={this.props.categoryUpdate}
          categoryRemove={this.props.categoryDelete}
          categories={this.props.categories}
        />

        <Footer />
      </section>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    budgets: state.budgets,
  };
};

// allows us to get state of application and provide it to our actions
// dispatch{ type: 'SOME_THING_TO_DO', payload: 'some data' }
const mapDispatchToProps = (dispatch, getState) => {
  // console.log('getstate: ', getState);
  return {
    categoryCreate: (category) => dispatch(categoryCreate(category)),
    categoryUpdate: (category) => dispatch(categoryUpdate(category)),
    categoryDelete: (category) => dispatch(categoryDelete(category)),
    budgetCreate: (budget) => dispatch(budgetCreate(budget)),
    budgetUpdate: (budget) => dispatch(budgetUpdate(budget)),
    budgetDelete: (budget) => dispatch(budgetDelete(budget)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
// currying technique, 