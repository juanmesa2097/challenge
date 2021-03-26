import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { LayoutModule } from "@app/@components/layout/layout.module";
import {
  iconsPathFactory,
  TuiNotificationsModule,
  TuiRootModule,
  TuiThemeNightComponent,
  TuiThemeNightModule,
  TUI_ICONS_PATH,
} from "@taiga-ui/core";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    LayoutModule,
    TuiRootModule,
    TuiThemeNightModule,
  ],
  exports: [
    TuiRootModule,
    LayoutModule,
    TuiThemeNightComponent,
    TuiNotificationsModule,
  ],
  providers: [
    {
      provide: TUI_ICONS_PATH,
      useValue: iconsPathFactory("assets/taiga-ui/icons/"),
    },
  ],
})
export class CoreModule {}
