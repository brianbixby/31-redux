'use strict';

import React from 'react';

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);

    let name = props.category ? props.category.name : '';
    let budget = props.category ? props.category.budget : 0;

    this.state = { name, budget };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.props.onComplete(Object.assign({}, this.state));
  }

  render() {
    return (
      <div>
        <form className='category-form' onSubmit={this.handleSubmit}>
          <input 
            name='name'
            type='text'
            placeholder='create a new category and track your expenses...'
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input 
            name='budget'
            type='number'
            placeholder='set a budget for your category...'
            value={this.state.budget}
            onChange={this.handleChange}
          />
          <button type='submit'>{this.props.buttonText}</button>
        </form>
      </div>
    );
  }
}

export default CategoryForm;