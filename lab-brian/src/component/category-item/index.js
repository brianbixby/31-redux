'use strict';

import React from 'react';
import CategoryForm from '../category-form';

class CategoryItem extends React.Component{
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
      <section className='category-item'>
        <ul>
          {this.props.categories.map(item => {
            return <li key={item.id}>
              <button className='removeButton' onClick={() => this.props.categoryRemove(item)}>X</button>

              <div>
                <p>{item.name}</p>
                <p>{item.budget}</p>
              </div>

              <CategoryForm
                buttonText='update category'
                category={item}
                onComplete={(category) => {
                  category.id = item.id;
                  this.props.categoryUpdate(category);
                }}
              />
            </li>;
          })}
        </ul>
      </section>
    );
  }
}

export default CategoryItem;

// this.props.handleSubmit(this.state);

// onComplete

