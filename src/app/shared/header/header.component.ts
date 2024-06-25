import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    // document.getElementById('nav-toggle').onclick = function () {
    // docum/ent.getElementById("nav-content").classList.toggle("hidden");
    // }
  }
  dhyaniTechLogo = 'DhyaniTechLogo.png';
}

