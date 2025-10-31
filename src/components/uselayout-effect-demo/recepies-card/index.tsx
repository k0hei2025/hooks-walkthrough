import React, { type FC } from 'react'
import type { Recipe } from '../const';

type RecipieCardProps = {
  recipe: Recipe;
}

export const RecipieCard:FC<RecipieCardProps> = ({recipe}) => {
  return (
    <div key={recipe.id} className='border-2 m-4 p-4 shadow-md'>
          <div className='flex flex-nowrap gap-4'>
          <p>{recipe.difficulty}</p>
          <p className='text-2xl p-2v'>{recipe.name}</p>
          </div>
          <p className='text-sm bg-gray-100 p-4'> <b> Ingredients: </b>  {recipe.instructions}</p>
          {/* <b>{recipe.ingredients}</b> */}
          {recipe.ingredients.map((ing, index) => (
            <li className='list-decimal m-4' key={index}>{ing}</li>
          ))
          } 
          <p className='text-yellow-500'>Rate : {recipe.rating}</p>
    </div>
  )
}
