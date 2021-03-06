'use strict';

import './_expense-form.scss';
import React from 'react';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.expense ? {...props.expense} : { expenseName: '', expensePrice: 0, categoryID: props.categoryID, budgetID: props.budgetID};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.expense) {
      this.setState({...nextProps.expense});
    }

    if (nextProps.categoryID) {
      this.setState( {categoryID: nextProps.categoryID });
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
    if(this.props.toggleClass) {
      this.props.toggleClass();
    }
    if(!this.props.expense) {
      this.setState({ expenseName: '', expensePrice: 0 });
    }
  }

  render() {
    return (
      <div>
        <form className='expense-form form' onSubmit={this.handleSubmit}>
          <input 
            name='expenseName'
            type='text'
            placeholder='expense name...'
            value={this.state.expenseName}
            onChange={this.handleChange}
          />
          <input 
            name='expensePrice'
            type='number'
            placeholder='$ expense budget...'
            value={this.state.expensePrice}
            onChange={this.handleChange}
          />
          <button type='submit'>{this.props.buttonText}</button>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;