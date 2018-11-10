import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PostRegister} from '../model/post-register';
import {PostRegisterPage} from '../model/postRegisterPage';
import {PostRegisterPageRequest} from './model/post-register-page-request';
import {Validate} from './utils/validate';

@Injectable({
  providedIn: 'root'
})
export class PostRegisterFilterService {

  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  public getPage(pageRequest: PostRegisterPageRequest): PostRegisterPage {
    Validate.isDefined(pageRequest, 'PostRegisterPageRequest must be set');
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
    return page;
  }

  private getRandomNumber(): number {
    return Math.floor(Math.random() * 10000);
  }
}
