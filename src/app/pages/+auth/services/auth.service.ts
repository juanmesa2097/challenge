import { Injectable } from "@angular/core";
import { ApiResourceName } from "@app/@core/enums";
import { USER_STORE_KEY } from "@app/@core/utils";
import { environment } from "@environments/environment";
import { NgxGenericRestService } from "ngx-grs";
import { BehaviorSubject, Observable, of } from "rxjs";
import { catchError, delay, switchMap, tap } from "rxjs/operators";
import { User, UserDetails } from "../models/user.model";

@Injectable({
  providedIn: "root",
})
export class AuthService extends NgxGenericRestService {
  isLoggedIn$ = new BehaviorSubject<boolean>(!!this.getStoredUser());

  constructor() {
    super({
      baseUrl: environment.apiUrl,
      resourceName: ApiResourceName.Auth,
    });
  }

  get isLoggedIn(): boolean {
    return this.isLoggedIn$.getValue();
  }

  get user(): UserDetails {
    return this.getStoredUser();
  }

  getUser(): Observable<UserDetails> {
    return this.single<UserDetails>("login").pipe(
      catchError((err) => of(null))
    );
  }

  signIn(credentials: User): Observable<UserDetails> {
    const { username, password } = credentials || {};
    return super
      .getHttpClient()
      .post<UserDetails>(
        `${super.url}/login?username=${username}&password=${password}`,
        null
      )
      .pipe(
        delay(1000),
        switchMap(() =>
          this.getUser().pipe(
            tap((user) => {
              if (user) {
                this.isLoggedIn$.next(true);
                this.storeUser(user);
              }
            })
          )
        )
      );
  }

  signOut(): Observable<string> {
    return super
      .getHttpClient()
      .post<string>(`${super.url}/logout`, null)
      .pipe(
        tap(() => {
          this.isLoggedIn$.next(false);
          this.removeStoredUser();
        })
      );
  }

  private getStoredUser(): UserDetails {
    return JSON.parse(localStorage.getItem(USER_STORE_KEY));
  }

  private storeUser(user: UserDetails): void {
    localStorage.setItem(USER_STORE_KEY, JSON.stringify(user));
  }

  private removeStoredUser(): void {
    localStorage.removeItem(USER_STORE_KEY);
  }
}
