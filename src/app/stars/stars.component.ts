import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nga-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  constructor() { }
  @Input() count :Number=5;
  @Input() rating:Number=3;
  stars:boolean[]=[];


  ngOnInit(): void {
    for(let i =1 ; i<=this.count; i++){

      this.stars.push( i< this.rating);
       
    }
    console.log(this.stars);
  }

}
