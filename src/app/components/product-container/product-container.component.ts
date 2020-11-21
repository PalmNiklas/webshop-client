import { Component, OnInit } from '@angular/core';
import { Product } from 'src/api/generated/models';
import { ProductControllerService } from 'src/api/generated/services';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.scss']
})
export class ProductContainerComponent implements OnInit {

  products: Product[];
  searchString: string;

  constructor(private productService: ProductControllerService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.listUsingGET1().subscribe(
      products => this.products = products,
      error => console.log(error)
    );
  }

  search(){
    if(this.searchString){
      this.productService.getUsingGET2(this.searchString).subscribe(
        product => {this.products = [];
        this.products.push(product)},
        error => console.log(error)
      );
    }else if (this.searchString.length === 0)
    this.getProducts();
    
  }

}
