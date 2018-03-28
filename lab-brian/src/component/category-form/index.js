'use strict';

import React from 'react';

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.category ? {...props.category} : { name: '', budget: 0, budgetID: props.budgetID};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.category) {
      this.setState({...nextProps.category});
    }

    if (nextProps.budgetID) {
      this.setState( {budgetID: nextProps.budgetID });
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
    this.props.onComplete(this.state);
    // this.props.onComplete({...this.state});
    if(!this.props.category) {
      this.setState({ name: '', budget: 0 });
    }
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
      </div>
    );
  }
}

export default CategoryForm;