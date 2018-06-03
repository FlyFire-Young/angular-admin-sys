import {Article} from './article';

export interface AppState {
  articleState: ArticleState;
}

export interface ArticleState {
  articles: Article[];
}
