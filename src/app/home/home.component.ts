import { SampleService } from './../sample.service';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('jsonResponse')
  jsonResponse!: TemplateRef<any>;
  productsArr!: Array<Product>;
  orgProductsArr!: Array<Product>;
  productCategoryArr!: Array<string>;
  selectedCategory = 'All';
  jsonOutput = '';
  constructor(
    private productService: SampleService,
    public dialog: MatDialog) {}

  ngOnInit(): void {
    this.productService.getProductList().subscribe((products) => {
      this.orgProductsArr = products;
      this.productsArr = products;
      this.getProductCategory();
    });
  }
  getProductCategory(): void {
    this.productCategoryArr = ['All'];
    for (const product of this.productsArr){
       if (product && product.p_category && this.productCategoryArr.indexOf(product.p_category) === -1){
         this.productCategoryArr.push(product.p_category);
       }
    }
  }
  categorySelected(): void {
    if (this.selectedCategory === 'All'){
      this.productsArr = this.orgProductsArr;
    } else {
   this.productsArr = this.orgProductsArr.filter(elem => elem.p_category === this.selectedCategory);
    }
  }
  addQuantity(index: number): void{
    this.jsonOutput = JSON.stringify(this.productsArr[index]);
    const dialogRef = this.dialog.open(this.jsonResponse);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
