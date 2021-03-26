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
export class AuthGuard implements CanActivate {
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
    console.log(isLoggedIn);

    if (isLoggedIn) {
      return true;
    }

    this.router.navigate(["/", Path.SignIn], {
      queryParams: { returnUrl: state.url },
    });

    return false;
  }
}
