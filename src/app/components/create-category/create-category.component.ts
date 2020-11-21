import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Dropdown } from 'primeng/dropdown';
import { Category } from 'src/api/generated/models';
import { CategoryControllerService } from 'src/api/generated/services';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnInit {

  dbCategories: Category[];
  
  name: string;
  parentCategory: Category;

  constructor(private categoryService: CategoryControllerService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.loadCategories()
  }

  loadCategories() {

    this.categoryService.listUsingGET().subscribe(
      categories => this.dbCategories = categories,
      error => console.log(error)
    )
  }

  createCategory() {

    if(this.name && this.parentCategory){
     const newCategory: Category = {
      name: this.name,
      parentId: this.parentCategory.id
     }

     this.categoryService.createUsingPOST(newCategory).subscribe(
      ata => { },
      err => console.error(err),
      () => {
        this.clearForm()
        this.messageService.add({ severity: 'success', summary: 'Category created ' });
      });

    }
    
  }
  clearForm() {
    this.name = "";
  }

}
