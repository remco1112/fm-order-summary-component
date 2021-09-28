import { Component, Input, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'product-summary',
  templateUrl: './product-summary.component.html',
  styleUrls: ['./product-summary.component.css']
})
export class ProductSummaryComponent implements OnInit {

  constructor() { }

  @Input() product!: Product

  ngOnInit(): void {
  }

}
