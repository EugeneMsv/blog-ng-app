import {Component, OnInit} from '@angular/core';
import {PostRegisterCrudService} from "../service/post-register-crud.service";

@Component({
  selector: 'app-post-register-list',
  templateUrl: './post-register-list.component.html',
  styleUrls: ['./post-register-list.component.less']
})
export class PostRegisterListComponent implements OnInit {
  private postRegisterService: PostRegisterCrudService;

  constructor(postRegisterService: PostRegisterCrudService) {
    this.postRegisterService = postRegisterService;
  }

  ngOnInit() {
    this.postRegisterService.print();
  }

}
