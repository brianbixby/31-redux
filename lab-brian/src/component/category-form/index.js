'use strict';

import Modal from '../modal';
import React from 'react';

let renderIf = (test, component) => test ? component : undefined;

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);

    let categoryFormError = false;
    let name = props.category ? props.category.name : '';
    let budget = props.category ? props.category.budget : 10;

    this.state = { name, budget, categoryFormError };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(props) {
    if(props.category) {
      this.setState({ name: props.category.name, tbudget: props.category.budget });
    }
  }

  handleChange(e) {
    let { name, value, type } = e.target;
    // let name = e.target.name
    if (type === 'number') {
      try {
        this.setState({
          [name]: parseInt(value),
        });
      } catch(err) {
        console.error(err);
      }
    } else {
      this.setState({
        [name]: value,
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if(!this.state.budget || !this.state.name) {
      return this.setState({
        categoryFormError: true,
      });
    }
    if(this.props.category) {
      return this.props.onComplete({id: this.props.category.id, ...this.state});
    }
    this.props.onComplete({...this.state});
    // if(!this.props.category) {
    //   this.setState({ name: '', budget: 0 });
    // }
  }

  render() {
    return (
      <div>
        <form className='category-form' onSubmit={this.handleSubmit}>
          <input 
            name='name'
            type='text'
            placeholder='category name'
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input 
            name='budget'
            type='number'
            placeholder='category budget amount'
            value={this.state.budget}
            onChange={this.handleChange}
          />
          <button type='submit'>{this.props.buttonText}</button>
        </form>

        {renderIf(this.state.categoryFormError,
          <Modal close={() => this.setState({ categoryFormError: false })}>
            <h1>Sorry, you must choose a category name and set a budget for the category.</h1>
          </Modal>
        )}
      </div>
    );
  }
}

export default CategoryForm;