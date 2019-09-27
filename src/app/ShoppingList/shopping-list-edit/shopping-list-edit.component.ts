import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/Ingredient.model';


@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
@ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
@ViewChild('amountInput', {static: false}) amountInputRef: ElementRef;
@Output() ingredientAdded = new EventEmitter<Ingredient>(); // {name: string, amount: number}
  constructor() { }

  ngOnInit() {
  }
  onAddItems() {
const ingName = this.nameInputRef.nativeElement.value;
const ingAmount = this.amountInputRef.nativeElement.value;
const newIngredient = new Ingredient(ingName, ingAmount);
this.ingredientAdded.emit(newIngredient);
  }
}
