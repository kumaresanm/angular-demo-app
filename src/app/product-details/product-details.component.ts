import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    console.log("in ProductDetailsComponent");
    console.log(this._route);
    console.log(this._route.params.subscribe(data => console.log(data)));
    console.log(this._route.queryParams.subscribe(data => console.log(data)));
  }

}