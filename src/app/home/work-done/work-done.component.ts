import { Component } from '@angular/core';
interface Works {
  title: string;
  content: string;
  imagePath: string;
}


@Component({
  selector: 'app-work-done',
  templateUrl: './work-done.component.html',
  styleUrls: ['./work-done.component.css']
})
export class WorkDoneComponent {

  works: Works[] = [
    {
      title: 'Water Printing!',
      content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imagePath: '../../../assets/img/regonizationWork/789291436-7562-1-800x800.jpeg'
    },
    {
      title: 'Musical Fountain Panels',
      content: 'Ut ut aliquip ex ea commodo consequat.',
      imagePath: '../../../assets/img/regonizationWork/img-20180514-152646-680x510.jpg'
    },
    {
      title: 'Musical Fountain Panels',
      content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imagePath: '../../../assets/img/regonizationWork/doam-fountain-17-1920x1280.jpg'
    }
  ];
}