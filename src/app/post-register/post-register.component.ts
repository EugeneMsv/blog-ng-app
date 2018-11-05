import {Component, Input, OnInit} from '@angular/core';
import {PostRegister} from "../model/post-register";

@Component({
  selector: 'app-post-register',
  templateUrl: './post-register.component.html',
  styleUrls: ['./post-register.component.less']
})
export class PostRegisterComponent implements OnInit {

  @Input('postRegister') postRegister: PostRegister;

  constructor() {
  }

  ngOnInit() {
    this.postRegister = new PostRegister();
    this.postRegister.preview="bla bla";
    this.postRegister.commentsNum=1235;
    this.postRegister.likes=1235;
    this.postRegister.views=1235;
    this.postRegister.createdTime=new Date();
  }

}
