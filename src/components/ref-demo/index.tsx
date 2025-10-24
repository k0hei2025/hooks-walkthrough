import  { useRef } from 'react'

export const RefDemo = () => {

  const ref = useRef(null);

  const handleClick = () => {
    // const inputRef = ref.current;
    // inputRef.focus();
    ref.current.style = "background-color: yellow; color: black; padding: 10px; cursor: pointer;";
  }
  // console.log(ref.current);


  return (
    // 
    <>
    <div onClick={handleClick} ref={ref}>RefDemo</div>
    {/* <input  type='text' ref={ref} placeholder='Click to focus' /> */}
    <button onClick={handleClick}>Focus Input</button>
</>

  )
}
