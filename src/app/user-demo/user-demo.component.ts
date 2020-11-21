import { Component, OnInit } from '@angular/core';
import { User } from 'src/api/generated/models';
import { UserControllerService } from 'src/api/generated/services';
 
@Component({
  selector: 'app-user-demo',
  templateUrl: './user-demo.component.html',
  styleUrls: ['./user-demo.component.scss']
})
export class UserDemoComponent implements OnInit {

  public users;

  constructor(private userService: UserControllerService) { 

  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.userService.listUsingGET2().subscribe(
      data => {this.users = data},
      err => console.error(err),
      () => console.log(this.users)
      );
    
  }
}
