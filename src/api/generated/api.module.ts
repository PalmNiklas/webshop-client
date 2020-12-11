/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { CategoryControllerService } from './services/category-controller.service';
import { OrderItemControllerService } from './services/order-item-controller.service';
import { OrderStatusControllerService } from './services/order-status-controller.service';
import { OrderControllerService } from './services/order-controller.service';
import { ProductControllerService } from './services/product-controller.service';
import { UserControllerService } from './services/user-controller.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    CategoryControllerService,
    OrderItemControllerService,
    OrderStatusControllerService,
    OrderControllerService,
    ProductControllerService,
    UserControllerService
  ],
})
export class ApiModule {
  static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}
