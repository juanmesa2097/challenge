import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { User } from "@app/+auth/models/user.model";

@Component({
  selector: "sai-credentials-form",
  templateUrl: "./credentials-form.component.html",
  styleUrls: ["./credentials-form.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CredentialsFormComponent implements OnInit {
  @Input() loading!: boolean;
  @Input() errorMsg!: string;

  @Output() signIn = new EventEmitter<User>();
  @Output() signUp = new EventEmitter<void>();
  @Output() forgotPassword = new EventEmitter<void>();

  credentialsForm!: FormGroup;

  constructor() {
    this.credentialsForm = new FormGroup({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    const { valid, value } = this.credentialsForm;

    if (valid) {
      this.signIn.emit(value);
    }
  }

  onClickSignUp() {
    this.signUp.emit();
  }

  onClickForgotPassword() {
    this.forgotPassword.emit();
  }
}
