import React, { useState } from 'react'
import { ChildComp } from './child-comp';

export const UseCallback = () => {

  const [count , setCount] = useState(0)

  const handleClick = () => {
    console.log('bang nang');
    alert('Button clicked from child component');
  }

  return (
    <>
    
    {/* <div>UseCallback</div> */}
    <ChildComp onClick={handleClick} />
       <button onClick={()=>setCount(count + 1)}>Parent Count : {count} </button>
    </>
  )
}
