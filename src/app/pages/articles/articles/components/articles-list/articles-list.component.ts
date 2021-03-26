import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from "@angular/core";
import { Article } from "@app/pages/articles/models/article.model";

@Component({
  selector: "sai-articles-list",
  templateUrl: "./articles-list.component.html",
  styleUrls: ["./articles-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticlesListComponent implements OnInit {
  @Input() articles!: Article[];

  columns = ["title", "author"];

  constructor() {}

  ngOnInit(): void {}
}
