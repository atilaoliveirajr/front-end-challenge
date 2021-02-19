import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IProductService {
    getAllProducts(): Observable<Product[]>;
    getProductById(productId: string): Promise<Product>;
}

@Injectable({
    providedIn: 'root'
})
export class ProductService implements IProductService {

    baseUrl = "http://localhost:3001/products";

    constructor(private http: HttpClient) { }

    getAllProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.baseUrl);
    }

    public async getProductById(productId: string): Promise<Product> {
        const url = `${this.baseUrl}/${productId}`;
        return this.http.get<Product>(url)
    }
   
   /*  public async getAllProducts(): Promise<Product[]> {
        return []; // TODO: implement
    } */

    /* public async getProductById(productId: string): Promise<Product> {
        return null as any; // TODO: implement
    } */

    
}
