import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PostRegister} from '../model/post-register';
import {PostRegisterPage} from '../model/postRegisterPage';
import {PostRegisterPageRequest} from './model/post-register-page-request';
import {Validate} from './utils/validate';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostRegisterFilterService {

  private static readonly pageSizeOptions: Array<number> = [5, 10, 20];

  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  public buildDefaultRequest(): PostRegisterPageRequest {
    return new PostRegisterPageRequest(0, 10);
  }

  public getPage(pageRequest: PostRegisterPageRequest): Observable<PostRegisterPage> {
    Validate.isDefined(pageRequest, 'PostRegisterPageRequest must be set for');
    Validate.isTrue(PostRegisterFilterService.pageSizeOptions.includes(pageRequest.pageSize),
      'Allowed only {0} page size', PostRegisterFilterService.pageSizeOptions);

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

  public getPageSizeOptions(): Observable<Array<number>> {
    return of(PostRegisterFilterService.pageSizeOptions);
  }

  private getRandomNumber(): number {
    return Math.floor(Math.random() * 10000);
  }
}
