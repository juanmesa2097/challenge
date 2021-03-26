import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { NotFoundPage } from "./@containers/not-found/not-found.page";
import { Path } from "./@core/enums/path.enum";
import { AuthGuard, NoAuthGuard } from "./@core/guards";

const routes: Routes = [
  // Redirect
  { path: "", redirectTo: Path.Articles, pathMatch: "full" },
  // Auth modules
  {
    path: Path.SignIn,
    canActivate: [NoAuthGuard],
    loadChildren: () =>
      import("@app/pages/+auth/sign-in/sign-in.module").then(
        (m) => m.SignInModule
      ),
  },
  // Feature modules
  {
    path: Path.Articles,
    canActivate: [AuthGuard],
    loadChildren: () =>
      import("@pages/articles/articles/articles.module").then(
        (m) => m.ArticlesModule
      ),
  },
  // Not Found
  {
    path: "**",
    loadChildren: () =>
      import("@containers/not-found/not-found.module").then(
        (m) => m.NotFoundModule
      ),
    component: NotFoundPage,
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
