import React, { useReducer } from 'react'

export const Reducer = () => {
  type InitialState = { count : number}

  const initialState:InitialState = {count: 0}
  
  const reducer = (state:InitialState , action) => {
    switch (action.type) {
      case 'INCREMENT':
        return {count : state.count + action.amount};
      case 'DECREMENT':

        return {count : state.count - action.amount};
      default:
        return state;
    }
    
  }
  const [state,dispatch] = useReducer(reducer , initialState);

  return (
    // <div>index</div>
    <>
   <div>Reducer demo (Counter basic) </div>
   <div>Count : {state.count} </div>
   <button onClick={()=>dispatch({type: "INCREMENT",amount:1})} >Increase</button>
   <button onClick={()=>dispatch({type:"DECREMENT",amount:109})}>Decrease</button>

</>
  )
}

