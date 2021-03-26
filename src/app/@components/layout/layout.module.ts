import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NavbarModule } from "../navbar/navbar.module";
import { LayoutComponent } from "./layout.component";

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, NavbarModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
