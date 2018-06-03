import {Store} from '@ngrx/store';
import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as articleReducer from '../../ngrxStore/componentReducer';
import * as fromActions from '../../ngrxStore/actions';
import {ArticleState} from '../../ngrxStore/states';
import {Article, FAVORITE_ARTICLES} from '../../ngrxStore/article';

@Component({
  templateUrl: './ngstore.html'
})
export class NgstoreComponent {
  articles: Observable<Article[]>;
  constructor(private store: Store<ArticleState>) {
    this.articles = store.select(articleReducer.getArticles);
  }

  showJavaArticles() {
    this.store.dispatch(new fromActions.JavaArticlesAction());
  }

  showAngularArticles() {
    this.store.dispatch(new fromActions.AngularArticlesAction());
  }

  showFavoriteArticles() {
    this.store.dispatch(new fromActions.FavoriteArticlesAction(FAVORITE_ARTICLES));
  }
}
