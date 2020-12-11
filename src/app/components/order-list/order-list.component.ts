import { Component, OnInit } from '@angular/core';
import { OrderRes, OrderStatusRes } from 'src/api/generated/models';
import { OrderControllerService, OrderStatusControllerService } from 'src/api/generated/services';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  orders: OrderRes[];
  statuses: OrderStatusRes[];


  constructor(private orderService: OrderControllerService, private statusService: OrderStatusControllerService) { }

  ngOnInit(): void {
    this.getAllStatuses()
    this.getAllOrders()
  }

  getAllOrders(){

    this.orderService.listUsingGET1().subscribe(orders => this.orders = orders);

  }

  getAllStatuses(){
    this.statusService.listUsingGET3().subscribe(statuses => this.statuses = statuses);
  }
}
