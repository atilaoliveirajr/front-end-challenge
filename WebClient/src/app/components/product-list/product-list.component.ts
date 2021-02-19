import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/domain/models/product';
import { ProductService } from '../../domain/services/product.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  displayedColumns: String[] = ['productName', 'size', 'price'];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {

    console.log(this.products)

    this.productService.getAllProducts().subscribe(products => {
      this.products = products;

      
    })
  }

}
