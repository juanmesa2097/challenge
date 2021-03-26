import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {
  TuiButtonModule,
  TuiDropdownModule,
  TuiLinkModule,
} from "@taiga-ui/core";
import { TuiAvatarModule } from "@taiga-ui/kit";
import { UserPanelComponent } from "./user-panel.component";

@NgModule({
  declarations: [UserPanelComponent],
  imports: [
    CommonModule,
    TuiDropdownModule,
    TuiAvatarModule,
    TuiButtonModule,
    TuiLinkModule,
  ],
  exports: [UserPanelComponent],
})
export class UserPanelModule {}
