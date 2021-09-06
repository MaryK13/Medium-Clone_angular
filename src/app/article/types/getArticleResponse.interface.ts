import {ArticleInterface} from "../../../types/article.interface";

export interface GetArticleResponseInterface {
  articles: ArticleInterface[]
  articlesCount: number
}
