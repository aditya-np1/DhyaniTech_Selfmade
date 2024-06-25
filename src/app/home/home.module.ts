import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FountainsComponent } from './fountains/fountains.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProjectsComponent } from './projects/projects.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
// import { MatCardHeader } from '@angular/material/card';
import { MatCardModule } from '@angular/material/card';
import { ClientReviewsComponent } from './client-reviews/client-reviews.component';
import { RecognizationComponent } from './recognization/recognization.component';
import { WorkDoneComponent } from './work-done/work-done.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProductsComponent,
    AboutComponent,
    ContactUsComponent,
    FountainsComponent,
    MainPageComponent,
    ProjectsComponent,
    GalleryComponent,
    HeaderComponent,
    FooterComponent,
    ClientReviewsComponent,
    RecognizationComponent,
    WorkDoneComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule
  ]
})
export class HomeModule { }
