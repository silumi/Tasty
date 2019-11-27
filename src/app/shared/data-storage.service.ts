import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import 'rxjs/add/operator/map';



@Injectable()
export class DataStorageService {
    // tslint:disable-next-line: deprecation
    constructor(private http: Http, private recipeService: RecipeService ) {

    }
    storeRecipes() {
        return this.http.put('https://tasty-41128.firebaseio.com/recipes.json', this.recipeService.getRecipes());
    }
    getRecipes() {
        this.http.get('https://tasty-41128.firebaseio.com/recipes.json')
        //  .subscribe(
        //      // tslint:disable-next-line: deprecation
        //     (response: Response) => {
        //         const recipes: Recipe[] = response.json();
        //         this.recipeService.setRecipes(recipes);
        //     }
        //  );
         .map(
            // tslint:disable-next-line: deprecation
         (response: Response) => {
               const recipes: Recipe[] = response.json();
               // tslint:disable-next-line: prefer-const
               for (let recipe of recipes) {
                 // tslint:disable-next-line: no-string-literal
                 if (!recipe['ingredients']) {
                  console.log(recipe);
                  // tslint:disable-next-line: no-string-literal
                  recipe['ingredients'] = [];
                 }
               }
               return recipes;
             }
           )
          .subscribe(
         (recipes: Recipe[]) => {
               this.recipeService.setRecipes(recipes);
             }
           );
    }
}
