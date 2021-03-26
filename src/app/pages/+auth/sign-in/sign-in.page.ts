import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Path } from "@app/@core/enums";
import { TuiNotification, TuiNotificationsService } from "@taiga-ui/core";
import { Subject } from "rxjs";
import { finalize, takeUntil } from "rxjs/operators";
import { User } from "../models/user.model";
import { AuthService } from "../services/auth.service";

@Component({
  templateUrl: "./sign-in.page.html",
  styleUrls: ["./sign-in.page.scss"],
})
export class SignInPage implements OnInit, OnDestroy {
  loading = false;
  errorMsg = "";
  returnUrl!: string;

  private destroy$ = new Subject();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private notificationsService: TuiNotificationsService,
    private authService: AuthService
  ) {
    this.returnUrl =
      this.activatedRoute.snapshot.queryParamMap.get("returnUrl") ||
      `/${Path.Articles}`;
  }

  ngOnInit(): void {}

  onSubmit({
    valid,
    credentials,
  }: {
    valid: boolean;
    credentials: User;
  }): void {
    if (!valid) {
      this.showFillFieldsMessage();
      return;
    }

    this.loading = true;
    this.authService
      .signIn(credentials)
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => (this.loading = false))
      )
      .subscribe(
        (user) => {
          this.router.navigate([this.returnUrl]);
          this.showWelcomeMessage(`${user.firstName} ${user.lastName}`);
        },
        (err) => {
          this.showErrorMessage(err);
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

  private showFillFieldsMessage(): void {
    this.notificationsService
      .show(`You must fill all the required fields`, {
        label: "Hold on!",
        status: TuiNotification.Warning,
      })
      .pipe(takeUntil(this.destroy$))
      .subscribe();
  }

  private showWelcomeMessage(name: string): void {
    this.notificationsService
      .show(`Welcome ${name} 👋👋👋`, {
        status: TuiNotification.Success,
      })
      .pipe(takeUntil(this.destroy$))
      .subscribe();
  }

  private showErrorMessage(error): void {
    if (error.status === 400) {
      this.errorMsg = "Username or password is incorrect";
    } else {
      this.notificationsService
        .show(error.message, {
          label: "😢 An error ocurred",
          status: TuiNotification.Error,
          hasCloseButton: true,
          autoClose: false,
        })
        .pipe(takeUntil(this.destroy$))
        .subscribe();
    }
  }

  ngOnDestroy(): void {
    this.destroy$.complete();
    this.destroy$.unsubscribe();
  }
}
