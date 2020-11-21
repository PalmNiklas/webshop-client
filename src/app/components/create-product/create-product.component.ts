import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Category, Product } from 'src/api/generated/models';
import { CategoryControllerService, ProductControllerService } from 'src/api/generated/services';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  product: Product = <Product>({
    categories: []
  })
  dbCategories: Category[]
  selectedCategory: Category

  productId: number;

  constructor(private productService: ProductControllerService, private categoryService: CategoryControllerService, private messageService: MessageService) { }

  ngOnInit(): void {
this.loadCategories()
  }

  loadCategories(){

    this.categoryService.listUsingGET().subscribe(
      categories => this.dbCategories = categories,
      error => console.log(error)
    )
  }

  createProduct() {
  
    
    this.productService.createUsingPOST1(this.product).subscribe(
      data => { data => this.productId = data.id 
      },
      err => console.error(err),
      () => {
        
        this.clearForm()
        this.messageService.add({ severity: 'success', summary: 'Product created ' });
      }
    );
    console.log(this.productId);
    
  }

  clearForm(){
    this.product = {};
  }

}
