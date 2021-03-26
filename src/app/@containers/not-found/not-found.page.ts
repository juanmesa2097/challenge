import { Component, OnInit } from "@angular/core";
import { Path } from "@app/@core/enums";

@Component({
  templateUrl: "./not-found.page.html",
  styleUrls: ["./not-found.page.scss"],
})
export class NotFoundPage implements OnInit {
  path = Path;

  constructor() {}

  ngOnInit(): void {}
}
