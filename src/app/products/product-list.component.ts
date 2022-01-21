import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

import { IProduct } from "./product";
import { ProductService } from "./ProductService";

@Component({
  selector: 'pm-product-list',

  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  errorMessage: string = '';
  sub!: Subscription | undefined;

  // Dependency Injection
  constructor( private productService: ProductService){

  }
  private _listFilter: string = '';

//getter and setter properties to filter products
  get listFilter(): string{
    return this._listFilter;
  }
  set listFilter(value: string){
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
  }
  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().includes(filterBy));
  }

  toggleImage(): void{
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe({
      next: products => this.products = products,
      error: err => this.errorMessage = err
    });
    this.filteredProducts = this.products;

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ratingClicked(message: string): void{
    this.pageTitle = this.pageTitle + " " + message;
  }
}
