import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TuiButtonModule } from "@taiga-ui/core";
import { NotFoundRoutingModule } from "./not-found-routing.module";
import { NotFoundPage } from "./not-found.page";

@NgModule({
  declarations: [NotFoundPage],
  imports: [CommonModule, NotFoundRoutingModule, TuiButtonModule],
})
export class NotFoundModule {}
