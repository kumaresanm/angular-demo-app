import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { MyPipeDemoPipe } from "./my-pipe-demo.pipe";
import { AuthGuardService } from "./services/auth-guard.service";
import { TemplateOutletComponent } from './template-outlet/template-outlet.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: "products",
        component: ProductListComponent,
      },
      {
        path: "templateOutletDemo",
        component: TemplateOutletComponent,
      },
      {
        path: "products/:productId",
        component: ProductDetailsComponent,
        // canActivate: [AuthGuardService],
      },
      { path: "", redirectTo: "/products", pathMatch: "full" },

    ]),
  ],
  declarations: [	
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductDetailsComponent,
    MyPipeDemoPipe,
      TemplateOutletComponent
   ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
