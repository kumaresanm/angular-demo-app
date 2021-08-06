import {
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Component,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ViewEncapsulation
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { products } from "../products";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated
})
export class ProductListComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input("joke") data?: string;
  // @Input("counter") counter?: string;
  products = products;
  productName: string;
  constructor(private activatedRoute: ActivatedRoute) {
    console.log(`constructor`);
    this.productName = "All";
  }
  ngOnChanges() {
    console.log(`ngOnChanges - data is ${this.data}`);
    console.log(this.activatedRoute);
  }

  ngOnInit() {
    console.log(`ngOnInit  - data is`);
  }

  ngDoCheck() {
    console.log("ngDoCheck");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }
  share() {
    window.alert("The product has been shared!");
    // this.data = "papa";
  }
  executeFunction() {
    console.log("child loaded");
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
