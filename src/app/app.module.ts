import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shoppingList/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shoppingList/shopping-list-edit/shopping-list-edit.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { HeaderComponent } from './header/header.component';
import { RecipeItemsComponent } from './recipes/recipe-list/recipe-items/recipe-items.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shoppingList/shoppingList.service';




@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipesComponent,
    RecipeDetailsComponent,
    HeaderComponent,
    RecipeItemsComponent,
    RecipeListComponent,
    DropdownDirective
    ],
    imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ShoppingListService],
  bootstrap : [AppComponent],
})
export class AppModule { }
