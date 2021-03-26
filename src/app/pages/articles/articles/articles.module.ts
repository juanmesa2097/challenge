import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TuiTableModule } from "@taiga-ui/addon-table";
import { TuiLoaderModule } from "@taiga-ui/core";
import { TuiBreadcrumbsModule } from "@taiga-ui/kit";
import { ArticlesRoutingModule } from "./articles-routing.module";
import { ArticlesPage } from "./articles.page";
import { ArticlesListComponent } from "./components/articles-list/articles-list.component";

@NgModule({
  declarations: [ArticlesPage, ArticlesListComponent],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    TuiLoaderModule,
    TuiTableModule,
    TuiBreadcrumbsModule,
  ],
})
export class ArticlesModule {}
