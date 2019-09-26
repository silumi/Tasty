import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Recipe} from '../../Recipe.model';


@Component({
  selector: 'app-recipe-items',
  templateUrl: './recipe-items.component.html',
  styleUrls: ['./recipe-items.component.css']
})
export class RecipeItemsComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() recipeSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }
OnSelected() {
this.recipeSelected.emit();
}
}
