import { IBooksCatalog } from './IBooksCatalog';
import { IPagingInfo } from './IPagingInfo';

export interface IBooksCatalogSearchResult {
    booksCatalog: IBooksCatalog;

    pagingInfo: IPagingInfo;
}