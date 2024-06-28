import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { HomeCardComponent } from './home-card/home-card.component';
import { GalleryCardComponent } from './gallery-card/gallery-card.component';
import { ControllerVersionsCardComponent } from './controller-versions-card/controller-versions-card.component';
import { CareersCardComponent } from './careers-card/careers-card.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { PurchaseCardComponent } from './purchase-card/purchase-card.component';
import { HomeModule } from '../home/home.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectsCardComponent } from './projects-card/projects-card.component';


@NgModule({
  declarations: [
    HomeCardComponent,
    GalleryCardComponent,
    ControllerVersionsCardComponent,
    CareersCardComponent,
    ProductCardComponent,
    PurchaseCardComponent,
    BlogCardComponent,
    ProjectsCardComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
  ],
  exports: [HeaderComponent, FooterComponent]
})
export class SharedModule { }
