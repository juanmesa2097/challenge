import { Injectable } from "@angular/core";
import { ApiResourceName } from "@app/@core/enums";
import { environment } from "@environments/environment";
import { NgxGenericRestService } from "ngx-grs";
import { BehaviorSubject, Observable } from "rxjs";
import { User } from "../models/user.model";

@Injectable({
  providedIn: "root",
})
export class AuthService extends NgxGenericRestService {
  isLoggedIn$ = new BehaviorSubject<boolean>(false);

  constructor() {
    super({
      baseUrl: environment.apiUrl,
      resourceName: ApiResourceName.Auth,
    });
  }

  get isLoggedIn(): boolean {
    return this.isLoggedIn$.getValue();
  }

  signIn(credentials: User): Observable<string> {
    const { username, password } = credentials;
    return super
      .getHttpClient()
      .post<string>(
        `${super.url}/login?username=${username}&password=${password}`,
        null
      );
  }

  signOut(): Observable<string> {
    return super.getHttpClient().post<string>(`${super.url}/logout`, null);
  }
}
