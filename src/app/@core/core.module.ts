import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@app/@components/layout/layout.module';
import { TuiRootModule, TuiThemeNightComponent, TuiThemeNightModule } from '@taiga-ui/core';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    TuiRootModule,
    TuiThemeNightModule
  ],
  exports: [
    TuiRootModule,
    LayoutModule,
    TuiThemeNightComponent
  ]
})
export class CoreModule { }
