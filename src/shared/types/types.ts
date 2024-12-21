export type NewsSection = string;

 export interface NewsArticle {
    title: string;
    link: string;
    og: string;
    source: string;
    source_icon: string;

 }
export type NewsByCategory = Record<string, NewsArticle[]>;

export interface NewsResponse {
    articles: NewsArticle[];
}
export interface CategoriesProps {
    categories: string[];
}