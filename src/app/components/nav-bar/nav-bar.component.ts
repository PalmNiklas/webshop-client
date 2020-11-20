import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  items: MenuItem[];
  authService: AuthenticationService  

  constructor(authService: AuthenticationService) { 
    this.authService = authService;
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Login',
        icon: 'pi pi-user',
        routerLink: '/login',
      },
      {
        
        label: 'Sign Up',
        icon: 'pi pi-user-plus',
        routerLink: '/create-account',
      },
    ];
  }

  logout(){
    this.authService.logout();
  }


}
