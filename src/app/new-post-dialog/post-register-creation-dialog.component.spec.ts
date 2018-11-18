import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostRegisterCreationDialogComponent } from './post-register-creation-dialog.component';

describe('PostRegisterCreationDialogComponent', () => {
  let component: PostRegisterCreationDialogComponent;
  let fixture: ComponentFixture<PostRegisterCreationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostRegisterCreationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostRegisterCreationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
