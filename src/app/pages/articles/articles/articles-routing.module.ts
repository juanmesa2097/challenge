import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Path } from "@app/@core/enums";
import { ArticlesPage } from "./articles.page";

const routes: Routes = [
  {
    path: "",
    component: ArticlesPage,
    data: {
      title: "Articles",
      breadcrumbs: [
        {
          caption: "Articles",
          routerLink: `/${Path.Articles}`,
        },
      ],
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticlesRoutingModule {}
