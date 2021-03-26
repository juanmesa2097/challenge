import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from "@angular/core";
import { Router } from "@angular/router";
import { Path } from "@app/@core/enums";
import { UserDetails } from "@app/pages/+auth/models/user.model";
import { AuthService } from "@app/pages/+auth/services/auth.service";
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
  user: UserDetails;

  open = false;

  private destroy$ = new Subject();

  constructor(
    private router: Router,
    private authService: AuthService,
    private notificationsService: TuiNotificationsService
  ) {}

  get userName() {
    const { firstName, lastName } = this.user;
    return `${firstName} ${lastName}`;
  }

  ngOnInit(): void {
    this.user = this.authService.user;
  }

  onClickOutside(): void {
    this.open = false;
  }

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
