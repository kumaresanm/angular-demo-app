import { Product } from "./products";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "myPipeDemo",
})
export class MyPipeDemoPipe implements PipeTransform {
  transform(value: any, args2: string): any {
    return args2 === "All"
      ? value
      : value.filter((val: Product) =>
          val.name.toLowerCase().includes(args2.toLowerCase())
        );
    // return value.;
  }
}
