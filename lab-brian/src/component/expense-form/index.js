'use strict';

import Modal from '../modal';
import React from 'react';

let renderIf = (test, component) => test ? component : undefined;

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    let expenseFormError = false;
    let categoryID = props.expense ? props.expense.categoryID : '';
    let expenseName = props.expense ? props.expense.expenseName : '';
    let expensePrice = props.expense ? props.expense.expensePrice : 0;

    this.state = { expenseFormError , categoryID, expenseName, expensePrice };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(props) {
    if(props.expense) {
      this.setState({ expenseName: props.expense.expenseName, categoryID: props.expense.categoryID, expensePrice: props.expense.expensePrice });
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
    if(!this.state.expenseName || !this.state.expensePrice) {
      return this.setState({
        expenseFormError: true,
      });
    }
    if(this.props.expense) {
      return this.props.onComplete({id: this.props.expense.id, ...this.state});
    }
    this.props.onComplete({...this.state});
    // if(!this.props.expense) {
    //   this.setState({ name: '', budget: 0 });
    // }
  }

  render() {
    return (
      <div>
        <form className='expense-form' onSubmit={this.handleSubmit}>
          <input 
            name='expenseName'
            type='text'
            placeholder='expense name'
            value={this.state.expenseName}
            onChange={this.handleChange}
          />
          <input 
            name='expensePrice'
            type='number'
            placeholder='expense amount'
            value={this.state.expensePrice}
            onChange={this.handleChange}
          />
          <button type='submit'>{this.props.buttonText}</button>
        </form>

        {renderIf(this.state.expenseFormError,
          <Modal close={() => this.setState({ expenseFormError: false })}>
            <h1>Sorry, you must choose a expense name and set an amount.</h1>
          </Modal>
        )}
      </div>
    );
  }
}

export default ExpenseForm;