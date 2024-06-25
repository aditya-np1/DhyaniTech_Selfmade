import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', loadChildren: () => import('./products/products.component').then(m => m.ProductsComponent) },
  { path: 'fountains', loadChildren: () => import('./fountains/fountains.component').then(m => m.FountainsComponent) },
  { path: 'videos', loadChildren: () => import('./gallery/gallery.component').then(m => m.GalleryComponent) },
  { path: 'projects', loadChildren: () => import('./projects/projects.component').then(m => m.ProjectsComponent) },
  { path: 'about-us', loadChildren: () => import('./about/about.component').then(m => m.AboutComponent) },
  { path: 'contact-us', loadChildren: () => import('./contact-us/contact-us.component').then(m => m.ContactUsComponent) }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
