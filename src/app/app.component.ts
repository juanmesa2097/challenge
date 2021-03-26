import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "./pages/+auth/services/auth.service";

@Component({
  selector: "sai-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  isLoggedIn$!: Observable<boolean>;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn$;
  }
}
