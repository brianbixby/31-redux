'use strict';

import React from 'react';
import BudgetForm from '../budget-form';

class BudgetItem extends React.Component{
  constructor(props) {
    super(props);

    this.state = {

    };

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
      <section className='budget-item'>
        <ul>
          {this.props.budgets.map(item => {
            return <li key={item.id}>
              <button className='removeButton' onClick={() => this.props.budgetRemove(item)}>X</button>

              <div>
                <p>{item.budgetName}</p>
                <p>{item.totalBudget}</p>
              </div>

              <BudgetForm
                buttonText='update budget'
                budget={item}
                onComplete={(budget) => {
                  budget.id = item.id;
                  this.props.budgetUpdate(budget);
                }}
              />
            </li>;
          })}
        </ul>
      </section>
    );
  }
}

export default BudgetItem;