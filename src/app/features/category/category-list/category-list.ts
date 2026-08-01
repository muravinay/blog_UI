import { Component, inject, Inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CategoryService } from '../services/category-service';

@Component({
  selector: 'app-category-list',
  imports: [RouterLink],
  templateUrl: './category-list.html',
  styleUrl: './category-list.css',
})
export class CategoryList {
  private categoryService=inject(CategoryService);
  private getallCategoriesRef=this.categoryService.getCategory();
  isLoading=this.getallCategoriesRef.isLoading;
   isError=this.getallCategoriesRef.error;
   value=this.getallCategoriesRef.value;
   
}
