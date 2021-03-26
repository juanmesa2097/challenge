import { Component, OnInit } from "@angular/core";
import { User } from "../models/user.model";
import { AuthService } from "../services/auth.service";

@Component({
  templateUrl: "./sign-in.page.html",
  styleUrls: ["./sign-in.page.scss"],
})
export class SignInPage implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit(crendentials: User): void {
    this.authService.signIn(crendentials).subscribe(console.log);
  }
}
