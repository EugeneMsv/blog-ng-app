import {Component, OnInit} from '@angular/core';
import {PostRegisterPage} from '../model/postRegisterPage';
import {PostRegister} from '../model/post-register';
import {PageEvent} from '@angular/material';
import {PostRegisterFilterService} from '../service/post-register-filter.service';
import {PostRegisterPageRequest} from '../service/model/post-register-page-request';
import {Validate} from '../service/utils/validate';

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

  private postRegisterFilterService: PostRegisterFilterService;

  constructor(postRegisterFilterService: PostRegisterFilterService) {
    this.postRegisterFilterService = postRegisterFilterService;
  }

  ngOnInit() {
    this.postRegisterPage = this.getPageData(null);
  }

  // todo передавать параметры стрницы
  private getPageData(pageRequest: PostRegisterPageRequest): PostRegisterPage {
    return this.postRegisterFilterService.getPage(pageRequest);
  }


  onPageEvent(event: PageEvent) {
    this.postRegisterPage = this.getPageData(null);
  }

  onMouseOver(selectedPostRegister: PostRegister) {
    this.selectedPostRegister = selectedPostRegister;
  }


}
