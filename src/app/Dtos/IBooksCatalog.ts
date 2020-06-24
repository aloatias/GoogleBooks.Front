import { BooksDetailsForCatalog } from './BooksDetailsForCatalog';

export interface IBooksCatalog {
    kind: string;

    bookDetails: BooksDetailsForCatalog[];
}