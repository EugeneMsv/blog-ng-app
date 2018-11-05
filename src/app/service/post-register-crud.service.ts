import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PostRegister} from "../model/post-register";

@Injectable({
  providedIn: 'root'
})
export class PostRegisterCrudService {

  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }


  print() {
    console.log("Bla")
  }

  getPage(): PostRegister[] {
    let postRegister1 = new PostRegister();
    postRegister1.createdTime = new Date();
    postRegister1.views = Math.random();
    postRegister1.commentsNum = Math.random();
    postRegister1.likes = Math.random();

    let postRegister2 = new PostRegister();
    postRegister2.createdTime = new Date();
    postRegister2.views = Math.random();
    postRegister2.commentsNum = Math.random();
    postRegister2.likes = Math.random();

    return [postRegister1, postRegister2];
  }
}
