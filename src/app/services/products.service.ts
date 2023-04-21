import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

const baseUrl = 'https://fakestoreapi.com/products';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

interface Rating {
  rate: number;
  count: number
}

@Injectable({ providedIn: 'root'})
export class ProductsService {
  constructor(private http: HttpClient) {}

  fetchProducts() {
    return this.http.get<Product[]>('https://fakestoreapi.com/products')
  }
}