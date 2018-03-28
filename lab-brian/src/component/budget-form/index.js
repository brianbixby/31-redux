'use strict';

import Modal from '../modal';
import React from 'react';

let renderIf = (test, component) => test ? component : undefined;

class BudgetForm extends React.Component {
  constructor(props) {
    super(props);

    let budgetFormError = false;
    let budgetName = props.budget ? props.budget.budgetName : '';
    let totalBudget = props.budget ? props.budget.totalBudget : 100;

    this.state = { totalBudget, budgetName, budgetFormError };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // for the put
  componentWillReceiveProps(props) {
    if(props.budget) {
      this.setState({ budgetName: props.budget.budgetName, totalBudget: props.budget.totalBudget });
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

    if(!this.state.budgetName || !this.state.totalBudget) {
      return this.setState({
        budgetFormError: true,
      });
    }

    if(this.props.budget) {
      return this.props.onComplete({id: this.props.budget.id, ...this.state});
    }
    this.props.onComplete({...this.state});
    // if(!this.props.budget) {
    //   this.setState({ budgetName: '', totalBudget: 0 });
    // }
  }

  render() {
    return (
      <div>
        <form className='budget-form' onSubmit={this.handleSubmit}>
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

        {renderIf(this.state.budgetFormError,
          <Modal close={() => this.setState({ budgetFormError: false })}>
            <h1>Sorry, you must choose a budgetname and amount.</h1>
          </Modal>
        )}
      </div>
    );
  }
}

export default BudgetForm;