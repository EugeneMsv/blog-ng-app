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
  }

}
