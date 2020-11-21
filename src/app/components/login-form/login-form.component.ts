import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { error } from 'protractor';
import { User } from 'src/api/generated/models';
import { UserControllerService } from 'src/api/generated/services';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  username: string;
  password: string;

  userService: UserControllerService;
  router: Router;
  authService: AuthenticationService;

  constructor(userService: UserControllerService, router: Router, authService: AuthenticationService) {
    this.userService = userService;
    this.router = router;
    this.authService = authService;
  }


  ngOnInit(): void {
  }

  login() {
    console.log("Test");
    if (this.username && this.password) {
      const user = <User>(
        {
          username: this.username,
          password: this.password,
        }
      );

       this.authService.login(user).subscribe(data => {},error => {},() => {
         if(this.authService.redirectUrl){
          this.router.navigate([this.authService.redirectUrl])
         }else {
          this.router.navigate(["/"])
         }
       }) 
    } 
  }

}
