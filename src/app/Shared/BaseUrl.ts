import { Global } from './Global';
import { environment } from 'src/environments/environment';

export class Urls {  
    public static BOOK_GETBOOKSCATALOG = environment.url + Global.BOOKS_ENDPOINT + "GetBooksCatalog";
    public static BOOK_GETBOOKDETAILS = environment.url + Global.BOOKS_ENDPOINT + "GetBookDetailsById?bookId=";
}