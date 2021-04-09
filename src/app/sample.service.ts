import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(private http: HttpClient) { }

  getProductList(): Observable<Array<Product>>{
    return this.http.get<Array<Product>>('../../assets/sample.json');
  }

}
