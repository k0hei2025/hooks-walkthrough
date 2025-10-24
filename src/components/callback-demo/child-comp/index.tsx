import React from 'react'

export const ChildComp : React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <>
    <button onClick={onClick}>Click Me Child guy</button>
    <div>Hey i m child</div>
</>
  )
}
