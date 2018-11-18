import {Component, Input, OnInit} from '@angular/core';
import {PostRegisterCreationDialogData} from '../model/support/post-register-creation-dialog-data';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-post-register-creation-dialog',
  templateUrl: './post-register-creation-dialog.component.html',
  styleUrls: ['./post-register-creation-dialog.component.less']
})
export class PostRegisterCreationDialogComponent implements OnInit {

  private dialogRef: MatDialogRef<PostRegisterCreationDialogComponent>;

  @Input(MAT_DIALOG_DATA) dialogData: PostRegisterCreationDialogData;

  constructor(dialogRef: MatDialogRef<PostRegisterCreationDialogComponent>) {
    this.dialogRef = dialogRef;
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
