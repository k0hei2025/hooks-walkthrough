import React, { useEffect, useState } from 'react'
import type { Recipe } from '../const';
import { RecipieCard } from '../recepies-card';

export const RecepiesList = () => {

  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const URL = "https://dummyjson.com/recipes";
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setRecipes(data.recipes);
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      List of Recepies
      {recipes.map((recipe) => (
        <RecipieCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}
