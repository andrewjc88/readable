import { ADD_RECIPE, REMOVE_FROM_CALENDAR } from '../actions'
import { combineReducers } from 'redux'

function food (state ={}, action) {
  switch (action.type) {
    case ADD_RECIPE :
      const { recipe } = action

      return {
        ...state,
        [recipe.label]: recipe
      }
      default : 
        return state
  }
}

const initalCategoriesState = {
  category: {
    post: null,
    lunch: null,
    dinner: null
  }
}

function calendar (state = initalCategoriesState, action) {
  const { day, recipe, meal } = action

  switch (action.type) {
    case ADD_RECIPE: 
      return {
        ...state,
        [day]: {
          ...state[day],
          [meal]: recipe.label,
        }
      }
    case REMOVE_FROM_CALENDAR:
      return {
        ...state,
        [day]: {
          ...state[day],
          [meal]: null,
        }
      }
    default:
      return state
  }
}

export default combineReducers({
  food,
  calendar
})