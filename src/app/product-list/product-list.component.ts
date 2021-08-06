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
  ViewEncapsulation,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { ActivatedRoute, Event } from "@angular/router";
import { fromEvent } from "rxjs";
import { mergeMap, map } from "rxjs/operators";

import { products } from "../products";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,
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
  productName = "All";
  @ViewChild("input1") public input1!: ElementRef;
  @ViewChild("input2") public input2!: ElementRef;
  constructor(private activatedRoute: ActivatedRoute) {
    console.log(`constructor`);
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
    let obs1 = fromEvent(this.input1.nativeElement, "input");
    let obs2 = fromEvent(this.input2.nativeElement, "input");

    obs1
      .pipe(
        mergeMap((event1: any) => {
          return obs2.pipe(
            map((event2: any) => event1.target.value + event2.target.value)
          );
        })
      )
      .subscribe((data) => {
        let span = document.querySelector("#span1");
        if (span) span.textContent = data;
        console.log(span);
      });
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
