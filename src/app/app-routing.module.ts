import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { Path } from "./@core/enums/path.enum";

const routes: Routes = [
  // Redirect
  { path: "", redirectTo: Path.Articles, pathMatch: "full" },
  // Auth modules
  {
    path: Path.SignIn,
    canActivate: [],
    loadChildren: () =>
      import("@auth/sign-in/sign-in.module").then((m) => m.SignInModule),
  },
  // Feature modules
  {
    path: Path.Articles,
    canActivate: [],
    loadChildren: () =>
      import("@pages/articles/articles/articles.module").then(
        (m) => m.ArticlesModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: "legacy",
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
