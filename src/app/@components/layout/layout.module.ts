import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FooterModule } from "../footer/footer.module";
import { NavbarModule } from "../navbar/navbar.module";
import { LayoutComponent } from "./layout.component";

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, NavbarModule, FooterModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
