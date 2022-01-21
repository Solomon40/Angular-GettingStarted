import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';

@Component({
  selector: 'pm-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  title: string = "Product Details";
  product: IProduct | undefined;

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.title += `: ${id}`;
  }

  onBack(): void{
    this.router.navigate(['/products']);
  }

}
