import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PostRegister} from "../model/post-register";
import {PostRegisterPage} from "../model/postRegisterPage";

@Injectable({
  providedIn: 'root'
})
export class PostRegisterCrudService {

  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  public getPage(): PostRegisterPage {

    let page: PostRegisterPage = new PostRegisterPage();
    for (let i = 0; i < 10; i++) {
      let postRegister: PostRegister = new PostRegister();
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
