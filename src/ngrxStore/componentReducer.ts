import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromActions from './actions';
import {JAVA_ARTICLES, ANGULAR_ARTICLES} from './article';
import {ArticleState} from './states';

export const initialState: ArticleState = {articles: []};

export function reducer(state = initialState, action: fromActions.All): ArticleState {
  switch (action.type) {
    case fromActions.JAVA: {
      return {articles: JAVA_ARTICLES};
    }
    case fromActions.ANGULAR: {
      return {articles: ANGULAR_ARTICLES};

    }
    case fromActions.MY_ARTICLES: {
      return {articles: action.payload};
    }
    default: {
      return state;
    }
  }
}

export const getArticleState = createFeatureSelector<ArticleState>('articleState');

export const getArticles = createSelector(
  getArticleState,
  (state: ArticleState) => state.articles
);
