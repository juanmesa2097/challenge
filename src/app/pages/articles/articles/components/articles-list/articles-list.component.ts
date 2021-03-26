import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
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

  @Output() clickArticle = new EventEmitter<Article>();

  columns = ["title", "author"];

  constructor() {}

  ngOnInit(): void {}

  onClickArticle(article: Article): void {
    this.clickArticle.emit(article);
  }
}
