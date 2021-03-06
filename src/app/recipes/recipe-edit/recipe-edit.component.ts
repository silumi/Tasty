import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
id: number;
editMode = false;
recipeForm: FormGroup;
  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params.id;
        this.editMode = params.id != null;
        this.initForm();
      }
    );
  }
  onSubmit() {
   if (this.editMode) {
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }
   this.onCancel();
  }
  onCancel() {
this.router.navigate(['../'], {relativeTo: this.route});
  }
  onAddIngredient() {
    ( this.recipeForm.get('ingredients') as FormArray).push(
       new FormControl({
         name: new FormControl(null, Validators.required),
         amount: new FormControl(
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
         )
       })
    );
  }
  onDeleteIngredient(index: number) {
   (this.recipeForm.get('ingredients') as FormArray).removeAt(index);
  }
private initForm() {
  let recipeName = '';
  let recipeDescription = '';
  let recipeUrl = '';
  const recipeIngredients = new FormArray([]);


  if (this.editMode) {
    const recipe = this.recipeService.getRecipe(this.id);
    recipeName = recipe.name;
    recipeDescription = recipe.description;
    recipeUrl = recipe.imagePath;
    if (recipe.ingredients) {
      for (const ingredient of recipe.ingredients) {
        recipeIngredients.push(
          new FormGroup({
            name: new FormControl(ingredient.name, Validators.required),
            amount: new FormControl(ingredient.amount, [
              Validators.required,
              Validators.pattern(/^[1-9]+[0-9]*$/)
            ])
          })
        );
      }
    }
  }
  this.recipeForm = new FormGroup({
  name : new FormControl(recipeName, Validators.required),
  description: new FormControl(recipeDescription, Validators.required),
  imagePath: new FormControl(recipeUrl, Validators.required),
  ingredients: recipeIngredients
});
}
}
