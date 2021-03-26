import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { UserPanelModule } from "../user-panel/user-panel.module";
import { NavbarComponent } from "./navbar.component";

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, UserPanelModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
