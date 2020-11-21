import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from 'src/api/generated/models';
import { UserControllerService } from 'src/api/generated/services';
import { Role } from 'src/app/enums/RoleEnum';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  
  username: string;
  email: string;
  password: string;


  constructor( private router: Router, private userService: UserControllerService, private authService: AuthenticationService, private messageService: MessageService) { 

  }

  ngOnInit(): void {
  
  }

  createAccount() {

    const user = <User>(
      {
        username: this.username,
        email: this.email,
        password: this.password,
        active: true,
        role: Role.Customer
      }
    );
  
 

    this.userService.createUsingPOST2(user).subscribe(
      data => {},
      err => console.error(err),
      () => {
        this.clearForm();
        this.messageService.add({severity:'success', summary:'Account created '});
      }
      );
  }

  clearForm(){
    this.email = "";
    this.password = "";
    this.username = "";
  }
}
