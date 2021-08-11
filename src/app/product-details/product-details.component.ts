import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"],
})
export class ProductDetailsComponent implements OnInit {
  constructor(private _route: ActivatedRoute) {}
  contactForm = new FormGroup({});

  ngOnInit() {
    console.log("in ProductDetailsComponent");
    console.log(this._route);
    console.log(this._route.params.subscribe((data) => console.log(data)));
    console.log(this._route.queryParams.subscribe((data) => console.log(data)));
    this.contactForm = new FormGroup({
      firstname: new FormControl(),
      lastname: new FormControl(),
      email: new FormControl(),
      gender: new FormControl(),
      isMarried: new FormControl(),
      country: new FormControl(),
    });
  }

  onSubmit() {
    console.log(this.contactForm.value);
  }
}
