import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { AuthGuard } from './auth/auth.guard';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { UserDemoComponent } from './user-demo/user-demo.component';
import {Role } from './enums/RoleEnum';
import { ProductContainerComponent } from './components/product-container/product-container.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { LoggedInAuthGuard } from './auth/logged-in-auth.guard';
import { AdminProductPageComponent } from './pages/admin-product-page/admin-product-page.component';

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
    component: LoginFormComponent,
    canActivate: [LoggedInAuthGuard] 
  },
  { 
    path: '', 
    component: LandingPageComponent,
  },
  { 
    path: 'create-account', 
    component: CreateUserComponent,
  },
  { 
    path: 'products', 
    component: ProductContainerComponent,
    canActivate: [AuthGuard],
    data:{
      allowedRoles: [Role.Admin, Role.Customer]
    }
  },
  { 
    path: 'create-product', 
    component: CreateProductComponent,
    canActivate: [AuthGuard],
    data:{
      role: Role.Admin
    }
  },
  { 
    path: 'admin-product', 
    component: AdminProductPageComponent,
    canActivate: [AuthGuard],
    data:{
      role: Role.Admin
    }
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}

