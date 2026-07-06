export interface IArticle {
    id: number;
    title: string;
    description: string;
    author: string;
    category: string;
    updatedOn: Date;
    tags: string[];
    bookmarked?: boolean;
}