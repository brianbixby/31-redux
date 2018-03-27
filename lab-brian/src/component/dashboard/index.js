'use strict';

import React from 'react';
import { connect } from 'react-redux';

import { categoryCreate, categoryUpdate, categoryDelete } from '../../action/category-action.js';
import CategoryForm from '../category-form';
import CategoryItem from '../category-item';
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
    categories: state,
  };
};

// allows us to get state of application and provide it to our actions
// dispatch{ type: 'SOME_THING_TO_DO', payload: 'some data' }
const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: (category) => dispatch(categoryCreate(category)),
    categoryUpdate: (category) => dispatch(categoryUpdate(category)),
    categoryDelete: (category) => dispatch(categoryDelete(category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);