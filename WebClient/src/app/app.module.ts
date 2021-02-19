import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DomainModule } from './domain/domain.module';
import { Product } from '../app/domain/models/product';
import { ProductService } from '../app/domain/services/product.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductListComponent } from './components/product-list/product-list.component';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    declarations: [
        AppComponent,
        ProductListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        DomainModule,
        BrowserAnimationsModule,
        MatListModule,
        MatTableModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {

    products: Product[] = [];

    constructor(private productService: ProductService) { }

    ngOnInit(): void {
        
      }
}
