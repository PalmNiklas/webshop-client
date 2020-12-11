import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  isLoggedOn: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('currentUser')){
      this.isLoggedOn = true;
    }

  }

}
