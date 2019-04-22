import { createStore } from 'redux'

const initialState ={
name : '',
category : '',
authorFirst: '',
authorLast: '',
ingredients: [],
instructions: [],
recipes: []
}

export const UPDATENAME = 'UPDATENAME'
export const UPDATECATEGORY = 'UPDATECATEGORY'
export const UPDATEFIRST = 'UPDATEFIRST'
export const UPDATELAST = 'UPDATELAST'
export const ADDINGREDIENT = 'ADDINGREDIENT'
export const ADDINSTRUCTIONS = 'ADDINSTRUCTIONS'
export const ADDRECIPE = 'ADDRECIPE'

function reducer (state = initialState, action){
  const { type, payload } = action
  switch(type){
    case UPDATENAME:
    return {...state, name: payload}

    case UPDATECATEGORY:
    return {...state, category: payload}
    default:
    return state
    case UPDATEFIRST:
    return{...state, authorFirst: payload}
    case UPDATELAST:
    return{...state, authorLast: payload}
    case ADDINGREDIENT:
    return {...state, ingredients: [...state.ingredients, payload]}
    case ADDINSTRUCTIONS:
      return {...state, instructions: [...state.instructions, payload]}
    case ADDRECIPE:
      const{
        name,
        category,
        authorFirst,
        authorLast,
        ingredients,
        instructions
      } = state;
      const recipe = {
        name,
        category,
        authorFirst,
        authorLast,
        ingredients,
        instructions
      }
      const newRecipes = [...state.recipes, recipe]
      return{...state, recipes: newRecipes}

  }
}


export default createStore(reducer)