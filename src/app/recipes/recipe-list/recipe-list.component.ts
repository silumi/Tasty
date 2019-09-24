import { Component, OnInit } from '@angular/core';
import { Recipe} from '../Recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe [] = [
    new Recipe('A Test Recipe', 'delicious recipe','https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190910-cheesy-bacon-butternut-squash-0048-landscape-pf-1568996714.jpg?crop=0.790xw:0.591xh;0.103xw,0.224xh&resize=768:*'),
    new Recipe('A Test Recipe', 'delicious recipe','https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190910-cheesy-bacon-butternut-squash-0048-landscape-pf-1568996714.jpg?crop=0.790xw:0.591xh;0.103xw,0.224xh&resize=768:*')]
    
   
  constructor() { 

  }
ngOnInit(){}

}

