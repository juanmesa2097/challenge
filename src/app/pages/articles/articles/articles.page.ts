import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";
import { Article } from "../models/article.model";
import { ArticlesService } from "../services/articles.service";

@Component({
  templateUrl: "./articles.page.html",
  styleUrls: ["./articles.page.scss"],
})
export class ArticlesPage implements OnInit {
  articles$!: Observable<Article[]>;

  breadcrumbs = [];
  loading = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private articlesService: ArticlesService
  ) {
    this.breadcrumbs = activatedRoute.snapshot.data.breadcrumbs;
  }

  ngOnInit(): void {
    this.fetchArticles();
  }

  fetchArticles(): void {
    this.loading = true;
    this.articles$ = this.articlesService
      .list<Article[]>({
        mapFn: (res) => res.articles,
      })
      .pipe(finalize(() => (this.loading = false)));
  }
}
