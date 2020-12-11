import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDemoComponent } from './user-demo/user-demo.component';
import { ApiModule } from 'src/api/generated/api.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import { FormsModule } from '@angular/forms';
import {MenubarModule} from 'primeng/menubar';
import {CardModule} from 'primeng/card';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ToastModule} from 'primeng/toast'
import {DropdownModule} from 'primeng/dropdown';
import {TableModule} from 'primeng/table';

import {MessageService} from 'primeng/api';

import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProductContainerComponent } from './components/product-container/product-container.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { CreateCategoryComponent } from './components/create-category/create-category.component';
import { AdminProductPageComponent } from './pages/admin-product-page/admin-product-page.component';
import { ShopingCartComponent } from './components/shoping-cart/shoping-cart.component';
import {InputNumberModule} from 'primeng/inputnumber';
import { AdminOrderPageComponent } from './pages/admin-order-page/admin-order-page.component';
import { OrderListComponent } from './components/order-list/order-list.component';


@NgModule({
  declarations: [
    AppComponent,
    UserDemoComponent,
    LoginFormComponent,
    LandingPageComponent,
    CreateUserComponent,
    NavBarComponent,
    ProductContainerComponent,
    CreateProductComponent,
    CreateCategoryComponent,
    AdminProductPageComponent,
    ShopingCartComponent,
    AdminOrderPageComponent,
    OrderListComponent,
    
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    ApiModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    FormsModule,
    MenubarModule,
    CardModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    DropdownModule,
    TableModule,
    InputNumberModule

  ],
  exports: [
    ButtonModule,
    InputTextModule,
    
  ],
  providers: [ApiModule, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
