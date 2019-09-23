import { Component, OnInit } from '@angular/core';
import { Recipe} from '../Recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe [] = [
    new Recipe('A Test Recipe', 'delicious recipe',
    'https://cdn-image.myrecipes.com/sites/default/files/styles/medium_2x/public/2591001_qfssh_0129.jpg?itok=CltnudwS'),
    new Recipe('A Test Recipe', 'delicious recipe',
    'https://cdn-image.myrecipes.com/sites/default/files/styles/medium_2x/public/2591001_qfssh_0129.jpg?itok=CltnudwS')];
  constructor() {}
ngOnInit() {}
}
