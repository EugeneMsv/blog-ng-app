import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material";
import {PostRegisterCreationDialogComponent} from "../new-post-dialog/post-register-creation-dialog.component";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less']
})
export class NavigationComponent implements OnInit {
  title = 'Blog';

  private newPostDialog: MatDialog;

  constructor(newPostDialog: MatDialog) {
    this.newPostDialog = newPostDialog;
  }

  ngOnInit() {
  }

  openDialog() {
    const dialogRef = this.newPostDialog.open(PostRegisterCreationDialogComponent,
      {
        width: '400px',
      });
  }
}
