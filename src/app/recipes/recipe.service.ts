import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shoppingList/shoppingList.service';
import { Subject } from 'rxjs';
@Injectable()
export class RecipeService {
recipeChanged = new Subject<Recipe[]>();
    private recipes: Recipe[] = [
      new Recipe(
        'Tasty Schnitzel',
        'A super-tasty Schnitzel - just awesome!',
        'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
        [
          new Ingredient('Meat', 1),
          new Ingredient('French Fries', 20)
        ]),
      new Recipe('Big Fat Burger',
        'What else you need to say?',
        'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
        [
          new Ingredient('Buns', 2),
          new Ingredient('Meat', 1)
        ])
    ];

    constructor(private slService: ShoppingListService) {}
    
    setRecipes(recipes: Recipe[]) {
this.recipes = recipes;
this.recipeChanged.next(this.recipes.slice());
    }

    getRecipes() {
      return this.recipes.slice();
    }
getRecipe(id: number) {
  return this.recipes[id];

}
    addIngredientsToShoppingList(ingredients: Ingredient[]) {
      this.slService.addIngredients(ingredients);
    }
    addRecipe(recipe: Recipe) {
      this.recipes.push(recipe);
      this.recipeChanged.next(this.recipes.slice());

    }
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());

  }
  deleteRecipe(index: number) {
this.recipes.splice(index, 1); // delete recipe at index
this.recipeChanged.next(this.recipes.slice()); // returns copy of remaining recipes
  }
  }
