import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import {
  TuiButtonModule,
  TuiLoaderModule,
  TuiNotificationModule,
} from "@taiga-ui/core";
import {
  TuiFieldErrorModule,
  TuiInputModule,
  TuiInputPasswordModule,
} from "@taiga-ui/kit";
import { CredentialsFormComponent } from "./components/credentials-form.component";
import { SignInRoutingModule } from "./sign-in-routing.module";
import { SignInPage } from "./sign-in.page";

@NgModule({
  declarations: [SignInPage, CredentialsFormComponent],
  imports: [
    CommonModule,
    SignInRoutingModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiInputPasswordModule,
    TuiFieldErrorModule,
    TuiButtonModule,
    TuiLoaderModule,
    TuiNotificationModule,
  ],
})
export class SignInModule {}
