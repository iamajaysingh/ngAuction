import { Injectable } from '@angular/core';
import { title } from 'process';

export class Product{

  constructor(
  public id:Number,
    public title:String,
    public price:Number,
    public rating:Number,
    public description:String,
    public categories:String[]){


  }
}

@Injectable({

  providedIn:'root'
})


export class ProductService {

  constructor() { }

  getProducts():Product[]{

    return products.map( p=> new Product(p.id,p.title,p.price,p.rating,p.description,p.categories))
  }
  getProductById(productId:number):Product{

    return products.find(p=> p.id === productId )
  }
}

  const products = [

    {
      'id': 0,
      'title': 'First Product',
      'price': 24.99,
      'rating': 4.3,
      'description': 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'categories': ['electronics', 'hardware']
    },
    {
      'id': 1,
      'title': 'First Product',
      'price': 24.99,
      'rating': 4.3,
      'description': 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'categories': ['electronics', 'hardware']
    },
    {
      'id': 2,
      'title': 'First Product',
      'price': 24.99,
      'rating': 4.3,
      'description': 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'categories': ['electronics', 'hardware']
    },
    {
      'id': 3,
      'title': 'Second Product',
      'price': 64.99,
      'rating': 3.5,
      'description': 'This is a short description.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'categories': ['books']
    },
  
  ];
    
  
  
  

