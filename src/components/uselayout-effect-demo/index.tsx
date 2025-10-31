import React, { useLayoutEffect } from 'react'
import { RecepiesList } from './recepies-list'

export const FoodMenu = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  useLayoutEffect(()=>{
    const handleResize = () => {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize',handleResize)
    handleResize();
    return () => window.removeEventListener('resize',handleResize)
  },[])
  return (
    <div>
      <p>Window width: {width}px</p>
      Food Menu
      <RecepiesList />
    </div>
  )
}
