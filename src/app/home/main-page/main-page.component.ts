import { Component, OnInit } from '@angular/core';

interface WaterFeature {
  imageUrl: string;
  title: string;
  description: string;
  showOverlay: boolean;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  backgroundImage = '../../../assets/img/cascadedl-fountain-10-1920x1280.jpg';


  showOverlay(feature: WaterFeature) {
    feature.showOverlay = true;
  }

  hideOverlay(feature: WaterFeature) {
    feature.showOverlay = false;
  }

  ngOnInit(): void {
    // this.loadImages(); // You can uncomment this if you want the image slider functionality
  }

  // ... (loadImages function remains the same)
}
