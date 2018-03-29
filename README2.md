## Feature Tasks
##### Minimum Requirements
Create the following components:
```html
<App />
  <Provider /> 
    <BrowserRouter />
      <Dashboard />
        <CategoryForm />
        <CategoryItem />
          <CategoryForm />
          <ExpenseForm />
          <ExpenseItem />
            <ExpenseForm />
```

## Expense - General
An expense should contain at least the following properties:
  * `id` - a uuid
  * `categoryID` - an id that corresponds to an existing category
  * `timestamp` - a date from when the category was created
  * `name` - a string that is the name of the category
  * `price` - a number that is the total amount of $ in the category 

## Redux

##### Reducers
* export a reducer that holds the entire app state from `reducer/index.js`
* create a reducer that will combine your categories reducer and expenses reducer


##### Expenses Reducer
This reducer should support the following interactions:
  * `EXPENSE_CREATE`
  * `EXPENSE_UPDATE`
  * `EXPENSE_DELETE`

##### Action Creators
An action creator should be created for each interaction supported by your expenses reducer

##### Store
In `lib/store.js`, export a function that will return a new redux store from your app reducer


## Components

##### Update `<CategoryItem />`
* should maintain all of the features described in the previous lab
* add an `<ExpenseForm />` that enables the user to create expenses on the application state
* display all of the `<ExpenseItem />`'s belonging to the category

##### `<ExpenseForm />`
* should have an `onComplete` prop that will be invoked with the form state `onSubmit`
* should support an `expense` prop that will both set the intial form state, and update the state in the hook on `componentWillReceiveProps()`
* should have a `buttonText` prop that will configure the submit button text

##### `<ExpenseItem />`
* should have a button that will delete the expense from the app state (`onClick`)
* should display the `name` and `price` of the component
* should display an `<ExpenseForm />` that will enable the user to update the expense in the app state