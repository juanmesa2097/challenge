import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { AuthService } from "@app/pages/+auth/services/auth.service";
import { Observable } from "rxjs";
import { Path } from "../enums";

@Injectable({
  providedIn: "root",
})
export class NoAuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const isLoggedIn = this.authService.isLoggedIn;

    if (isLoggedIn) {
      this.router.navigate(["/", Path.Articles]);
      return false;
    }

    return true;
  }
}
