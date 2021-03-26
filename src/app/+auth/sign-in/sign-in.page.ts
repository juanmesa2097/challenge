import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Path } from "@app/@core/enums";
import { TuiNotification, TuiNotificationsService } from "@taiga-ui/core";
import { Subject } from "rxjs";
import { share, takeUntil } from "rxjs/operators";
import { User } from "../models/user.model";
import { AuthService } from "../services/auth.service";

@Component({
  templateUrl: "./sign-in.page.html",
  styleUrls: ["./sign-in.page.scss"],
})
export class SignInPage implements OnInit, OnDestroy {
  loading = false;
  errorMsg = "";

  private destroy$ = new Subject();

  constructor(
    private router: Router,
    private notificationsService: TuiNotificationsService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  onSubmit(crendentials: User): void {
    this.loading = true;
    this.authService
      .signIn(crendentials)
      .pipe(share(), takeUntil(this.destroy$))
      .subscribe(
        (res) => {
          console.log(res);
          this.loading = false;
          this.router.navigate(["/", Path.Articles]);
        },
        (err) => {
          if (err.status === 400) {
            this.errorMsg = "Username or password is incorrect";
          } else {
            this.notificationsService
              .show(err.message, {
                label: "😢 An error ocurred",
                status: TuiNotification.Error,
                hasCloseButton: true,
                autoClose: false,
              })
              .pipe(takeUntil(this.destroy$))
              .subscribe();
          }

          this.loading = false;
        }
      );
  }

  onForgotPassword() {
    this.notificationsService
      .show("Will navigate to forgot-password page", {
        status: TuiNotification.Info,
      })
      .pipe(takeUntil(this.destroy$))
      .subscribe();
  }

  onSignUp() {
    this.notificationsService
      .show("Will navigate to sign-up page", {
        status: TuiNotification.Info,
      })
      .pipe(takeUntil(this.destroy$))
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.complete();
    this.destroy$.unsubscribe();
  }
}
