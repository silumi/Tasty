import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shoppingList.service';


@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
@ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
@ViewChild('amountInput', {static: false}) amountInputRef: ElementRef;
// @Output() ingredientAdded = new EventEmitter<Ingredient>(); // {name: string, amount: number}
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }
  onAddItems() {
const ingName = this.nameInputRef.nativeElement.value;
const ingAmount = this.amountInputRef.nativeElement.value;
const newIngredient = new Ingredient(ingName, ingAmount);
this.shoppingListService.addIngredient(newIngredient);
  }
}
