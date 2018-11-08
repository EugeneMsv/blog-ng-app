import {Component, OnInit} from '@angular/core';
import {PostRegisterCrudService} from "../service/post-register-crud.service";
import {PostRegisterPage} from "../model/postRegisterPage";
import {PostRegister} from "../model/post-register";
import {PageEvent} from "@angular/material";

@Component({
  selector: 'app-post-register-list',
  templateUrl: './post-register-list.component.html',
  styleUrls: ['./post-register-list.component.less']
})
export class PostRegisterListComponent implements OnInit {

  postRegisterPage: PostRegisterPage;

  selectedPostRegister: PostRegister;

  // todo получать с бека
  pageSizeOptions: Array<number> = [5, 10, 20, 30];

  private postRegisterService: PostRegisterCrudService;

  constructor(postRegisterService: PostRegisterCrudService) {
    this.postRegisterService = postRegisterService;
  }

  ngOnInit() {
    this.postRegisterPage = this.getPageData();
  }

  // todo передавать параметры стрницы
  private getPageData(): PostRegisterPage{
    return this.postRegisterService.getPage();
  }


  onPageEvent(event: PageEvent) {
    this.postRegisterPage = this.getPageData();
  }

  onMouseOver(selectedPostRegister: PostRegister) {
    this.selectedPostRegister = selectedPostRegister;
  }


}
