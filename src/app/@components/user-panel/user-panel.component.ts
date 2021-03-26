import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "@app/+auth/services/auth.service";
import { Path } from "@app/@core/enums";
import { TuiNotification, TuiNotificationsService } from "@taiga-ui/core";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "sai-user-panel",
  templateUrl: "./user-panel.component.html",
  styleUrls: ["./user-panel.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPanelComponent implements OnInit, OnDestroy {
  open = false;

  private destroy$ = new Subject();

  constructor(
    private router: Router,
    private authService: AuthService,
    private notificationsService: TuiNotificationsService
  ) {}

  ngOnInit(): void {}

  onClickOpenPopup(): void {
    this.open = !this.open;
  }

  onClickSignOut(): void {
    this.authService.signOut().subscribe(
      () => this.router.navigate(["/", Path.SignIn]),
      (err) => {
        console.log(err);
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
    );
  }

  ngOnDestroy(): void {
    this.destroy$.complete();
    this.destroy$.unsubscribe();
  }
}
