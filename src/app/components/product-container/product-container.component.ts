import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ApiModule } from 'src/api/generated/api.module';
import { OrderItemReq, Product, User, OrderReq, Category } from 'src/api/generated/models';
import { OrderControllerService, ProductControllerService, UserControllerService } from 'src/api/generated/services';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.scss']
})
export class ProductContainerComponent implements OnInit {

  products: Product[];
  searchString: string;
  orderItems: OrderItemReq[];
  activeOrder: OrderReq;
  currentUser: User;
  itemQuantity: number;

  @Input() categoryId: number;

  constructor(private productService: ProductControllerService, private userService: UserControllerService, private orderService: OrderControllerService, private messageService: MessageService) { }
  

  ngOnInit(): void {
    console.log(this.categoryId)
    if(this.categoryId ){
      this.getProductsByCategory(this.categoryId)

    } else {
      this.getProducts();
    }



  }

  getProducts(){
    this.productService.listUsingGET4().subscribe(
      products => this.products = products,
      error => console.log(error)
    );
  }

  getProductsByCategory(id: number){
    this.productService.listByCategoryUsingGET(id).subscribe(
      products => this.products = products,
      error => console.log(error)
    );
  }

  search(){
    if(this.searchString){
      this.productService.getUsingGET5(this.searchString).subscribe(
        product => {this.products = [];
        this.products.push(product)},
        error => console.log(error)
      );
    }else if (this.searchString.length === 0)
    this.getProducts();
    
  }

  onSelect(product: Product){

    if(!this.currentUser){
      this.currentUser = JSON.parse(localStorage.getItem('currentUser')) as User;
    }
    
    this.activeOrder = JSON.parse(sessionStorage.getItem('activeOrder')) as OrderReq;
    
    if(!this.activeOrder){
      this.orderService.getActiveOrderUsingGET(this.currentUser.id).subscribe(order => {
        sessionStorage.setItem("activeOrder", JSON.stringify(order)),
        this.activeOrder = order
      });

    } else {
      let item = <OrderItemReq>{
       product: product,
       quantity: 1,
      }
      this.addItemToOrder(this.activeOrder, item)
    } 
  }

  addItemToOrder(order:OrderReq, item: OrderItemReq){
   const params = <AddItemToOrderUsingPUTParams>{
     orderId: order.id,
     item: item
   }
    this.orderService.addItemToOrderUsingPUT(params).subscribe(
      order =>{
        this.activeOrder = order
        this.messageService.add({severity:'success', summary: "+"+ params.item.quantity + " " + params.item.product.name })
      } 
    )

  }

  getItemsFromOrder(orderId: number){
    this.orderService.getUsingGET1(orderId).subscribe(
      order => console.log(order)
      
    );
  }

   

}
  /**
   * Parameters for addItemToOrderUsingPUT
   */
   export interface AddItemToOrderUsingPUTParams {

    /**
     * orderId
     */
    orderId: number;

    /**
     * item
     */
    item: OrderItemReq;
  }
