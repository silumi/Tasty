import { Component, OnInit, OnDestroy,ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shoppingList.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit , OnDestroy{
  @ViewChild('f', {static: false}) slForm: NgForm;
  subscription : Subscription;
  editMode= false;
  editedItemIndex: number;
  editedItem: Ingredient;

// @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
// @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef;
// @Output() ingredientAdded = new EventEmitter<Ingredient>(); // {name: string, amount: number}
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
   this.subscription = this.shoppingListService.startedEditing
   .subscribe(
     (index: number) => {
       this.editedItemIndex= index;
       this.editMode = true;
       this.editedItem = this.shoppingListService.getIngredient(index);
       this.slForm.setValue({
         name: this.editedItem.name,
         amount: this.editedItem.amount
       })
     }
   ); 
  }
  onAddItems(form: NgForm) {
const value = form.value;
const newIngredient = new Ingredient(value.name, value.amount);

if(this.editMode){
  this.shoppingListService.UpdateIngredient(this.editedItemIndex, newIngredient);
}else{
  this.shoppingListService.addIngredient(newIngredient);
} form.reset();
  }
onClear(){
  this.slForm.reset();
  this.editMode = false;
}
onDelete(){
  this.shoppingListService.deleteIngredients(this.editedItemIndex);
  this.onClear();
}
  ngOnDestroy(){
    this.subscription.unsubscribe();

  }// to clear subscription to avoid memory leaks
}
