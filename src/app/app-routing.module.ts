import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { AuthGuard } from './auth/auth.guard';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { UserDemoComponent } from './user-demo/user-demo.component';
import {Role } from './enums/RoleEnum';

const routes: Routes = [
  {
    path: 'users',
    component: UserDemoComponent,
    canActivate: [AuthGuard],
    data:{
      role: Role.Admin
    }
  },
  { 
    path: 'login', 
    component: LoginFormComponent 
  },
  { 
    path: '', 
    component: LandingPageComponent,
  },
  { 
    path: 'create-account', 
    component: CreateUserComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}

