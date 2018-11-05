import {Component, OnInit} from '@angular/core';
import {PostRegisterCrudService} from "../service/post-register-crud.service";
import {PostRegister} from "../model/post-register";

@Component({
  selector: 'app-post-register-list',
  templateUrl: './post-register-list.component.html',
  styleUrls: ['./post-register-list.component.less']
})
export class PostRegisterListComponent implements OnInit {

  postRegisterList: PostRegister[];

  private postRegisterService: PostRegisterCrudService;

  constructor(postRegisterService: PostRegisterCrudService) {
    this.postRegisterService = postRegisterService;
  }

  ngOnInit() {
    this.postRegisterList = this.postRegisterService.getPage()
  }

}
