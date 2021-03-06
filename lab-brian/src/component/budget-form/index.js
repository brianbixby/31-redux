'use strict';

import './_budget-form.scss';
import React from 'react';

class BudgetForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.budget ? {...props.budget} : {budgetName: '', totalBudget: 0};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(props) {
    if(props.budget) {
      this.setState(props.budget);
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
    this.props.onComplete({...this.state});
    if(this.props.toggleClass) {
      this.props.toggleClass();
    }
    if(!this.props.budget) {
      this.setState({ budgetName: '', totalBudget: 0 });
    }
  }

  render() {
    return (
      <div>
        <form className='budget-form form' onSubmit={this.handleSubmit}>
          <input 
            name='budgetName'
            type='text'
            placeholder='budget name'
            value={this.state.budgetName}
            onChange={this.handleChange}
          />
          <input 
            name='totalBudget'
            type='number'
            placeholder='total budget amount'
            value={this.state.totalBudget}
            onChange={this.handleChange}
          />
          <button type='submit'>{this.props.buttonText}</button>
        </form>
      </div>
    );
  }
}

export default BudgetForm;