import { Injectable } from "@angular/core";
import { ApiResourceName } from "@app/@core/enums";
import { environment } from "@environments/environment";
import { NgxGenericRestService } from "ngx-grs";

@Injectable({
  providedIn: "root",
})
export class ArticlesService extends NgxGenericRestService {
  constructor() {
    super({
      baseUrl: environment.apiUrl,
      resourceName: ApiResourceName.Articles,
    });
  }
}
