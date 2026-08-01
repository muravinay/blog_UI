import { Routes } from '@angular/router';
import { CategoryList } from './features/category/category-list/category-list';
import { AddCategory } from './features/category/add-category/add-category';
import { EditCategory } from './features/category/edit-category/edit-category';
import { BlogpostList } from './features/blogpost/blogpost-list/blogpost-list';
import { AddBlogpost } from './features/blogpost/add-blogpost/add-blogpost';
import { EditBlogpost } from './features/blogpost/edit-blogpost/edit-blogpost';
import { Home } from './features/public/home/home';
import { BlogDetails } from './features/public/blog-details/blog-details';
import { Login } from './features/auth/login/login';
import { Register } from './features/auth/register/register';
import { guardsGuard } from './features/auth/guards-guard';

export const routes: Routes = [
    {
        path: 'admin/categories',
        component: CategoryList,
        canActivate: [guardsGuard]
    },
     {
        path: 'admin/categories/add',
        component: AddCategory,
        canActivate: [guardsGuard]
    },
    {
        path:'admin/categories/edit/:id',
        component: EditCategory,
        canActivate: [guardsGuard]
    },
     {
        path: 'admin/blogposts',
        component: BlogpostList,
        canActivate: [guardsGuard]
    },
     {
        path: 'admin/blogposts/add',
        component: AddBlogpost,
        canActivate: [guardsGuard]
    },
    {
        path:'admin/blogposts/edit/:id',
        component: EditBlogpost,
        canActivate: [guardsGuard]
    },
     {
        path:'',
        component:Home
    },
    {
        path:'blog/:url',
        component:BlogDetails
    },
    {
        path:'login',
        component: Login
    },
    {
        path:'register',
        component: Register
    }

    
    
];

