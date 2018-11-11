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

  pageSizeOptions: Array<number>;

  private postRegisterFilterService: PostRegisterFilterService;

  constructor(postRegisterFilterService: PostRegisterFilterService) {
    this.postRegisterFilterService = postRegisterFilterService;
  }

  ngOnInit() {
    this.postRegisterFilterService.getPageSizeOptions()
      .subscribe(options => this.pageSizeOptions = options);
    this.requestPageData(this.defaultPage());
  }

  private requestPageData(pageRequest: PostRegisterPageRequest): void {
    this.postRegisterFilterService.getPage(pageRequest)
      .subscribe(pageData => this.postRegisterPage = pageData);
  }

  private defaultPage(): PostRegisterPageRequest {
    return this.postRegisterFilterService.buildDefaultRequest();
  }

  onPageEvent(event: PageEvent) {
    console.log(event);
    this.requestPageData(this.convertPageEventToPageRequest(event));
  }

  private convertPageEventToPageRequest(event: PageEvent): PostRegisterPageRequest {
    Validate.isDefined(event, 'Page event must be set for conversion');
    return new PostRegisterPageRequest(event.pageIndex, event.pageSize);
  }

  onMouseOver(selectedPostRegister: PostRegister) {
    this.selectedPostRegister = selectedPostRegister;
  }

}
