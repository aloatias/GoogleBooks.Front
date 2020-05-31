export class BooksCatalogSearch {
    Keywords: string;

    PageNumber: number;
    
    PageSize: number;
  
    constructor(
        keywords: string,
        pageNumber: number,
        pageSize: number) {

        this.Keywords = keywords;
        this.PageNumber = pageNumber;
        this.PageSize = pageSize;
    }
}