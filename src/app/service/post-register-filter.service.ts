import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {PostRegister} from '../model/post-register';
import {PostRegisterPage} from '../model/postRegisterPage';
import {PostRegisterPageRequest} from './model/post-register-page-request';
import {Validate} from './utils/validate';
import {Observable, of} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostRegisterFilterService {

  private static readonly pageSizeOptions: Array<number> = [5, 10, 20];

  private httpClient: HttpClient;

  private url = environment.baseUrl + 'postRegister';

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  public buildDefaultRequest(): PostRegisterPageRequest {
    return new PostRegisterPageRequest(0, 10);
  }

  public getPage(pageRequest: PostRegisterPageRequest): Observable<PostRegisterPage> {
    Validate.isDefined(pageRequest, 'PostRegisterPageRequest must be set for');
    Validate.isTrue(PostRegisterFilterService.pageSizeOptions.includes(pageRequest.size),
      'Allowed only {0} page size', PostRegisterFilterService.pageSizeOptions);
    let params = new HttpParams();
    params = params.append('page', String(pageRequest.page));
    params = params.append('size', String(pageRequest.size));
    return this.httpClient.get<PostRegisterPage>(this.url, {params: params});
  }

  public getPageSizeOptions(): Observable<Array<number>> {
    return of(PostRegisterFilterService.pageSizeOptions);
  }

  private getRandomNumber(): number {
    return Math.floor(Math.random() * 10000);
  }

  private mockPage(): Observable<PostRegisterPage> {
    const page: PostRegisterPage = new PostRegisterPage();
    for (let i = 0; i < 10; i++) {
      const postRegister: PostRegister = new PostRegister();
      postRegister.createdTime = new Date();
      postRegister.views = this.getRandomNumber();
      postRegister.commentsNum = this.getRandomNumber();
      postRegister.likes = this.getRandomNumber();
      page.content.push(postRegister);
    }

    page.totalPages = 10;
    page.totalElements = 100;
    page.size = 10;
    page.number = 1;
    return of(page);
  }
}
