import React, { useEffect, useState } from 'react'

export const GroceryItems=() => {

  const [item, setItem] = useState<any[]>([]);

  const RECIPIES_API_URL = "https://dummyjson.com/recipes";
  useEffect(() => { 
       const recipiesFetch = async () => {
        try {
          const res = await fetch(RECIPIES_API_URL);
          const resData = await res.json();

          console.log("recipies data:", resData);
          setItem (resData.recipes);
        }
        catch (error) {
          console.error("Error fetching recipies data:", error);
        }
       }  
       recipiesFetch();
  }, []);


  return (
    <>
      <div>Recipies</div>
      {item.map((receipe)=>{
        return (
            <div className='box-border border-4 p-4 block m-5 p-5' key={receipe.id}>
              <h2>{receipe.name}</h2>
              {/* <p>{receipe.ingredients.join(", ")}</p> */}
              <button className='bg-white text-black'>check</button>
            </div>
        )
      })}
    </>
  )
}
