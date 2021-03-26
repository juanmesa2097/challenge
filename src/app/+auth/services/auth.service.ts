import { Injectable } from "@angular/core";
import { ApiResourceName } from "@app/@core/enums";
import { environment } from "@environments/environment";
import { NgxGenericRestService } from "ngx-grs";
import { BehaviorSubject } from "rxjs";

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

  // signIn(username: string, password: string) {
  //   return super.add({
  //     username,
  //     password,
  //   }) as string;
  // }
}
