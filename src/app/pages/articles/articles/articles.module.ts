import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TuiTableModule } from "@taiga-ui/addon-table";
import {
  TuiLinkModule,
  TuiLoaderModule,
  TuiTextfieldControllerModule,
} from "@taiga-ui/core";
import { TuiBreadcrumbsModule, TuiInputModule } from "@taiga-ui/kit";
import { ArticlesRoutingModule } from "./articles-routing.module";
import { ArticlesPage } from "./articles.page";
import { ArticlesListComponent } from "./components/articles-list/articles-list.component";

@NgModule({
  declarations: [ArticlesPage, ArticlesListComponent],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    FormsModule,
    TuiLoaderModule,
    TuiTableModule,
    TuiBreadcrumbsModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
    TuiLinkModule,
  ],
})
export class ArticlesModule {}
