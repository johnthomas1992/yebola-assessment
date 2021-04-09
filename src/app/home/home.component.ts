import { SampleService } from './../sample.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  productsArr!: Array<Product>;

  constructor(private routes: Router, private productService: SampleService) {}

  ngOnInit(): void {
    this.productService.getProductList().subscribe((products) => {
      this.productsArr = products;
    });
  }
}
