import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BlogpostService } from '../services/blogpost-service';
import { CategoryService } from '../../category/services/category-service';

@Component({
  selector: 'app-blogpost-list',
  imports: [RouterLink],
  templateUrl: './blogpost-list.html',
  styleUrl: './blogpost-list.css',
})
export class BlogpostList {
   blogPostService=inject (BlogpostService);
   categoryService=inject(CategoryService);
   private categoriesResourceRef=this.categoryService.getCategory();
  categoriesResponse=this.categoriesResourceRef.value;
   getAllBlogPostRef=this.blogPostService.getAllBlogPosts();
   loading=this.getAllBlogPostRef.isLoading;
   error=this.getAllBlogPostRef.error;
   response=this.getAllBlogPostRef.value;
   
  
}
