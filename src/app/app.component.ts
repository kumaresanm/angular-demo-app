import { Component, OnInit } from "@angular/core";
import { concat, Observable, of, Subject } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  data = "Kumar";
  counter = 0;

  updateCounter() {
    this.counter += 1;
  }

  ngOnInit() {
    setTimeout(() => {
      this.data = "Roshni";
    }, 4000);

    const series1$ = of("a", "b");

    const series2$ = of("x", "y");

    const result$ = concat(series1$, series2$);

    result$.subscribe(console.log);
    // const obs = new Observable((observer) => {
    //   observer.next(Math.random());
    //   observer.complete();
    // });

    // obs.subscribe({
    //   next: (value) => console.log(value),
    // });
    // obs.subscribe((data) => console.log(data));

    // let obs1 = Observable.create(
    //   (observer: { next: (arg0: number) => void }) => {
    //     observer.next(Math.random());
    //   }
    // );
    // obs1.subscribe((res: any) => {
    //   console.log("subscription a :", res); //subscription a :0.2859800202682865
    // });
    // obs1.subscribe((res: any) => {
    //   console.log("subscription b :", res); //subscription b :0.694302021731573
    // });

    // let obs2 = new Subject();
    // obs2.subscribe((res) => {
    //   console.log("subscription a :", res); // subscription a : 0.91767565496093
    // });
    // obs2.subscribe((res) => {
    //   console.log("subscription b :", res); // subscription b : 0.91767565496093
    // });
    // obs2.next(Math.random());
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
