import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService, Product } from '../shared/product.service';

@Component({
  selector: 'nga-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product:Product

  constructor(private routeParam:ActivatedRoute, private prodService:ProductService) { }

  ngOnInit(): void {

    const prodId  =   parseInt(this.routeParam.snapshot.paramMap.get('productId'));
     this.product =this.prodService.getProductById(prodId);
 console.log("product details component======================================")
     console.log(this.product);
  }

}
